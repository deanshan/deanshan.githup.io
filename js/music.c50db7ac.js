(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["music"],{"0dea":function(t,e,r){},"186c":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"video"},[t._v("video")])},i=[],o={},c=o,s=(r("4b49"),r("2877")),a=Object(s["a"])(c,n,i,!1,null,"e3b3ecb2",null);e["default"]=a.exports},"2ecc":function(t,e,r){"use strict";var n=r("be2a"),i=r.n(n);i.a},"497b":function(t,e,r){"use strict";var n=r("0dea"),i=r.n(n);i.a},"4b49":function(t,e,r){"use strict";var n=r("9e38"),i=r.n(n);i.a},5298:function(t,e,r){},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function a(t,e,r,n){var i=e&&e.prototype instanceof v?e:v,o=Object.create(i.prototype),c=new T(n||[]);return o._invoke=j(t,r,c),o}function u(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=a;var l="suspendedStart",f="suspendedYield",h="executing",p="completed",d={};function v(){}function y(){}function m(){}var g={};g[o]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(C([])));w&&w!==r&&n.call(w,o)&&(g=w);var O=m.prototype=v.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function E(t){function e(r,i,o,c){var s=u(t[r],t,i);if("throw"!==s.type){var a=s.arg,l=a.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then((function(t){e("next",t,o,c)}),(function(t){e("throw",t,o,c)})):Promise.resolve(l).then((function(t){a.value=t,o(a)}),(function(t){return e("throw",t,o,c)}))}c(s.arg)}var r;function i(t,n){function i(){return new Promise((function(r,i){e(t,n,r,i)}))}return r=r?r.then(i,i):i()}this._invoke=i}function j(t,e,r){var n=l;return function(i,o){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===i)throw o;return L()}r.method=i,r.arg=o;while(1){var c=r.delegate;if(c){var s=P(c,r);if(s){if(s===d)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var a=u(t,e,r);if("normal"===a.type){if(n=r.done?p:f,a.arg===d)continue;return{value:a.arg,done:r.done}}"throw"===a.type&&(n=p,r.method="throw",r.arg=a.arg)}}}function P(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,P(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var i=u(n,t.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,d;var o=i.arg;return o?o.done?(r[t.resultName]=o.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function x(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function C(t){if(t){var r=t[o];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,c=function r(){while(++i<t.length)if(n.call(t,i))return r.value=t[i],r.done=!1,r;return r.value=e,r.done=!0,r};return c.next=c}}return{next:L}}function L(){return{value:e,done:!0}}return y.prototype=O.constructor=m,m.constructor=y,m[s]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,s in t||(t[s]="GeneratorFunction")),t.prototype=Object.create(O),t},t.awrap=function(t){return{__await:t}},_(E.prototype),E.prototype[c]=function(){return this},t.AsyncIterator=E,t.async=function(e,r,n,i){var o=new E(a(e,r,n,i));return t.isGeneratorFunction(r)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},_(O),O[s]="Generator",O[o]=function(){return this},O.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=C,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(x),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function i(n,i){return s.type="throw",s.arg=t,r.next=n,i&&(r.method="next",r.arg=e),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],s=c.completion;if("root"===c.tryLoc)return i("end");if(c.tryLoc<=this.prev){var a=n.call(c,"catchLoc"),u=n.call(c,"finallyLoc");if(a&&u){if(this.prev<c.catchLoc)return i(c.catchLoc,!0);if(this.prev<c.finallyLoc)return i(c.finallyLoc)}else if(a){if(this.prev<c.catchLoc)return i(c.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return i(c.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=t,c.arg=e,o?(this.method="next",this.next=o.finallyLoc,d):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),x(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var i=n.arg;x(r)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:C(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(i){Function("r","regeneratorRuntime = r")(n)}},"9e38":function(t,e,r){},af89:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"music f-c ph100"},[r("SongTitle"),r("router-view"),r("Control")],1)},i=[],o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"song-title frc-b f-s"},[r("i",{staticClass:"f30 iconfont",on:{click:function(e){return t.$router.push("/main/pleasure/music")}}},[t._v("")]),r("div",{staticClass:"title"},[t._v(t._s(t.getTitle)+"—"+t._s(t.getAuthor))]),r("i",{staticClass:"f30 iconfont"})])},c=[],s=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),a=r("2f62");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"SongTitle",computed:l({},Object(a["d"])("list",{list:function(t){return t.list}}),{},Object(a["b"])("list",["getTitle","getAuthor"]))},h=f,p=(r("2ecc"),r("2877")),d=Object(p["a"])(h,o,c,!1,null,"321796ce",null),v=d.exports,y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"controls"},[r("div",{staticClass:"pro-time ctl-progress frc-c"},[r("div",{staticClass:"time mr20"},[t._v(t._s(t.getCurTime))]),r("div",{ref:"progress",staticClass:"progress",on:{click:t.changeProgress}},[r("div",{staticClass:"pro-len",style:{width:t.getPlayTime}}),r("span",{staticClass:"pro-thumb",style:{left:t.getPlayTime},on:{touchstart:function(e){return e.stopPropagation(),t.touchstart(e)},touchmove:function(e){return e.stopPropagation(),t.touchmove(e)},touchend:function(e){return e.stopPropagation(),t.touchend(e)}}})]),r("div",{staticClass:"time ml20"},[t._v(t._s(t.getDuration))])]),r("div",{staticClass:"frc-a"},[r("div",{on:{click:t.changeMode}},[r("i",{directives:[{name:"show",rawName:"v-show",value:"order"===t.playMode,expression:"playMode === 'order'"}],staticClass:"f24 iconfont"},[t._v("")]),r("i",{directives:[{name:"show",rawName:"v-show",value:"single"===t.playMode,expression:"playMode === 'single'"}],staticClass:"f24 iconfont"},[t._v("")]),r("i",{directives:[{name:"show",rawName:"v-show",value:"circle"===t.playMode,expression:"playMode === 'circle'"}],staticClass:"f24 iconfont"},[t._v("")]),r("i",{directives:[{name:"show",rawName:"v-show",value:"random"===t.playMode,expression:"playMode === 'random'"}],staticClass:"f24 iconfont"},[t._v("")])]),r("div",{staticClass:"play-prev",on:{click:function(e){return t.changeMusic("prev")}}},[r("i",{staticClass:"f24 iconfont"},[t._v("")])]),r("div",{class:[t.paused?"play-pause":"play-start"],on:{click:t.playPause}},[r("i",{directives:[{name:"show",rawName:"v-show",value:t.paused,expression:"paused"}],staticClass:"f46 iconfont"},[t._v("")]),r("i",{directives:[{name:"show",rawName:"v-show",value:!t.paused,expression:"!paused"}],staticClass:"f46 iconfont"},[t._v("")])]),r("div",{staticClass:"play-next",on:{click:function(e){return t.changeMusic("next")}}},[r("i",{staticClass:"f24 iconfont"},[t._v("")])]),r("i",{staticClass:"iconfont f24"},[t._v("")])])])},m=[],g=r("986e");function b(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function w(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?b(Object(r),!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var O={name:"PlayControl",data:function(){return{isShow:!1}},computed:w({},Object(a["d"])("player",{paused:function(t){return t.paused},volume:function(t){return t.volume},duration:function(t){return t.duration},currentTime:function(t){return t.currentTime},playMode:function(t){return t.playMode}}),{},Object(a["d"])("list",{currentMusicIndex:function(t){return t.currentMusicIndex}}),{},Object(a["b"])("player",["getCurrentIndex","getDuration","getCurTime","getPlayTime"])),mounted:function(){var t=this;document.addEventListener("click",(function(e){t.isShow=!1}))},methods:w({},Object(a["c"])("player",["SET_PLAY_PAUSE","SET_VOLUME","SET_DURATION","SET_CURRENT_TIME","SEE_PROGRESS","SET_PLAY_MODE","PREV_NEXT"]),{},Object(a["c"])("list",["SET_CURRENT_MUSIC_INDEX"]),{showRange:function(){this.isShow||(this.isShow=!0)},playPause:function(){this.paused?this.SET_PLAY_PAUSE({paused:!1}):this.SET_PLAY_PAUSE({paused:!0})},changeVolume:function(){var t=this.$refs.range.value/100;this.SET_VOLUME({volume:t})},changeProgress:function(t){var e=t||window.event;this.SEE_PROGRESS({progress:e.offsetX/this.$refs.progress.offsetWidth*this.duration}),g["a"].$emit("changeCurrentTime",this.currentTime)},touchmove:function(t){this.SET_VOLUME({volume:0});var e=t.touches[0].clientX-this.$refs.progress.offsetLeft;Math.abs(e)<=this.$refs.progress.offsetWidth&&(this.SEE_PROGRESS({progress:e/this.$refs.progress.offsetWidth*this.duration}),g["a"].$emit("changeCurrentTime",this.currentTime))},touchstart:function(){this.startVolume=this.volume},touchend:function(){this.SET_VOLUME({volume:this.startVolume})},changeMusic:function(t){var e=this.getCurrentIndex({type:t});this.SET_CURRENT_MUSIC_INDEX({currentMusicIndex:e})},changeMode:function(){this.SET_PLAY_MODE()}})},_=O,E=(r("497b"),Object(p["a"])(_,y,m,!1,null,"15b12f1c",null)),j=E.exports,P={name:"Music",data:function(){return{}},components:{SongTitle:v,Control:j}},S=P,x=Object(p["a"])(S,n,i,!1,null,null,null);e["default"]=x.exports},be2a:function(t,e,r){},df30:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"music-list ph100 f-c f-a of-a"},t._l(t.list,(function(e,n){return r("div",{key:n,staticClass:"frc-b p5",style:{"background-color":n===t.currentMusicIndex?"rgba(82, 255, 255,0.4)":""}},[r("div",{staticClass:"frc-s f-s"},[r("div",{staticClass:"m-logo frc-c",style:{"background-image":"url("+e.pic+")"},on:{click:function(r){return t.changeMusic(e,n)}}}),r("div",{staticClass:"f-c ml20",staticStyle:{"justify-content":"center"},style:{color:n===t.currentMusicIndex?"#52ffff":""}},[r("span",{staticClass:"f14 mb10"},[t._v(t._s(e.title))]),r("span",{staticClass:"f12"},[t._v(t._s(e.author))])])]),r("minLyric",{directives:[{name:"show",rawName:"v-show",value:n===t.currentMusicIndex,expression:"key === currentMusicIndex"}]}),r("div",{staticClass:"frc-s mr20",style:{color:n===t.currentMusicIndex?"#52ffff":""},on:{click:function(e){return t.playPause(n)}}},[r("span",[r("i",{directives:[{name:"show",rawName:"v-show",value:n===t.currentMusicIndex,expression:"key === currentMusicIndex"}],staticClass:"iconfont"},[t._v(t._s(t.playIcon?"":""))]),r("i",{directives:[{name:"show",rawName:"v-show",value:n!==t.currentMusicIndex,expression:"key !== currentMusicIndex"}],staticClass:"iconfont"},[t._v("")])])])],1)})),0)},i=[],o=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("d3b7"),r("159b"),r("2909")),c=(r("96cf"),r("ade3")),s=r("2f62"),a=(r("d81d"),r("1fba"));r("b1fa");function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function l(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"minLyric",data:function(){return{timeDif:0,curlrc:0}},computed:l({},Object(s["d"])("player",{paused:function(t){return t.paused},currentTime:function(t){return t.currentTime}}),{},Object(s["b"])("list",["getCover","getLyric"])),render:function(){var t=this,e=arguments[0],r="cur",n=this.getLyric.map((function(n,i){return n[0]<=t.currentTime&&i>=t.curlrc?(t.curlrc=i,r="cur",i>0&&(t.timeDif=t.getLyric[i][0]-t.getLyric[i-1][0])):r="",e("li",{ref:"li",class:r,key:i},[" ",n[1]," "])}));return e("div",{ref:"lyric",class:"min-lyric"},[e("ul",{ref:"ul"},[n])])},methods:{lrcTimer:function(t){var e=this;if(this.curlrc>1){var r=this.$refs.ul.children[this.curlrc-1];setTimeout((function(){e.lrcScroll.scrollToElement(r,t)}),t)}else this.lrcScroll.scrollTo(0,0,800)}},mounted:function(){var t=this;this.$nextTick((function(){t.lrcScroll=new a["a"](t.$refs.lyric,{})}))},watch:{timeDif:function(t){var e=this;this.$nextTick((function(){e.lrcTimer(t+100)}))},currentTime:function(t,e){e-t>1&&(this.curlrc=0,this.lrcScroll.scrollTo(0,0,800))}}};function h(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function p(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?h(Object(r),!0).forEach((function(e){Object(c["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={name:"music-list",data:function(){return{playIcon:!1,list:[]}},components:{minLyric:f},computed:p({},Object(s["d"])("player",{paused:function(t){return t.paused},playMode:function(t){return t.playMode}}),{},Object(s["d"])("list",{currentMusicIndex:function(t){return t.currentMusicIndex}}),{},Object(s["b"])("list",["getCover"])),created:function(){return regeneratorRuntime.async((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,regeneratorRuntime.awrap(this.getData());case 2:case"end":return t.stop()}}),null,this)},methods:p({},Object(s["c"])("player",["SET_PLAY_PAUSE","SET_PLAY_MODE"]),{},Object(s["c"])("list",["SET_LIST","SET_CURRENT_MUSIC_INDEX"]),{getData:function(){var t=this;return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:return this.loading=!0,e.next=3,regeneratorRuntime.awrap(this.$https.get("/music/list").then((function(e){if(200===e.code){var r=e.result;t.list=Object(o["a"])(r),t.SET_LIST({list:r})}})).then((function(){return t.loading=!1})).catch((function(){return t.loading=!1})));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),null,this)},playPause:function(t){return regeneratorRuntime.async((function(e){while(1)switch(e.prev=e.next){case 0:t===this.currentMusicIndex?(this.paused?this.SET_PLAY_PAUSE({paused:!1}):this.SET_PLAY_PAUSE({paused:!0}),this.playIcon=this.paused):(this.SET_PLAY_PAUSE({paused:!1}),this.playIcon=!1),window.localStorage.setItem("currentMusicIndex",t),this.SET_CURRENT_MUSIC_INDEX({currentMusicIndex:t});case 3:case"end":return e.stop()}}),null,this)},changeMusic:function(t,e){e!==this.currentMusicIndex&&this.playPause(e),this.$router.push({path:"/pleasure/music/play",query:{songid:t.songid}})}}),mounted:function(){this.playIcon=this.paused}},v=d,y=(r("ffcd"),r("2877")),m=Object(y["a"])(v,n,i,!1,null,"3cbbc18a",null);e["default"]=m.exports},ffcd:function(t,e,r){"use strict";var n=r("5298"),i=r.n(n);i.a}}]);