<template>
  <div class="results_wrapper">
    <div class="results_title_wrapper">
      <h2>Matching {{ filterType }}s</h2>
      <div class="button_wrapper">
        <ComparisonButton />
        <DownloadButton
          ref="downloadButton"
          :data-cy="`${$vnode.key}_download_button`"
          :download-data="resultsDisplayed"
          :file-name="tsvTitle"
          :fields-array="indexTableHead"
          :disabled="resultsDisplayed.length === 0"
        />
        <CopyButton
          v-if="filterType === 'gene'"
          icon="copy"
          text="Copy Gene ID(s)"
          :content="geneIdListForCopy"
          :disabled="
            !filtersDisplayed.includes('geneid') ||
            resultsDisplayed.length === 0
          "
        />
      </div>
      <div class="display_settings_wrapper">
        <button
          class="reset_btn"
          :disabled="!isSortingColumns"
          @click="clearSortArray"
        >
          <font-awesome-icon icon="rotate-right" />
          Reset sorting
        </button>
        <button class="show_all_btn" @click="$emit('toggleDisplaySettings')">
          <font-awesome-icon icon="eye" />
          Show/hide columns
        </button>
      </div>
    </div>
    <MultisortResults
      ref="mutlisortResults"
      table-type="index"
      :filter-type="filterType"
      :results="resultsCached"
      :filters="filters"
      :results-num="resultsNum"
      :key-for-id="keyForId"
    />
  </div>
