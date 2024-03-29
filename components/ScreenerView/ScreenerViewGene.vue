<template>
  <!-- v-html setup neccesary for plugin, does NOT use user input/API data and is therefore safe to use -->
  <!-- eslint-disable vue/no-v-html -->
  <div>
    <div class="filter_search_condition">
      <!-- // TODO: Delete if multiple queries is able -->
      <b>{{
        getActiveGeneFilter.id === '' ? 'NO' : getActiveGeneFilter.title
      }}</b>
      filter will be applied to the search conditions.
    </div>
    <ScreenerView id="chr" title="Genes with Chr"
      ><client-only>
        <multi-select
          v-model="chrValue"
          :allow-empty="true"
          :close-on-select="false"
          placeholder=""
          :options="chrOptions"
          :multiple="true"
          ><template slot="option" slot-scope="props">
            <div class="option">
              <input
                :checked="chrValue.includes(props.option)"
                type="checkbox"
                :value="props.option.name"
              />
              <span class="option__small">{{ props.option }}</span>
              <!-- <font-awesome-icon icon="exclamation-triangle" /> -->
            </div>
          </template>
        </multi-select>
      </client-only></ScreenerView
    >

    <ScreenerView id="type_of_gene" title="Genes with Type of Gene">
      <client-only>
        <multi-select
          v-model="TOGValue"
          :allow-empty="true"
          :close-on-select="false"
          placeholder=""
          :options="TOGOptions"
          :multiple="true"
          ><template slot="option" slot-scope="props">
            <div class="option">
              <input
                type="checkbox"
                :checked="TOGValue.includes(props.option)"
                :value="props.option.name"
              />
              <span class="option__small">{{ props.option }}</span>
              <!-- <font-awesome-icon icon="exclamation-triangle" /> -->
            </div>
          </template>
        </multi-select>
      </client-only>
    </ScreenerView>

    <ScreenerView id="go_term" title="Genes with GO Term">
      <div class="example_wrapper">
        <span class="example"
          >e.g.
          <span
            class="sample_value"
            @click="
              handleSingleTagUpdate(
                'GO:0008134',
                'transcription factor binding'
              )
            "
            >transcription factor binding</span
          >,
          <span
            class="sample_value"
            @click="handleSingleTagUpdate('GO:0030154', 'cell differentiation')"
            >cell differentiation
          </span>
        </span>
      </div>
      <client-only>
        <vue-tags-input
          v-model="temporaryParameters.goTerm"
          :tags="parameters.go"
          :autocomplete-items="autoComplete.go"
          :max-tags="1"
          add-only-from-autocomplete
          :placeholder="placeholderGOTerm"
          :class="{ hide_caret: hideCaret }"
          @input="updateAutoComplete"
          @tags-changed="setTags($event, 'go')"
        >
          <div
            slot="autocomplete-item"
            slot-scope="{ item }"
            class="my-item"
            @click="handleSingleTagUpdate(item.id, item.text)"
            v-html="
              $highlightedSuggestion(item.text, temporaryParameters.goTerm)
            "
          ></div>
        </vue-tags-input>
      </client-only>
    </ScreenerView>

    <ScreenerViewGeneFilter
      v-for="(filter, index) of geneFilters"
      :key="index"
      :filter.sync="geneFilters[index]"
      :active-filter-obj.sync="activeFilterObj"
      :columns="filter.columns"
      :datasets="datasets"
      @addFilterValue="addFilterValue"
      @resetUpdateParameters="resetUpdateParameters"
      @resetActiveFilterObj="activeFilterObj = {}"
      @updateScreenerFilterList="updateScreenerFilterList"
    />
  </div>
</template>

