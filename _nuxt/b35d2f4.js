(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{407:function(t,e,n){var content=n(410);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(6).default)("0b26b2b8",content,!0,{sourceMap:!1})},409:function(t,e,n){"use strict";var r=n(407);n.n(r).a},410:function(t,e,n){(e=n(5)(!1)).push([t.i,".overlay-loading[data-v-1fcb320a]{position:absolute;z-index:2;top:0;left:0;display:flex;justify-content:center;align-items:center;width:100%;height:100%;min-height:200px;background-color:#fff}.overlay-loading>img[data-v-1fcb320a]{width:150px;height:150px}",""]),t.exports=e},411:function(t,e,n){"use strict";n(409);var r=n(3),component=Object(r.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"overlay-loading"},[e("img",{attrs:{src:"/assets/svgs/load-1s-200px.svg"}})])}],!1,null,"1fcb320a",null);e.a=component.exports},420:function(t,e,n){"use strict";e.a={activated:function(){this.$fetchState.timestamp<=Date.now()-3e4&&this.$fetch()}}},430:function(t,e,n){"use strict";n(31);var r=n(4),o=n(411),c=n(420);e.a={components:{OverlayLoading:o.a},mixins:[c.a],fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.$get("".concat(t.route,"/").concat(t.$route.params.slug));case 3:t.data=e.sent,e.next=19;break;case 6:e.prev=6,e.t0=e.catch(0),e.t1=e.t0.response.status,e.next=404===e.t1?12:15;break;case 12:return t.$toast.error("Not found"),t.$router.push("/admin".concat(t.route)),e.abrupt("break",16);case 15:t.$toast.error("Something went wrong, try again later");case 16:e.next=19;break;case 18:t.$nuxt.context.redirect("/admin".concat(t.route));case 19:case"end":return e.stop()}}),e,null,[[0,6]])})))()},data:function(){return{sending:!1,data:{}}},methods:{onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.sending=!0,t.$nuxt.$loading.start(),e.prev=2,e.next=5,t.$axios.$put("".concat(t.route,"/").concat(t.data.slug),t.data);case 5:t.$router.push("/admin".concat(t.route)),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(2);case 10:t.$nuxt.$loading.finish(),t.sending=!1;case 12:case"end":return e.stop()}}),e,null,[[2,8]])})))()}}}},475:function(t,e,n){"use strict";n.r(e);n(17);var r=n(7),o=n(430),c={layout:"dashboard",transition:"slide-up",components:{ValidationObserver:r.a,ValidationProvider:r.b},mixins:[o.a],data:function(){return{route:"/genre"}},head:function(){return{title:"Update ".concat(this.data.name," | Dashboard ").concat(void 0)}}},l=n(3),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-content"},[n("overlay-loading",{directives:[{name:"show",rawName:"v-show",value:t.$fetchState.pending,expression:"$fetchState.pending"}]}),t._v(" "),n("div",{staticClass:"card float-title"},[n("h1",{staticClass:"card-title"},[t._v("\n      Editar gênero "+t._s(t.data.name)+"\n    ")]),t._v(" "),n("validation-observer",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid,o=e.handleSubmit;return[n("form",{on:{submit:function(e){return e.preventDefault(),o(t.onSubmit)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-12"},[n("validation-provider",{attrs:{rules:"required|alpha_spaces|max:255"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,o=e.valid;return[n("base-input",{attrs:{placeholder:"Nome",name:"name",error:r[0],"is-valid":o},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"form-group col-12"},[n("button",{staticClass:"btn-press btn-large",attrs:{type:"submit",disabled:t.sending||r}},[t._v("\n              Atualizar\n            ")])])])])]}}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);