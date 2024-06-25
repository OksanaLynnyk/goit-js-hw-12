var b=Object.defineProperty;var w=(t,e,r)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r;var f=(t,e,r)=>(w(t,typeof e!="symbol"?e+"":e,r),r);import{a as L,S as $,i as h}from"./assets/vendor-b11e2a50.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function r(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(s){if(s.ep)return;s.ep=!0;const a=r(s);fetch(s.href,a)}})();const v="https://pixabay.com/api/",x="44402631-bf7d189f653a3e22d2fd50e44",P="photo",S="horizontal",E="true",u=15;class I{constructor(){this.page=1,this.searchQuery=""}async getImages(){const{data:e}=await L.get(`${v}?key=${x}&q=${this.searchQuery}&image_type=${P}&orientation=${S}&safesearch=${E}&per_page=${u}&page=${this.page}`);return this.incrementPage(),e}resetPage(){this.page=1}incrementPage(){this.page+=1}}const g={imageWrapper:document.querySelector(".js-imageWrapper")},C=new $(".img-card a");function O({webformatURL:t,largeImageURL:e,tags:r,likes:n,views:s,comments:a,downloads:c}){return`<div class="img-card">
            <a href="${e}"><img src="${t}" alt="${r}"></a> 
            <div class="text-wrapper">
            <p class="text">Likes<span class="wrapper">${n}</span></p>
            <p class="text">Views<span class="wrapper">${s}</span></p>
            <p class="text">Comments<span class="wrapper">${a}</span></p>
            <p class="text">Downloads<span class="wrapper">${c}</span></p></div>
            </div>`}function q(t){g.imageWrapper.insertAdjacentHTML("beforeend",t),C.refresh()}function m(){g.imageWrapper.innerHTML=""}const i=class i{constructor({selector:e,isHidden:r=!1}){this.button=this.getButton(e),r&&this.hide()}getButton(e){return document.querySelector(e)}hide(){this.button.classList.add(i.classes.hidden)}show(){this.button.classList.remove(i.classes.hidden)}disable(){this.button.disabled=!0,this.button.textContent="",this.button.classList.add(i.classes.loader)}enable(){this.button.disabled=!1,this.button.textContent="Load more",this.button.classList.remove(i.classes.loader)}};f(i,"classes",{hidden:"hidden",loader:"loader"});let p=i;function A(){const{height:t}=g.imageWrapper.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}const W={form:document.querySelector(".js-form")},l=new I,o=new p({selector:".loadMore",isHidden:!0});W.form.addEventListener("submit",H);o.button.addEventListener("click",t=>y(t));function H(t){t.preventDefault();const e=t.currentTarget,r=e.elements.image.value.trim();if(r==="")return h.warning({position:"topRight",title:"Caution",message:"You forgot important data"});l.searchQuery=r,l.resetPage(),o.show(),m(),y().finally(()=>{e.reset()})}async function y(t){o.disable();try{const e=await M();e&&q(e),t&&t.target===o.button&&A()}catch{d()}o.enable()}async function M(){try{const{hits:t,totalHits:e}=await l.getImages();return t.length===0?d():(t.length<u||l.page*u>e)&&(o.hide(),h.warning({position:"topRight",title:"Caution",message:"We are sorry, but you have reached the end of search results"})),t.reduce((r,n)=>r+O(n),"")}catch{d()}}function d(){o.hide(),h.error({position:"topRight",title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),m()}
//# sourceMappingURL=commonHelpers.js.map
