(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{422:function(t,e,n){"use strict";n(17),n(31);var r=n(4);e.a={data:function(){return{data:{name:""},sending:!1}},methods:{onSubmit:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.$nuxt.$loading.start(),t.sending=!0,e.prev=2,e.next=5,t.$axios.$post(t.route,t.data);case 5:t.$toast.success("Successful created! ".concat(t.data.name)),t.data={},t.$nextTick((function(){t.$refs.form.reset()})),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),t.$toast.error((null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(r=n.data)||void 0===r?void 0:r.message)||"Something wet wrong, try again later.");case 13:t.$nuxt.$loading.finish(),t.sending=!1;case 15:case"end":return e.stop()}}),e,null,[[2,10]])})))()}}}},488:function(t,e,n){"use strict";n.r(e);var r=n(7),o=n(422),c={layout:"dashboard",transition:"slide-up",components:{ValidationObserver:r.a,ValidationProvider:r.b},mixins:[o.a],data:function(){return{route:"/genre"}},head:function(){return{title:"Create new Genre | Dashboard ".concat(void 0)}}},l=n(3),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"page-content"},[n("div",{staticClass:"card float-title"},[n("h1",{staticClass:"card-title"},[t._v("\n      Cadastrar novo gênero\n    ")]),t._v(" "),n("validation-observer",{ref:"form",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid,o=e.handleSubmit;return[n("form",{on:{submit:function(e){return e.preventDefault(),o(t.onSubmit)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-12"},[n("validation-provider",{attrs:{rules:"required|alpha_spaces|max:255"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,o=e.valid;return[n("base-input",{attrs:{placeholder:"Gênero",name:"name",error:r[0],"is-valid":o},model:{value:t.data.name,callback:function(e){t.$set(t.data,"name",e)},expression:"data.name"}})]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"form-group col-12"},[n("button",{staticClass:"btn-press btn-large",attrs:{type:"submit",disabled:t.sending||r}},[t._v("\n              Cadastrar\n            ")])])])])]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);