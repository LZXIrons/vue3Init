export function __vite_legacy_guard(){import("data:text/javascript,")}import"./vue.5d082aef.js";import{x as e,aQ as t,aJ as r,ak as o,E as n}from"./@vue.0aef26c7.js";import{c as s,a}from"./vue-router.b0bcfb65.js";import{c as i}from"./vuex.a7230e05.js";import"./lib-flexible.c3953932.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var c=(e,t)=>{const r=e.__vccOpts||e;for(const[o,n]of t)r[o]=n;return r};var m=c(e({name:"App",components:{}}),[["render",function(e,n,s,a,i,c){const m=t("router-view");return r(),o(m)}]]);const u={},l=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/${e}`)in u)return;u[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((t,r)=>{o.addEventListener("load",t),o.addEventListener("error",(()=>r(new Error(`Unable to preload CSS for ${e}`))))})):void 0}))).then((()=>e())):e()};var d=(e=>(e[e["中介服务报告"]=2]="中介服务报告",e[e["中检鉴定专家聘任书"]=3]="中检鉴定专家聘任书",e[e["中检注册鉴定能力证书"]=5]="中检注册鉴定能力证书",e[e["中检培训证书"]=6]="中检培训证书",e[e["诚信联盟证书"]=7]="诚信联盟证书",e[e["中检注册鉴定培训证书"]=8]="中检注册鉴定培训证书",e))(d||{});const p={home:()=>l((()=>import("./Home.20cfc011.js")),["static/Home.20cfc011.js","static/Home.9c9f3484.css","static/vue.5d082aef.js","static/@vue.0aef26c7.js","static/pinia.f7fd81aa.js","static/vue-demi.676a5766.js","static/vue-clipboard3.e41d131a.js","static/axios.6f0af5cc.js","static/clipboard.7e7f4b30.js","static/vant.c7cf87e3.js","static/vant.041dc6c4.css","static/@vant.540724d4.js","static/vue-router.b0bcfb65.js","static/vuex.a7230e05.js","static/lib-flexible.c3953932.js"]),about:()=>l((()=>import("./About.db51b293.js")),["static/About.db51b293.js","static/About.0b0888d1.css","static/vue.5d082aef.js","static/@vue.0aef26c7.js","static/vue-router.b0bcfb65.js","static/vuex.a7230e05.js","static/lib-flexible.c3953932.js"]),test:()=>l((()=>import("./test.1762d57f.js")),["static/test.1762d57f.js","static/test.79b7f473.css","static/vue.5d082aef.js","static/@vue.0aef26c7.js","static/vant.c7cf87e3.js","static/vant.041dc6c4.css","static/@vant.540724d4.js","static/vue-router.b0bcfb65.js","static/qs.2f20d989.js","static/axios.6f0af5cc.js","static/side-channel.4412d6ab.js","static/get-intrinsic.7ed2a058.js","static/has-symbols.fa6d536c.js","static/function-bind.2c866a66.js","static/has.344bacb8.js","static/call-bind.0a2ca051.js","static/object-inspect.ab567c6d.js","static/js-cookie.644bf133.js","static/vuex.a7230e05.js","static/lib-flexible.c3953932.js"])},f=[{path:"/",name:"Home",meta:{title:"Home"},component:p.home},{path:"/about",name:"About",meta:{title:"About"},component:p.about},{path:"/test",name:"Test",meta:{title:"Test"},component:p.test}],h=s({history:a(),routes:f});h.beforeEach(((e,t,r)=>{((e,t,r)=>{const o=e.matched.slice().reverse().find((e=>e.meta&&e.meta.title)),n=e.matched.slice().reverse().find((e=>e.meta&&e.meta.metaTags));if("write"===e.name?document.title=d[e.query.type]||o.meta.title:o&&(document.title=o.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((e=>{e.parentNode.removeChild(e)})),!n)return r();n.meta.metaTags.map((e=>{const t=document.createElement("meta");return Object.keys(e).forEach((r=>{t.setAttribute(r,e[r])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((e=>document.head.appendChild(e))),r()})(e,0,r)}));var v=i({state:{test:1},getters:{getTest:e=>e.test},mutations:{addTest(e){++e.test}},actions:{},modules:{}});n(m).use(window.vant).use(v).use(h).mount("#app");export{c as _};
