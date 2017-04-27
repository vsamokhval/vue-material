/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=416)})({0:function(e,t){e.exports=function(e,t,r,n){var o,s=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(o=e,s=e.default);var a="function"==typeof s?s.options:s;if(t&&(a.render=t.render,a.staticRenderFns=t.staticRenderFns),r&&(a._scopeId=r),n){var c=a.computed||(a.computed={});Object.keys(n).forEach((function(e){var t=n[e];c[e]=function(){return t}}))}return{esModule:o,exports:s,options:a}}},1:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},147:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1),o=(function(e){return e&&e.__esModule?e:{default:e}})(n);t.default={props:{mdIndeterminate:Boolean,mdProgress:{type:Number,default:0}},mixins:[o.default],computed:{classes:function(){return{"md-indeterminate":this.mdIndeterminate}},styles:function(){if(!this.mdIndeterminate)return{width:this.mdProgress+"%"}}}},e.exports=t.default},209:function(e,t){},247:function(e,t){e.exports=".THEME_NAME.md-progress{background-color:PRIMARY-COLOR-0.38}.THEME_NAME.md-progress:not(.md-indeterminate) .md-progress-track{background-color:PRIMARY-COLOR}.THEME_NAME.md-progress .md-progress-track:after,.THEME_NAME.md-progress .md-progress-track:before{background-color:PRIMARY-COLOR}.THEME_NAME.md-progress.md-accent{background-color:ACCENT-COLOR-0.38}.THEME_NAME.md-progress.md-accent:not(.md-indeterminate) .md-progress-track{background-color:ACCENT-COLOR}.THEME_NAME.md-progress.md-accent .md-progress-track:after,.THEME_NAME.md-progress.md-accent .md-progress-track:before{background-color:ACCENT-COLOR}.THEME_NAME.md-progress.md-warn{background-color:WARN-COLOR-0.38}.THEME_NAME.md-progress.md-warn:not(.md-indeterminate) .md-progress-track{background-color:WARN-COLOR}.THEME_NAME.md-progress.md-warn .md-progress-track:after,.THEME_NAME.md-progress.md-warn .md-progress-track:before{background-color:WARN-COLOR}\n"},304:function(e,t,r){r(209);var n=r(0)(r(147),r(350),null,null);e.exports=n.exports},350:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("transition",{attrs:{name:"md-progress",appear:""}},[r("div",{staticClass:"md-progress",class:[e.themeClass,e.classes]},[r("div",{staticClass:"md-progress-track",style:e.styles})])])},staticRenderFns:[]}},416:function(e,t,r){e.exports=r(88)},88:function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){e.component("md-progress",d.default),e.material.styles.push(c.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var s=r(304),d=n(s),a=r(247),c=n(a);e.exports=t.default}})}));