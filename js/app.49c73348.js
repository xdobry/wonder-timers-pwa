(function(t){function e(e){for(var s,o,a=e[0],l=e[1],c=e[2],m=0,u=[];m<a.length;m++)o=a[m],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&u.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(u.length)u.shift()();return r.push.apply(r,c||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,a=1;a<i.length;a++){var l=i[a];0!==n[l]&&(s=!1)}s&&(r.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},r=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var d=l;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("md-dialog-confirm",{attrs:{"md-active":t.confirm,"md-title":"Confirm deletion","md-content":"","md-confirm-text":"Yes","md-cancel-text":"Cancel"},on:{"update:mdActive":function(e){t.confirm=e},"update:md-active":function(e){t.confirm=e},"md-cancel":t.onCancel,"md-confirm":t.onConfirm}}),i("div",{staticClass:"md-layout md-gutter",attrs:{id:"app"}},[i("div",{staticClass:"md-layout-item"},[i("div",{staticClass:"md-title"},[t._v("Multitimer App")]),i("div",t._l(t.timers,(function(e){return i("Timer",{key:e.id,attrs:{isTimer:e.isTimer,timerid:e.id.toString()},on:{"timer-message":t.timerMessage,"timer-remove":t.removeTimer}})})),1),i("md-button",{staticClass:"md-raised",on:{click:t.addStopWatch}},[t._v("Add "),i("md-icon",[t._v("watch")])],1),i("md-button",{staticClass:"md-raised",on:{click:t.addTimer}},[t._v("Add "),i("md-icon",[t._v("alarm")])],1)],1),i("div",{staticClass:"md-layout-item md-elevation-2"},[i("h2",[t._v("Log")]),i("md-button",{staticClass:"md-icon-button",attrs:{title:"clear messages"},on:{click:t.clearMessages}},[i("md-icon",[t._v("delete_sweep")])],1),i("md-table",[i("md-table-row",[i("md-table-head",[t._v("Id")]),i("md-table-head",[t._v("Time")]),i("md-table-head",[t._v("Timer")]),i("md-table-head",[t._v("Action")]),i("md-table-head",[t._v("Type")]),i("md-table-head",[t._v("display")]),i("md-table-head",[t._v("action")])],1),t._l(t.timerMessages,(function(e,s){return i("md-table-row",{key:s},[i("md-table-cell",[t._v(t._s(s))]),i("md-table-cell",[t._v(t._s(e.eventTime.toISOString()))]),i("md-table-cell",[t._v(t._s(e.timer))]),i("md-table-cell",[t._v(t._s(e.action))]),i("md-table-cell",[t._v(t._s(e.timerType))]),i("md-table-cell",[t._v(t._s(e.time))]),i("md-table-cell",[i("md-button",{on:{click:function(e){return t.removeMessage(s)}}},[i("md-icon",[t._v("remove")])],1)],1)],1)}))],2)],1),i("a",{attrs:{href:"https://github.com/xdobry/wonder-timers-pwa"}},[t._v("Programmed by xdobry on github")])])],1)},r=[],o=(i("c740"),i("a434"),function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("md-card",[i("md-card-header",[i("md-icon",[t._v(t._s(t.isDecresing?"alarm":"watch"))]),t._v(": "+t._s(t.timerid))],1),i("md-card-content",[i("div",[i("table",[i("tr",[i("td",[i("button",{attrs:{disabled:t.isRunning},on:{click:function(e){return t.adaptTime(36e5)}}},[i("md-icon",[t._v("arrow_drop_up")])],1)]),i("td"),i("td",[i("button",{attrs:{disabled:t.isRunning},on:{click:function(e){return t.adaptTime(6e4)}}},[i("md-icon",[t._v("arrow_drop_up")])],1)]),i("td"),i("td",[i("button",{attrs:{disabled:t.isRunning},on:{click:function(e){return t.adaptTime(1e3)}}},[i("md-icon",[t._v("arrow_drop_up")])],1)]),i("td"),i("td",[i("button",{attrs:{disabled:t.isRunning},on:{click:function(e){return t.resetMillis()}}},[i("md-icon",[t._v("undo")])],1)])]),i("tr",{staticClass:"md-display-2"},[i("td",[t._v(t._s(t.displayHours))]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.displayMinutes))]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.dispalySeconds))]),i("td",[t._v(":")]),i("td",[t._v(t._s(t.displayMilliseconds))])]),i("tr",[i("td",[i("button",{attrs:{disabled:t.isRunning},on:{click:function(e){return t.adaptTime(-36e5)}}},[i("md-icon",[t._v("arrow_drop_down")])],1)]),i("td"),i("td",[i("button",{attrs:{disabled:t.isRunning},on:{click:function(e){return t.adaptTime(-6e4)}}},[i("md-icon",[t._v("arrow_drop_down")])],1)]),i("td"),i("td",[i("button",{attrs:{disabled:t.isRunning},on:{click:function(e){return t.adaptTime(-1e3)}}},[i("md-icon",[t._v("arrow_drop_down")])],1)])])])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.isDecresing,expression:"isDecresing"}],attrs:{type:"checkbox",disabled:t.isRunning||t.startTime},domProps:{checked:Array.isArray(t.isDecresing)?t._i(t.isDecresing,null)>-1:t.isDecresing},on:{change:[function(e){var i=t.isDecresing,s=e.target,n=!!s.checked;if(Array.isArray(i)){var r=null,o=t._i(i,r);s.checked?o<0&&(t.isDecresing=i.concat([r])):o>-1&&(t.isDecresing=i.slice(0,o).concat(i.slice(o+1)))}else t.isDecresing=n},t.changeMode]}}),t._v("Timer ")]),i("md-card-actions",[i("md-button",{staticClass:"md-icon-button md-raised",attrs:{title:t.buttonMsg},on:{click:t.buttonAction}},[i("md-icon",[t._v(t._s(t.isRunning?"pause":"play_circle_outline"))])],1),i("md-button",{staticClass:"md-icon-button md-raised",attrs:{title:"Reset"},on:{click:t.resetTimer}},[i("md-icon",[t._v("undo")])],1),i("md-button",{staticClass:"md-icon-button md-raised",attrs:{title:"Remove"},on:{click:t.removeTimer}},[i("md-icon",[t._v("close")])],1)],1)],1)}),a=[],l=(i("a9e3"),i("25eb"),i("d3b7"),i("25f0"),i("38cf"),{name:"Timer",props:{timerid:String,isTimer:Boolean},data:function(){return{buttonMsg:"Start",isRunning:!1,currentTime:0,timeMillis:0,seconds:60,startTime:null,displayHours:"00",displayMinutes:"00",dispalySeconds:"00",displayMilliseconds:"000",isDecresing:!1}},mounted:function(){console.log("mounted seconds "+this.seconds),this.isDecresing=this.isTimer,this.isDecresing&&(this.currentTime=this.seconds)},methods:{buttonAction:function(){this.isRunning?this.stopTimer():this.startTimer()},startTimer:function(){var t=this;0===this.currentTime&&this.isDecresing&&(this.currentTime=this.seconds,this.timeMillis=1e3*this.seconds),this.timeMillis>0&&(this.currentTime=Math.round(this.timeMillis/1e3)),this.$emit("timer-message",{eventTime:new Date,timer:this.timerid,action:this.startTime?"restart timer":"start timer",timerType:this.isDecresing?"timer":"stopwatch",time:this.formatTimeMillis(this.timeMillis)}),this.startTime=(new Date).getTime(),this.isRunning=!0,this.intervalId=window.setInterval((function(){t.isDecresing?(t.currentTime--,t.currentTime<=0?t.stopTimer(!0):t.setDisplayMS(1e3*t.currentTime)):(t.currentTime++,t.setDisplayMS(1e3*t.currentTime))}),1e3)},stopTimer:function(t){if(this.intervalId){var e=this.intervalId;this.intervalId=null,window.clearInterval(e);var i=(new Date).getTime(),s=i-this.startTime;this.isDecresing?0===this.currentTime?this.timeMillis=0:this.timeMillis-=s:this.timeMillis+=s,this.setDisplayMS(this.timeMillis),this.$emit("timer-message",{eventTime:new Date,timer:this.timerid,action:t?"finish timer":"pause timer",timerType:this.isDecresing?"timer":"stopwatch",time:this.formatTimeMillis(this.timeMillis)})}this.isRunning=!1,this.buttonMsg="Start"},resetTimer:function(){this.stopTimer(),this.currentTime=this.isDecresing?this.seconds:0,this.timeMillis=this.isDecresing?1e3*this.seconds:0,this.startTime=null,this.setDisplayMS(this.timeMillis)},destroyed:function(){if(this.intervalId){var t=this.intervalId;this.intervalId=null,window.clearInterval(t)}},setDisplayMS:function(t){var e=Math.floor(t/36e7),i=Math.floor(t/6e4%60),s=Math.floor(t/1e3%60),n=t%1e3,r=i.toString(),o=s.toString(),a=n.toString(),l=e.toString();o.length<2&&(o="0"+o),r.length<2&&(r="0"+r),a.length<3&&(a="0".repeat(3-a.length)+a),l.length<2&&(l="0"+l),this.displayHours=l,this.displayMinutes=r,this.dispalySeconds=o,this.displayMilliseconds=a},formatTimeSec:function(t){var e=Math.floor(t/60),i=t%60,s=e.toString(),n=i.toString();return n.length<2&&(n="0"+n),s.length<2&&(s="0"+s),s+":"+n},formatTimeMillis:function(t){var e=Math.floor(t/6e4),i=Math.floor(t/1e3%60),s=t%1e3,n=e.toString(),r=i.toString(),o=s.toString();return r.length<2&&(r="0"+r),n.length<2&&(n="0"+n),o.length<3&&(o="0".repeat(3-o.length)+o),n+":"+r+"."+o},adaptTime:function(t){this.timeMillis+=t,this.setDisplayMS(this.timeMillis),this.startTime||(this.seconds=Math.floor(this.timeMillis/1e3))},resetMillis:function(){this.timeMillis-=this.timeMillis%1e3,this.setDisplayMS(this.timeMillis)},changeMode:function(t){var e=t.target.checked;this.startTime||(e?this.setDisplayMS(1e3*this.seconds):this.setDisplayMS(0))},removeTimer:function(){this.$emit("timer-remove",Number.parseInt(this.timerid))}}}),c=l,d=i("2877"),m=Object(d["a"])(c,o,a,!1,null,"377d373b",null),u=m.exports,h={name:"App",data:function(){return{timerCount:0,timers:[],timerMessages:[],confirm:!1}},components:{Timer:u},methods:{addTimer:function(){this.timers.push({id:this.timerCount++,isTimer:!0})},addStopWatch:function(){this.timers.push({id:this.timerCount++,isTimer:!1})},timerMessage:function(t){this.timerMessages.push(t)},removeTimer:function(t){this.removeTimerId=t,this.confirm=!0},onConfirm:function(){var t=this;this.confirm=!1;var e=this.timers.findIndex((function(e){return e.id===t.removeTimerId}));e>=0&&this.timers.splice(e,1)},onCancel:function(){this.confirm=!1},clearMessages:function(){this.timerMessages.splice(0,this.timerMessages.length)},removeMessage:function(t){this.timerMessages.splice(t,1)}}},p=h,f=Object(d["a"])(p,n,r,!1,null,null,null),v=f.exports,g=i("43f9"),_=i.n(g);i("43f4");s["default"].config.productionTip=!1,s["default"].use(_.a),new s["default"]({render:function(t){return t(v)}}).$mount("#app")}});
//# sourceMappingURL=app.49c73348.js.map