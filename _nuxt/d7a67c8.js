(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6],{202:function(t,e,r){var content=r(207);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("42acd1da",content,!0,{sourceMap:!1})},203:function(t,e,r){var content=r(211);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("2f93b7ff",content,!0,{sourceMap:!1})},205:function(t,e,r){t.exports=r.p+"img/by-sa.54a3340.svg"},206:function(t,e,r){"use strict";r(202)},207:function(t,e,r){var n=r(78)(!1);n.push([t.i,"aside[data-v-07fb19e8]{margin-top:1rem;display:flex;grid-gap:.5rem;gap:.5rem}",""]),t.exports=n},208:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[t._v("\n  Все материалы сайта, если не указано иное, доступны по лицензии\n  "),n("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/4.0/",rel:"external license noopener",target:"_blank"}},[t._v("\n    Creative Commons Attribution\n    Share Alike 4.0 International\n  ")]),t._v(" "),n("aside",[n("img",{attrs:{src:r(205),alt:"Логотип CC-BY-SA",width:"80",height:"15"}})])])}],o=(r(206),r(34)),component=Object(o.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),n,!1,null,"07fb19e8",null);e.default=component.exports},209:function(t,e,r){var content=r(219);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("e3ef9414",content,!0,{sourceMap:!1})},210:function(t,e,r){"use strict";r(203)},211:function(t,e,r){var n=r(78)(!1);n.push([t.i,"header aside[data-v-28e89cff]{display:inline;opacity:.5}main[data-v-28e89cff]{margin-top:2rem;margin-bottom:4rem}",""]),t.exports=n},214:function(t,e,r){"use strict";r.r(e);r(80);var n={props:{datetime:{type:String,required:!0}},computed:{humanReadable:function(){var dt=new Date(this.datetime),t=dt.toLocaleDateString("ru",{year:"numeric",month:"long",day:"numeric"}),e=dt.toLocaleTimeString("ru",{hour:"2-digit",minute:"2-digit"});return"".concat(t," в&nbsp;").concat(e)}}},o=r(34),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("time",{attrs:{datetime:t.datetime},domProps:{innerHTML:t._s(t.humanReadable)}})}),[],!1,null,null,null);e.default=component.exports},215:function(t,e,r){"use strict";r.r(e);var n={props:{source:{type:String,required:!0}},computed:{render:function(){return this.$typograf(this.$marked(this.source))}}},o=r(34),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{domProps:{innerHTML:t._s(t.render)}})}),[],!1,null,null,null);e.default=component.exports},216:function(t,e,r){"use strict";r.r(e);var n={props:{header:{type:String,required:!0}},computed:{navigationLinks:function(){return[["/","Заметки"],["/books","Книги"]]}}},o=(r(210),r(34)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("header",{staticClass:"header"},[r("h1",{staticClass:"header__text"},[t._v("\n      "+t._s(t.header)+"\n      "),r("aside",[t._v("@jrnl.cc")])]),t._v(" "),r("nav",{staticClass:"header__nav"},[r("ul",t._l(t.navigationLinks,(function(e,i){var n=e[0],label=e[1];return r("li",{key:"main-nav-"+i,staticClass:"header__navItem"},[n===t.$route.path?r("mark",[r("NuxtLink",{attrs:{to:n}},[t._v("\n              "+t._s(label)+"\n            ")])],1):r("NuxtLink",{attrs:{to:n}},[t._v("\n            "+t._s(label)+"\n          ")])],1)})),0)])]),t._v(" "),r("main",[t._t("default")],2),t._v(" "),r("VFooter")],1)}),[],!1,null,"28e89cff",null);e.default=component.exports;installComponents(component,{VFooter:r(208).default})},218:function(t,e,r){"use strict";r(209)},219:function(t,e,r){var n=r(78)(!1);n.push([t.i,".badge[data-v-1431e484]{display:inline-block;padding:.2rem .5rem;border-radius:6px;color:#000}.badge[data-color=neutral][data-v-1431e484]{background:#eceff1}.badge[data-color=blue][data-v-1431e484]{background-color:#68b0f4}.badge[data-color=green][data-v-1431e484]{background-color:#61c998}.badge[data-color=yellow][data-v-1431e484]{background-color:#f2c94c}",""]),t.exports=n},220:function(t,e,r){"use strict";r.r(e);r(44);var n={props:{color:{type:String,default:"neutral",validator:function(t){return["neutral","neutral","blue","green","yellow"].includes(t)}}}},o=(r(218),r(34)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"badge",attrs:{"data-color":t.color}},[t._t("default")],2)}),[],!1,null,"1431e484",null);e.default=component.exports},221:function(t,e,r){var content=r(224);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(79).default)("0df7f39c",content,!0,{sourceMap:!1})},223:function(t,e,r){"use strict";r(221)},224:function(t,e,r){var n=r(78)(!1);n.push([t.i,".book[data-v-64157846]{display:grid;grid-template-columns:auto 1fr;align-items:start;grid-gap:24px;gap:24px}.book[data-v-64157846]:nth-child(n+2){margin-top:2rem}.book__cover[data-v-64157846]{position:relative;display:flex;border-radius:6px;overflow:hidden}.book__coverImage[data-blur=true][data-v-64157846]{filter:blur(20px)}.book__badge[data-v-64157846]{position:absolute;top:10px;left:10px;box-shadow:2px 2px 3px rgba(0,0,0,.5)}hgroup h2[data-v-64157846]{margin:0}hgroup h3[data-v-64157846]{margin-top:0}",""]),t.exports=n},225:function(t,e,r){"use strict";r.r(e);var n=r(28),o=r(5);r(37),r(36),r(30),r(35),r(57),r(31),r(58),r(38);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={components:{VBadge:r(220).default},data:function(){return{books:[],badgeColors:{backlog:"blue",in_progress:"yellow",read:"green",abandoned:"neutral"},badgeLabels:{backlog:"В очереди",in_progress:"Читаю",read:"Прочитал",abandoned:"Забросил"}}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$directus.items("books").readMany({sort:"-date_updated,-date_created"});case 2:if(e.t1=r=e.sent,e.t0=null===e.t1,e.t0){e.next=6;break}e.t0=void 0===r;case 6:if(!e.t0){e.next=10;break}e.t2=void 0,e.next=11;break;case 10:e.t2=r.data;case 11:t.books=e.t2;case 12:case"end":return e.stop()}}),e)})))()},computed:{withKeys:function(){return this.books.map((function(t){return l(l({},t),{},{key:"book-".concat(t.id)})}))}}},f=(r(223),r(34)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("VPage",{attrs:{header:"Книги"}},t._l(t.withKeys,(function(e){return r("article",{key:e.key,staticClass:"book",attrs:{id:e.key}},[r("div",{staticClass:"book__cover"},[r("img",{staticClass:"book__coverImage",attrs:{"data-blur":e.blur,src:"https://data.jrnl.cc/assets/"+e.cover+"?width=150&height=200&fit=cover",alt:"Обложка "+e.title}}),t._v(" "),r("VBadge",{staticClass:"book__badge",attrs:{color:t.badgeColors[e.status]}},[t._v("\n        "+t._s(t.badgeLabels[e.status])+"\n      ")])],1),t._v(" "),r("div",[r("hgroup",{staticClass:"book__header"},[r("h2",{domProps:{innerHTML:t._s(t.$typograf(e.title))}}),t._v(" "),r("h3",{domProps:{innerHTML:t._s(t.$typograf(e.subtitle))}})]),t._v(" "),r("cite",[t._v(t._s(e.author))]),t._v(" "),r("ul",[r("li",[t._v("Добавлена "),r("VDate",{attrs:{datetime:e.date_created}})],1),t._v(" "),r("li",[t._v("\n          Прочитано "+t._s(e.pages_read)+" из "+t._s(e.pages_total)+"\n        ")])]),t._v(" "),e.review?r("blockquote",[r("VMarkdown",{attrs:{source:e.review}})],1):t._e()])])})),0)}),[],!1,null,"64157846",null);e.default=component.exports;installComponents(component,{VBadge:r(220).default,VDate:r(214).default,VMarkdown:r(215).default,VPage:r(216).default})}}]);