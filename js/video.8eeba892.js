(function(e){function n(n){for(var t,l,i=n[0],u=n[1],p=n[2],y=0,d=[];y<i.length;y++)l=i[y],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&d.push(r[l][0]),r[l]=0;for(t in u)Object.prototype.hasOwnProperty.call(u,t)&&(e[t]=u[t]);c&&c(n);while(d.length)d.shift()();return a.push.apply(a,p||[]),o()}function o(){for(var e,n=0;n<a.length;n++){for(var o=a[n],t=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(t=!1)}t&&(a.splice(n--,1),e=l(l.s=o[0]))}return e}var t={},r={video:0},a=[];function l(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,l),o.l=!0,o.exports}l.m=e,l.c=t,l.d=function(e,n,o){l.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,n){if(1&n&&(e=l(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(l.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var t in e)l.d(o,t,function(n){return e[n]}.bind(null,t));return o},l.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(n,"a",n),n},l.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},l.p="/ppm.github.io/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var p=0;p<i.length;p++)n(i[p]);var c=u;a.push([4,"chunk-vendors"]),o()})({4:function(e,n,o){e.exports=o("db7f")},5:function(e,n){},db7f:function(e,n,o){"use strict";o.r(n);o("e260"),o("e6cf"),o("cca6"),o("a79d");var t=o("2b0e"),r=function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",{attrs:{id:"app"}},[o("video-player",{ref:"videoPlayer",staticClass:"video-player-box",attrs:{options:e.playerOptions,playsinline:!0,customEventName:"customstatechangedeventname"},on:{play:function(n){return e.onPlayerPlay(n)},pause:function(n){return e.onPlayerPause(n)},ended:function(n){return e.onPlayerEnded(n)},waiting:function(n){return e.onPlayerWaiting(n)},playing:function(n){return e.onPlayerPlaying(n)},loadeddata:function(n){return e.onPlayerLoadeddata(n)},timeupdate:function(n){return e.onPlayerTimeupdate(n)},canplay:function(n){return e.onPlayerCanplay(n)},canplaythrough:function(n){return e.onPlayerCanplaythrough(n)},statechanged:function(n){return e.playerStateChanged(n)},ready:e.playerReadied}})],1)},a=[],l={data:function(){return{playerOptions:{muted:!0,autoplay:!0,playbackRates:[.7,1,1.5,2],sources:[{type:"video/mp4",src:"https://ppmiao0628.github.io/ppm.github.io/video/%E9%A6%96%E5%B0%94%E5%A1%942.mp4"}],loop:!1,preload:"auto",language:"zh-CN",fluid:!0,poster:"",notSupportedMessage:"此视频暂无法播放，请稍后再试",controlBar:{timeDivider:!1,durationDisplay:!1,remainingTimeDisplay:!1,fullscreenToggle:!1}},videoUrl:"https://ppmiao0628.github.io/ppm.github.io/video/%E9%A6%96%E5%B0%94%E5%A1%942.mp4"}},mounted:function(){console.log("this is current player instance object",this.player)},computed:{player:function(){return this.$refs.videoPlayer.player}},methods:{onPlayerPlay:function(e){console.log("player play!",e)},onPlayerPause:function(e){console.log("player pause!",e)},onPlayerEnded:function(e){console.log("player onPlayerEnded!",e)},onPlayerWaiting:function(e){console.log("player onPlayerWaiting!",e)},onPlayerPlaying:function(e){console.log("player onPlayerPlaying!",e)},onPlayerLoadeddata:function(e){console.log("player onPlayerLoadeddata!",e)},onPlayerTimeupdate:function(e){console.log("player onPlayerTimeupdate!",e)},onPlayerCanplay:function(e){console.log("player onPlayerCanplay!",e),this.player.play()},onPlayerCanplaythrough:function(e){console.log("player onPlayerCanplaythrough!",e)},playerStateChanged:function(e){console.log("player current update state",e)},playerReadied:function(e){console.log("the player is readied",e)}}},i=l,u=o("2877"),p=Object(u["a"])(i,r,a,!1,null,null,null),c=p.exports,y=o("d6d3"),d=o.n(y);o("451f"),o("fda2");t["a"].config.productionTip=!1,t["a"].use(d.a),new t["a"]({render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=video.8eeba892.js.map