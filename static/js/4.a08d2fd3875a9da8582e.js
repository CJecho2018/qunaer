webpackJsonp([4],{fOsU:function(t,i){},uRwF:function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var n=a("mtWM"),s=a.n(n),e={name:"CommonGallary",data:function(){return{swiperOption:{pagination:".swiper-pagination",loop:!0,paginationType:"fraction",autoplay:1500},show:!0,detailImg:{},imgs:[],pid:this.$route.params.id}},methods:{getItemInfo:function(){var t=this;s.a.get("static/mock/detail.json").then(function(i){(t.detailImg=i.data.data.detailImg.filter(function(i){return i.id==t.pid})[0]).imgs})},hanleGllaryClick:function(){window.history&&this.$router.go(-1)}},mounted:function(){this.getItemInfo()}},o={render:function(){var t=this.$createElement,i=this._self._c||t;return i("div",{directives:[{name:"show",rawName:"v-show",value:this.show,expression:"show"}],staticClass:"container",on:{click:this.hanleGllaryClick}},[i("div",{staticClass:"wrapper"},[i("swiper",{attrs:{options:this.swiperOption}},[this._l(this.detailImg.imgs,function(t,a){return i("swiper-slide",{key:a},[i("img",{staticClass:"gallary-img",attrs:{src:t}})])}),this._v(" "),i("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)])},staticRenderFns:[]};var r=a("VU/8")(e,o,!1,function(t){a("fOsU")},"data-v-4e65010e",null);i.default=r.exports}});
//# sourceMappingURL=4.a08d2fd3875a9da8582e.js.map