<script>
  import _ from 'lodash';
  import MultiSelect from 'vue-multiselect';
  import { mapGetters, mapMutations } from 'vuex';
  import datasets from '~/refex-sample/datasets.json';
  import geneFilters from '~/refex-sample/gene_filters.json';
  import ScreenerViewGeneFilter from './ScreenerViewGeneFilter.vue';
  import ScreenerView from './ScreenerView.vue';

  const stringifiedGeneFilters = JSON.stringify(geneFilters);
  const stringifiedDatasets = JSON.stringify(datasets);

  const initialState = () => {
    return {
      chrValue: [],
      TOGValue: [],
      // only used in this component
      temporaryParameters: {
        goTerm: '',
      },
      // passed down to API and then converted & emitted to parent
      parameters: {
        go: [],
        chromosomePosition: '',
        typeOfGene: '',
        filter: [],
      },
      hideCaret: false,
      geneFilters: JSON.parse(stringifiedGeneFilters),
      datasets: JSON.parse(stringifiedDatasets),
      activeFilterObj: {},
      filterValue: [],
      TPMValue: [],
      ROKUValue: [],
      tauValue: [],
    };
  };

  export default {
    components: { MultiSelect, ScreenerViewGeneFilter, ScreenerView },
    data() {
      return {
        autocompleteStaticData: {},
        chrCheckedValue: [],
        chrOptions: [],
        TOGOptions: [],
        // will contain same keys as parameters. Autocompletion that does not come from the API should be hardcoded here in advance
        autoComplete: {
          go: [],
          chromosomePosition: [],
          typeOfGene: [],
          filter: [],
        },
        debounce: null,
        ...initialState(),
      };
    },
    computed: {
      ...mapGetters({
        activeDataset: 'active_dataset',
        activeFilter: 'active_filter',
        searchConditions: 'get_search_conditions',
        getScreenerFilterList: 'get_screener_filter_list',
        getActiveGeneFilter: 'get_active_gene_filter',
      }),
      goTermString() {
        if (this.parameters.go.length === 0) return '';
        return this.parameters.go.map(tag => tag.id).join(', ');
      },
      placeholderGOTerm() {
        return !Boolean(this.temporaryParameters.goTerm) &&
          this.parameters.go.length < 1
          ? 'transcription factor binding'
          : 'Only one tag is allowed';
      },
      isInitialState() {
        const defaultState = initialState();
        return Object.keys(defaultState).every(key =>
          _.isEqual(this.$data[key], defaultState[key])
        );
      },
    },
    watch: {
      activeDataset() {
        this.$emit('resetAll');
      },
      isInitialState(newVal) {
        this.$emit('setChildIsInitialState', newVal);
      },
      getActiveGeneFilter() {
        this.resetUpdateParameters();
      },
      parameters() {
        // TODO: This is a temporary response and needs to be corrected when multiple searches are performed
        switch (this.getActiveGeneFilter.id) {
          case 'chr':
            this.$emit('updateParameters', {
              chromosomePosition: this.chrValue.join(),
            });
            break;
          case 'type_of_gene':
            this.$emit('updateParameters', {
              typeOfGene: this.TOGValue.join(),
            });
            break;
          case 'go_term':
            this.$emit('updateParameters', {
              go: this.goTermString,
            });
            break;
          case 'filter_TPM':
          case 'filter_specificity_ROKU':
          case 'filter_specificity_tau':
            this.$emit('updateParameters', {
              filter: this.filterValue,
            });
            break;
        }
      },
      chrValue() {
        const chrCondition = {
          type: 'gene',
          item: 'chromosomePosition',
          value: this.chrValue,
        };
        this.setSearchConditions(chrCondition);
        this.handleChrTagsUpdate(this.chrValue);
      },
      TOGValue() {
        const TOGCondition = {
          type: 'gene',
          item: 'typeOfGene',
          value: this.TOGValue,
        };
        this.setSearchConditions(TOGCondition);
        this.handleTOGTagsUpdate(this.TOGValue);
      },
      filterValue(list) {
        const filterCondition = {
          type: 'gene',
          item: 'filter',
          value: list,
        };
        this.setSearchConditions(filterCondition);
        this.handleFilterValueUpdate(this.filterValue);
      },
    },
    async created() {
      this.getAutoCompleteData().then(() => {});
      this.$emit('updateParameters', { go: this.goTermString });
      this.initiateParametersDataset();
    },
    mounted() {
      // TODO: https://github.com/dbcls/RefEx2/issues/141
      if (this.searchConditions.gene.chromosomePosition)
        this.chrValue = this.searchConditions.gene.chromosomePosition;
      if (this.searchConditions.gene.typeOfGene)
        this.TOGValue = this.searchConditions.gene.typeOfGene;
      if (this.searchConditions.gene.go)
        this.setTags(this.searchConditions.gene.go, 'go');
      if (this.searchConditions.gene.filter)
        this.filterValue = this.searchConditions.gene.filter;
      if (this.getScreenerFilterList.activeFilterObj)
        this.activeFilterObj = this.getScreenerFilterList.activeFilterObj;
    },
    methods: {
      ...mapMutations({
        setSearchConditions: 'set_search_conditions',
        setScreenerFilterList: 'set_screener_filter_list',
        setActiveGeneFilter: 'set_active_gene_filter',
      }),
      resetUpdateParameters() {
        this.$emit('updateParameters', {});
      },
      handleStoreInitialParameters() {
        this.$emit('storeInitialParameters', {});
      },
      resetComponent() {
        Object.assign(this.$data, initialState());
      },
      initiateParametersDataset() {
        const parametersObj = {
          go: '',
          chromosomePosition: '',
          typeOfGene: '',
          filter: [],
        };
        this.$emit('updateParameters', { ...parametersObj });
        this.$emit('storeInitialParameters', { ...parametersObj });
      },
      getAutoCompleteData() {
        return this.$axios
          .$get(`api/cv`)
          .then(data => {
            this.autocompleteStaticData = data;
            this.chrOptions = data[
              this.activeDataset.dataset
            ].chromosomePosition
              .map(x => (!Number.isNaN(parseInt(x)) ? parseInt(x) : x))
              .sort(function (a, b) {
                const a1 = typeof a,
                  b1 = typeof b;
                return a1 < b1 ? -1 : a1 > b1 ? 1 : a < b ? -1 : a > b ? 1 : 0;
              });
            this.TOGOptions = data[this.activeDataset.dataset].typeOfGene;
          })
          .catch(_error => {
            this.setAlertModal({
              msg: 'Failed to get data in Screener View Sample',
            });
          });
      },
      updateAutoComplete() {
        clearTimeout(this.debounce);
        const query = `{ goSuggest (text: "${this.temporaryParameters.goTerm}", dataset: "${this.activeDataset.dataset}") { goId, goTerm }}`;
        this.debounce = setTimeout(() => {
          this.$axios
            .$post('gql', {
              query,
            })
            .then(response => {
              this.$set(
                this.autoComplete,
                'go',
                response.data?.goSuggest?.map(a => {
                  return { text: a.goTerm, id: a.goId };
                })
              );
            })
            .catch(() => console.warn('Oh. Something went wrong'));
        }, 300);
      },
      handleSingleTagUpdate(id, text, tiClasses = ['ti-valid'], key = 'go') {
        if (this.parameters[key].find(tag => tag.id === id)) {
          return;
        }
        this.$set(this.temporaryParameters, 'goTerm', '');
        this.setTags([{ id, text, tiClasses }], key);
      },
      handleChrTagsUpdate(tags) {
        this.parameters = {
          ...this.parameters,
          ['chromosomePosition']: tags.join(),
        };
      },
      handleTOGTagsUpdate(tags) {
        this.parameters = {
          ...this.parameters,
          ['typeOfGene']: tags.join(),
        };
      },
      handleFilterValueUpdate(list) {
        this.parameters = {
          ...this.parameters,
          ['filter']: this.filterValue,
        };
      },
      setTags(newTags, key) {
        this.parameters = { ...this.parameters, [key]: newTags };
        this.hideCaret = newTags.length === 0 ? false : true;
        const goCondition = { type: 'gene', item: 'go', value: newTags };
        this.setSearchConditions(goCondition);
      },
      // TODO:
      // Multiple support is not yet available
      addFilterValue(type, list) {
        switch (type) {
          case 'TPM':
            if (
              list[0].sample.id &&
              list[0].cutoff &&
              list[0].condition &&
              list[0].statistic
            ) {
              const filter = {
                method: 'tpm',
                sample: list[0].sample.id,
                value: list[0].cutoff,
                logic: list[0].condition,
                statistic: list[0].statistic,
              };
              const filterString = JSON.stringify(filter).replace(/"/g, '\\"');
              this.TPMValue = list;
              this.filterValue = filterString;
              filter.method = filter.method.toUpperCase();
              this.activeFilterObj = filter;
            }
            break;
          case 'ROKU':
            if (list[0].group && list[0].sample.id && list[0].horl) {
              const filter = {
                method: 'roku',
                group: list[0].group,
                sample: list[0].sample.id,
                highlow: list[0].horl,
                entropy_min: list[0].emin,
                entropy_max: list[0].emax,
              };
              const filterString = JSON.stringify(filter).replace(/"/g, '\\"');
              this.ROKUValue = list;
              this.filterValue = filterString;
              filter.method = filter.method.toUpperCase();
              this.activeFilterObj = filter;
            }
            break;
          case 'tau':
            if (list[0].group && list[0].condition && list[0].cutoff) {
              const filter = {
                method: 'tau',
                group: list[0].group,
                logic: list[0].condition,
                value: list[0].cutoff,
              };
              const filterString = JSON.stringify(filter).replace(/"/g, '\\"');
              this.tauValue = list;
              this.filterValue = filterString;
              this.activeFilterObj = filter;
            }
            break;
        }
        const filterListObj = {
          type: type.toLowerCase(),
          list: _.cloneDeep(list),
          activeFilterObj: this.activeFilterObj,
        };
        this.setScreenerFilterList(filterListObj);
      },
      updateScreenerFilterList(target) {
        this.geneFilters[target].list = this.getScreenerFilterList.list;
      },
    },
  };
</script>

<style lang="sass" scoped>
  ::v-deep
    .filter_search_condition
      padding-bottom: 15px
    .multiselect
      input
        width: auto
      input[type="text"]
        +text_input
      .multiselect__tag
        background: $MAIN_COLOR
        > .multiselect__tag-icon
          background: none
          &:after
            color: white
      .multiselect__tags
        border: none
        background: $MAIN_COLOR_PALE
      .multiselect__option
        background: none
        > .option
          display: flex
          align-items: center
          gap: 10px
          > input[type="checkbox"]
            cursor: pointer
      .multiselect__element
        display: block
      .multiselect__option--highlight
        background: $MAIN_COLOR
      *[class^="multiselect__option"]
        &:after
          content: none
    .filter
      padding: 10px
    .filter_TPM, .filter_specificity_ROKU, .filter_specificity_tau
      table
        thead
          height: 30px
          th
            font-size: 12px
            font-weight: initial
            text-align: initial
        tbody
          input, select
            height: 2.25em
          .text_search_name input
            font-size: 20px
    .filter_TPM
      table
        th, tr
          .icon
            text-align: center
          .sample
            width: 70%
          .cutoff, .condition
            width: 10%
          .statistic
            width: 20%
    .filter_specificity_ROKU
      table
        th, tr
          .icon
            text-align: center
          .group
            width: 25%
          .sample
            width: 40%
          .horl
            width: 15%
          .emin, .emax
            width: 10%
    .filter_specificity_tau
      table
        th, tr
          .icon
            text-align: center
          .group
            width: 70%
          .cutoff, .condition
            width: 15%
</style>
