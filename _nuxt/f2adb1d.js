(window.webpackJsonp=window.webpackJsonp||[]).push([[43,18,41],{338:function(e,t,n){var r=n(8);e.exports=function(e){return r(Map.prototype.entries,e)}},340:function(e,t,n){"use strict";n.r(t);n(75),n(347),n(15),n(38),n(354),n(356),n(357),n(358),n(359),n(360),n(362),n(363),n(364),n(365),n(366),n(367),n(368),n(37),n(95),n(50);var r=new Map([["Human",[24,62]],["Mouse",[63,24]],["drosophilidae",[36,18]],["oryza_sativa",[42,71]],["bombyx_mori",[43,10]]]),o={props:{iconName:{type:String,default:"box"},iconColor:{type:String,default:"currentColor"}},computed:{size:function(){var e;return null!==(e=r.get(this.iconName))&&void 0!==e?e:[24,62]},parsedName:function(){var e=this;return this.iconName.split("_").map((function(t){return e.$firstLetterUppercase(t)})).join("")},iconComponent:function(){var e=this;return n(343)("./Icon".concat(this.parsedName,".vue")),function(){return n(343)("./Icon".concat(e.parsedName,".vue"))}}}},c=n(42),component=Object(c.a)(o,(function(){var e=this,t=e._self._c;return t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:e.size[0],height:e.size[1],viewBox:"0 0 ".concat(e.size[0]," ").concat(e.size[1]),"aria-labelledby":e.iconName,role:"presentation"}},[t("title",{attrs:{id:e.iconName,lang:"en"}},[e._v(e._s(e.iconName)+" icon")]),e._v(" "),t("g",{attrs:{fill:e.iconColor}},[t(e.iconComponent,{tag:"component",attrs:{"stroke-color":e.iconColor}})],1)])}),[],!1,null,null,null);t.default=component.exports},342:function(e,t,n){var r=n(2),o=n(4),c=n(98),v=n(16),f=n(13),d=n(19).f,l=n(96),_=n(234),h=n(350),m=n(124),w=n(352),y=!1,x=m("meta"),O=0,T=function(e){d(e,x,{value:{objectID:"O"+O++,weakData:{}}})},meta=e.exports={enable:function(){meta.enable=function(){},y=!0;var e=l.f,t=o([].splice),n={};n[x]=1,e(n).length&&(l.f=function(n){for(var r=e(n),i=0,o=r.length;i<o;i++)if(r[i]===x){t(r,i,1);break}return r},r({target:"Object",stat:!0,forced:!0},{getOwnPropertyNames:_.f}))},fastKey:function(e,t){if(!v(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!f(e,x)){if(!h(e))return"F";if(!t)return"E";T(e)}return e[x].objectID},getWeakData:function(e,t){if(!f(e,x)){if(!h(e))return!0;if(!t)return!1;T(e)}return e[x].weakData},onFreeze:function(e){return w&&y&&h(e)&&!f(e,x)&&T(e),e}};c[x]=!0},343:function(e,t,n){var map={"./IconBase.vue":[340],"./IconBombyxMori.vue":[400,3],"./IconDrosophilidae.vue":[401,4],"./IconHuman.vue":[402,5],"./IconMouse.vue":[403,6],"./IconOryzasativa.vue":[399,7]};function r(e){if(!n.o(map,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=map[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(map)},r.id=343,e.exports=r},345:function(e,t,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("2223b862",content,!0,{sourceMap:!1})},347:function(e,t,n){n(348)},348:function(e,t,n){"use strict";n(349)("Map",(function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}}),n(353))},349:function(e,t,n){"use strict";var r=n(2),o=n(5),c=n(4),v=n(123),f=n(20),d=n(342),l=n(155),_=n(157),h=n(6),m=n(46),w=n(16),y=n(3),x=n(158),O=n(79),T=n(231);e.exports=function(e,t,n){var E=-1!==e.indexOf("Map"),S=-1!==e.indexOf("Weak"),I=E?"set":"add",k=o[e],R=k&&k.prototype,D=k,N={},A=function(e){var t=c(R[e]);f(R,e,"add"==e?function(e){return t(this,0===e?0:e),this}:"delete"==e?function(e){return!(S&&!w(e))&&t(this,0===e?0:e)}:"get"==e?function(e){return S&&!w(e)?void 0:t(this,0===e?0:e)}:"has"==e?function(e){return!(S&&!w(e))&&t(this,0===e?0:e)}:function(e,n){return t(this,0===e?0:e,n),this})};if(v(e,!h(k)||!(S||R.forEach&&!y((function(){(new k).entries().next()})))))D=n.getConstructor(t,e,E,I),d.enable();else if(v(e,!0)){var z=new D,j=z[I](S?{}:-0,1)!=z,M=y((function(){z.has(1)})),P=x((function(e){new k(e)})),C=!S&&y((function(){for(var e=new k,t=5;t--;)e[I](t,t);return!e.has(-0)}));P||((D=t((function(e,t){_(e,R);var n=T(new k,e,D);return m(t)||l(t,n[I],{that:n,AS_ENTRIES:E}),n}))).prototype=R,R.constructor=D),(M||C)&&(A("delete"),A("has"),E&&A("get")),(C||j)&&A(I),S&&R.clear&&delete R.clear}return N[e]=D,r({global:!0,constructor:!0,forced:D!=k},N),O(D,e),S||n.setStrong(D,e,E),D}},350:function(e,t,n){var r=n(3),o=n(16),c=n(48),v=n(351),f=Object.isExtensible,d=r((function(){f(1)}));e.exports=d||v?function(e){return!!o(e)&&((!v||"ArrayBuffer"!=c(e))&&(!f||f(e)))}:f},351:function(e,t,n){var r=n(3);e.exports=r((function(){if("function"==typeof ArrayBuffer){var e=new ArrayBuffer(8);Object.isExtensible(e)&&Object.defineProperty(e,"a",{value:8})}}))},352:function(e,t,n){var r=n(3);e.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},353:function(e,t,n){"use strict";var r=n(19).f,o=n(61),c=n(235),v=n(58),f=n(157),d=n(46),l=n(155),_=n(159),h=n(160),m=n(161),w=n(10),y=n(342).fastKey,x=n(49),O=x.set,T=x.getterFor;e.exports={getConstructor:function(e,t,n,_){var h=e((function(e,r){f(e,m),O(e,{type:t,index:o(null),first:void 0,last:void 0,size:0}),w||(e.size=0),d(r)||l(r,e[_],{that:e,AS_ENTRIES:n})})),m=h.prototype,x=T(t),E=function(e,t,n){var r,o,c=x(e),v=S(e,t);return v?v.value=n:(c.last=v={index:o=y(t,!0),key:t,value:n,previous:r=c.last,next:void 0,removed:!1},c.first||(c.first=v),r&&(r.next=v),w?c.size++:e.size++,"F"!==o&&(c.index[o]=v)),e},S=function(e,t){var n,r=x(e),o=y(t);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==t)return n};return c(m,{clear:function(){for(var e=x(this),data=e.index,t=e.first;t;)t.removed=!0,t.previous&&(t.previous=t.previous.next=void 0),delete data[t.index],t=t.next;e.first=e.last=void 0,w?e.size=0:this.size=0},delete:function(e){var t=this,n=x(t),r=S(t,e);if(r){var o=r.next,c=r.previous;delete n.index[r.index],r.removed=!0,c&&(c.next=o),o&&(o.previous=c),n.first==r&&(n.first=o),n.last==r&&(n.last=c),w?n.size--:t.size--}return!!r},forEach:function(e){for(var t,n=x(this),r=v(e,arguments.length>1?arguments[1]:void 0);t=t?t.next:n.first;)for(r(t.value,t.key,this);t&&t.removed;)t=t.previous},has:function(e){return!!S(this,e)}}),c(m,n?{get:function(e){var t=S(this,e);return t&&t.value},set:function(e,t){return E(this,0===e?0:e,t)}}:{add:function(e){return E(this,e=0===e?0:e,e)}}),w&&r(m,"size",{get:function(){return x(this).size}}),h},setStrong:function(e,t,n){var r=t+" Iterator",o=T(t),c=T(r);_(e,t,(function(e,t){O(this,{type:r,target:e,state:o(e),kind:t,last:void 0})}),(function(){for(var e=c(this),t=e.kind,n=e.last;n&&n.removed;)n=n.previous;return e.target&&(e.last=n=n?n.next:e.state.first)?h("keys"==t?n.key:"values"==t?n.value:[n.key,n.value],!1):(e.target=void 0,h(void 0,!0))}),n?"entries":"values",!n,!0),m(t)}}},354:function(e,t,n){"use strict";n(2)({target:"Map",proto:!0,real:!0,forced:!0},{deleteAll:n(355)})},355:function(e,t,n){"use strict";var r=n(8),o=n(45),c=n(11);e.exports=function(){for(var e,t=c(this),n=o(t.delete),v=!0,f=0,d=arguments.length;f<d;f++)e=r(n,t,arguments[f]),v=v&&e;return!!v}},356:function(e,t,n){"use strict";var r=n(2),o=n(11),c=n(58),v=n(338),f=n(155);r({target:"Map",proto:!0,real:!0,forced:!0},{every:function(e){var map=o(this),t=v(map),n=c(e,arguments.length>1?arguments[1]:void 0);return!f(t,(function(e,t,r){if(!n(t,e,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},357:function(e,t,n){"use strict";var r=n(2),o=n(25),c=n(58),v=n(8),f=n(45),d=n(11),l=n(156),_=n(338),h=n(155);r({target:"Map",proto:!0,real:!0,forced:!0},{filter:function(e){var map=d(this),t=_(map),n=c(e,arguments.length>1?arguments[1]:void 0),r=new(l(map,o("Map"))),m=f(r.set);return h(t,(function(e,t){n(t,e,map)&&v(m,r,e,t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},358:function(e,t,n){"use strict";var r=n(2),o=n(11),c=n(58),v=n(338),f=n(155);r({target:"Map",proto:!0,real:!0,forced:!0},{find:function(e){var map=o(this),t=v(map),n=c(e,arguments.length>1?arguments[1]:void 0);return f(t,(function(e,t,r){if(n(t,e,map))return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},359:function(e,t,n){"use strict";var r=n(2),o=n(11),c=n(58),v=n(338),f=n(155);r({target:"Map",proto:!0,real:!0,forced:!0},{findKey:function(e){var map=o(this),t=v(map),n=c(e,arguments.length>1?arguments[1]:void 0);return f(t,(function(e,t,r){if(n(t,e,map))return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},360:function(e,t,n){"use strict";var r=n(2),o=n(11),c=n(338),v=n(361),f=n(155);r({target:"Map",proto:!0,real:!0,forced:!0},{includes:function(e){return f(c(o(this)),(function(t,n,r){if(v(n,e))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},361:function(e,t){e.exports=function(e,t){return e===t||e!=e&&t!=t}},362:function(e,t,n){"use strict";var r=n(2),o=n(11),c=n(338),v=n(155);r({target:"Map",proto:!0,real:!0,forced:!0},{keyOf:function(e){return v(c(o(this)),(function(t,n,r){if(n===e)return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},363:function(e,t,n){"use strict";var r=n(2),o=n(25),c=n(58),v=n(8),f=n(45),d=n(11),l=n(156),_=n(338),h=n(155);r({target:"Map",proto:!0,real:!0,forced:!0},{mapKeys:function(e){var map=d(this),t=_(map),n=c(e,arguments.length>1?arguments[1]:void 0),r=new(l(map,o("Map"))),m=f(r.set);return h(t,(function(e,t){v(m,r,n(t,e,map),t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},364:function(e,t,n){"use strict";var r=n(2),o=n(25),c=n(58),v=n(8),f=n(45),d=n(11),l=n(156),_=n(338),h=n(155);r({target:"Map",proto:!0,real:!0,forced:!0},{mapValues:function(e){var map=d(this),t=_(map),n=c(e,arguments.length>1?arguments[1]:void 0),r=new(l(map,o("Map"))),m=f(r.set);return h(t,(function(e,t){v(m,r,e,n(t,e,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},365:function(e,t,n){"use strict";var r=n(2),o=n(45),c=n(11),v=n(155);r({target:"Map",proto:!0,real:!0,arity:1,forced:!0},{merge:function(e){for(var map=c(this),t=o(map.set),n=arguments.length,i=0;i<n;)v(arguments[i++],t,{that:map,AS_ENTRIES:!0});return map}})},366:function(e,t,n){"use strict";var r=n(2),o=n(11),c=n(45),v=n(338),f=n(155),d=TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{reduce:function(e){var map=o(this),t=v(map),n=arguments.length<2,r=n?void 0:arguments[1];if(c(e),f(t,(function(t,o){n?(n=!1,r=o):r=e(r,o,t,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw d("Reduce of empty map with no initial value");return r}})},367:function(e,t,n){"use strict";var r=n(2),o=n(11),c=n(58),v=n(338),f=n(155);r({target:"Map",proto:!0,real:!0,forced:!0},{some:function(e){var map=o(this),t=v(map),n=c(e,arguments.length>1?arguments[1]:void 0);return f(t,(function(e,t,r){if(n(t,e,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},368:function(e,t,n){"use strict";var r=n(2),o=n(8),c=n(11),v=n(45),f=TypeError;r({target:"Map",proto:!0,real:!0,forced:!0},{update:function(e,t){var map=c(this),n=v(map.get),r=v(map.has),d=v(map.set),l=arguments.length;v(t);var _=o(r,map,e);if(!_&&l<3)throw f("Updating absent value");var h=_?o(n,map,e):v(l>2?arguments[2]:void 0)(e,map);return o(d,map,e,t(h,e,map)),map}})},370:function(e,t,n){"use strict";n.r(t);n(44),n(30),n(43),n(59),n(35),n(60);var r=n(23),o=(n(15),n(230),n(100)),c=n(340),v=n(74);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={components:{IconBase:c.default},props:{getPageType:{type:String,default:""},isOpenDataset:{type:Boolean,default:!1},isOpenType:{type:Boolean,default:!1}},data:function(){return{species:o,selectedProject:o.reduce((function(e,t){return e[t.species]=t.datasets[0].dataset,e}),{})}},computed:d({},Object(v.b)({activeDataset:"active_dataset",activeSpecie:"active_specie"})),created:function(){this.setSpecie(this.activeSpecie.species)},mounted:function(){window.addEventListener("click",this.closeDropDown)},methods:d(d({},Object(v.c)({setSpecie:"set_specie",setActiveDataset:"set_active_dataset"})),{},{updateSpecie:function(e,t){this.setSpecie(e),this.updateActiveDataset(t)},updateActiveDataset:function(e){this.setActiveDataset(this.activeSpecie.datasets.find((function(t){return t.dataset===e})))}})},_=(n(372),n(42)),component=Object(_.a)(l,(function(){var e=this,t=e._self._c;return t("div",[t("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpenDataset,expression:"isOpenDataset"}],staticClass:"dropdown_list",class:{isOpenDataset:e.isOpenDataset}},e._l(e.species,(function(n){return t("li",{key:n.species},[t("icon-base",{attrs:{"icon-name":n.species}}),e._v(" "),t("div",[t("p",[e._v(e._s(n.species))]),e._v(" "),e._l(n.datasets,(function(r){return t("span",{key:r.dataset,staticClass:"dataset_name",on:{click:function(t){return e.updateSpecie(n.species,r.dataset)}}},[e._v(e._s(r.label))])}))],2)],1)})),0),e._v(" "),t("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpenType,expression:"isOpenType"}],staticClass:"dropdown_list",class:{isOpenType:e.isOpenType}},[t("li",{staticClass:"active_type",on:{click:function(t){return e.$store.commit("set_active_filter","gene")}}},[t("font-awesome-icon",{attrs:{icon:"dna"}}),e._v(" "),t("p",[e._v("Gene")])],1),e._v(" "),t("li",{staticClass:"active_type",on:{click:function(t){return e.$store.commit("set_active_filter","sample")}}},[t("font-awesome-icon",{attrs:{icon:"flask"}}),e._v(" "),t("p",[e._v("Sample")])],1)])])}),[],!1,null,"25380134",null);t.default=component.exports},372:function(e,t,n){"use strict";n(345)},373:function(e,t,n){var r=n(33)(!1);r.push([e.i,".dropdown_list[data-v-25380134]{position:absolute;top:100%;left:0;display:none;list-style-type:none;background-color:#fff;z-index:999;padding:20px;box-shadow:0 5px 15px -5px #3e4652;cursor:auto}.isOpenDataset[data-v-25380134],.isOpenType[data-v-25380134]{display:block}.isOpenDataset>.active_type[data-v-25380134]:hover,.isOpenType>.active_type[data-v-25380134]:hover{color:#fff;background-color:#488ec4;border-radius:5px;cursor:pointer}.isOpenDataset>li[data-v-25380134],.isOpenType>li[data-v-25380134]{color:#000;min-width:200px;border-bottom:1px solid #fff;display:grid;grid-template-columns:30px 1fr;align-content:center}.isOpenDataset>li>svg[data-v-25380134],.isOpenType>li>svg[data-v-25380134]{width:30px;font-size:18px;align-self:center}.isOpenDataset>li>div[data-v-25380134],.isOpenType>li>div[data-v-25380134]{padding:0 13px}.isOpenDataset>li>div>p[data-v-25380134],.isOpenType>li>div>p[data-v-25380134]{margin:0;padding-bottom:2px}.isOpenDataset>li>div>.dataset_name[data-v-25380134],.isOpenType>li>div>.dataset_name[data-v-25380134]{background:#488ec4;color:#fff;padding:5px;border-radius:5px;cursor:pointer;margin:0 3px 3px 0;display:inline-block}.isOpenDataset>li>div>.dataset_name[data-v-25380134]:hover,.isOpenType>li>div>.dataset_name[data-v-25380134]:hover{background:#095493}",""]),e.exports=r},375:function(e,t,n){var content=n(392);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(34).default)("4474c649",content,!0,{sourceMap:!1})},391:function(e,t,n){"use strict";n(375)},392:function(e,t,n){var r=n(33)(!1);r.push([e.i,".nav_wrapper[data-v-4db55006]{margin:0;position:sticky;z-index:2;top:0}.nav_wrapper .nav_area[data-v-4db55006]{padding:0 20px;display:flex;background-color:#488ec4;height:70px;list-style-type:none;width:100%;margin:0}.nav_wrapper .nav_area>li[data-v-4db55006]{cursor:pointer;position:relative;color:#fff;display:flex;padding-left:10px}.nav_wrapper .nav_area>li.isOpenDataset[data-v-4db55006],.nav_wrapper .nav_area>li.isOpenDataset .nav_frame.-after[data-v-4db55006],.nav_wrapper .nav_area>li.isOpenType[data-v-4db55006],.nav_wrapper .nav_area>li.isOpenType .nav_frame.-after[data-v-4db55006],.nav_wrapper .nav_area>li[data-v-4db55006]:hover,.nav_wrapper .nav_area>li:hover .nav_frame.-after[data-v-4db55006]{background-color:#095493}.nav_wrapper .nav_area>li[data-v-4db55006]:nth-child(n+2){padding-left:30px}.nav_wrapper .nav_area>li[data-v-4db55006]:nth-child(3){cursor:auto}.nav_wrapper .nav_area>li>.nav_frame.-before[data-v-4db55006]{right:-20px;width:50px;background:#fff}.nav_wrapper .nav_area>li>.nav_frame.-after[data-v-4db55006],.nav_wrapper .nav_area>li>.nav_frame.-before[data-v-4db55006]{position:absolute;height:100%;z-index:1;-webkit-clip-path:polygon(75% 0,100% 50%,75% 100%,0 100%,0 50%,0 0);clip-path:polygon(75% 0,100% 50%,75% 100%,0 100%,0 50%,0 0)}.nav_wrapper .nav_area>li>.nav_frame.-after[data-v-4db55006]{right:-18px;width:20px;width:50px;background-color:#488ec4}.nav_wrapper .nav_area>li>svg[data-v-4db55006]{font-size:24px}.nav_wrapper .nav_area>li>.nav_item[data-v-4db55006]{display:grid;grid-template-columns:auto 1fr;align-content:center;z-index:2}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper[data-v-4db55006]{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:3}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper>.title[data-v-4db55006]{font-size:12px;font-weight:700}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper>form>.specie_select[data-v-4db55006]{color:#3e4652}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper>p[data-v-4db55006]{position:relative;font-weight:700}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper>p>svg[data-v-4db55006]{font-size:12px;padding-left:4px}.nav_wrapper .nav_area>li>.nav_item>svg[data-v-4db55006]{align-self:center;font-size:24px}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper[data-v-4db55006]{flex-direction:column;align-self:flex-end;margin:0 5px;font-size:18px}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper>p[data-v-4db55006]{margin:0}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper>form[data-v-4db55006]{margin-left:-4px}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper>form>.specie_select[data-v-4db55006]{cursor:pointer;width:70%;font-size:22px;font-width:normal;background:#f5f7f9;border:none;border-radius:.2rem;transition:.6s;padding:0;background:none;font-size:inherit;width:auto}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper>form>.specie_select[data-v-4db55006]:focus{outline:none}.nav_wrapper .nav_area>li>.nav_item>.specie_wrapper>form>.specie_select[data-v-4db55006]:hover{background-color:#488ec4;color:#fff;transition:all .3s}",""]),e.exports=r},411:function(e,t,n){"use strict";n.r(t);var r={components:{LocalNavigationDropdown:n(370).default},props:{activeFilterName:{type:String,default:""},getPageType:{type:String,default:""},isOpenType:{type:Boolean,default:!1}},data:function(){return{}},computed:{},mounted:function(){},methods:{}},o=(n(391),n(42)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("li",{class:{isOpenType:e.isOpenType},on:{click:function(t){return t.stopPropagation(),e.$emit("eventUpdateIsOpenType")}}},[t("div",{staticClass:"nav_item"},["gene"===e.activeFilterName?t("font-awesome-icon",{attrs:{icon:"dna"}}):e._e(),e._v(" "),"sample"===e.activeFilterName?t("font-awesome-icon",{attrs:{icon:"flask"}}):e._e(),e._v(" "),t("div",{staticClass:"specie_wrapper"},[t("p",[e._v("\n        "+e._s(e.$firstLetterUppercase(e.activeFilterName))),"index"===e.getPageType&&e.isOpenType?t("font-awesome-icon",{attrs:{icon:"fa-angle-down"}}):"index"!==e.getPageType||e.isOpenType?e._e():t("font-awesome-icon",{attrs:{icon:"fa-angle-up"}})],1)])],1),e._v(" "),t("div",{staticClass:"nav_frame -before"}),e._v(" "),t("div",{staticClass:"nav_frame -after"}),e._v(" "),t("local-navigation-dropdown",{attrs:{"is-open-type":e.isOpenType}})],1)}),[],!1,null,"4db55006",null);t.default=component.exports}}]);