(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,3,4,5,6],{200:function(e,t,r){var content=r(205);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(112).default)("37247db8",content,!0,{sourceMap:!1})},201:function(e,t,r){var content=r(209);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(112).default)("2f93b7ff",content,!0,{sourceMap:!1})},203:function(e,t,r){e.exports=r.p+"img/by-sa.54a3340.svg"},204:function(e,t,r){"use strict";r(200)},205:function(e,t,r){var n=r(111)(!1);n.push([e.i,"aside[data-v-7b914fd7]{margin-top:1rem;display:flex;grid-gap:.5rem;gap:.5rem}",""]),e.exports=n},206:function(e,t,r){"use strict";r.r(t);var n=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"footer"},[e._v("\n  Все материалы сайта, если не указано иное, доступны по лицензии\n  "),n("a",{attrs:{href:"https://creativecommons.org/licenses/by-sa/4.0/",rel:"external license",target:"_blank"}},[e._v("\n    Creative Commons Attribution\n    Share Alike 4.0 International\n  ")]),e._v(" "),n("aside",[n("img",{attrs:{src:r(203),alt:"Логотип CC-BY-SA"}})])])}],o=(r(204),r(34)),component=Object(o.a)({},(function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)}),n,!1,null,"7b914fd7",null);t.default=component.exports},207:function(e,t,r){var content=r(217);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(112).default)("e3ef9414",content,!0,{sourceMap:!1})},208:function(e,t,r){"use strict";r(201)},209:function(e,t,r){var n=r(111)(!1);n.push([e.i,"header aside[data-v-28e89cff]{display:inline;opacity:.5}main[data-v-28e89cff]{margin-top:2rem;margin-bottom:4rem}",""]),e.exports=n},212:function(e,t,r){"use strict";r.r(t);r(78);var n={props:{datetime:{type:String,required:!0}},computed:{humanReadable:function(){var dt=new Date(this.datetime),e=dt.toLocaleDateString([],{year:"numeric",month:"long",day:"numeric"}),t=dt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return"".concat(e," в&nbsp;").concat(t)}}},o=r(34),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("time",{attrs:{datetime:e.datetime},domProps:{innerHTML:e._s(e.humanReadable)}})}),[],!1,null,null,null);t.default=component.exports},213:function(e,t,r){"use strict";r.r(t);var n={props:{source:{type:String,required:!0}},computed:{render:function(){return this.$typograf(this.$marked(this.source))}}},o=r(34),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.render)}})}),[],!1,null,null,null);t.default=component.exports},214:function(e,t,r){"use strict";r.r(t);var n={props:{header:{type:String,required:!0}},computed:{navigationLinks:function(){return[["/","Заметки"],["/books","Книги"]]}}},o=(r(208),r(34)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("header",{staticClass:"header"},[r("h1",{staticClass:"header__text"},[e._v("\n      "+e._s(e.header)+"\n      "),r("aside",[e._v("@jrnl.cc")])]),e._v(" "),r("nav",{staticClass:"header__nav"},[r("ul",e._l(e.navigationLinks,(function(t,i){var n=t[0],label=t[1];return r("li",{key:"main-nav-"+i,staticClass:"header__navItem"},[n===e.$route.path?r("mark",[r("NuxtLink",{attrs:{to:n}},[e._v("\n              "+e._s(label)+"\n            ")])],1):r("NuxtLink",{attrs:{to:n}},[e._v("\n            "+e._s(label)+"\n          ")])],1)})),0)])]),e._v(" "),r("main",[e._t("default")],2),e._v(" "),r("VFooter")],1)}),[],!1,null,"28e89cff",null);t.default=component.exports;installComponents(component,{VFooter:r(206).default})},216:function(e,t,r){"use strict";r(207)},217:function(e,t,r){var n=r(111)(!1);n.push([e.i,".badge[data-v-1431e484]{display:inline-block;padding:.2rem .5rem;border-radius:6px;color:#000}.badge[data-color=neutral][data-v-1431e484]{background:#eceff1}.badge[data-color=blue][data-v-1431e484]{background-color:#68b0f4}.badge[data-color=green][data-v-1431e484]{background-color:#61c998}.badge[data-color=yellow][data-v-1431e484]{background-color:#f2c94c}",""]),e.exports=n},218:function(e,t,r){"use strict";r.r(t);r(44);var n={props:{color:{type:String,default:"neutral",validator:function(e){return["neutral","neutral","blue","green","yellow"].includes(e)}}}},o=(r(216),r(34)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"badge",attrs:{"data-color":e.color}},[e._t("default")],2)}),[],!1,null,"1431e484",null);t.default=component.exports},219:function(e,t,r){var content=r(222);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(112).default)("7d3433c7",content,!0,{sourceMap:!1})},221:function(e,t,r){"use strict";r(219)},222:function(e,t,r){var n=r(111)(!1);n.push([e.i,".book[data-v-e34e9224]{display:grid;grid-template-columns:auto 1fr;align-items:start;grid-gap:24px;gap:24px}.book__cover[data-v-e34e9224]{position:relative;display:flex;border-radius:6px;overflow:hidden}.book__badge[data-v-e34e9224]{position:absolute;top:10px;left:10px;box-shadow:2px 2px 3px rgba(0,0,0,.5)}hgroup h2[data-v-e34e9224]{margin:0}hgroup h3[data-v-e34e9224]{margin-top:0}",""]),e.exports=n},223:function(e,t,r){"use strict";r.r(t);var n=r(28),o=r(5);r(37),r(36),r(30),r(35),r(57),r(31),r(58),r(38);function c(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={components:{VBadge:r(218).default},data:function(){return{books:[],badgeColors:{backlog:"blue",in_progress:"yellow",read:"green",abandoned:"neutral"},badgeLabels:{backlog:"В очереди",in_progress:"Читаю",read:"Прочитал",abandoned:"Забросил"}}},fetch:function(){var e=this;return Object(o.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$directus.items("books").readMany({sort:"-date_updated,-date_created"});case 2:if(t.t1=r=t.sent,t.t0=null===t.t1,t.t0){t.next=6;break}t.t0=void 0===r;case 6:if(!t.t0){t.next=10;break}t.t2=void 0,t.next=11;break;case 10:t.t2=r.data;case 11:e.books=t.t2;case 12:case"end":return t.stop()}}),t)})))()},computed:{withKeys:function(){return this.books.map((function(e){return l(l({},e),{},{key:"book-".concat(e.id)})}))}}},f=(r(221),r(34)),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("VPage",{attrs:{header:"Книги"}},e._l(e.withKeys,(function(t){return r("article",{key:t.key,staticClass:"book",attrs:{id:t.key}},[r("div",{staticClass:"book__cover"},[r("img",{attrs:{src:"https://data.jrnl.cc/assets/"+t.cover+"?width=150&height=200&fit=cover",alt:"Обложка "+t.title}}),e._v(" "),r("VBadge",{staticClass:"book__badge",attrs:{color:e.badgeColors[t.status]}},[e._v("\n        "+e._s(e.badgeLabels[t.status])+"\n      ")])],1),e._v(" "),r("div",[r("hgroup",{staticClass:"book__header"},[r("h2",{domProps:{innerHTML:e._s(e.$typograf(t.title))}}),e._v(" "),r("h3",{domProps:{innerHTML:e._s(e.$typograf(t.subtitle))}})]),e._v(" "),r("cite",[e._v(e._s(t.author))]),e._v(" "),r("ul",[r("li",[e._v("Добавлена "),r("VDate",{attrs:{datetime:t.date_created}})],1),e._v(" "),r("li",[e._v("\n          Прочитано "+e._s(t.pages_read)+" из "+e._s(t.pages_total)+"\n        ")])]),e._v(" "),t.review?r("blockquote",[r("VMarkdown",{attrs:{source:t.review}})],1):e._e()])])})),0)}),[],!1,null,"e34e9224",null);t.default=component.exports;installComponents(component,{VBadge:r(218).default,VDate:r(212).default,VMarkdown:r(213).default,VPage:r(214).default})}}]);