(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{407:function(t,e,n){var content=n(410);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("0b26b2b8",content,!0,{sourceMap:!1})},408:function(t,e,n){var content=n(414);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("46405d03",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";var r=n(407);n.n(r).a},410:function(t,e,n){(e=n(5)(!1)).push([t.i,".overlay-loading[data-v-1fcb320a]{position:absolute;z-index:2;top:0;left:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;min-height:200px;background-color:#fff}.overlay-loading>img[data-v-1fcb320a]{width:150px;height:150px}",""]),t.exports=e},411:function(t,e,n){"use strict";n(409);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-loading"},[e("img",{attrs:{src:"/assets/svgs/load-1s-200px.svg"}})])}],!1,null,"1fcb320a",null);e.a=component.exports},412:function(t,e,n){var content=n(418);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("925edabe",content,!0,{sourceMap:!1})},413:function(t,e,n){"use strict";var r=n(408);n.n(r).a},414:function(t,e,n){(e=n(5)(!1)).push([t.i,".paginate[data-v-179c63b8]{display:flex;justify-content:flex-end}.paginate>li a[data-v-179c63b8]{display:block;width:25px;height:25px;font-size:.9rem;font-weight:700;line-height:25px;text-align:center;color:#2b2b2b;border-radius:50%}.paginate>li.active a[data-v-179c63b8]{color:#fff;background-color:#2b2b2b}.paginate>li:disabled a[data-v-179c63b8]{color:#777;pointer-events:none}",""]),t.exports=e},415:function(t,e,n){"use strict";n(32),n(18),n(15),n(9),n(22);var r=n(12);n(100);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={props:{totalPages:{type:Number,required:!0}},computed:{currentPage:function(){return+this.$route.query.page||1}},methods:{makePath:function(t){return{path:this.$route.path,query:c(c({},this.$route.query),{},{page:t})}}}},d=(n(413),n(3)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{directives:[{name:"show",rawName:"v-show",value:t.totalPages>1,expression:"totalPages > 1"}],staticClass:"paginate"},[n("li",{class:{disabled:1==t.currentPage}},[n("nuxt-link",{attrs:{to:t.makePath(t.currentPage-1)}},[n("fa",{attrs:{icon:["fas","angle-left"]}})],1)],1),t._v(" "),t._l(t.totalPages||0,(function(e,r){return n("li",{key:r,class:{active:e==t.currentPage}},[n("nuxt-link",{attrs:{to:t.makePath(e)}},[t._v("\n      "+t._s(e)+"\n    ")])],1)})),t._v(" "),n("li",{class:{disabled:t.currentPage==t.totalPages}},[n("nuxt-link",{attrs:{to:t.makePath(t.currentPage+1)}},[n("fa",{attrs:{icon:["fas","angle-right"]}})],1)],1)],2)}),[],!1,null,"179c63b8",null);e.a=component.exports},417:function(t,e,n){"use strict";var r=n(412);n.n(r).a},418:function(t,e,n){(e=n(5)(!1)).push([t.i,".responsive-table[data-v-5e8591be]{width:100%;border-collapse:collapse}.responsive-table td[data-v-5e8591be],.responsive-table th[data-v-5e8591be]{padding:15px}.responsive-table thead[data-v-5e8591be]{background-image:linear-gradient(40deg,#45cafc,#2563aa);box-shadow:0 5px 11px 0 rgba(0,0,0,.18),0 4px 15px 0 rgba(0,0,0,.15);color:#fff;transform:translateY(-8px)}.responsive-table thead th[data-v-5e8591be]{text-align:left;text-transform:capitalize}.responsive-table tbody tr[data-v-5e8591be]{transition:transform .3s;background-color:#fff}.responsive-table tbody tr[data-v-5e8591be]:hover{transform:scale(1.05);box-shadow:0 0 11px rgba(0,0,0,.18)}.responsive-table-actions[data-v-5e8591be]{display:flex;justify-content:flex-start;align-items:center}.responsive-table-action[data-v-5e8591be]{display:inline-flex;align-items:center;justify-content:center;width:40px;height:40px;border-radius:6px;cursor:pointer}.responsive-table-action+.responsive-table-action[data-v-5e8591be]{margin-left:8px}.responsive-table-image[data-v-5e8591be]{position:relative;max-width:200px;max-height:200px}.responsive-table-image[data-v-5e8591be]:before{content:attr(alt);position:absolute;top:0;left:0;display:block;width:100%;background-color:#fff}",""]),t.exports=e},419:function(t,e,n){"use strict";n(31);var r=n(4);e.a={fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.$get("".concat(t.route),{params:t.$route.query});case 2:t.response=e.sent;case 3:case"end":return e.stop()}}),e)})))()},data:function(){return{response:{}}},computed:{totalPages:function(){return Math.ceil(this.response.total/this.response.per_page)},data:{get:function(){return this.response.data||[]},set:function(data){this.response.data=data}}},watch:{"$route.query":"$fetch"},methods:{handleRemove:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o,c,l,data;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.$nuxt.$loading.start(),n.prev=1,n.next=4,e.$axios.$delete("".concat(e.route,"/").concat(t.slug));case 4:r=n.sent,o=r.message,e.data=e.data.filter((function(e){return e.id!==t.id})),e.$toast.success(o),n.next=14;break;case 10:n.prev=10,n.t0=n.catch(1),data=null===n.t0||void 0===n.t0||null===(c=n.t0.response)||void 0===c?void 0:c.data,e.$toast.error((null==data?void 0:data.message)||(null==data||null===(l=data.error)||void 0===l?void 0:l.message)||"Something went wrong, try again later");case 14:e.$nuxt.$loading.finish();case 15:case"end":return n.stop()}}),n,null,[[1,10]])})))()}}}},421:function(t,e,n){"use strict";n(33),n(44),n(15),n(9),n(22);var r={props:{data:{type:Array,required:!0},hidden:{type:Array,default:function(){return["slug","created_at","updated_at"]}},needActions:{type:Boolean,default:!0},photosFields:{type:Array,default:function(){return[]}}},computed:{keys:function(){var t=this;return Object.keys(this.data[0]||{}).filter((function(e){return!t.hidden.includes(e)}))}},methods:{handleRemove:function(t){this.$emit("remove",t)}}},o=(n(417),n(3)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"responsive-table"},[n("thead",[n("tr",[t._l(t.keys,(function(e,r){return n("th",{key:r},[t._v("\n        "+t._s(e)+"\n      ")])})),t._v(" "),t.needActions?n("th",[t._v("\n        ações\n      ")]):t._e()],2)]),t._v(" "),n("tbody",t._l(t.data,(function(e,r){return n("tr",{key:r},[t._l(t.keys,(function(r,i){return n("td",{key:i},[t.photosFields.includes(r)?n("img",{staticClass:"responsive-table-image",attrs:{src:e[r],alt:e[r].length||"No image"}}):[t._v("\n          "+t._s(e[r])+"\n        ")]],2)})),t._v(" "),t.needActions?n("td",[n("div",{staticClass:"responsive-table-actions"},[n("nuxt-link",{staticClass:"responsive-table-action btn-warning",attrs:{to:t.$route.path+"/"+(e.slug||e.id)}},[n("fa",{attrs:{icon:["fas","pen"]}})],1),t._v(" "),n("a",{staticClass:"responsive-table-action btn-danger",on:{click:function(n){return n.preventDefault(),t.handleRemove(e)}}},[n("fa",{attrs:{icon:["fas","trash"]}})],1)],1)]):t._e()],2)})),0)])}),[],!1,null,"5e8591be",null);e.a=component.exports},470:function(t,e,n){"use strict";n.r(e);var r=n(421),o=n(415),c=n(419),l=n(411),d={layout:"dashboard",transition:"slide-up",components:{TableResponsive:r.a,DataPaginate:o.a,OverlayLoading:l.a},mixins:[c.a],data:function(){return{route:"/order"}},head:function(){return{title:"List orders | Dashboard ".concat(void 0)}}},f=n(3),component=Object(f.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"page-content"},[e("overlay-loading",{directives:[{name:"show",rawName:"v-show",value:this.$fetchState.pending,expression:"$fetchState.pending"}]}),this._v(" "),e("div",{staticClass:"card"},[e("table-responsive",{attrs:{data:this.data,"need-actions":!1,hidden:["slug","created_at","updated_at","items"]}}),this._v(" "),e("data-paginate",{attrs:{"total-pages":this.totalPages}})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);