(window.webpackJsonp=window.webpackJsonp||[]).push([[1,32],{406:function(t,e,n){var content=n(440);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("446f8348",content,!0,{sourceMap:!1})},425:function(t,e,n){"use strict";(function(t){const n={selectionUp:[38],selectionDown:[40],select:[13],hideList:[27],showList:[40],autocomplete:[32,13]},r={input:String,select:Object};function o(t,e){return c(t,e.keyCode)}function c(t,e){if(t.length<=0)return!1;const n=t=>t.some((code=>code===e));return Array.isArray(t[0])?t.some((t=>n(t))):n(t)}function l(t,e,n){return n?e?e(t):t:(t&&t.then||(t=Promise.resolve(t)),e?t.then(e):t)}function d(t){return function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];try{return Promise.resolve(t.apply(this,e))}catch(t){return Promise.reject(t)}}}function h(){}function f(body,t){var e=body();return e&&e.then?e.then(t):t(e)}function m(body,t){try{var e=body()}catch(e){return t(e)}return e&&e.then?e.then(void 0,t):e}function v(body,t){try{var e=body()}catch(e){return t()}return e&&e.then?e.then(t,t):t()}var y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vue-simple-suggest",class:[t.styles.vueSimpleSuggest,{designed:!t.destyled,focus:t.isInFocus}],on:{keydown:function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab"))return null;t.isTabbed=!0}}},[n("div",{ref:"inputSlot",staticClass:"input-wrapper",class:t.styles.inputWrapper,attrs:{role:"combobox","aria-haspopup":"listbox","aria-owns":t.listId,"aria-expanded":t.listShown&&!t.removeList?"true":"false"}},[t._t("default",[n("input",t._b({staticClass:"default-input",class:t.styles.defaultInput,domProps:{value:t.text||""}},"input",t.$attrs,!1))])],2),t._v(" "),n("transition",{attrs:{name:"vue-simple-suggest"}},[t.listShown&&!t.removeList?n("ul",{staticClass:"suggestions",class:t.styles.suggestions,attrs:{id:t.listId,role:"listbox","aria-labelledby":t.listId}},[this.$scopedSlots["misc-item-above"]?n("li",{class:t.styles.miscItemAbove},[t._t("misc-item-above",null,{suggestions:t.suggestions,query:t.text})],2):t._e(),t._v(" "),t._l(t.suggestions,(function(e,r){return n("li",{key:t.getId(e,r),staticClass:"suggest-item",class:[t.styles.suggestItem,{selected:t.isSelected(e),hover:t.isHovered(e)}],attrs:{role:"option","aria-selected":t.isHovered(e)||t.isSelected(e)?"true":"false",id:t.getId(e,r)},on:{mouseenter:function(n){return t.hover(e,n.target)},mouseleave:function(e){return t.hover(void 0)},click:function(n){return t.suggestionClick(e,n)}}},[t._t("suggestion-item",[n("span",[t._v(t._s(t.displayProperty(e)))])],{autocomplete:function(){return t.autocompleteText(e)},suggestion:e,query:t.text})],2)})),t._v(" "),this.$scopedSlots["misc-item-below"]?n("li",{class:t.styles.miscItemBelow},[t._t("misc-item-below",null,{suggestions:t.suggestions,query:t.text})],2):t._e()],2):t._e()])],1)},staticRenderFns:[],name:"vue-simple-suggest",inheritAttrs:!1,model:{prop:"value",event:"input"},props:{styles:{type:Object,default:()=>({})},controls:{type:Object,default:()=>n},minLength:{type:Number,default:1},maxSuggestions:{type:Number,default:10},displayAttribute:{type:String,default:"title"},valueAttribute:{type:String,default:"id"},list:{type:[Function,Array],default:()=>[]},removeList:{type:Boolean,default:!1},destyled:{type:Boolean,default:!1},filterByQuery:{type:Boolean,default:!1},filter:{type:Function,default(t,e){return!e||~this.displayProperty(t).toLowerCase().indexOf(e.toLowerCase())}},debounce:{type:Number,default:0},nullableSelect:{type:Boolean,default:!1},value:{},mode:{type:String,default:"input",validator:t=>!!~Object.keys(r).indexOf(t.toLowerCase())},preventHide:{type:Boolean,default:!1}},watch:{mode:{handler(t,e){this.constructor.options.model.event=t,this.$parent&&this.$parent.$forceUpdate(),this.$nextTick((()=>{"input"===t?this.$emit("input",this.text):this.$emit("select",this.selected)}))},immediate:!0},value:{handler(t){"string"!=typeof t&&(t=this.displayProperty(t)),this.updateTextOutside(t)},immediate:!0}},data(){return{selected:null,hovered:null,suggestions:[],listShown:!1,inputElement:null,canSend:!0,timeoutInstance:null,text:this.value,isPlainSuggestion:!1,isClicking:!1,isInFocus:!1,isFalseFocus:!1,isTabbed:!1,controlScheme:{},listId:`${this._uid}-suggestions`}},computed:{listIsRequest(){return"function"==typeof this.list},inputIsComponent(){return this.$slots.default&&this.$slots.default.length>0&&!!this.$slots.default[0].componentInstance},input(){return this.inputIsComponent?this.$slots.default[0].componentInstance:this.inputElement},on(){return this.inputIsComponent?"$on":"addEventListener"},off(){return this.inputIsComponent?"$off":"removeEventListener"},hoveredIndex(){for(let i=0;i<this.suggestions.length;i++){const t=this.suggestions[i];if(this.hovered&&this.valueProperty(this.hovered)==this.valueProperty(t))return i}return-1},textLength(){return this.text&&this.text.length||this.inputElement.value.length||0},isSelectedUpToDate(){return!!this.selected&&this.displayProperty(this.selected)===this.text}},created(){this.controlScheme=Object.assign({},n,this.controls)},mounted:d((function(){const t=this;return l(t.$slots.default,(function(){t.$nextTick((()=>{t.inputElement=t.$refs.inputSlot.querySelector("input"),t.inputElement?(t.setInputAriaAttributes(),t.prepareEventHandlers(!0)):console.error("No input element found")}))}))})),beforeDestroy(){this.prepareEventHandlers(!1)},methods:{isEqual(t,e){return e&&this.valueProperty(t)==this.valueProperty(e)},isSelected(t){return this.isEqual(t,this.selected)},isHovered(t){return this.isEqual(t,this.hovered)},setInputAriaAttributes(){this.inputElement.setAttribute("aria-activedescendant",""),this.inputElement.setAttribute("aria-autocomplete","list"),this.inputElement.setAttribute("aria-controls",this.listId)},prepareEventHandlers(t){const e=this[t?"on":"off"],n={click:this.showSuggestions,keydown:this.onKeyDown,keyup:this.onListKeyUp},r=Object.assign({blur:this.onBlur,focus:this.onFocus,input:this.onInput},n);for(const t in r)this.input[e](t,r[t]);const o=t?"addEventListener":"removeEventListener";for(const t in n)this.inputElement[o](t,n[t])},isScopedSlotEmpty(slot){if(slot){const t=slot(this);return!(Array.isArray(t)||t&&(t.tag||t.context||t.text||t.children))}return!0},miscSlotsAreEmpty(){const t=["misc-item-above","misc-item-below"].map((s=>this.$scopedSlots[s]));if(t.every((s=>!!s)))return t.every(this.isScopedSlotEmpty.bind(this));const slot=t.find((s=>!!s));return this.isScopedSlotEmpty.call(this,slot)},getPropertyByAttribute(t,e){return this.isPlainSuggestion?t:void 0!==typeof t?function(t,path){return path.split(".").reduce(((t,i)=>t===Object(t)?t[i]:t),t)}(t,e):t},displayProperty(e){if(this.isPlainSuggestion)return e;let n=this.getPropertyByAttribute(e,this.displayAttribute);return void 0===n&&(n=JSON.stringify(e),t&&~"production".indexOf("dev")&&console.warn("[vue-simple-suggest]: Please, provide `display-attribute` as a key or a dotted path for a property from your object.")),String(n||"")},valueProperty(t){if(this.isPlainSuggestion)return t;const e=this.getPropertyByAttribute(t,this.valueAttribute);return void 0===e&&console.error("[vue-simple-suggest]: Please, check if you passed 'value-attribute' (default is 'id') and 'display-attribute' (default is 'title') props correctly.\n        Your list objects should always contain a unique identifier."),e},autocompleteText(t){this.setText(this.displayProperty(t))},setText(text){this.$nextTick((()=>{this.inputElement.value=text,this.text=text,this.$emit("input",text)}))},select(t){(this.selected!==t||this.nullableSelect&&!t)&&(this.selected=t,this.$emit("select",t),t&&this.autocompleteText(t)),this.hover(null)},hover(t,e){const n=t?this.getId(t,this.hoveredIndex):"";this.inputElement.setAttribute("aria-activedescendant",n),t&&t!==this.hovered&&this.$emit("hover",t,e),this.hovered=t},hideList(){this.listShown&&(this.listShown=!1,this.hover(null),this.$emit("hide-list"))},showList(){this.listShown||this.textLength>=this.minLength&&(this.suggestions.length>0||!this.miscSlotsAreEmpty())&&(this.listShown=!0,this.$emit("show-list"))},showSuggestions:d((function(){const t=this;return f((function(){if(0===t.suggestions.length&&t.minLength<=t.textLength)return t.showList(),function(t,e){if(!e)return t&&t.then?t.then(h):Promise.resolve()}(t.research())}),(function(){t.showList()}))})),onShowList(t){o(this.controlScheme.showList,t)&&this.showSuggestions()},moveSelection(t){if(this.listShown&&this.suggestions.length&&o([this.controlScheme.selectionUp,this.controlScheme.selectionDown],t)){t.preventDefault();const e=o(this.controlScheme.selectionDown,t),n=2*e-1,r=e?0:this.suggestions.length-1,c=e?this.hoveredIndex<this.suggestions.length-1:this.hoveredIndex>0;let l=null;l=this.hovered?c?this.suggestions[this.hoveredIndex+n]:this.suggestions[r]:this.selected||this.suggestions[r],this.hover(l)}},onKeyDown(t){const select=this.controlScheme.select,e=this.controlScheme.hideList;"Enter"===t.key&&this.listShown&&c([select,e],13)&&t.preventDefault(),"Tab"===t.key&&this.hovered&&this.select(this.hovered),this.onShowList(t),this.moveSelection(t),this.onAutocomplete(t)},onListKeyUp(t){const select=this.controlScheme.select,e=this.controlScheme.hideList;this.listShown&&o([select,e],t)&&(t.preventDefault(),o(select,t)&&this.select(this.hovered),this.hideList())},onAutocomplete(t){o(this.controlScheme.autocomplete,t)&&(t.ctrlKey||t.shiftKey)&&this.suggestions.length>0&&this.suggestions[0]&&this.listShown&&(t.preventDefault(),this.hover(this.suggestions[0]),this.autocompleteText(this.suggestions[0]))},suggestionClick(t,e){this.$emit("suggestion-click",t,e),this.select(t),this.preventHide||this.hideList(),this.isClicking&&setTimeout((()=>{this.inputElement.focus(),this.isClicking=!1}),0)},onBlur(t){this.isInFocus?(this.isClicking=this.hovered&&!this.isTabbed,this.isClicking?t&&t.isTrusted&&!this.isTabbed&&(this.isFalseFocus=!0):(this.isInFocus=!1,this.hideList(),this.$emit("blur",t))):(this.inputElement.blur(),console.error("This should never happen!\n          If you encountered this error, please make sure that your input component emits 'focus' events properly.\n          For more info see https://github.com/KazanExpress/vue-simple-suggest#custom-input.\n\n          If your 'vue-simple-suggest' setup does not include a custom input component - please,\n          report to https://github.com/KazanExpress/vue-simple-suggest/issues/new")),this.isTabbed=!1},onFocus(t){this.isInFocus=!0,t&&!this.isFalseFocus&&this.$emit("focus",t),this.isClicking||this.isFalseFocus||this.showSuggestions(),this.isFalseFocus=!1},onInput(t){const e=t.target?t.target.value:t;this.updateTextOutside(e),this.$emit("input",e)},updateTextOutside(t){this.text!==t&&(this.text=t,this.hovered&&this.hover(null),this.text.length<this.minLength?this.hideList():this.debounce?(clearTimeout(this.timeoutInstance),this.timeoutInstance=setTimeout(this.research,this.debounce)):this.research())},research:d((function(){const t=this;return v((function(){return m((function(){return function(body){var t=body();if(t&&t.then)return t.then(h)}((function(){if(t.canSend){t.canSend=!1;let e=t.text;return l(t.getSuggestions(t.text),(function(n){e===t.text&&t.$set(t,"suggestions",n)}))}}))}),(function(e){throw t.clearSuggestions(),e}))}),(function(){return t.canSend=!0,0===t.suggestions.length&&t.miscSlotsAreEmpty()?t.hideList():t.isInFocus&&t.showList(),t.suggestions}))})),getSuggestions:d((function(t){const e=this;if((t=t||"").length<e.minLength)return[];e.selected=null,e.listIsRequest&&e.$emit("request-start",t);let n=!1,r=[];return v((function(){return m((function(){return f((function(){if(e.listIsRequest)return l(e.list(t),(function(t){r=t||[]}));r=e.list}),(function(){Array.isArray(r)||(r=[r]),n="object"!=typeof r[0]&&void 0!==r[0]||Array.isArray(r[0]),e.filterByQuery&&(r=r.filter((n=>e.filter(n,t)))),e.listIsRequest&&e.$emit("request-done",r)}))}),(function(t){if(!e.listIsRequest)throw t;e.$emit("request-failed",t)}))}),(function(){return e.maxSuggestions&&r.splice(e.maxSuggestions),e.isPlainSuggestion=n,r}))})),clearSuggestions(){this.suggestions.splice(0)},getId(t,i){return`${this.listId}-suggestion-${this.isPlainSuggestion?i:this.valueProperty(t)||i}`}}};e.a=y}).call(this,n(163))},439:function(t,e,n){"use strict";n(406)},440:function(t,e,n){var r=n(33)(!1);r.push([t.i,".screener_wrapper[data-v-7235ff01]{padding:10px 34px;box-shadow:0 1px 4px rgba(62,70,82,.22);border-radius:3px;height:42px;overflow:hidden;box-sizing:border-box}.screener_wrapper.open[data-v-7235ff01]{height:auto;overflow:visible}[data-v-7235ff01] .vue-tags-input{max-width:none!important;padding-bottom:40px}[data-v-7235ff01] .vue-tags-input.hide_caret .ti-input{background-color:#ccc}[data-v-7235ff01] .vue-tags-input.hide_caret input{caret-color:transparent;color:transparent;cursor:default;background-color:#ccc}[data-v-7235ff01] .vue-tags-input>.ti-autocomplete{width:100%;max-height:252px;overflow:auto;white-space:nowrap;resize:vertical}[data-v-7235ff01] .vue-tags-input>.ti-autocomplete[style*=height]{max-height:unset}[data-v-7235ff01] .vue-tags-input>.ti-autocomplete::-webkit-scrollbar-track{background:#f5f7f9}[data-v-7235ff01] .vue-tags-input>.ti-autocomplete::-webkit-scrollbar-thumb{animation:none 0s ease 0s 1 normal none running;-webkit-backface-visibility:visible;backface-visibility:visible;background:transparent none repeat 0 0/auto auto padding-box border-box scroll;border:none;border-collapse:separate;border-image:none;border-radius:0;border-spacing:0;bottom:auto;box-shadow:none;box-sizing:content-box;caption-side:top;clear:none;clip:auto;color:#000;column-fill:balance;grid-column-gap:normal;column-gap:normal;column-rule:medium none currentColor;column-span:1;columns:auto;content:normal;counter-increment:none;counter-reset:none;cursor:auto;direction:ltr;display:inline;empty-cells:show;float:none;font-family:serif;font-size:medium;font-style:normal;font-feature-settings:normal;font-variant:normal;font-weight:400;font-stretch:normal;line-height:normal;height:auto;-webkit-hyphens:none;hyphens:none;left:auto;letter-spacing:normal;list-style:disc outside none;margin:0;max-height:none;max-width:none;min-height:0;min-width:0;opacity:1;orphans:2;outline:medium none invert;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;position:static;right:auto;tab-size:8;table-layout:auto;text-align:left;text-align-last:auto;text-decoration:none;text-indent:0;text-shadow:none;text-transform:none;top:auto;transform:none;transform-origin:50% 50% 0;transform-style:flat;-webkit-transition:none 0s ease 0s;transition:none 0s ease 0s;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:2;width:auto;word-spacing:normal;z-index:auto;all:initial;background:hsla(0,0%,48.6%,.2470588235)}[data-v-7235ff01] .vue-tags-input>.ti-autocomplete::-webkit-scrollbar-thumb:hover{background:#7c7c7c}[data-v-7235ff01] .vue-tags-input .ti-input{background:#f5f7f9;box-sizing:border-box;border-radius:.2rem;position:relative;padding:10px;border:none;width:100%}[data-v-7235ff01] .vue-tags-input .ti-input::-moz-placeholder{color:#ccc}[data-v-7235ff01] .vue-tags-input .ti-input::placeholder{color:#ccc}[data-v-7235ff01] .vue-tags-input .ti-input:focus{outline:none}[data-v-7235ff01] .vue-tags-input .ti-input .ti-tags{height:25px;position:relative}[data-v-7235ff01] .vue-tags-input .ti-input .ti-tags input{padding:0 10px}[data-v-7235ff01] .vue-tags-input .ti-input .ti-tags .ti-tag{height:24px;background-color:#488ec4;padding:3px 10px;border-radius:100px;position:relative;bottom:-45px}[data-v-7235ff01] .vue-tags-input .ti-input .ti-tags .ti-tag.ti-deletion-mark{background-color:#f24b56}[data-v-7235ff01] .vue-tags-input .ti-input .ti-tags .ti-new-tag-input-wrapper{height:24px;padding:0}[data-v-7235ff01] .vue-tags-input .ti-input .ti-tags .ti-new-tag-input-wrapper .ti-new-tag-input{position:absolute;left:0}[data-v-7235ff01] .vue-tags-input .ti-item.ti-selected-item{color:#fff;background-color:#488ec4}[data-v-7235ff01] p{margin:0}[data-v-7235ff01] p.screener_title{margin-top:3px;display:flex;align-items:center}[data-v-7235ff01] p.screener_title>svg{font-size:12px;transition:.3s}[data-v-7235ff01] p.screener_title>svg.filter{margin-right:3px}[data-v-7235ff01] p.screener_title>svg.close,[data-v-7235ff01] p.screener_title>svg.open{margin-left:10px}[data-v-7235ff01] p.screener_title>svg.open{transform:rotate(90deg)}[data-v-7235ff01] p.screener_title:hover{cursor:pointer}[data-v-7235ff01] h3,[data-v-7235ff01] h4{display:flex;grid-gap:.5rem;gap:.5rem;margin-bottom:.5rem;align-items:center}[data-v-7235ff01] h3>span .example,[data-v-7235ff01] h4>span .example{font-size:12px;margin-left:.5rem;color:#7c7c7c;font-weight:100}[data-v-7235ff01] h3>span .sample_value,[data-v-7235ff01] h4>span .sample_value{position:relative;color:#488ec4;font-size:14px;font-weight:600;padding:.1rem .4rem}[data-v-7235ff01] h3>span .sample_value:hover,[data-v-7235ff01] h4>span .sample_value:hover{cursor:pointer;color:#fff;background:#488ec4;border-radius:100px;transition:.6s}[data-v-7235ff01] input{border:none;background:#f5f7f9;width:100%;padding:10px 20px;box-sizing:border-box;border-radius:.2rem;position:relative;font-size:20px}[data-v-7235ff01] input::-moz-placeholder{color:#ccc}[data-v-7235ff01] input::placeholder{color:#ccc}[data-v-7235ff01] input:focus{outline:none}[data-v-7235ff01] input.text_search_go_term{margin-bottom:10px}[data-v-7235ff01] select{border:none;background:#f5f7f9;width:100%;padding:10px 20px;box-sizing:border-box;border-radius:.2rem;position:relative;font-size:20px}[data-v-7235ff01] select:focus{outline:none}[data-v-7235ff01]>.classification_wrapper{border:1px dashed #7c7c7c;border-radius:3px;padding:10px 30px;margin-top:-7px}[data-v-7235ff01] .tag{font-size:12px;color:#7c7c7c}",""]),t.exports=r},461:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{isOpen:!1}},methods:{toggleScreener:function(){this.isOpen=!this.isOpen}}},o=(n(439),n(41)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"screener_wrapper",class:{open:t.isOpen}},[e("p",{staticClass:"screener_title",on:{click:t.toggleScreener}},[e("font-awesome-icon",{staticClass:"filter",attrs:{icon:"filter"}}),t._v("\n    Screener\n    "),e("font-awesome-icon",{class:t.isOpen?"open":"close",attrs:{icon:"chevron-right"}})],1),t._v(" "),t._t("default")],2)}),[],!1,null,"7235ff01",null);e.default=component.exports},469:function(t,e,n){var content=n(495);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("b29c4e76",content,!0,{sourceMap:!1})},470:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("38f3da91",content,!0,{sourceMap:!1})},481:function(t,e,n){"use strict";n.r(e);n(44),n(30),n(42),n(15),n(59),n(35),n(60);var r=n(23);n(372),n(75),n(50);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l=n(22),d=(n(74),n(76),n(123),n(51),n(238),n(340),n(125),n(28),n(77),n(425)),h=n(461),f=n(73),m=n(392),v=n.n(m);function y(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?y(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):y(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{VueSimpleSuggest:d.a,ScreenerView:h.default},data:function(){return{isLoading:!1,currentSearchCondition:"",childIsInitialState:!0,onEvent:!1,isSummaryIncluded:!1,isReloadActive:!1,validSearch:!1,typeOfQuery:"numfound",parameters:{text:""},initialParameters:{}}},computed:x(x({},Object(f.b)({activeFilter:"active_filter",filterByName:"filter_by_name",routeToProjectPage:"route_to_project_page",activeDataset:"active_dataset",activeSpecie:"active_specie",searchCondition:"search_condition_by_specie",searchConditions:"get_search_conditions"})),{},{filterType:function(){return this.$vnode.key.split("_")[0]},filterObj:function(){return this.activeDataset[this.filterType]},isNum:function(){return this.typeOfQuery.includes("numfound")},queryPrefix:function(){return"".concat(this.activeDataset.dataset).concat(this.$firstLetterUppercase(this.filterType))},paramsForSuggestions:function(){return"gene"===this.filterType?["symbol","name","geneid","chromosomePosition","typeOfGene"]:["refexSampleId","Description"]},extraVariablesToBeDsiplayedInResults:function(){return"gene"===this.filterType?"symbol name alias geneid chromosomePosition typeOfGene":"refexSampleId Description"},suggestQuery:function(){var t=this,e=Object.entries(this.parameters).filter((function(t){var e=Object(l.a)(t,2);e[0];return e[1].length>0})).map((function(e,n){var r=Object(l.a)(e,2),o=r[0],c=r[1];return"".concat(o,':"').concat(c,'"').concat(n===Object.entries(t.parameters).length-1?"":", ")})).join("");""!==e&&(e="(".concat(e," ").concat(this.isSummaryIncluded?'summary: "true"':"",")"));var n=this.isNum?"":"{".concat(Object.keys(this.parameters).filter((function(param){return!["text","go","chromosomePosition","typeOfGene","filter"].includes(param)})).join(" ")," ").concat(this.extraVariablesToBeDsiplayedInResults,"}"),r=this.isNum?"":" ".concat(this.queryPrefix,"Numfound");return"{".concat(this.queryPrefix).concat(this.isNum?"Numfound":"").concat(e).concat(n).concat(r,"}")},isInitialState:function(){return!!this.childIsInitialState&&v.a.isEqual(this.parameters,this.initialParameters)}}),watch:{parameters:{handler:function(){this.validSearch=!Object.values(this.parameters).every((function(t){return""===t})),this.$emit("updateValiditySearch",this.validSearch)},deep:!0},activeDataset:function(){this.$set(this.parameters,"text",""),this.typeOfQuery="reset numfound"},isSummaryIncluded:function(){this.updateSuggestions()}},created:function(){this.showResults("numfound"),this.updateSearchCondition()},mounted:function(){var t=this;this.searchConditions.gene.text&&(this.parameters.text=this.searchConditions[this.filterType].text),"gene"===this.filterType&&this.searchConditions.gene.summary&&(this.isSummaryIncluded=this.searchConditions[this.filterType].summary),setTimeout((function(){return t.$refs.searchInput.inputElement.focus()}),10)},methods:x(x({},Object(f.c)({setAlertModal:"set_alert_modal",updatePagination:"set_pagination",setSearchConditions:"set_search_conditions"})),{},{updateSearchCondition:function(){"gene"===this.filterType?this.currentSearchCondition=this.searchCondition:this.currentSearchCondition=this.activeDataset.sample.search_conditions},updateParams:function(t){this.$emit("updateScreener"),this.parameters=x({text:this.parameters.text},t),this.showResults("numfound")},storeInitialParameters:function(t){this.initialParameters=x({text:""},t)},moveDetailpage:function(t){this.$nuxt.$loading.start(),"gene"===this.filterType?this.$router.push(this.routeToProjectPage(t[this.paramsForSuggestions[2]])):"sample"===this.filterType&&this.$router.push(this.routeToProjectPage(t[this.paramsForSuggestions[0]]))},updateSuggestions:function(){return this.showResults("numfound"),this.getSuggestions()},getSuggestions:function(){var t=this;this.isLoading=!0;var e=this.parameters.text,n={type:this.filterType,item:"text",value:e};this.setSearchConditions(n);var r="{".concat(this.queryPrefix,'(text: "').concat(e,'" ').concat(this.isSummaryIncluded?'summary: "true"':"",") {").concat(this.paramsForSuggestions.join(" "),"}}"),o={type:this.filterType,item:"summary",value:this.isSummaryIncluded};return this.setSearchConditions(o),this.$axios.$post("gql",{query:r}).then((function(e){return t.isLoading=!1,e.data[t.queryPrefix]}))},showResults:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all";if("string"==typeof e){var n;this.typeOfQuery=e;var r=0;this.isSummaryIncluded&&0===this.parameters.text.length&&(this.isSummaryIncluded=!1),this.$axios.$post("gql",{query:this.suggestQuery}).then((function(e){var o=t.queryPrefix.replace("Numfound","");"".concat(o,"Numfound")in e.data&&(r=e.data[o+"Numfound"]),o in e.data&&(n=e.data[o]||[])})).catch((function(e){t.setAlertModal({msg:"Failed to get data in Search Bar"})})).finally((function(){"all"===e&&t.$emit("updateResults"),t.updatePagination({offset:0,type:"index"}),t.onEvent=!1,t.isReloadActive=!1,t.$store.commit("set_results",{results:n,results_num:r,filterType:t.filterType})}))}},filterPlaceholder:function(t){switch(t){case"gene":return"transcription factor";case"sample":return"liver"}},resetComponent:function(){Object.assign(this.parameters,this.initialParameters)},resetAllSearchConditions:function(){this.resetComponent(),this.$refs.screenerView.$children[0].resetComponent()},setChildIsInitialState:function(t){this.childIsInitialState=t}})},w=_,S=(n(494),n(496),n(41)),component=Object(S.a)(w,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"text_search_area"},[e("div",{staticClass:"search_condition_title"},[e("h2",[t._v("Search Conditions")]),t._v(" "),e("button",{staticClass:"reset_all_btn",class:{disabled:t.isInitialState},attrs:{disabled:t.isInitialState},on:{click:t.resetAllSearchConditions}},[e("font-awesome-icon",{attrs:{icon:"rotate-right"}}),t._v("\n      Reset all\n    ")],1)]),t._v(" "),e("h3",[e("span",{staticClass:"example"},[t._v("e.g.\n      "),t._l(t.currentSearchCondition,(function(n,r){return e("dl",{key:r},[e("dt",[t._v(t._s(n.label)+":")]),t._v(" "),t._l(n.examples,(function(n,r){return e("dd",{key:r,staticClass:"sample_value",on:{click:function(e){return t.updateParams(c(c({},t.parameters),{},{text:n}))}}},[t._v("\n          "+t._s(n)+"\n        ")])}))],2)}))],2)]),t._v(" "),e("vue-simple-suggest",{ref:"searchInput",staticClass:"text_search_name",attrs:{debounce:500,"min-length":0,"display-attribute":t.paramsForSuggestions[1],"value-attribute":t.paramsForSuggestions[0],list:t.updateSuggestions,"max-suggestions":20,placeholder:t.filterPlaceholder(t.filterType)},on:{select:t.moveDetailpage},scopedSlots:t._u([{key:"suggestion-item",fn:function(n){var r=n.suggestion;return e("div",{},[e("strong",{staticClass:"title",domProps:{innerHTML:t._s(t.$highlightedSuggestion(r[t.paramsForSuggestions[0]],t.parameters.text))}}),t._v("  - \n      "),e("span",{domProps:{innerHTML:t._s(t.$highlightedSuggestion(r[t.paramsForSuggestions[1]],t.parameters.text))}})])}},{key:"misc-item-below",fn:function(n){n.suggestion;return t.isLoading?e("div",{staticClass:"misc-item"},[e("span",[t._v("Loading...")])]):t._e()}}],null,!0),model:{value:t.parameters.text,callback:function(e){t.$set(t.parameters,"text","string"==typeof e?e.trim():e)},expression:"parameters.text"}}),t._v(" "),"gene"===t.filterType?[e("div",{class:["summary_check_wrapper",{hide:""===t.parameters.text}]},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.isSummaryIncluded,expression:"isSummaryIncluded"}],attrs:{id:"summary_check",type:"checkbox",name:"summary_check"},domProps:{checked:Array.isArray(t.isSummaryIncluded)?t._i(t.isSummaryIncluded,null)>-1:t.isSummaryIncluded},on:{change:function(e){var n=t.isSummaryIncluded,r=e.target,o=!!r.checked;if(Array.isArray(n)){var c=t._i(n,null);r.checked?c<0&&(t.isSummaryIncluded=n.concat([null])):c>-1&&(t.isSummaryIncluded=n.slice(0,c).concat(n.slice(c+1)))}else t.isSummaryIncluded=o}}}),t._v(" "),e("label",{attrs:{for:"summary_check"}},[t._v("Include gene summaries in search")])])]:"sample"===t.filterType?[e("div",{staticClass:"summary_check_wrapper"})]:t._e(),t._v(" "),e("ScreenerView",{ref:"screenerView"},[e("screener-view-".concat(t.filterType),{tag:"component",on:{updateParameters:t.updateParams,storeInitialParameters:t.storeInitialParameters,setChildIsInitialState:t.setChildIsInitialState}})],1)],2)}),[],!1,null,"1b0a1144",null);e.default=component.exports;installComponents(component,{ScreenerView:n(461).default})},494:function(t,e,n){"use strict";n(469)},495:function(t,e,n){var r=n(33)(!1);r.push([t.i,".vue-simple-suggest{position:relative}",""]),t.exports=r},496:function(t,e,n){"use strict";n(470)},497:function(t,e,n){var r=n(33)(!1);r.push([t.i,'.text_search_area[data-v-1b0a1144]{width:100%}.text_search_area>.search_condition_title[data-v-1b0a1144]{display:flex;align-items:center;justify-content:space-between}.text_search_area>.search_condition_title>.reset_all_btn[data-v-1b0a1144]{color:#fff;background:#488ec4;font-size:16px;font-weight:500;border:none;border-radius:.2rem;display:flex;align-items:center;grid-gap:5px;gap:5px;transition:background .3s ease-in-out;font-size:12px;padding:.4em 1.2em}.text_search_area>.search_condition_title>.reset_all_btn[data-v-1b0a1144]:focus{outline:none}.text_search_area>.search_condition_title>.reset_all_btn[data-v-1b0a1144]:hover{cursor:pointer;background:#095493}.text_search_area>.search_condition_title>.reset_all_btn>svg[data-v-1b0a1144]{display:block;align-self:flex-start}.text_search_area>.search_condition_title>.reset_all_btn.update[data-v-1b0a1144]{background:#ff8a17}.text_search_area>.search_condition_title>.reset_all_btn.update[data-v-1b0a1144]:hover{background:#f06a06}.text_search_area>.search_condition_title>.reset_all_btn.disabled[data-v-1b0a1144]{background:#ccc;color:#fff;cursor:not-allowed}.text_search_area>.search_condition_title>.reset_all_btn.disabled[data-v-1b0a1144]:hover{background:#ccc}.text_search_area>h3[data-v-1b0a1144]{display:flex;grid-gap:.5rem;gap:.5rem;align-items:center;margin:6px 0}.text_search_area>h3>span[data-v-1b0a1144]{font-size:12px;display:flex;align-items:center;color:#7c7c7c;font-weight:100;margin-left:10px}.text_search_area>h3>span .example[data-v-1b0a1144]{font-size:12px;margin-left:.5rem;color:#7c7c7c;font-weight:100}.text_search_area>h3>span .sample_value[data-v-1b0a1144]{position:relative;color:#488ec4;font-size:14px;font-weight:600;padding:.1rem .4rem}.text_search_area>h3>span .sample_value[data-v-1b0a1144]:hover{cursor:pointer;color:#fff;background:#488ec4;border-radius:100px;transition:.6s}.text_search_area>h3>span>dl[data-v-1b0a1144]{display:flex;align-items:center;padding:.1rem .4rem;margin:0}.text_search_area>h3>span>dl>dt[data-v-1b0a1144]{font-size:12px;color:#7c7c7c;font-weight:100}.text_search_area>h3>span>dl>dd[data-v-1b0a1144]{font-size:14px;font-weight:300;padding:2px 0;margin:0}.text_search_area>h3>span>dl>dd[data-v-1b0a1144]:after{color:#488ec4;position:absolute;content:",";margin-left:5px}.text_search_area>h3>span>dl>dd[data-v-1b0a1144]:last-child:after{content:none}[data-v-1b0a1144] .text_search_name input{border:none;background:#f5f7f9;width:100%;padding:10px 20px;box-sizing:border-box;border-radius:.2rem;position:relative;font-size:34px}[data-v-1b0a1144] .text_search_name input::-moz-placeholder{color:#ccc}[data-v-1b0a1144] .text_search_name input::placeholder{color:#ccc}[data-v-1b0a1144] .text_search_name input:focus{outline:none}[data-v-1b0a1144] .text_search_name .show_all_btn{color:#fff;background:#488ec4;font-size:16px;font-weight:500;padding:.4em 1.2em;border:none;border-radius:.2rem;display:flex;align-items:center;grid-gap:5px;gap:5px;transition:background .3s ease-in-out;margin-bottom:15px}[data-v-1b0a1144] .text_search_name .show_all_btn:focus{outline:none}[data-v-1b0a1144] .text_search_name .show_all_btn:hover{cursor:pointer;background:#095493}[data-v-1b0a1144] .text_search_name .show_all_btn>svg{display:block;align-self:flex-start}[data-v-1b0a1144] .text_search_name .show_all_btn.update{background:#ff8a17}[data-v-1b0a1144] .text_search_name .show_all_btn.update:hover{background:#f06a06}[data-v-1b0a1144] .text_search_name .show_all_btn.disabled{background:#ccc;color:#fff;cursor:not-allowed}[data-v-1b0a1144] .text_search_name .show_all_btn.disabled:hover{background:#ccc}[data-v-1b0a1144] .vue-simple-suggest.designed .suggestions{border:none;box-shadow:0 2px 5px rgba(62,70,82,.22);padding:20px 0;margin:0;position:absolute;background-color:#fff;z-index:100}[data-v-1b0a1144] .vue-simple-suggest.designed .suggestions>li{font-size:16px;line-height:24px;padding:0 20px}[data-v-1b0a1144] .vue-simple-suggest.designed .suggestions>li>div{display:flex;align-items:center}[data-v-1b0a1144] .vue-simple-suggest.designed .suggestions>li.hover{color:#fff;background-color:#488ec4;cursor:pointer}[data-v-1b0a1144]>.summary_check_wrapper{min-height:30px;font-size:14px;font-weight:100;display:flex;align-items:center;margin:3px 0;opacity:1;transition:.3s}[data-v-1b0a1144]>.summary_check_wrapper>label{margin-left:5px}[data-v-1b0a1144]>.summary_check_wrapper.hide{opacity:.5;pointer-events:none}[data-v-1b0a1144]>.find_results_btn{color:#fff;background:#488ec4;font-size:16px;font-weight:500;padding:.4em 1.2em;border:none;border-radius:.2rem;display:flex;align-items:center;grid-gap:5px;gap:5px;transition:background .3s ease-in-out;margin-top:26px;margin-bottom:50px}[data-v-1b0a1144]>.find_results_btn:focus{outline:none}[data-v-1b0a1144]>.find_results_btn:hover{cursor:pointer;background:#095493}[data-v-1b0a1144]>.find_results_btn>svg{display:block;align-self:flex-start}[data-v-1b0a1144]>.find_results_btn.update{background:#ff8a17}[data-v-1b0a1144]>.find_results_btn.update:hover{background:#f06a06}[data-v-1b0a1144]>.find_results_btn.disabled{background:#ccc;color:#fff;cursor:not-allowed}[data-v-1b0a1144]>.find_results_btn.disabled:hover{background:#ccc}',""]),t.exports=r}}]);