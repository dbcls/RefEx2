<template>
  <modal-view>
    <div class="modal display_settings_modal" @click.stop="">
      <p class="modal_title">
        <font-awesome-icon icon="eye" />
        Show/hide columns
      </p>
      <div class="display_checkboxes">
        <template v-for="(value, filterIndex) of filters">
          <div
            v-if="
              !['Symbol', 'Description', 'MEDIAN [LOG2(TPM+1)]'].includes(
                value.label
              )
            "
            :key="filterIndex"
          >
            <label :for="value.innerKey">
              <input
                :checked="value.is_displayed"
                type="checkbox"
                @click="toggleDisplayOfFilter(value.column)"
              />
              {{ value.label }}
            </label>
          </div>
        </template>
      </div>
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
    props: {
      // eslint-disable-next-line vue/require-default-prop
      indexFilters: {
        type: Array,
        required: false,
      },
    },
    computed: {
      ...mapGetters({
        projectFilters: 'project_filters',
        projectPaginationObject: 'get_project_pagination',
        indexPaginationObject: 'index_pagination',
      }),
      paginationObject() {
        return this.indexFilters
          ? this.indexPaginationObject
          : this.projectPaginationObject;
      },
      filters() {
        return this.indexFilters ?? this.projectFilters;
      },
      currentLimit() {
        return this.paginationObject.limit;
      },
    },
    methods: {
      ...mapMutations({
        updateProjectFilters: 'update_project_filters',
        updatePagination: 'set_pagination',
      }),
      toggleDisplayOfFilter(key) {
        // in case of indexFilters , call parent element
        // in case of project filters, call upon store mutation
        if (this.indexFilters) {
          this.$emit('updateDisplaySettings', key);
        } else {
          this.updateProjectFilters({
            key: 'is_displayed',
            filter:
              !this.filters.find(x => x.column === key)?.is_displayed || false,
            filterKey: key,
          });
          this.$emit('updateProjectTableHead');
        }
      },
      toggleDisplaySettings() {
        this.isDisplaySettings = !this.isDisplaySettings;
      },
    },
  };
</script>
<style lang="sass" scoped>
  .display_settings_modal
    width: 400px
    > .modal_title
      > svg
        margin-right: 4px
    > .display_checkboxes
      column-count: 2
      > div
        width: 100%
        display: inline-block
        line-height: 26px
        > label
          font-size: 14px
          > input
            vertical-align: -0.1rem
</style>
