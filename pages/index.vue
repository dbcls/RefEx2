<template>
  <div class="index_wrapper">
    <LocalNavigation />
    <FilterTab v-for="filter of filters" :key="filter.name" />
    <ModalViewGene />
    <ModalViewSample />
    <ModalViewCompare ref="ModalViewCompare" />
    <ModalViewAlert />
    <ModalViewFilter />
  </div>
</template>

<script>
  import ModalViewGene from '~/components/ModalView/ModalViewGene.vue';
  import ModalViewSample from '~/components/ModalView/ModalViewSample.vue';
  import ModalViewCompare from '~/components/ModalView/ModalViewCompare.vue';
  import LocalNavigation from '~/components/search/LocalNavigation/LocalNavigation.vue';
  import FilterTab from '~/components/search/FilterTab.vue';
  import filters from '~/static/filters.json';
  import ModalViewAlert from '~/components/ModalView/ModalViewAlert.vue';
  import ModalViewFilter from '~/components/ModalView/ModalViewFilter.vue';

  export default {
    components: {
      ModalViewGene,
      ModalViewSample,
      ModalViewCompare,
      LocalNavigation,
      FilterTab,
      ModalViewAlert,
      ModalViewFilter,
    },
    async asyncData({ $axios, store }) {
      const optionsStaticData = await $axios.$get(`api/cv`);
      store.commit('set_options_static_data', optionsStaticData);
    },
    data() {
      return {
        filters,
      };
    },
  };
</script>

<style lang="sass">
  +popper
  .index_wrapper
    min-width: fit-content
</style>
