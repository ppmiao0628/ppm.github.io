(function(e){function t(t){for(var r,c,u=t[0],a=t[1],s=t[2],d=0,p=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,u=1;u<n.length;u++){var a=n[u];0!==o[a]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={music:0},i=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ppm.github.io/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],a=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var l=a;i.push([3,"chunk-vendors"]),n()})({"057d":function(e,t,n){},3:function(e,t,n){e.exports=n("ae29")},ae29:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"music-logo"}),n("div",{staticClass:"music-lyric"},[e._v("显示歌词")]),n("div",{staticClass:"music-progress"},[e._v("进度条")]),n("div",{staticClass:"music-play"},[e._v("播放")]),n("button",{on:{click:e.getImg}},[e._v("获取图片")]),n("button",{on:{click:e.getVideo}},[e._v("获取视频")]),n("div",{attrs:{id:"content"}}),n("video",{ref:"myVideo",attrs:{src:"",autoplay:""}})])},i=[],c=n("682e"),u=n.n(c),a={data:function(){return{}},mounted:function(){var e="https://v3-default.ixigua.com/520b58e7e6e7f290403ed4cb126aad0d/604de0f8/video/tos/cn/tos-cn-ve-48/0bd88d62404e4d7ab3342d53596fac35/?a=2012&br=12888&bt=3222&cd=0%7C0%7C0&ch=0&cr=0&cs=0&dr=0&ds=4&er=&l=2021031417094501021208621605011DA3&lr=&mime_type=video_mp4&pl=0&qs=0&rc=M21xZTc8dzN3NDMzNTMzM0ApaDk2NDRkZTs2Nzo3ZTdpM2c0bW82cDAyMDNgLS01MC9zc2EzLjNjYWIyNjFiLmBeLWM6Yw%3D%3D&vl=&vr=";u()(e).then((function(e){console.log(e)}))},methods:{getImg:function(){var e=new Image;e.src="https://photo.tuchong.com/1890400/f/456594721.jpg",document.querySelector("#content").appendChild(e)},getVideo:function(){this.$refs.myVideo.src="",this.$refs.myVideo.autoPlay=!0,this.$refs.myVideo.muted=!0,this.$refs.myVideo.play()}}},s=a,l=(n("b158"),n("2877")),d=Object(l["a"])(s,o,i,!1,null,null,null),p=d.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(p)}}).$mount("#app")},b158:function(e,t,n){"use strict";var r=n("057d"),o=n.n(r);o.a}});
//# sourceMappingURL=music.9a7f81f4.js.map