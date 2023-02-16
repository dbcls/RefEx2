<template>
  <div>
    <h3>Filter by {{ screenerFilter.description }}</h3>
    <client-only>
      <div :class="screenerFilter.className">
        <table ref="itemList" class="item-list">
          <tr>
            <td class="check">
              <input
                v-model="isAllChecked"
                type="checkbox"
                :checked="isAllChecked"
                @click="dispatchAction('CHECK_ALL')"
              />
            </td>
            <td
              v-for="column in columns"
              :key="column.id"
              :class="column.className"
            >
              {{ column.name }}
              <template
                v-if="column.className === 'sample' && !allSampleIsSelected"
              >
                <WarningMessage>Please select from suggestions</WarningMessage>
              </template>
              <a v-if="isEntropy(column.className)" href="javascript:void(0)">
                <font-awesome-icon icon="info-circle" />
              </a>
            </td>
            <td
              colspan="2"
              class="delete_all"
              :class="{ disabled: deleteDisabled }"
              @click="dispatchAction('DEL_ALL')"
            >
              <font-awesome-icon icon="trash" />
              Delete All
            </td>
          </tr>
          <tr
            v-for="(item, itemIndex) in screenerFilter.list"
            :key="itemIndex"
            ref="listItem"
            class="list-item"
            :class="{ unchecked: !item.isChecked }"
          >
            <template v-if="item.isShow">
              <td class="check">
                <input
                  v-model="item.isChecked"
                  type="checkbox"
                  @click="dispatchAction('CHECK', itemIndex)"
                />
              </td>
              <td v-for="column in columns" :key="column.id">
                <select
                  v-if="column.inputType === 'dropdown'"
                  v-model="item[column.className]"
                  required
                  :disabled="!item.isChecked"
                  @change="
                    dispatchAction('ADD', itemIndex, item[column.className])
                  "
                >
                  <option value="" disabled selected hidden>
                    {{ column.placeholder }}
                  </option>
                  <template v-if="column.className === 'group'">
                    <option
                      v-for="option in groupOptions"
                      :key="option.id"
                      :value="option.label"
                    >
                      {{ option.label }}
                    </option>
                  </template>
                  <template v-else>
                    <option
                      v-for="(option, optionIndex) of column.options"
                      :key="optionIndex"
                      :value="option.value"
                    >
                      {{ option.description }}
                    </option>
                  </template>
                </select>
                <vue-simple-suggest
                  v-else-if="column.className === 'sample'"
                  ref="sampleInputs"
                  v-model.trim="item[column.className]"
                  display-attribute="id"
                  value-attribute="description"
                  :list="autocompleteItems(item[column.className])"
                  :debounce="500"
                  :min-length="0"
                  :max-suggestions="10"
                  class="text_search_name"
                  @input="
                    () => {
                      dispatchAction('ADD', itemIndex, item[column.className]);
                      tempFunction();
                      setSelectedTrue(itemIndex);
                    }
                  "
                >
                  <!-- plugin uses slot-scope as a prop variable. {suggestion} turns into an object at the plugin-->
                  <!-- eslint-disable vue/no-unused-vars -->
                  <!-- eslint-disable vue/no-v-html -->
                  <div slot="suggestion-item" slot-scope="{ suggestion }">
                    <span
                      v-html="
                        $highlightedSuggestion(
                          suggestion.description,
                          item[column.className],
                          2
                        )
                      "
                    ></span>
                  </div>
                </vue-simple-suggest>
                <input
                  v-else
                  v-model.trim="item[column.className]"
                  :type="column.inputType"
                  :placeholder="column.placeholder"
                  :min="column.min"
                  :max="column.max"
                  :disabled="!item.isChecked"
                  @input="
                    dispatchAction('ADD', itemIndex, item[column.className])
                  "
                />
              </td>
              <td class="icon">
                <button
                  class="delete_btn"
                  :class="{ disabled: !item.canDelete }"
                  :disabled="isDisable(item)"
                  @click="dispatchAction('DEL', itemIndex)"
                >
                  <font-awesome-icon icon="trash" />
                  Delete
                </button>
              </td>
            </template>
          </tr>
        </table>
      </div>
    </client-only>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import VueSimpleSuggest from 'vue-simple-suggest';
  import datasets from '~/refex-sample/datasets.json';
  import WarningMessage from '../WarningMessage.vue';
  import _ from 'lodash';
  export default {
    components: {
      VueSimpleSuggest,
      WarningMessage,
    },
    props: {
      filter: {
        type: Object,
        default: () => {},
      },
      columns: {
        type: Array,
        default: () => [],
      },
    },
    data() {
      return {
        isAllChecked: true,
        datasets,
        parameters: {
          text: '',
        },
        allSampleIsSelected: true,
        sampleSelectedArray: [],
        screenerFilter: this.filter,
      };
    },
    computed: {
      ...mapGetters({
        activeDataset: 'active_dataset',
      }),
      groupOptions() {
        const target = this.activeDataset.dataset;
        if (target === 'humanFantom5') {
          return this.datasets[0].datasets[0].specificity;
        } else if (target === 'gtexV8') {
          return this.datasets[0].datasets[1].specificity;
        } else if (target === 'mouseFantom5') {
          return [{ label: 'Group 1' }, { label: 'Group 2' }];
          // お客さんの指定があり次第ハードコートから下記のコートに変更
          // return this.datasets[1].datasets[0].specificity;
        } else return [{ label: 'No useable option found' }];
      },
      deleteDisabled() {
        const list = this.screenerFilter.list;
        const firstItem = list[0];
        const defaultItem = { ...this.screenerFilter.defaultItem };
        defaultItem.canDelete = false;
        if (_.isEqual(firstItem, defaultItem) && list.length === 1) {
          return true;
        }
        return false;
      },
      // selectedSample() {
      //   return this.$refs.sampleInputs?.map(input => input.selected);
      // },
      // isSelected() {
      //   let status = false;
      //   const sampleInputs = this.$refs.sampleInput;
      //   if (sampleInputs) {
      //     for (let [i, input] of sampleInputs.entries()) {
      //       if (i === sampleInputs.length - 1) {
      //         continue;
      //       }
      //       console.log(input.selected);
      //       status = input.selected !== null ? true : false;
      //     }
      //   }
      //   return status;
      // },
    },
    watch: {
      screenerFilter: {
        handler(newVal, oldVal) {
          console.log('watch changed');
        },
        deep: true,
      },
    },
    mounted() {
      this.dispatchAction('INIT');
    },
    // updated() {
    //   // console.log('input changed');
    //   const isSelectedUpToDate = this.$refs.sampleInputs?.map(
    //     sampleInput => sampleInput.isSelectedUpToDate
    //   );
    //   const falseIndexArray = [];
    //   if (isSelectedUpToDate !== undefined) {
    //     for (const [i, item] of isSelectedUpToDate.entries()) {
    //       if (item === false) {
    //         falseIndexArray.push(i);
    //       }
    //     }
    //   }
    //   console.log(isSelectedUpToDate);
    //   if (
    //     isSelectedUpToDate !== undefined &&
    //     isSelectedUpToDate.includes(false)
    //   ) {
    //     const indexArray = [];
    //     for (const [i, bool] of isSelectedUpToDate.entries()) {
    //       if (bool === false) indexArray.push(i);
    //     }
    //     const defaultItem = { ...this.screenerFilter.defaultItem };
    //     delete defaultItem.canDelete;
    //     for (const index of indexArray) {
    //       delete this.screenerFilter.list[index].canDelete;
    //       if (!_.isEqual(this.screenerFilter.list[index], defaultItem)) {
    //         this.allSampleIsSelected = false;
    //       }
    //     }
    //     this.allSampleIsSelected = true;
    //   } else this.allSampleIsSelected = true;
    // },
    methods: {
      isDisable(item) {
        return !item.canDelete;
      },
      isEntropy(className) {
        return ['emin', 'emax'].includes(className);
      },
      dispatchAction(action, index, value) {
        const list = this.screenerFilter.list;
        const targetItem = list[index];
        const defaultItem = { ...this.screenerFilter.defaultItem };
        switch (action) {
          case 'INIT':
            defaultItem.canDelete = false;
            list.push(defaultItem);
            break;
          case 'CHECK_ALL':
            this.isAllChecked = !this.isAllChecked;
            for (const item of list) {
              this.isAllChecked
                ? (item.isChecked = true)
                : (item.isChecked = false);
            }
            break;
          case 'CHECK':
            targetItem.isChecked = !targetItem.isChecked;
            break;
          case 'ADD':
            targetItem.canDelete = true;
            if (value.trim().length > 0) {
              if (!list[index + 1]) {
                list.push(defaultItem);
              }
            }
            break;
          case 'DEL':
            const countOfShow = () => {
              let count = 0;
              for (const item of list) {
                if (item.isShow) {
                  count++;
                }
              }
              return count;
            };
            if (countOfShow() === 1) {
              list.splice(0, list.length);
              defaultItem.canDelete = false;
              list.push(defaultItem);
            } else {
              // list.splice(index, 1);
              targetItem.isShow = false;
            }
            console.log(this.$refs.sampleInputs);
            // this.$refs.sampleInputs[index].$destroy();
            break;
          case 'DEL_ALL':
            list.splice(0, list.length);
            defaultItem.canDelete = false;
            list.push(defaultItem);
            break;
        }
        const firstItem = list[0];
        if (_.isEqual(firstItem, defaultItem) && list.length === 1) {
          firstItem.canDelete = false;
        }
        this.isAllChecked = list.every(item => item.isChecked);
        // console.log(this.screenerFilter.list);
        // console.log(this.$refs.sampleInputs?.map(input => input.selected));
      },
      autocompleteItems(userInput) {
        const target = this.activeDataset.dataset;
        const samplesArray = target => {
          switch (target) {
            case 'humanFantom5':
              return this.datasets[0].datasets[0].specificity[0].samples;
            case 'gtexV8':
              return this.datasets[0].datasets[1].specificity[0].samples;
            default:
              return [
                {
                  id: 'testId1',
                  description: 'Sample description 1',
                },
                {
                  id: 'testId2',
                  description: 'Sample description 2',
                },
              ];
          }
        };
        const copy = [...samplesArray(target)];
        const wordAndSpace = /[^\w\s]/g;
        const alphaNumInput = userInput.replace(wordAndSpace, '');
        const inputsArray = alphaNumInput.replace(/\s\s+/g, ' ').split(' ');

        return copy.filter(sample => {
          const alphaNumInput = sample.description.replace(wordAndSpace, '');

          for (const input of inputsArray) {
            return alphaNumInput.toLowerCase().indexOf(input.toLowerCase()) ===
              -1
              ? false
              : true;
          }
        });
      },
      tempFunction() {
        const isSelectedUpToDate = this.$refs.sampleInputs?.map(
          sampleInput => sampleInput.isSelectedUpToDate
        );
        const falseIndexArray = [];
        if (isSelectedUpToDate !== undefined) {
          for (const [i, item] of isSelectedUpToDate.entries()) {
            if (item === false) {
              falseIndexArray.push(i);
            }
          }
        }
        console.log(isSelectedUpToDate);
        // if (
        //   isSelectedUpToDate !== undefined &&
        //   isSelectedUpToDate.includes(false)
        // ) {
        //   const indexArray = [];
        //   for (const [i, bool] of isSelectedUpToDate.entries()) {
        //     if (bool === false) indexArray.push(i);
        //   }
        //   const defaultItem = { ...this.screenerFilter.defaultItem };
        //   delete defaultItem.canDelete;
        //   const copy = [...this.screenerFilter.list];
        //   for (const index of indexArray) {
        //     delete copy[index].canDelete;
        //     if (!_.isEqual(copy[index], defaultItem)) {
        //       this.allSampleIsSelected = false;
        //     }
        //   }
        //   this.allSampleIsSelected = true;
        // } else this.allSampleIsSelected = true;
      },
      setSelectedTrue(index) {
        const list = this.screenerFilter.list;
        list[index].isSelected = true;
      },
      setSelectedFalse(index) {
        const list = this.screenerFilter.list;
        list[index].isSelected = false;
      },
    },
  };
</script>