<template>
  <modal-view v-if="id" @click.native="setGeneModal()">
    <div class="modal_wrapper" @click.stop="">
      <div v-if="!isLoading" class="gene_detail">
        <a
          class="gene_name"
          :href="`https://www.ncbi.nlm.nih.gov/gene/?term=${data._id}`"
          target="_blank"
          >{{ `${data.symbol}` }}<span>{{ ` (${data.name})` }}</span></a
        >
        <div class="contents_wrapper">
          <div class="detail_contents">
            <p class="title">Gene ID</p>
            <p class="content">{{ data._id }}</p>
          </div>
          <div v-if="data.alias" class="detail_contents">
            <p class="title">Alias</p>
            <p
              v-if="data.alias && typeof data.alias === 'object'"
              class="content"
            >
              <span v-for="(alias, index) in data.alias" :key="index">
                <span>{{ alias }}</span>
                <span v-if="index !== data.alias.length - 1" class="comma"
                  >,</span
                >
              </span>
            </p>
            <p v-else class="content">
              <span>{{ data.alias }}</span>
            </p>
          </div>
          <div v-if="data.type_of_gene" class="detail_contents">
            <p class="title">Type of gene</p>
            <p class="content">{{ data.type_of_gene }}</p>
          </div>
          <div v-if="data.summary" class="detail_contents">
            <p class="title">Summary</p>
            <p class="content">{{ data.summary }}</p>
          </div>
          <div v-if="data.refseq" class="detail_contents">
            <p class="title">RefSeq</p>
            <p v-if="data.refseq" class="content">
              <span v-if="typeof data.refseq.rna === 'object'">
                <span v-for="(rna, index) in data.refseq.rna" :key="index">
                  <a
                    :href="`https://www.ncbi.nlm.nih.gov/nuccore/${rna}`"
                    target="_blank"
                    >{{ rna }}</a
                  >
                  <span
                    v-if="index !== data.refseq.rna.length - 1"
                    class="comma"
                    >,</span
                  >
                </span>
              </span>
              <span v-else>
                <a
                  :href="`https://www.ncbi.nlm.nih.gov/nuccore/${data.refseq.rna}`"
                  target="_blank"
                  >{{ data.refseq.rna }}</a
                >
              </span>
            </p>
          </div>
          <div v-if="data.ensembl" class="detail_contents">
            <p class="title">Ensembl gene</p>
            <div v-if="data.ensembl">
              <p v-if="Array.isArray(data.ensembl)" class="content">
                <span v-for="index in data.ensembl.length" :key="index">
                  <a
                    :href="`${activeSpecie.prefix.ensembl}${
                      data.ensembl[index - 1].gene
                    };site=ensembl`"
                    target="_blank"
                    >{{ data.ensembl[index - 1].gene }}</a
                  >
                  <span v-if="index !== data.ensembl.length" class="comma"
                    >,</span
                  >
                </span>
              </p>
              <p v-else class="content">
                <span>
                  <a
                    :href="`${activeSpecie.prefix.ensembl}${data.ensembl.gene};site=ensembl`"
                    target="_blank"
                    >{{ data.ensembl.gene }}</a
                  >
                </span>
              </p>
            </div>
          </div>
          <div v-if="data.go">
            <div class="detail_contents">
              <p class="title">Gene Ontology</p>
            </div>
            <div class="detail_contents">
              <p class="sub_title">Biological Process</p>
              <TableGeneOntology
                :data-source="data.go"
                :type-upper="'BP'"
                :type-lower="'bp'"
              ></TableGeneOntology>
            </div>
            <div class="detail_contents">
              <p class="sub_title">Cellular Component</p>
              <TableGeneOntology
                :data-source="data.go"
                :type-upper="'CC'"
                :type-lower="'cc'"
              ></TableGeneOntology>
            </div>
            <div class="detail_contents">
              <p class="sub_title">Molecular Function</p>
              <TableGeneOntology
                :data-source="data.go"
                :type-upper="'MF'"
                :type-lower="'mf'"
              ></TableGeneOntology>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal-view>
</template>

<script>
  import ModalView from '~/components/ModalView/ModalView.vue';
  import TableGeneOntology from '~/components/results/TableGeneOntology.vue';
  import { mapGetters, mapMutations } from 'vuex';

  export default {
    components: {
      ModalView,
      TableGeneOntology,
    },
    data() {
      return {
        data: {},
        isLoading: false,
      };
    },
    computed: {
      ...mapGetters({
        id: 'gene_modal',
        activeSpecie: 'active_specie',
      }),
    },
    watch: {
      async id() {
        if (this.id === null) return;
        this.isLoading = true;
        await this.$axios
          .$get(`https://mygene.info/v3/gene/${this.id}`)
          .then(data => {
            this.data = data;
          })
          .catch(_error => {
            this.setAlertModal({
              msg: 'Failed to get data in Modal View Gene',
            });
          });

        this.isLoading = false;
      },
    },
    methods: {
      ...mapMutations({
        setGeneModal: 'set_gene_modal',
        setAlertModal: 'set_alert_modal',
      }),
      isArrayExpression(type) {
        return `${type.id}: ${type.term}: ${type.evidence}: ${type.qualifier}`;
      },
      notArrayExpression(type) {
        return `${this.data.go[type].id}: ${this.data.go[type].term}: ${this.data.go[type].evidence}: ${this.data.go[type].qualifier}`;
      },
    },
  };
</script>

<style lang="sass">
  a
    color: $MAIN_COLOR
  .modal_wrapper
    +modal
    padding: 60px 0
    width: 60vw
    max-width: 1000px
    min-width: 610px
    > .gene_detail
      > .gene_name
        font-size: 22px
        font-weight: bold
        border-left: 7px solid $MAIN_COLOR
        padding: 8px 60px
        display: block
      > .contents_wrapper
        margin: 0 67px
        margin-top: 30px
        .detail_contents
          display: grid
          grid-template-columns: 1fr 2fr
          margin-bottom: 30px
          > .title
            font-size: 16px
            font-weight: bold
            margin: 0
          > .sub_title
            font-size: 14px
            font-weight: bold
            margin: 0
        .content
          font-size: 14px
          margin: 0
          line-height: 20px
          .comma
            margin: 0 2px 0 -2px
    > .loading
      text-align: center
</style>
