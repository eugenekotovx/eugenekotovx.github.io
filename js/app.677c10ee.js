(function(t){function e(e){for(var i,r,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&d.push(n[r][0]),n[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);p&&p(e);while(d.length)d.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],i=!0,r=1;r<a.length;r++){var c=a[r];0!==n[c]&&(i=!1)}i&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},s=[];function r(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"502e687e"}[t]+".js"}function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=n[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,i){a=n[t]=[e,i]}));e.push(a[2]=i);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=r(t);var l=new Error;s=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=n[t];if(0!==a){if(a){var i=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+s+")",l.name="ChunkLoadError",l.type=i,l.request=s,a[1](l)}n[t]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"21bb":function(t,e,a){"use strict";a("2dad")},"2dad":function(t,e,a){},"4f52":function(t,e,a){"use strict";a("df7a")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("router-view",{staticClass:"has-background-black\t"})],1)},s=[],r=(a("5c0b"),a("2877")),o={},c=Object(r["a"])(o,n,s,!1,null,null,null),l=c.exports,u=(a("d3b7"),a("8c4f")),p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",[a("Particles",{attrs:{id:"tsparticles",options:t.partOptions}}),a("div",{staticClass:"columns is-desktop"},[a("div",{staticClass:"column is-desktop is-half-widescreen"},[a("div",{staticClass:"hero contacts"},[a("div",{staticClass:"hero-body is-flex is-justify-content-center is-align-items-center"},[a("article",{staticClass:"media info is-flex is-justify-content-center is-align-items-center"},[a("figure",{staticClass:"media-left"},[a("p",{staticClass:"image is-64x64"},[a("img",{staticClass:"is-rounded",attrs:{src:t.avaSrc}})])]),t._m(0),t._m(1)])])])]),a("div",{staticClass:"column portfolio"},t._l(t.portfolio,(function(t){return a("div",{key:t.id,staticClass:"container mt-6"},[a("ProjectCard",{staticClass:"px-4",attrs:{card:t}})],1)})),0)])],1)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-content"},[a("div",{staticClass:"content"},[a("h1",{staticClass:"title is-4 has-text-left has-text-light"},[t._v(" Eugene Kotov ")]),a("h2",{staticClass:"subtitle is-6 has-text-left has-text-light"},[t._v(" Frontend-developer ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"media-right"},[a("a",{staticClass:"icon is-large ",attrs:{href:"https://github.com/eugenekotovx"}},[a("span",{staticClass:"mdi mdi-github mdi-light mdi-36px"})]),a("a",{staticClass:"icon is-large ",attrs:{href:"https://t.me/eugenekotovx"}},[a("span",{staticClass:"mdi mdi-telegram mdi-light mdi-36px"})]),a("a",{staticClass:"icon is-large ",attrs:{href:"mailto:mrkev2112x@gmail.com"}},[a("span",{staticClass:"mdi mdi-gmail mdi-light mdi-36px"})])])}],m={background:{},fpsLimit:60,interactivity:{detectsOn:"canvas",events:{onClick:{enable:!1,mode:"push"},onHover:{enable:!1,mode:"repulse"},resize:!0},modes:{bubble:{distance:900,duration:2,opacity:.2,size:4},push:{quantity:2},repulse:{distance:200,duration:.4}}},particles:{color:{value:"#ffffff"},links:{color:"#ffffff",distance:350,enable:!0,opacity:.5,width:1},collisions:{enable:!0},move:{direction:"none",enable:!0,outMode:"bounce",random:!1,speed:.5,straight:!1},number:{density:{enable:!0,value_area:800},value:15},opacity:{value:.5},shape:{type:"circle"},size:{random:!0,value:1}},detectRetina:!0},f=m,h=[{id:1,name:"Shop application",description:"Food market application with mock api, axios, infinite scroll and more interesting features!",img:"./shop-app.png",mainTag:"vuejs",projectLink:"/simple-shop-app",sourceLink:"https://github.com/eugenekotovx/simple-shop-app",tags:["Vue","Vuex","mock Api","axios","demo","SCSS","adaptive","BEM-methodology"]},{id:2,name:"Tinder weather application",img:"./tinder.png",mainTag:"vuejs",projectLink:"/tinder-weather-app",sourceLink:"https://github.com/eugenekotovx/tinder-weather-app",description:"Tinder-like application, but with openWeatherApi, Vuetify, axios and pretty theme switcher.",tags:["Vue","Vuex","openWeatherApi","axios","demo","Vuetify","themes","adaptive"]},{id:3,name:"Fancy card and comments",img:"./comments.png",mainTag:"language-javascript",projectLink:"/fancy-card-and-comments-js",sourceLink:"https://github.com/eugenekotovx/fancy-card-and-comments-js",description:"Demo project with pure JavaScript ES6 experience, Semantic-css and axios.",tags:["ES6","JavaScript","api","axios","demo","mockApi","adaptive"]},{id:4,name:"Simple chart component",img:"./chart.png",projectLink:"/simple-chart-component",sourceLink:"https://github.com/eugenekotovx/simple-chart-component",mainTag:"vuejs",description:"Demo component with vue-chart-js and crypto Api.",tags:["Vue","Chart.js","Axios","CSS","Demo","Axios"]},{id:5,name:"Landing page",img:"./agency.png",projectLink:"/next-gen-agency",sourceLink:"https://github.com/eugenekotovx/nextGen-agency",mainTag:"language-css3",description:"Demo project - practice HTML and CSS with a minimum amount of JS",tags:["HTML","SCSS","landing","jQuery","adaptive","BEM-methodology"]}],g=h,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"card box has-background-black-ter"},[a("div",{staticClass:"is-flex is-justify-content-space-between is-align-items-center title is-4"},[a("h3",{staticClass:"has-text-left has-text-light"},[t._v(t._s(t.card.name))]),a("span",{staticClass:"icon is-large "},[a("span",{staticClass:"mdi mdi-light mdi-22px",class:"mdi-"+t.card.mainTag})])]),a("div",{staticClass:"card-image"},[a("figure",{staticClass:"image m-3 mb-0 4by3"},[a("img",{attrs:{src:t.card.img,alt:"Placeholder image"}})])]),a("div",{staticClass:"card-content"},[a("div",{staticClass:"content has-text-light"},[t._v(" "+t._s(t.card.description)+" ")]),a("footer",{staticClass:"card-footer mb-2"},[a("a",{staticClass:"card-footer-item button is-light",attrs:{href:t.card.sourceLink}},[a("span",[t._v(" GitHub ")]),t._m(0)]),a("a",{staticClass:"card-footer-item button is-light ml-3",attrs:{href:t.card.projectLink}},[a("span",[t._v("Project")]),t._m(1)])]),t._l(t.card.tags,(function(e){return a("span",{key:e,staticClass:"tag is-black m-1"},[t._v(" "+t._s(e)+" ")])}))],2)])])},b=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-large "},[a("span",{staticClass:"mdi mdi-github mdi-black mdi-18px"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("span",{staticClass:"icon is-large "},[a("span",{staticClass:"mdi mdi-source-branch mdi-black mdi-18px"})])}],y={props:{card:{type:Object,required:!0}}},C=y,x=(a("4f52"),Object(r["a"])(C,v,b,!1,null,"7cbb8e9e",null)),k=x.exports,j={name:"Home",components:{ProjectCard:k},data:function(){return{avaSrc:"./av3a.jpg",portfolio:g,partOptions:f}}},_=j,w=(a("21bb"),Object(r["a"])(_,p,d,!1,null,null,null)),S=w.exports;i["a"].use(u["a"]);var L=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],O=new u["a"]({mode:"history",base:"/",routes:L}),E=O,T=(a("92c6"),a("5363"),a("d7da"));i["a"].use(T["a"]),i["a"].config.productionTip=!1,new i["a"]({router:E,render:function(t){return t(l)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"9c0c":function(t,e,a){},df7a:function(t,e,a){}});
//# sourceMappingURL=app.677c10ee.js.map