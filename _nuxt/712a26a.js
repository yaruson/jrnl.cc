(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6],{204:function(e,t,r){var content=r(209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("ede9f43a",content,!0,{sourceMap:!1})},205:function(e,t,r){var content=r(213);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("3b5dcd89",content,!0,{sourceMap:!1})},207:function(e,t,r){e.exports=r.p+"img/by-sa.54a3340.svg"},208:function(e,t,r){"use strict";r(204)},209:function(e,t,r){var o=r(78)(!1);o.push([e.i,"aside[data-v-31e8ecc4]{margin-top:1rem;display:flex;grid-gap:.5rem;gap:.5rem}",""]),e.exports=o},210:function(e,t,r){"use strict";r.r(t);var o=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("footer",{staticClass:"footer"},[e._v("\n  Все материалы сайта, если не указано иное, доступны по лицензии\n  "),o("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/4.0/",rel:"external license noopener",target:"_blank"}},[e._v("\n    Creative Commons Attribution\n    Share Alike 4.0 International\n  ")]),e._v(" "),o("aside",[o("img",{attrs:{src:r(207),alt:"Логотип CC-BY-SA",width:"80",height:"15"}})])])}],n=(r(208),r(34)),component=Object(n.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),o,!1,null,"31e8ecc4",null);t.default=component.exports},211:function(e,t,r){var content=r(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("49363985",content,!0,{sourceMap:!1})},212:function(e,t,r){"use strict";r(205)},213:function(e,t,r){var o=r(78)(!1);o.push([e.i,"header aside[data-v-e4aca596]{display:inline;opacity:.5}main[data-v-e4aca596]{margin-top:2rem;margin-bottom:4rem}",""]),e.exports=o},216:function(e,t,r){"use strict";r.r(t);r(80);var o={props:{datetime:{type:String,required:!0}},computed:{humanReadable:function(){var dt=new Date(this.datetime),e=dt.toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"}),t=dt.toLocaleTimeString("ru",{hour:"2-digit",minute:"2-digit"});return"".concat(e," в&nbsp;").concat(t)}}},n=r(34),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("time",{attrs:{datetime:e.datetime},domProps:{innerHTML:e._s(e.humanReadable)}})}),[],!1,null,null,null);t.default=component.exports},217:function(e,t,r){"use strict";r.r(t);var o={props:{source:{type:String,required:!0}},computed:{render:function(){return this.$typograf(this.$marked(this.source))}}},n=r(34),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.render)}})}),[],!1,null,null,null);t.default=component.exports},218:function(e,t,r){"use strict";r.r(t);var o={props:{header:{type:String,required:!0}},computed:{navigationLinks:function(){return[["/","Заметки"],["/books","Книги"]]}}},n=(r(212),r(34)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",{staticClass:"header"},[r("h1",{staticClass:"header__text"},[e._v("\n      "+e._s(e.header)+"\n      "),r("aside",[e._v("@jrnl.cc")])]),e._v(" "),r("nav",{staticClass:"header__nav"},[r("ul",e._l(e.navigationLinks,(function(t,i){var o=t[0],label=t[1];return r("li",{key:"main-nav-"+i,staticClass:"header__navItem"},[o===e.$route.path?r("mark",[r("NuxtLink",{attrs:{to:o}},[e._v("\n              "+e._s(label)+"\n            ")])],1):r("NuxtLink",{attrs:{to:o}},[e._v("\n            "+e._s(label)+"\n          ")])],1)})),0)])]),e._v(" "),r("main",[e._t("default")],2),e._v(" "),r("VFooter")],1)}),[],!1,null,"e4aca596",null);t.default=component.exports;installComponents(component,{VFooter:r(210).default})},220:function(e,t,r){"use strict";r(211)},221:function(e,t,r){var o=r(78)(!1);o.push([e.i,".badge[data-v-73823ef2]{display:inline-block;padding:.2rem .5rem;border-radius:6px;color:#000}.badge[data-color=neutral][data-v-73823ef2]{background:#eceff1}.badge[data-color=blue][data-v-73823ef2]{background-color:#68b0f4}.badge[data-color=green][data-v-73823ef2]{background-color:#61c998}.badge[data-color=yellow][data-v-73823ef2]{background-color:#f2c94c}",""]),e.exports=o},222:function(e,t,r){"use strict";r.r(t);r(44);var o={props:{color:{type:String,default:"neutral",validator:function(e){return["neutral","neutral","blue","green","yellow"].includes(e)}}}},n=(r(220),r(34)),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"badge",attrs:{"data-color":e.color}},[e._t("default")],2)}),[],!1,null,"73823ef2",null);t.default=component.exports},223:function(e,t,r){var content=r(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(79).default)("58750534",content,!0,{sourceMap:!1})},225:function(e,t,r){"use strict";r(223)},226:function(e,t,r){var o=r(78)(!1);o.push([e.i,'.book[data-v-11553246]{display:grid;grid-gap:24px;gap:24px;grid-template-columns:1fr;grid-template-areas:"cover" "title" "info"}@media (min-width:360px){.book[data-v-11553246]{grid-template-columns:150px auto;grid-template-areas:"cover title" "info info"}}@media (min-width:520px){.book[data-v-11553246]{grid-template-areas:"cover title" "cover info"}}.book[data-v-11553246]:nth-child(n+2){margin-top:2rem}.book__cover[data-v-11553246]{grid-area:cover;justify-self:center;position:relative;display:flex;flex-shrink:0;overflow:hidden}.book__coverImage[data-v-11553246]{height:200px;width:150px;border-radius:6px}.book__coverImage[data-blur=true][data-v-11553246]{filter:blur(20px)}.book__title[data-v-11553246]{grid-area:title}.book__info[data-v-11553246]{grid-area:info}.book__info>ul[data-v-11553246]{margin:0}.book__badge[data-v-11553246]{position:absolute;top:10px;left:10px;box-shadow:2px 2px 3px rgba(0,0,0,.5)}hgroup h2[data-v-11553246]{margin:0}hgroup h3[data-v-11553246]{margin-top:0}',""]),e.exports=o},227:function(e,t,r){"use strict";r.r(t);var o=r(28),n=r(6);r(37),r(36),r(30),r(35),r(58),r(31),r(59),r(38);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{VBadge:r(222).default},data:function(){return{books:[],badgeColors:{backlog:"blue",in_progress:"yellow",read:"green",abandoned:"neutral"},badgeLabels:{backlog:"В очереди",in_progress:"Читаю",read:"Прочитал",abandoned:"Забросил"},showPageCount:{backlog:!1,in_progress:!0,read:!1,abandoned:!0}}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$directus.items("books").readMany({sort:"-date_updated,-date_created"});case 2:if(t.t1=r=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===r;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=r.data;case 11:e.books=t.t2;case 12:case"end":return t.stop()}}),t)})))()},computed:{withKeys:function(){return this.books.map((function(e){return c(c({},e),{},{key:"book-".concat(e.id)})}))}}},f=(r(225),r(34)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VPage",{attrs:{header:"Книги"}},e._l(e.withKeys,(function(t){return r("article",{key:t.key,staticClass:"book",attrs:{id:t.key}},[r("div",{staticClass:"book__cover"},[r("img",{staticClass:"book__coverImage",attrs:{"data-blur":t.blur,src:"https://data.jrnl.cc/assets/"+t.cover+"?width=150&height=200&fit=cover",alt:"Обложка "+t.title}}),e._v(" "),r("VBadge",{staticClass:"book__badge",attrs:{color:e.badgeColors[t.status]}},[e._v("\n        "+e._s(e.badgeLabels[t.status])+"\n      ")])],1),e._v(" "),r("div",{staticClass:"book__title"},[r("hgroup",[r("h2",{domProps:{innerHTML:e._s(e.$typograf(t.title))}}),e._v(" "),r("h3",{domProps:{innerHTML:e._s(e.$typograf(t.subtitle))}})]),e._v(" "),r("cite",[e._v(e._s(t.author))])]),e._v(" "),r("div",{staticClass:"book__info"},[r("ul",[r("li",[e._v("Добавлена "),r("VDate",{attrs:{datetime:t.date_created}})],1),e._v(" "),e.showPageCount[t.status]?r("li",[e._v("\n          Прочитано "+e._s(t.pages_read)+" из "+e._s(t.pages_total)+"\n        ")]):e._e(),e._v(" "),r("li",[t.link?r("a",{attrs:{href:t.link,rel:"noopener",target:"_blank"}},[e._v("\n            «"+e._s(t.title)+"» на сайте издательства\n            "+e._s(t.publisher)+"\n          ")]):[e._v("\n            Издательство — "+e._s(t.publisher)+"\n          ")]],2)]),e._v(" "),t.review?r("blockquote",[r("VMarkdown",{attrs:{source:t.review}})],1):e._e()])])})),0)}),[],!1,null,"11553246",null);t.default=component.exports;installComponents(component,{VBadge:r(222).default,VDate:r(216).default,VMarkdown:r(217).default,VPage:r(218).default})}}]);