</template>
<script>
  import { mapGetters, mapMutations } from 'vuex';
  import filters from '~/static/filters.json';
  import MultisortResults from '~/components/results/MultisortResults.vue';
  import { createNumberSorter } from '~/utilities/index.js';

  const initialState = () => {
    return {
      checkedResults: { gene: [], sample: [] },
      resultsCached: [],
    };
  };

  export default {
    components: {
      MultisortResults,
    },
    props: {
      filters: {
        type: Array,
        default: () => [],
      },
      tableDataIsSameAsScreener: {
        type: Boolean,
        default: true,
      },
      resultsNum: {
        type: Number,
        default: 0,
      },
      filterKey: {
        type: String,
        default: 'gene',
      },
    },
    data() {
      return {
        ...initialState(),
      };
    },
    computed: {
      ...mapGetters({
        paginationObject: 'index_pagination',
        resultsByName: 'results_by_name',
        filterByName: 'filter_by_name',
        activeSpecie: 'active_specie',
        activeDataset: 'active_dataset',
        routeToProjectPage: 'route_to_project_page',
        geneSummarySource: 'gene_summary_source',
        getCheckedResults: 'get_checked_results',
        isOn: 'compare_modal',
        activeFilter: 'active_filter',
        isSortingColumns: 'get_is_sorting_columns',
      }),
      examples() {
        return this.activeDataset[this.filterType].item_comparison_example;
      },
      resultsUniqueKeys() {
        return this.resultsCached.map(item => item[this.keyForId]);
      },
      keyForId() {
        return this.filterType === 'gene' ? 'geneid' : 'refexSampleId';
      },
      filterType() {
        return this.$vnode.key.split('_')[0];
      },
      datasetInfo() {
        return this.activeDataset[this.filterType];
      },
      isAllChecked() {
        return (
          this.resultsUniqueKeys.length > 0 &&
          this.checkedResults[this.activeFilter.name].length ===
            this.resultsUniqueKeys.length
        );
      },
      results() {
        const results = this.resultsByName(this.filterType).results;
        for (const result of results) {
          // enable sorting chromosome
          if (result.chromosomePosition) {
            result.chromosomePositionInt = createNumberSorter(
              result.chromosomePosition
            );
          }
        }
        return results;
      },
      pageItems() {
        return this.resultsCached.slice(
          this.paginationObject.offset,
          this.paginationObject.offset + this.paginationObject.limit
        );
      },
      pagesNumber() {
        return Math.ceil(
          this.resultsCached.length / this.paginationObject.limit
        );
      },
      filtersDisplayed() {
        return this.filters
          .filter(({ is_displayed }) => is_displayed)
          .map(({ column }) => column);
      },
      resultsDisplayed() {
        return this.results.map(result => {
          const updatedResult = { ...result };
          const keyToReplace = 'alias';

          if (this.filtersDisplayed.includes(keyToReplace)) {
            updatedResult[keyToReplace] = this.$composeAlias(
              result[keyToReplace]
            );
          }

          return updatedResult;
        });
      },
      indexTableHead() {
        if (this.results.length === 0) return [];
        const arr = Object.keys(this.results?.[0])
          .map(oldTitle => {
            const obj = {};
            this.filters.forEach(({ column, label, is_displayed }) => {
              const newTitle = label;
              if (oldTitle === column && is_displayed) {
                obj[oldTitle] = newTitle;
              }
            });
            return obj;
          })
          .filter(obj => {
            const isNotEmpty = Object.keys(obj).length !== 0;
            return isNotEmpty;
          });
        // hardcode to add Description column to download data
        if (this.filterType === 'sample') {
          arr.unshift({ Description: 'Description' });
        }
        return arr;
      },
      tsvTitle() {
        const today = this.$getToday();
        return `RefEx2_${this.activeSpecie.species_id}_${this.activeDataset.dataset}_${this.filterType}_search_results_${today}.tsv`;
      },
      geneIdListForCopy() {
        const geneIdList = this.resultsCached?.map(({ geneid }) => geneid);
        return geneIdList.join('\r\n');
      },
    },
    watch: {
      activeDataset() {
        this.checkedResults = { gene: [], sample: [] };
        this.handleChange();
      },
      isOn() {
        if (!this.isOn) {
          this.checkedResults[this.activeFilter.name] = this.getCheckedResults;
        }
      },
      resultsDisplayed: {
        handler(newVal) {
          if (newVal.length > 0) {
            this.resultsCached = JSON.parse(JSON.stringify(newVal));
          }
        },
        deep: true,
      },
    },
    created() {
      this.setPageType('index');
      this.setGeneModal(null);
      this.setSampleModal(null);
      this.$store.commit('set_index_filters', {
        type: this.filterKey,
        filters: this.filters,
      });
    },
    methods: {
      ...mapMutations({
        setGeneModal: 'set_gene_modal',
        setSampleModal: 'set_sample_modal',
        setPageType: 'set_page_type',
        setCheckedResults: 'set_checked_results',
        setIsSampleModalMessage: 'set_is_sample_modal_message',
      }),
      copyToClipboard(target) {
        navigator.clipboard.writeText(target);
      },
      moveToProjectPage(route) {
        this.$nuxt.$loading.start();
        if (this.filterType === 'sample') {
          this.setIsSampleModalMessage(true);
        }
        this.$router.push(this.routeToProjectPage(route));
      },
      toggleAllCheckbox() {
        if (this.isAllChecked) {
          this.checkedResults[this.activeFilter.name] = [];
        } else {
          this.checkedResults[this.activeFilter.name] = this.resultsUniqueKeys;
        }
        this.handleChange();
      },
      handleChange() {
        const type = this.filterKey;
        this.setCheckedResults({
          checked_results: this.checkedResults[type],
          type,
        });
      },
      resetComponent() {
        Object.assign(this.$data, initialState());
      },
      clearSortArray() {
        this.$refs.mutlisortResults.clearSortArray();
      },
    },
  };
</script>
<style lang="sass" scoped>
  .results_wrapper
    min-width: 600px
    padding: $PADDING_WRAPPER
    margin-bottom: 60px
    > .results_title_wrapper
      display: flex
      width: 100%
      align-items: center
      +sample_query
      > h2
        min-width: 190px
      > .button_wrapper
        display: flex
        gap: 15px
      > .display_settings_wrapper
        +display_settings_wrapper
        gap: 10px
        > .reset_btn, .show_all_btn
          +button
          +sub_button
          white-space: nowrap
    > table
      +table
      .copy_button
        cursor: pointer
        > svg
          margin-left: 5px
</style>
