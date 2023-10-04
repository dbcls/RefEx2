<template>
  <!-- v-html setup neccesary for plugin, does NOT use user input/API data and is therefore safe to use -->
  <!-- eslint-disable vue/no-v-html -->
  <div
    class="screener_wrapper"
    :class="{ open: isOpen }"
    :data-cy="`${$vnode.key}_screener`"
  >
    <p
      class="screener_title"
      :class="{ open: isOpen, active: isOpen, sub_accordion: !master }"
      @click="toggleScreener"
    >
      <template v-if="master">
        <font-awesome-icon icon="filter" class="filter" />
        Screener
      </template>
      <template v-else>
        <font-awesome-icon
          icon="check"
          class="filter"
          :class="{ active: isOpen }"
        />
        {{ title }}
      </template>
      <font-awesome-icon
        icon="chevron-right"
        :class="isOpen ? 'open' : 'close'"
      />
    </p>
    <div class="sub_wrapper">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Please enter a title',
        required: true,
      },
      id: {
        type: String,
        default: '',
      },
      master: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        isOpen: false,
      };
    },
    watch: {
      '$store.state.active_gene_filter': function () {
        if (this.master) return;
        this.isOpen = this.id === this.$store.state.active_gene_filter;
      },
    },
    methods: {
      toggleScreener() {
        this.isOpen = !this.isOpen;
        if (this.master) return;
        this.$store.commit('set_active_gene_filter', this.id);
      },
    },
  };
</script>
<style lang="sass" scoped>
  .screener_wrapper
    // padding: 10px 34px
    box-shadow: 0 1px 4px rgba(62, 70, 82, .22)
    border-radius: 3px
    height: 42px
    overflow: hidden
    box-sizing: border-box
    &.open
      height: auto
      overflow: visible
  ::v-deep
    .vue-tags-input
      max-width: initial !important
      padding-bottom: 40px
      &.hide_caret
        .ti-input
          background-color: $DISABLE_COLOR
        input
          caret-color: transparent
          color: transparent
          cursor: default
          background-color: $DISABLE_COLOR
      > .ti-autocomplete
        +scrollable-suggestions
      .ti-input
        +text_input
        padding: 10px
        border: none
        width: 100%
        .ti-tags
          height: 25px
          position: relative
          input
            padding: 0px 10px
          .ti-tag
            height: 24px
            background-color: $MAIN_COLOR
            padding: 3px 10px
            border-radius: 100px
            position: relative
            bottom: -45px
            &.ti-deletion-mark
              background-color: #F24B56
          .ti-new-tag-input-wrapper
            height: 24px
            padding: 0
            .ti-new-tag-input
              position: absolute
              left: 0
      .ti-item.ti-selected-item
        color: $WHITE
        background-color: $MAIN_COLOR
    p
      margin: 0
      &.screener_title
        padding: 3px 0 10px 0
        display: flex
        align-items: center
        &.sub_accordion
          padding-bottom: 0
        > svg
          font-size: 12px
          transition: .3s
          &.filter
            margin-right: 3px
          &.close,
          &.open
            margin-left: 10px
          &.open
            transform: rotate(90deg)
          &[data-icon="check"]
            font-size: 20px
            color: $DISABLE_COLOR
        &:hover
          cursor: pointer
        &.open
          [data-icon="check"]
            color: $MAIN_COLOR
    h3,h4
      display: flex
      gap: .5rem
      margin-bottom: 0.5rem
      align-items: center
    .example_wrapper
      +sample_query
    input
      +text_input
      font-size: 20px
      &.text_search_go_term
        margin-bottom: 10px
    select
      +selection
      font-size: 20px
    > .classification_wrapper
      margin-top: -7px
    .tag
      +ontology_tag
  .sub_wrapper
    padding: 10px 10px
</style>
