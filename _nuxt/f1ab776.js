(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{212:function(e,t,n){"use strict";n.r(t);n(78);var r={props:{datetime:{type:String,required:!0}},computed:{humanReadable:function(){var dt=new Date(this.datetime),e=dt.toLocaleDateString([],{year:"numeric",month:"long",day:"numeric"}),t=dt.toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"});return"".concat(e," в&nbsp;").concat(t)}}},o=n(34),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("time",{attrs:{datetime:e.datetime},domProps:{innerHTML:e._s(e.humanReadable)}})}),[],!1,null,null,null);t.default=component.exports}}]);