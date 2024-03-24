/* USF file - DO NOT MODIFY THIS FILE. THIS FILE IS REGULARLY CHANGED BY USF APP AND **ANY DIRECT CHANGES WILL BE LOST**. Use our in-app customization if you need to update CSS and JS code. Auto modified at: 3/24/2024 12:12:18 PM*/
!function(){function e(e){return"[object Function]"===Object.prototype.toString.call(e)}function t(e){return"string"==typeof e||e instanceof String}function r(r){var n;r={config:r}.config;var i=new XMLHttpRequest,s=r.type||"GET",a="GET"===s?function(r){var n,i,s=r.data;if(!s)return r.url;if(e(s)&&(s=s()),!t(s)){var a=[];for(var o in s)a.push(o+"="+encodeURIComponent(s[o]));s=a.join("&")}return n=r.url,(i=s)?n.includes("?")?n+"&"+i:n+"?"+i:n}(r):r.url;i.open(s,a,!0),i.timeout=r.timeout,i.setRequestHeader("Content-Type",r.contentType||"application/x-www-form-urlencoded");var o=r.error,u=!1,l=!1,c={abort:function(){u=!0,l=!0,i.abort(),r.abort&&r.abort.apply(r,[i])}};i.onreadystatechange=function(){4==i.readyState&&(i.status>=200&&i.status<400?r.success&&r.success.apply(r,[function(e,t){switch(e.dataType){case"json":return JSON.parse(t.responseText);default:return t.responseText}}(r,i),{xhr:i,redirected:function(e,t){for(var r=0,n=t.response;r<n.length;){var i=n[r++];if("\t"!==i&&" "!==i&&"\r"!==i&&"\n"!==i)return"<"===i&&-1!==n.indexOf("<html")}}(0,i),config:r}]):o&&!u&&(u=!0,o.apply(r,[i,i.status,null,{xhr:i,config:r}])))},i.onerror=function(e){o&&!u&&(u=!0,o.apply(r,[i,i.status,e]))},i.ontimeout=function(e){o&&!u&&(u=!0,o.apply(r,[i,"timeout",e]))},i.onabort=function(e){l||(u=!0,l=!0,r.abort&&r.abort.apply(r,[i]))};var f=r.data;e(f)&&(f=f());try{i.send(f)}catch(n){o&&!u&&(u=!0,o.apply(r,[i,i.status,n]))}return c}var n=function(){this.list={}};n.prototype={add(e,t){if(Array.isArray(e))for(var r=e.length,n=0;n<r;n++)this.add(e[n],t);else{var i=this.list[e];i||(this.list[e]=i=[]),i.push(t)}},remove(e,t){t||delete this.list[e];var r=this.list[e];r.splice(r.indexOf(t),1)},raise(e,t,r){if(window.usf_container||"rerender"!==e){var n=this.list[e];if(n)for(var i=0;i<n.length;i++)n[i](t,r);else;}}},window.usf||(window.usf={});var i,s=usf.settings;usf.components={},usf.collectionsByUrlName={},usf.EventHub=n,usf.event=i=new n;var a,o,u=s.instantSearch.online,l=s.search.online,c=function(e){if(this.list=[],e)for(var t=0;t<e.length;t++)this.push(e[t]);var r=this,n=!1;window.addEventListener("pagehide",function(){if(!n&&r.list.length){var e=s.analyticsApiUrl;if(void 0!==navigator.sendBeacon){var t=navigator.sendBeacon(e,JSON.stringify({events:r.list,time:new Date}));n=t}else{var i="events="+encodeURIComponent(JSON.stringify(r.list))+"&time="+(new Date).toISOString(),a=new XMLHttpRequest;a.open("POST",e,!1),a.setRequestHeader("Content-Type","text/plain;charset=UTF-8"),a.send(i)}r.list=[]}})};c.prototype={push(e){"function"==typeof e&&(e=e.apply(this)),e.length&&this[e[0]].apply(this,e.slice(1,e.length)),this.list.push(e)},track(e,t){t.event=e,t.siteId=s.siteId,t.time=new Date,this.list.push(t)}},window._usfaq=new c(window._usfaq);var f,d,h,p,g,m,y,_={List:0,Box:1,Swatch:2};function w(e){if(e&&!d){var t=document.createElement("div");t.innerHTML=e,usf_container.parentNode.insertBefore(t,usf_container),d=1,C.redirectToOriginalView()}}function b(e,t,r){var n;function u(s){if(r)if(f){var o=f;f=s,o()}else f=s;else!function(s){ne(),a=null,e.loader=!1,r||i.raise("sr_dataReceived",e,s.data);var o=s.data.redirect;o&&e.onRedirect(o);if(t&&e.result&&c)1===t?e.result.items=e.result.items.concat(s.data.items):e.result.items.unshift(...s.data.items);else{if(c&&q.take>s.data.total+q.itemsPerPage)return void(q.take=q.itemsPerPage);e.result={},Object.assign(e.result,s.data)}usf.currency=s.data.currency;var u=s.data.facets;if(e.hasFacets=u&&u.length,e.hasFacets){for(var l=!1,f=0;f<u.length;f++){var d=u[f];(d.labels.length||void 0!==d.min||d.navigationCollectionsKeepMain&&d.navigationCollectionsMenu.length)&&(l=!0),d.displayMode=_[d.display]}l||(e.hasFacets=!1)}2===t||(e.itemsLoaded+=s.data.items.length);var p=s.data.extra;if(p){var v=p.collections;if(v)for(var g=usf.collectionsByUrlName={},f=0;f<v.length;f++){var m=v[f];g[m.urlName]=m}w(p.message)}document.body.classList[e.noFacets?"add":"remove"]("usf-has-no-facets"),r||e.$nextTick(()=>{i.raise("sr_updated",e,s.data),n&&window.addEventListener("load",()=>S(n)),!h&&usf._ios&&(h=1,window.addEventListener("pageshow",function(){try{var e=sessionStorage.getItem("usfVP");e&&S(e=JSON.parse(e))}catch(e){}}))})}(s=JSON.parse(s))}var l=s.search.more,c="more"===l||"infinite"===l;if(G){try{n=sessionStorage.getItem("usfVP")}catch(e){}if(n&&(n=JSON.parse(n),!p&&c&&n.take!==q.take))return q.take=n.take,void(p=1)}if(e.loader||(e._refreshTime=(new Date).getTime()),c&&!t){var d=0,v=q.take,g=s.search.itemsPerPage;v>g&&(d=Math.floor((v-1)/g)*g,e.itemsOffset=d),e.itemsLoaded=d}if(r||(e.loader=1===t?"more":2!==t||"prev",i.raise("sr_updating",e,null)),r)f=null;else if(void 0!==f){function m(){u(f),f=void 0}return void(null===f?f=m:m())}var y={q:P(e.term),apiKey:s.siteId},k=C.country;k&&(y.country=k);var T=C.locale;T&&(y.locale=T),window._usfGetProductDescription||(y.getProductDescription=0);var E=C.customerTags;E&&E.length&&(y.customerTags=E.join(","));var L,U=e.facetFilters,O={query:y,filters:U};if(C.onSearch(O),(U=O.filters)&&(y.facetFilters=JSON.stringify(U)),c?(L=2===t?e.itemsOffset:e.itemsLoaded,v=e.itemsPerPage):(L=(e.page-1)*e.itemsPerPage,v=e.itemsPerPage),y.skip=L,y.take=v,e.sortBy&&"r"!==e.sortBy&&(y.sort=e.sortBy),!e.itemsLoaded&&o!==e.term&&(o=e.term,e.term)){var I=e.result;_usfaq.track("search",{term:e.term,isEmpty:I&&!I.items.length&&!U})}a&&a.abort(),a=usf.utils.send({url:s.searchSvcUrl+"search",data:y,startTime:e._refreshTime,success:u,error:function(r,n,i){403!==n?setTimeout(()=>{f=void 0;var r=usf.search;r._refreshTime=e._refreshTime,b(r,t)},3e3):w(JSON.parse(r.response).meta.description)}})}function S(e){try{sessionStorage.removeItem("usfVP")}catch(e){}setTimeout(function(){var t=usf_container.querySelector('.usf-results [data-usf-pid="'+e.id+'"]');if(t&&!function(e){const t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}(t)){var r=t.getBoundingClientRect();window.scrollBy(0,r.top-e.y)}},window._usfScrollDelay||200)}function P(e){for(var t=0;t<e.length&&" "===e[t];)t++;return t>0&&(e=e.substr(t)),e.toLocaleLowerCase().replace(/[*\?]/g,"")}usf._refineTerm=P;var k=location.pathname.toLowerCase();usf.platform={name:"shopify",termVar:"q",get country(){return Shopify.country},isCollectionPage:-1!==k.indexOf("/collections/")&&-1===k.indexOf("/products/"),get collection(){if(m)return m;var e=C.collectionWithParams;if(e){var t=e.lastIndexOf("/");-1!==t&&(e=e.substring(0,t)),m=e}return e},set collection(e){m=e},get locale(){return _usfLocale},get baseUrl(){return void 0===g&&"/"===(g=_usfRootUrl)&&(g=""),g},get collectionWithParams(){var e=k,t=C.baseUrl;if(e.startsWith(t+"/collections/"))return decodeURIComponent(e.substring(t.length+13))},get tagUrlName(){if(void 0===y){var e=C.collectionWithParams;if(e){var t=e.lastIndexOf("/");y=-1!==t?e.substring(t+1):null}}return y},get customerTags(){return _usfCustomerTags},onSearch(e){if("vendors"===C.collection){var t=$.get("q");t&&(e.query.q="",e.filters||(e.filters={}),e.filters._usf_vendor=["vendor",[t]])}var r=_usfCollectionId||"",n=C.tagUrlName;n&&(r+="/"+n),(r||C.isCollectionPage)&&(e.query.collection=r)},init(){_usfTheme.applied&&(s.search.searchResultsUrl="/search")},redirectToOriginalView(){var e=location.href;-1===e.indexOf("no-usf")&&(location=e+(-1===e.indexOf("?")?"?":"&")+"view=no-usf")}};var C=usf.platform;const T="_usf_";function E(e){for(var t=e.changed,r=0;r<t.length;r++)t[r]()}var L=function(e){this.canChangeUrl=e,this.changed=[];var t=this;history.pushState=(e=>(function(){var r=e.apply(this,arguments);return E(t),r}))(history.pushState),history.replaceState=(e=>(function(){var r=e.apply(this,arguments);return E(t),r}))(history.replaceState),window.addEventListener("popstate",()=>E(t))};function U(e){return e=e.replace(/\+/g," "),decodeURIComponent(e)}var O=function(e){for(var t=e?e.substring(1).split("&"):[],r=[],n=0;n<t.length;n++){var i=t[n].split("="),s=i[1];if(void 0!==s){var a=s.split(T);if(a.length>1)for(var o=0;o<a.length;o++)a[o]=U(a[o]);else a=U(s);r.push([U(i[0]),a])}}this.entries=r};function I(e){if(Array.isArray(e)){for(var t=[],r=0;r<e.length;r++)t.push(encodeURIComponent(e[r]));return t.join(T)}return encodeURIComponent(e)}O.prototype={get(e,t){var r=this.entries.find(t=>t[0]===e);return r?r[1]:t},append(e,t){this.entries.find(r=>r[0]===e&&r[1]===t)||this.entries.push([e,t])},set(e,t){var r=this.entries.find(t=>t[0]===e);r?r[1]=t:this.entries.push([e,t])},toString(){var e=this.entries;if(!e.length)return"";for(var t=[],r=0;r<e.length;r++){var n=e[r];t[r]=encodeURIComponent(n[0])+"="+I(n[1])}return"?"+t.join("&")},delete(e,t){for(var r=this.entries.length-1;r>=0;r--){var n=this.entries[r];F(e,decodeURIComponent(n[0]))&&(t&&decodeURIComponent(n[1])!==t||this.entries.splice(r,1))}}},usf.URLSearchParams=O;var R=location.search;function x(e,t,r,n){if(!1!==r){if(n.canChangeUrl){var i=U(location.search)!==U(e);return r||i?(e=location.pathname+e,t||!i?history.replaceState({},"",e):history.pushState({},"",e),!0):void 0}e!==R&&(R=e,E(n))}}function F(e,r){return t(e)?e===r:e.test(r)}function N(e,t,r){Object.keys(t).forEach(n=>{(function(t,r){for(var n=0;n<e.entries;n++){var i=e.entries[n];if(i[0]===t&&i[1]===r)return!0}})(n,t[n])||e[r.append?"append":"set"](n,t[n])})}L.prototype={get(e,t){return new O(this.getSearch()).get(e,t)},entries(){return new O(this.getSearch()).entries},snapshot(){this._snapshot=this.entries()},getSearch(){return this.canChangeUrl?location.search:R},getChanges(){var e=this.entries(),t=this._snapshot;if(!t)return e;var r=[];return e.forEach(e=>{t.find(t=>t[0]===e[0]&&JSON.stringify(t[1])===JSON.stringify(e[1]))||r.push(e)}),t.forEach(t=>{e.find(e=>e[0]===t[0])||r.push([t[0]])}),r},update(e,t,r){var n=new O(this.getSearch());if(r||(r={}),t)if(t.length)t.forEach(e=>n.delete(e));else for(var i=n.entries.length-1;i>=0;i--){var s=n.entries[i],a=s[0];if(t.hasOwnProperty(a)){var o=t[a];s[1]===o&&n.delete(a,o)}}return e&&N(n,e,r),x(n.toString(),r.replace,r.force,this)},add(e,t){var r=new O(this.getSearch());return t||(t={}),N(r,e,t),x(r.toString(),t.replace,t.force,this)},remove(e){var r,n=new O(this.getSearch()),i=arguments.length;if(i>=2&&"object"==typeof(r=arguments[i-1])&&r&&i--,2===i&&(u=arguments[1]))for(var s=0;s<n.entries.length;s++){if((a=n.entries[s])[0]===e&&a[1]===u){n.delete(e,u);break}}else if(t(e))for(s=0;s<n.entries.length;s++){if((a=n.entries[s])[0]===e){n.delete(e);break}}else if(e.length)e.forEach(e=>{e&&(Array.isArray(e)?n.delete(e[0],e[1]):n.delete(e))});else for(s=n.entries.length-1;s>=0;s--){var a,o=(a=n.entries[s])[0];if(e.hasOwnProperty(o)){var u=e[o];a[1]===u&&n.delete(o,u)}}return r||(r={}),x(n.toString(),r.replace,r.force,this)}},usf.Query=L;function A(){}A.prototype={get term(){return $.get(C.termVar,"")},set term(e){var t={};t[C.termVar]=e,$.update(t,[/uff_.*/,/usf_.*/,"page"],{force:!0})},getTermQuery:e=>C.termVar+"="+encodeURIComponent(e),get page(){return parseInt($.get("page"))||1},set page(e){if(e<=1)$.remove("page");else{var t={};t.page=e,$.add(t)}},get take(){return parseInt($.get("usf_take"))||s.search.itemsPerPage},set take(e){e?(v={},v.usf_take=e,$.update(v)):$.remove("usf_take")},get itemsPerPage(){return function(e,t){var r=parseInt(e)||t;r>t&&(r=t);return r}($.get("usf_ipp"),s.search.itemsPerPage)},getPageUrl(e){if(this.p===this.page)return"javascript:void(0)";var t=new URL(window.location.href),r=t.searchParams;return!e||e<=1?r.delete("page"):r.set("page",e),t.toString()},get facetFilters(){for(var e,t=$.entries(),r={},n=0;n<t.length;n++){var i=t[n],s=i[0];if(s.startsWith("uff_")){var a="uff_".length,o=s.indexOf("_",a),u=s.substring(a,o);u=parseInt(u,36);var l=s.substr(o+1),c=i[1];Array.isArray(c)||(c=[c]),r[u]=[l,c],e=!0}}return e?r:null},set facetFilters(e){if(Object.keys(e).length){var t,r={};for(var n in e){var i=e[n];r["uff_"+(t=n,parseInt(t).toString(36))+"_"+i[0]]=i[1]}$.update(r,[/uff_.*/,"page"])}else this.removeAllFacetFilters()},get view(){return $.get("usf_view","grid")},set view(e){if(e){var t={};t.usf_view=e,$.add(t)}else $.remove("usf_view")},isViewChanged:e=>1!==e.length||"usf_view"!==e[0][0],get sort(){var e=$.get("usf_sort");if(e)return e;var t=s.search.sortFields;return t?t[0]:""},set sort(e){if(e){var t={};t.usf_sort=e,$.add(t)}else $.remove("usf_sort")},removeAllFacetFilters(){$.remove([/uff_.*/,"page"])},addChangedEventListener(e){$.changed.push(e)}};var q=new A;usf.queryRewriter=q;var B=function(e){if(this.plugins=[],e)for(var t=0;t<e.length;t++)this.push(e[t])};function M(e,t,r,n){var i,s,a;if(!n)for(s=document.getElementsByTagName("link"),a=0;a<s.length;a++)if(s[a].href.endsWith(e))return!1;return(i=document.createElement("link")).setAttribute("rel","stylesheet"),i.setAttribute("type","text/css"),i.setAttribute("href",e),t&&(i.onload=t),r&&(i.onerror=r),document.head.appendChild(i),!0}function j(e,t,r,n){var i,s,a;if(!n)for(s=document.getElementsByTagName("script"),a=0;a<s.length;a++){var o=s[a].src;if(o&&o.endsWith(e))return!1}return(i=document.createElement("script")).setAttribute("type","text/javascript"),i.setAttribute("src",e),i.async=!0,t&&(i.onload=t),r&&(i.onerror=r),document.head.appendChild(i),!0}function D(e,t,r,n){for(var i=0,s=0,a=0;a<e.length;a++){var o,u=e[a];r?(0,o=j):o=M,o(u,function(){++i===s&&t()},null,n)&&s++}s===i&&t()}function H(e,t,r,n){if(!e)throw new Error("Element must be set.");if(e.length)for(var i=0;i<e.length;i++)H(e[i],t,r,n);else if(e._r_events||(e._r_events={}),"string"==typeof t)r&&(n||(n={}),function(e,t,r,n){var i,s=e._r_events[t];s||(e._r_events[t]=s=[]);i=function(t){return r.call(e,t)},e.addEventListener(t,i,n),s[s.length]={handler:r,browserHandler:i,options:n}}(e,t,r,n));else for(var s in t){H(e,s,t[s],r)}}function V(e){"loading"===document.readyState?document.addEventListener("DOMContentLoaded",e):e()}function J(e){Q&&(Q=[],delete Q),i.raise("is_hide",e)}function W(e,t){ee(function(){!function(e,t){if(usf.platform.collection&&e.closest(".usf-sr-inputbox"))return;(t||e.value)&&i.raise("is_show",e)}(e,t)})}B.prototype={push(e){this.plugins.push(e)},invoke(e,t){return function e(t,r,n,i){if(!(r>=t.length)){var s=t[r],a=s[n];if(a){var o=i.slice(0,i.length);return o.push(function(){if(r<t.length-1)return e(t,r+1,n,i)}),a.apply(s,o)}return e(t,r+1,n,i)}}(this.plugins,0,e,t)},has(e){for(var t=this.plugins,r=0;r<t.length;r++)if(t[r][e])return!0}},usf.plugins=new B(usf.plugins)/* Begin plugin code */
/* End plugin code */
usf.utils={on:H,off:function(e,t,r){if(e._r_events&&t){var n=null,i=e._r_events[t]||[];if(void 0!==r){for(var s=0,a=i.length;s<a;s++)if(i[s].handler===r){n=i[s].browserHandler;break}e.removeEventListener(t,n),i.splice(s,1)}else if("string"==typeof t){for(s=0,a=i.length;s<a;s++)n=i[s].browserHandler,e.removeEventListener(t,n);delete e._r_events[t]}else for(var o in t){for(r=t[o],s=0,a=(i=e._r_events[o]||[]).length;s<a;s++)if(i[s].handler===r){n=i[s].browserHandler;break}e.removeEventListener(o,n),i.splice(s,1)}}},loadJsFile:j,loadFiles:D,ready:V,installSearchInput:Z,hideInstantSearch:J,loadAndShowInstantSearch:W,stopEvent:(e,t)=>!!e&&(e.preventDefault&&e.preventDefault(),t||(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0),e.returnValue=!1,!1),send(e,t){var n=e.startTime||(new Date).getTime();if(!e._errorModified){var i=2500,s=e.error;e.timeout=i,e._errorModified=1,e.error=function(r){var a;if((new Date).getTime()-n>=i)return e.url=(a=e.url).includes("fallback")?a:a.replace(/svc-(\d+)-/,"svc-$1-fallback-"),delete e.timeout,setTimeout(()=>usf.utils.send.apply(this,[e,t]),200),void(i=1500);s.apply(this,arguments)}}if(!t){var a=usf.plugins.invoke("send",[e]);if(void 0!==a)return a}return r(e)}},usf.fetch=b;var G=window.performance&&window.performance.navigation.type===window.performance.navigation.TYPE_BACK_FORWARD;usf.query=new L(s.search.canChangeUrl);var K,z,Q,X,$=usf.query;function Y(e){if(!e.target._usf_no_popup){var t=e.target;t.value?W(t):J(t)}}function Z(e,t){if(e&&(u||l)){var r,n,i,a=e.parentNode;if(!a.classList.contains("usf-sr-inputbox")){var o=e.cloneNode(!0);a.replaceChild(o,e),e=o}for(;"FORM"!==a.tagName;)if((a=a.parentNode)===document.body){a=null;break}if(K=C.baseUrl+s.search.searchResultsUrl,a&&l&&(a.action=K,a.onsubmit=function(t){var r=window.usf_container;return location.pathname.includes(K)||r&&e.closest(".usf-sr-inputbox")?(q.term=e.value,r&&r.click(),J(e)):location=K+"?"+C.termVar+"="+encodeURIComponent(e.value),usf.utils.stopEvent(t)}),e._usf_no_popup=t,e.setAttribute("autocomplete","off"),u){var c={input:(r=Y,n=180,function(){var e=this,t=arguments;i&&clearTimeout(i),i=setTimeout(function(){i=null,r.apply(e,t)},n)}),keydown:function(e){13===e.keyCode&&(usf.utils.stopEvent(e),a&&l?a.onsubmit():location=K+"?"+C.termVar+"="+encodeURIComponent(e.target.value))},click:t?null:function(e){return W(e.target,window._usfForceIs),usf.utils.stopEvent(e)}};H(e,c)}}}function ee(e){if(2!==z)if(1!==z){var t;z=1;var r=[(t=_usfTheme.assetUrl.replace("usf-boot.js","{0}")).replace("{0}","usf.js")],n=[t.replace("{0}","usf.css")];i.raise("preinit"),e||b({term:q.term,itemsPerPage:q.itemsPerPage,page:q.page,facetFilters:q.facetFilters,sortBy:q.sort},0,!0),D(r,function(){z=2,Q&&(Q.forEach(e=>e()),delete Q),K=C.baseUrl+s.search.searchResultsUrl,e&&e(),V(function(){i.raise("init")})},1,!0),D(n,function(){},0,!0)}else e&&(Q||(Q=[]),Q.push(e));else e&&e()}if(s.online){/* Begin theme init code */
/* End theme init code */
C.init();var te=location.pathname,re=usf._canLoadContainer=(C.isCollectionPage?s.collections.online:-1!==te.indexOf(s.search.searchResultsUrl)&&s.search.online)||window._usfHasContainer;re&&ee(),V(function(){var e=document.body.classList;function t(){/* Begin theme ready code */

if (usf.settings.instantSearch.online && usf.isMobile) {
    var btn = document.querySelector((usf.isMobile ? '.header__mobile__button' : '.header__desktop') + ' [data-popdown-toggle]');
    if (btn)
        btn.addEventListener('click', function () {
            event.preventDefault();
            var target = document.createElement('input');
            usf.utils.loadAndShowInstantSearch(target, true);
        })
        
    // still register to 'is_show' event to hide the drawer.
    usf.event.add('is_show', function () {
        setTimeout(() => {
            document.dispatchEvent(new CustomEvent("theme:scroll:unlock", {
                bubbles: !0
            }))
    
            var btn = document.querySelector('.search__popdown__close__inner');
            if (btn) btn.click();

            // refocus on our input box
            usf.instantSearch.focus();
        }, 300);
    });
}
/* End theme ready code */
u&&s.instantSearch.searchBoxSelector.split(",").forEach(e=>{for(var t=document.body.querySelectorAll(e),r=0;r<t.length;r++)Z(t[r])}),document.body.addEventListener("keyup",function(e){9==e.keyCode&&document.body.classList.add("usf-wc")}),document.addEventListener("click",function(e){document.body.classList.remove("usf-wc")})}ne(),s.darkMode&&e.add("usf-dark"),re&&window.usf_container&&(e.add("usf-has-container"),C.isCollectionPage&&e.add("usf-collections-page"),e.add(s.filters.horz?"usf-horz-layout":"usf-vert-layout")),usf.isMobile?window.addEventListener("load",t):t()})}function ne(){X||(X=1,(usf.isMobile=document.body.clientWidth<s.mobileBreakpoint)&&(document.body.classList.add("usf-mobile"),usf.isMobileFilter=!s.filters.desktopLikeMobile))}}();