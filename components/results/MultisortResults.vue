<template>
  <div class="multisort-result" :class="[tableType]">
    <div class="results_title_wrapper">
      <h2 v-if="tableType === 'index'">Matching {{ filterType }}s</h2>
      <div class="button_wrapper">
        <ComparisonButton v-if="tableType === 'index'" />
        <DownloadButton
          ref="downloadButton"
          :download-data="filteredSortedData"
          :file-name="tsvTitle"
          :fields-array="fieldsArray"
          :disabled="resultsDisplayed.length === 0"
        />
        <CopyButton
          v-if="tableType === 'index' && filterType === 'gene'"
          icon="copy"
          text="Copy Gene ID(s)"
          :content="geneIdListForCopy"
          :disabled="
            !filtersDisplayed.includes('geneid') ||
            resultsDisplayed.length === 0
          "
        />
        <CopyButton
          v-if="tableType === 'project'"
          icon="link"
          text="Share"
          :content="currentUrl"
        />
      </div>
      <div class="display_settings_wrapper">
        <button
          class="reset_btn"
          :disabled="!isSortColumns"
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
    <section class="table-wrapper">
      <table v-if="tableType === 'index'">
        <thead>
          <tr>
            <th class="checkbox">
              <input
                type="checkbox"
                :checked="isAllChecked"
                @click="toggleAllCheckbox"
              />
            </th>
            <th v-if="filterType === 'sample'">Description</th>
            <th
              v-for="(filter, index) of filters"
              v-show="filter.is_displayed"
              :key="index"
            >
              <TableHeader
                :id="filter.column"
                :label="filter.label"
                v-bind="filter"
                :columns-array="columnsArray"
                :orders-array="ordersArray"
                table-type="index"
                @activeSort="activeSort"
              />
            </th>
          </tr>
        </thead>
        <tbody>
          <td
            v-if="resultsCached.length === 0"
            class="warning"
            :colspan="filters.filter(x => x.is_displayed).length + 2"
          >
            <font-awesome-icon icon="exclamation-triangle" />
            <template v-if="resultsNum === 0"
              >No results found. Please check the spelling or try other
              keywords.</template
            >
            <template v-else>
              Please press the 'Find {{ filterType }}s' button to update the
              results to the current screener settings.
            </template>
          </td>
          <tr
            v-for="(result, resultIndex) in pageItems"
            v-else
            :key="`result_${resultIndex}`"
            :data-cy="`${$vnode.key}_index_result_${resultIndex}`"
          >
            <td class="checkbox" @click="e => e.stopPropagation()">
              <input
                v-model="checkedResults[activeFilter.name]"
                type="checkbox"
                :value="result[keyForId]"
                @change="handleChange"
              />
            </td>
            <td v-if="filterType === 'sample'">
              <a
                class="text_with_icon"
                @click="moveToProjectPage(result['refexSampleId'])"
              >
                <font-awesome-icon icon="flask" />
                {{ result.Description }}
                <font-awesome-icon
                  icon="info-circle"
                  @click.stop="setSampleModal(result['refexSampleId'])"
                />
              </a>
            </td>
            <td
              v-for="(filter, index) of filters"
              v-show="filter.is_displayed"
              :key="index"
              :class="filter.column.replaceAll(' ', '_')"
            >
              <img
                v-if="filter.column === 'gene expression patterns'"
                :src="geneSummarySource(result.geneid)"
                :alt="result.geneid"
              />
              <a
                v-else-if="filter.column === 'symbol'"
                class="text_with_icon"
                @click="moveToProjectPage(result['geneid'])"
                ><font-awesome-icon class="left_icon" icon="dna" />
                {{ result[filter.column] }}
                <font-awesome-icon
                  icon="info-circle"
                  @click.stop="setGeneModal(result.geneid)"
                />
              </a>
              <a
                v-else-if="filter.column === 'geneid'"
                class="text_with_icon"
                target="_blank"
                :href="datasetInfo.url_prefix + result.geneid"
              >
                {{ result[filter.column] }}
                <font-awesome-icon icon="external-link-alt" />
              </a>
              <span
                v-else-if="$isArrayLikeString(result[filter.column])"
                :key="index"
              >
                {{ JSON.parse(result[filter.column]).join(', ') }}
              </span>
              <template v-else-if="$hasStringQuotes(result[filter.column])">
                {{ result[filter.column].replaceAll('"', '') }}
              </template>
              <template v-else> {{ result[filter.column] }}</template>
            </td>
          </tr>
        </tbody>
      </table>
      <table v-else-if="tableType === 'project'">
        <thead>
          <tr>
            <th
              v-for="(filter, filterIndex) of filters"
              v-show="filter.is_displayed"
              :key="`filterIndex-${filterIndex}`"
            >
              <TableHeader
                :id="filter.column"
                v-bind="filter"
                :columns-array="columnsArray"
                :orders-array="ordersArray"
                table-type="project"
                @activeSort="activeSort"
              />
              <median-scale v-if="filter.column === 'LogMedian'" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(result, resultIndex) in pageItems" :key="resultIndex">
            <template v-for="(filter, filterIndex) of filters">
              <td
                v-if="filter.is_displayed"
                :key="`result-${filterIndex}`"
                :class="filter.column.replaceAll(' ', '_')"
              >
                <a
                  v-if="filter.column === 'symbol'"
                  class="text_with_icon"
                  @click="
                    moveToProjectPage(result.ncbiGeneId || result.ensemblGeneId)
                  "
                >
                  <font-awesome-icon class="left_icon" icon="dna" />
                  {{ result.symbol }}
                  <font-awesome-icon
                    class="right_icon info"
                    icon="info-circle"
                    @click.stop="setGeneModal(result[geneIdKey])"
                  />
                </a>
                <a
                  v-else-if="filter.column === 'Description'"
                  class="text_with_icon"
                  @click="moveToProjectPage(result['RefexSampleId'])"
                >
                  <font-awesome-icon icon="flask" />
                  {{ result.Description }}
                  <font-awesome-icon
                    class="right_icon info"
                    icon="info-circle"
                    @click.stop="setSampleModal(result['RefexSampleId'])"
                  />
                </a>
                <MedianBar
                  v-else-if="filter.column === 'LogMedian'"
                  :items="items"
                  :stat-info="tooltipData(items, result.itemNum)"
                />
                <img
                  v-else-if="filter.column === 'gene expression patterns'"
                  :src="geneSummarySource(result[geneIdKey])"
                  :alt="result[geneIdKey]"
                />
                <template v-else-if="$hasStringQuotes(result[filter.column])">
                  {{ result[filter.column].replaceAll('"', '') }}
                </template>
                <a
                  v-else-if="
                    filter.column === 'ncbiGeneId' ||
                    filter.column === 'ensemblGeneId'
                  "
                  class="text_with_icon"
                  target="_blank"
                  :href="
                    activeDataset['gene'].url_prefix + result[filter.column]
                  "
                >
                  {{ result[filter.column] }}
                  <font-awesome-icon icon="external-link-alt" />
                </a>
                <template v-else>
                  {{ result[filter.column] }}
                  <span
                    v-if="filter.column !== 'alias'"
                    @click="
                      setFilterSearchValue('');
                      setFilterSearchValue(result[filter.column]);
                      setFilterModal(filter.column);
                    "
                    ><font-awesome-icon icon="plus-circle"
                  /></span>
                </template>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </section>
    <ResultsPagination
      ref="resultsPagination"
      :pages-number="pagesNumber"
      :results-displayed="resultsDisplayed"
      :table-type="tableType"
      class="pagination"
    />
  </div>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex';
  import ResultsPagination from '~/components/results/ResultsPagination.vue';
  import TableHeader from '~/components/results/TableHeader.vue';

  const initialState = () => {
    return {
      checkedResults: { gene: [], sample: [] },
      resultsCached: [],
    };
  };

  export default {
    components: {
      TableHeader,
      ResultsPagination,
    },
    async beforeRouteUpdate(to, from, next) {
      this.$nuxt.$loading.start();
      if (this.filterType === 'gene') {
        this.setIsSampleModalMessage(true);
      }
      this.currentPageId = to.query.id;
      await this.$nuxt.refresh();
      next();
      this.$forceUpdate();
    },
    props: {
      selectedItem: {
        type: String,
        default: '',
      },
      geneIdKey: {
        type: String,
        default: 'geneid',
      },
      filterType: {
        type: String,
        required: true,
      },
      tableType: {
        type: String,
        required: true,
      },
      dataset: {
        type: String,
        default: '',
      },
      items: {
        type: Array,
        default: () => [],
      },
      fieldsArray: {
        type: Array,
        default: () => [],
      },
      heightChartWrapper: {
        type: Number,
        default: 200,
      },
      results: {
        type: Array,
        required: true,
      },
      filters: {
        type: Array,
        required: true,
      },
      keyForId: {
        type: String,
        default: '',
      },
      resultsNum: {
        type: Number,
        default: 0,
      },
      tsvTitle: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        ...initialState(),
        optionsStaticData: {},
        isDisplaySettingsOn: false,
        projectTableHead: [],
        columnsArray: [],
        ordersArray: [],
        currentPageId: '',
      };
    },
    computed: {
      ...mapGetters({
        projectResults: 'get_project_results',
        projectItems: 'get_project_items',
        paginationObject: 'get_project_pagination',
        geneSummarySource: 'gene_summary_source',
        routeToProjectPage: 'route_to_project_page',
        routeToOtherProjectPage: 'route_to_other_project_page',
        filterObj: 'active_filter_modal',
        activeDataset: 'active_dataset',
        activeFilter: 'active_filter',
        projectPaginationObject: 'get_project_pagination',
        indexPaginationObject: 'index_pagination',
      }),
      currentUrl() {
        return window.location.href;
      },
      geneIdListForCopy() {
        const geneIdList = this.filteredSortedData?.map(({ geneid }) => geneid);
        return geneIdList.join('\r\n');
      },
      resultsUniqueKeys() {
        return this.results.map(item => item[this.keyForId]);
      },
      isAllChecked() {
        return (
          this.resultsUniqueKeys.length > 0 &&
          this.checkedResults[this.activeFilter.name].length ===
            this.resultsUniqueKeys.length
        );
      },
      isSortColumns() {
        return this.columnsArray.length !== 0;
      },
      pageItems() {
        const { offset, limit } = this.paginationObject;
        return this.filteredSortedData.slice(offset, offset + limit);
      },
      pagesNumber() {
        return Math.ceil(
          this.filteredSortedData.length / this.paginationObject.limit
        );
      },
      datasetInfo() {
        return this.activeDataset[this.filterType];
      },
      columnSortersArray() {
        const arr = [];
        const numericalStringKeys = ['ncbiGeneId', 'geneid'];
        for (const column of this.columnsArray) {
          const sorter = data =>
            numericalStringKeys.includes(column)
              ? Number(data[column])
              : typeof data[column] === 'string'
              ? data[column].toLowerCase()
              : data[column];
          arr.push(sorter);
        }
        return arr;
      },
      filtersDisplayed() {
        return this.filters
          .filter(({ is_displayed }) => is_displayed)
          .map(({ column }) => column);
      },
      resultsDisplayed() {
        if (this.tableType === 'index') {
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
        } else {
          const displayed = [];
          for (const filter of this.filters) {
            if (filter.is_displayed) displayed.push(filter.column);
          }
          const logMedianKeys = [];
          for (const key of Object.keys(this.results[0])) {
            if (key.startsWith('LogMedian_')) {
              logMedianKeys.push(key);
            }
          }
          const resultsDisplayed = [];
          for (const item of this.filteredSortedData) {
            const filtered = Object.keys(item)
              .filter(itemKey => displayed.includes(itemKey))
              .reduce((resultDisplayed, itemKey) => {
                if (itemKey === 'LogMedian') {
                  for (const logMediankey of logMedianKeys) {
                    resultDisplayed[logMediankey] = item[logMediankey];
                  }
                } else if (itemKey === 'alias') {
                  resultDisplayed[itemKey] = this.$composeAlias(item[itemKey]);
                } else resultDisplayed[itemKey] = item[itemKey];
                return resultDisplayed;
              }, {});
            resultsDisplayed.push(filtered);
          }
          return resultsDisplayed;
        }
      },
      filteredSortedData() {
        const multisortData = data =>
          _.orderBy(data, this.columnSortersArray, this.ordersArray);
        if (this.tableType === 'index') {
          return multisortData(this.results);
        }
        const inRange = (x, [min, max]) => {
          return typeof x !== 'number' || (x - min) * (x - max) <= 0;
        };
        const textFilter = (fullText, inputText) => {
          const reg = new RegExp(inputText, 'gi');
          if (inputText.length > 0 && reg.test(fullText))
            return fullText.replaceAll(reg);
        };
        const createNumberList = str =>
          str
            .replace('-', ',')
            .split(',')
            .map(x => parseInt(x) || 'out of filter bounds');
        const filtered = this.results.filter(result => {
          let isFiltered = false;
          for (const filter of this.filters) {
            const { column, is_displayed, options, filterModal } = filter;
            if (!is_displayed) continue;
            // options filter
            if (options) {
              if (typeof filterModal === 'string') {
                this.$store.commit(`update_project_filters`, {
                  filter: [filterModal],
                  type: this.filterType,
                });
              }
              if (!filterModal.includes(result[column])) isFiltered = true;
            }
            // number filter
            else if (
              typeof filterModal === 'number' ||
              Array.isArray(filterModal)
            ) {
              // checks if all values are in range. Creates a list in case of Age due to multiple values in string form
              const n =
                column === 'Age'
                  ? createNumberList(result[column])
                  : [result[column]];
              if (n.find(x => inRange(x, filterModal)) === undefined)
                isFiltered = true;
            }
            // text filter
            else if (filterModal !== '' && !isFiltered) {
              // exact match if filter is based on API options
              const isMatch = textFilter(result[column], filterModal);
              isFiltered = filterModal !== '' && !isMatch;
            }
          }
          return !isFiltered;
        });
        this.updateProjectTableHead();
        return multisortData(filtered);
      },
      paginationObject() {
        return this.tableType === 'index'
          ? this.indexPaginationObject
          : this.projectPaginationObject;
      },
    },
    watch: {
      currentPageId(newVal) {
        this.$emit('currentPageIdChanged', newVal);
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
    mounted() {
      if (this.tableType === 'project') {
        this.setSortColumn({
          column: 'LogMedian',
          selectedItem: this.selectedItem,
        });
      }
    },
    methods: {
      ...mapMutations({
        setGeneModal: 'set_gene_modal',
        setSampleModal: 'set_sample_modal',
        setFilterSearchValue: 'set_filter_search_value',
        setFilterModal: 'set_filter_modal',
        setIsSampleModalMessage: 'set_is_sample_modal_message',
        setCheckedResults: 'set_checked_results',
      }),
      moveToProjectPage(route) {
        if (this.tableType === 'index') {
          this.$nuxt.$loading.start();
          if (this.filterType === 'sample') {
            this.setIsSampleModalMessage(true);
          }
          this.$router.push(this.routeToProjectPage(route));
        } else if (this.tableType === 'project') {
          this.$router.push(this.routeToOtherProjectPage(route));
          if (this.activeFilter.name === 'gene') {
            this.setIsSampleModalMessage(true);
          }
        }
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
      tooltipData(items, itemNum) {
        const statData = {};
        let tmp = {
          firstQuartileData: {},
          minData: {},
          maxData: {},
          medianData: {},
          thirdQuartileData: {},
          sdData: {},
          numberOfSamplesData: {},
        };
        let ids = [];
        items.forEach(item => ids.push(item.id));
        if (this.currentPageId) ids = [this.currentPageId];
        for (let i = 0; i < ids.length; i++) {
          for (const statName in tmp) {
            tmp[statName][ids[i]] =
              this.projectItems.items[i][statName][itemNum];
            if (i === ids.length - 1) statData[statName] = tmp[statName];
          }
        }
        return statData;
      },
      activeSort(col_name) {
        this.setSortColumn({
          column: col_name,
          selectedItem: this.selectedItem,
        });
      },
      clearSortArray() {
        this.columnsArray.splice(0, this.columnsArray.length);
        this.ordersArray.splice(0, this.ordersArray.length);
      },
      updateProjectTableHead() {
        const arr = [];
        for (const filter of this.filters) {
          if (
            !filter.is_displayed ||
            filter.column === 'gene expression patterns'
          )
            continue;
          const obj = {};
          if (filter.column === 'LogMedian') {
            for (const oldHead of Object.keys(this.results[0])) {
              if (oldHead.includes('LogMedian_')) {
                const medianObj = {};
                const newHead = oldHead
                  .replace('LogMedian_', '')
                  .concat('_Median (log2(TPM+1))');
                medianObj[oldHead] = newHead;
                arr.push(medianObj);
              }
            }
            continue;
          }
          obj[filter.column] = filter.note
            ? `${filter.label} (${filter.note})`
            : filter.label;
          arr.push(obj);
        }
        this.projectTableHead = arr;
      },
      setSortColumn({ column, selectedItem }) {
        if (column === 'chromosomePosition') {
          column += 'Int';
        }
        const columnIndex = this.columnsArray.indexOf(column);
        if (columnIndex === -1) {
          this.columnsArray.unshift(column);
          this.ordersArray.unshift('desc');
        } else if (
          column === 'LogMedian' &&
          this.selectedItem !== selectedItem
        ) {
          this.ordersArray.splice(columnIndex, 1, 'desc');
        } else if (this.ordersArray[columnIndex] === 'desc') {
          this.ordersArray.splice(columnIndex, 1, 'asc');
        } else {
          this.columnsArray.splice(columnIndex, 1);
          this.ordersArray.splice(columnIndex, 1);
        }
      },
    },
  };
</script>
<style lang="sass" scoped>
  .multisort-result
    &.project
      margin: 0 20px
  .results_title_wrapper
    display: flex
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
  .table-wrapper
    table
      +table
      > tbody
        .warning
          +warning
          padding: 40px
        > tr
          > td
            > a
              +link_with_icon
            > .filter_column
              cursor: pointer
            > span
              position: relative
              > svg
                padding-left: 4px
                font-size: 11px
                color: $MAIN_COLOR
                cursor: pointer
  .pagination
    display: flex
    position: sticky
    left: 0
    position: sticky
    background-color: white
    top: 0

  .project
    .results_title_wrapper
      position: sticky
      top: 200px
      z-index: 100
      background-color: white
      padding-bottom: 10px
    .table-wrapper
      max-height: calc(100vh - 500px)
      overflow-x: scroll
      th
        top: 0 !important
</style>
