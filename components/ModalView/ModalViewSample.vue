<template>
  <modal-view v-if="id" @click.native="setSampleModal()">
    <div class="modal_wrapper" @click.stop="">
      <div v-if="!isLoading" class="sample_detail">
        <p class="sample_name">
          {{ data.Description }}
        </p>
        <div class="contents_wrapper">
          <div
            v-for="(value, key) in filteredData"
            :key="key"
            class="detail_contents"
          >
            <template v-if="key === 'RefexSampleId'">
              <p class="title">RefEx Sample ID</p>
              <p class="contents">{{ value }}</p>
            </template>

            <template v-else-if="key === 'BioSampleId'">
              <div class="bio_sample">
                <p class="title">BioSample ID</p>
                <span>({{ data.NumberOfSamples }} samples)</span>
              </div>
              <p class="contents">
                <span
                  v-for="(biosample, index) in JSON.parse(value)"
                  :key="index"
                >
                  <span>{{ biosample }}</span>
                  <span
                    v-if="index !== JSON.parse(value).length - 1"
                    class="comma"
                    >,</span
                  >
                </span>
              </p>
            </template>

            <template v-else>
              <p class="title">{{ getColumnLabel(key) }}</p>
              <p class="contents">{{ value }}</p>
            </template>
          </div>
        </div>
      </div>
      <p v-else class="loading">Loading...</p>
    </div>
  </modal-view>
</template>

<script>
  import ModalView from '~/components/ModalView/ModalView.vue';
  import { mapGetters, mapMutations } from 'vuex';
  import datasets from '~/refex-sample/datasets.json';

  export default {
    components: {
      ModalView,
    },
    data() {
      return {
        data: {},
        isLoading: false,
      };
    },
    computed: {
      ...mapGetters({
        id: 'sample_modal',
        activeDataset: 'active_dataset',
      }),
      filteredData() {
        const filteredKeys = ['NumberOfSamples', 'Description'];
        return Object.fromEntries(
          Object.entries(this.data).filter(
            ([key]) => !filteredKeys.includes(key)
          )
        );
      },
    },
    watch: {
      async id() {
        if (this.id === null) return;
        this.isLoading = true;
        await this.$axios
          .$get(
            `https://refex2-api.dbcls.jp/api/sample_info/${
              this.id
            }?dataset=${this.activeDataset.dataset.toLowerCase()}`
          )
          .then(data => {
            this.data = data.sample_info;
          })
          .catch(_error => {
            this.setAlertModal({
              msg: 'Failed to get data in Modal View Sample',
            });
          });
        this.isLoading = false;
      },
    },
    methods: {
      ...mapMutations({
        setSampleModal: 'set_sample_modal',
        setAlertModal: 'set_alert_modal',
      }),
      getColumnLabel(column) {
        const sampleFilter =
          datasets
            .flatMap(data => data.datasets)
            .find(index => index.dataset === this.activeDataset.dataset)?.sample
            .filter || [];
        const data = Object.values(sampleFilter);
        const match = data.find(item => item.column === column);
        return match ? match.label : column;
      },
    },
  };
</script>

<style lang="sass">
  a
    color: $MAIN_COLOR
  .sample_name
    color: $MAIN_COLOR
  .modal_wrapper
    +modal
    padding: 60px 0
    width: 60vw
    max-width: 1000px
    min-width: 610px
    > .sample_detail
      > .sample_name
        font-size: 22px
        font-weight: bold
        border-left: 7px solid $MAIN_COLOR
        padding: 8px 60px
        display: block
      > .contents_wrapper
        margin: 0 67px
        margin-top: 30px
        > .detail_contents
          display: flex
          align-items: flex-start
          margin-bottom: 14px
          > .bio_sample
            > .title
              font-weight: bold
              margin: 0
          > .title
            margin: 0
            font-size: 14px
            font-weight: bold
          > .sub_title
            font-size: 16px
            font-weight: bold
            margin: 10px 0 0px
        .contents
          margin: 0
          font-size: 14px
          left: 250px
          position: absolute
          .comma
            margin: 0 2px 0 -2px
    > .loading
      text-align: center
</style>
