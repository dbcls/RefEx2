<template>
  <modal-view v-if="loading">
    <div class="modal">
      <font-awesome-icon
        class="spinner fa-spin"
        :icon="['fad', 'spinner-third']"
      />
      <p v-if="getIsSampleModalMessage" class="loading_message">
        The sample page may take a moment to load. Your patience is appreciated.
      </p>
    </div>
  </modal-view>
</template>
<script>
  import ModalView from '~/components/ModalView/ModalView.vue';
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    components: {
      ModalView,
    },
    data: () => ({
      loading: false,
    }),
    computed: {
      ...mapGetters({
        activeFilter: 'active_filter',
        getPageType: 'get_page_type',
        getIsSampleModalMessage: 'get_is_sample_modal_message',
      }),
    },
    updated() {
      if (!this.loading) {
        this.setIsSampleModalMessage(false);
      }
    },
    methods: {
      ...mapMutations({
        setIsSampleModalMessage: 'set_is_sample_modal_message',
      }),
      start() {
        this.loading = true;
      },
      finish() {
        this.loading = false;
      },
    },
  };
</script>

<style lang="sass" scoped>
  .modal
    text-align: center
    background: none !important
    > .spinner
        --fa-secondary-opacity: 0.6
        --fa-primary-color: #488EC4
        --fa-secondary-color: #F5F7F9
        --fa-animation-duration: 1.2s
        font-size: 100px

    .loading_message
      position: relative
      background: white
      top: 50%
      padding: 15px
      text-align: center
</style>
