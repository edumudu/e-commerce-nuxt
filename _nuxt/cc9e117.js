(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{484:function(t,e,n){"use strict";n.r(e);n(31);var r=n(4),o=n(7),l={middleware:"auth",auth:"guest",transition:"slide-left",components:{ValidationProvider:o.b,ValidationObserver:o.a},data:function(){return{sending:!1,login:{email:"",password:""}}},methods:{sendLogin:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.sending=!0,t.$nuxt.$loading.start(),e.prev=2,e.next=5,t.$auth.loginWith("local",{data:t.login});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),t.$toast.error("User or password incorrect");case 10:t.sending=!1,t.$nuxt.$loading.finish();case 12:case"end":return e.stop()}}),e,null,[[2,7]])})))()}},head:function(){return{title:"Sing in | ".concat(void 0)}}},c=n(3),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"page-content"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"col-sm-12 col-md-6"},[n("h2",{staticClass:"title"},[t._v("\n          Entrar\n        ")]),t._v(" "),n("p",{staticClass:"paragraph-sm"},[t._v("\n          Eu tenho uma conta.\n        ")]),t._v(" "),n("validation-observer",{scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit,o=e.invalid;return[n("form",{on:{submit:function(e){return e.preventDefault(),r(t.sendLogin)}}},[n("div",{staticClass:"form-group"},[n("validation-provider",{attrs:{rules:"required|email|max:255"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,o=e.valid;return[n("base-input",{attrs:{name:"login",type:"email",placeholder:"E-mail",error:r[0],"is-valid":o},model:{value:t.login.email,callback:function(e){t.$set(t.login,"email",e)},expression:"login.email"}})]}}],null,!0)})],1),t._v(" "),n("div",{staticClass:"form-group"},[n("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,o=e.valid;return[n("base-input",{attrs:{type:"password",name:"password",placeholder:"password",error:r[0],"is-valid":o},model:{value:t.login.password,callback:function(e){t.$set(t.login,"password",e)},expression:"login.password"}})]}}],null,!0)}),t._v(" "),n("nuxt-link",{staticClass:"support-link ml-2",attrs:{to:"/forget-password"}},[t._v("\n                Esqueceu sua senha?\n              ")])],1),t._v(" "),n("div",{staticClass:"form-group"},[n("button",{staticClass:"btn-press",attrs:{type:"submit",disabled:t.sending||o}},[t._v("\n                Sign in\n              ")])])])]}}])})],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-12"},[e("h1",{staticClass:"page-title"},[this._v("\n          Login da conta\n        ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-sm-12 col-md-6"},[e("h2",{staticClass:"title"},[this._v("\n          New Client\n        ")]),this._v(" "),e("p",{staticClass:"paragraph"},[this._v("\n          Ao criar uma conta, você poderá comprar mais rapidamente, ficar atualizado sobre o status de um pedido e acompanhar os pedidos feitos anteriormente.\n        ")])])}],!1,null,null,null);e.default=component.exports}}]);