(function(e){function t(t){for(var a,r,o=t[0],d=t[1],i=t[2],f=0,u=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);l&&l(t);while(u.length)u.shift()();return c.push.apply(c,i||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,o=1;o<s.length;o++){var d=s[o];0!==n[d]&&(a=!1)}a&&(c.splice(t--,1),e=r(r.s=s[0]))}return e}var a={},n={app:0},c=[];function r(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=a,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var l=d;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";s("85ec")},"1bbb":function(e,t,s){"use strict";s("d365")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=c,e.exports=n,n.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a,n,c=s("2b0e"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app",attrs:{id:"app"}},[s("h1",[e._v("Simple crypto chart component")]),s("chart")],1)},o=[],d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"chart-wrapper"},[e.load?s("lineChart",{attrs:{chartData:e.dataCollections,options:e.options,styles:e.styles}}):e._e(),s("div",{staticClass:"switcher"},e._l(e.currencys,(function(t){return s("div",{key:t.code,staticClass:"wrapper"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.currentCurrency,expression:"currentCurrency"}],staticClass:"state",attrs:{type:"radio",id:t.code},domProps:{value:t.code,checked:e._q(e.currentCurrency,t.code)},on:{change:function(s){e.currentCurrency=t.code}}}),s("label",{staticClass:"label",attrs:{for:t.code},on:{click:function(s){return e.getData(t.code)}}},[s("div",{staticClass:"indicator"}),s("span",{staticClass:"text"},[e._v(e._s(t.name))])])])})),0)],1)},i=[],l=(s("99af"),s("d81d"),s("6612")),f=s.n(l),u=s("bc3a"),j=s.n(u),b=(s("a9e3"),s("1fca")),p=b["b"].reactiveProp,h={extends:b["a"],mixins:[p],props:{width:{type:Number,validator:function(e){return e>0}},height:{type:Number,validator:function(e){return e>0}},chartData:{type:Object,default:null},options:{type:Object,default:null}},mounted:function(){this.renderChart(this.chartData,this.options)}},m=h,y=s("2877"),v=s("e078"),k=s.n(v),g=Object(y["a"])(m,a,n,!1,null,"d8ca8d64",null);"function"===typeof k.a&&k()(g);var w=g.exports,C=j.a.create({baseURL:"https://api.cryptonator.com/api/full/",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"application/json"},timeout:1e4}),z={name:"sales-chart",data:function(){return{styles:{height:"100%",width:"40%",position:"relative"},options:{scales:{yAxes:[{ticks:{callback:function(e){return f()(e).format("$0,0")}}}]},tooltips:{callbacks:{label:function(e,t){var s=t.datasets[e.datasetIndex].label,a=f()(e.yLabel).format("$0,0");return"".concat(s,": ").concat(a)}}},xAxes:[{gridLines:{display:!1}}],legend:{display:!0},responsive:!0,maintainAspectRatio:!1},currencys:[{code:"btc-usd",name:"Bitcoin"},{code:"eth-usd",name:"Ethereum"},{code:"xrp-usd",name:"XRP"},{code:"ltc-usd",name:"Litecoin"}],currentCurrency:"btc-usd",load:!1,dataPrice:null,dataMarkets:null,dataCollections:null}},components:{lineChart:w},methods:{getData:function(e){var t=this;C.get(e).then((function(e){var s=e.data.ticker.markets,a=s.map((function(e){return e.price})),n=s.map((function(e){return e.market}));t.dataPrice=a,t.dataMarkets=n,t.dataCollections={labels:t.dataMarkets,datasets:[{label:t.currentCurrency,backgroundColor:"#f87979",data:t.dataPrice}]},t.load=!0}))}},mounted:function(){this.getData(this.currentCurrency)}},x=z,O=(s("1bbb"),Object(y["a"])(x,d,i,!1,null,"dce11c6e",null)),_=O.exports,P={components:{chart:_}},D=P,M=(s("034f"),Object(y["a"])(D,r,o,!1,null,null,null)),S=M.exports;c["a"].config.productionTip=!1,new c["a"]({render:function(e){return e(S)}}).$mount("#app")},"85ec":function(e,t,s){},d365:function(e,t,s){},e078:function(e,t){}});
//# sourceMappingURL=app.8eb387ec.js.map