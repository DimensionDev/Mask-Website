(self.webpackChunkmask_website=self.webpackChunkmask_website||[]).push([[950],{1594:function(e){e.exports=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var r,s,o,c=navigator.userAgent||"",l=function(e,t){for(var a=window.isNaN,n=e.split("."),i=t.split("."),r=0;r<3;r++){var s=Number(n[r]),o=Number(i[r]);if(s>o)return 1;if(o>s)return-1;if(!a(s)&&a(o))return 1;if(a(s)&&!a(o))return-1}return 0},d=function(){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return Number.parseInt(e[1],10)},u=function(){return navigator.appVersion.match(/micromessenger\/(\d+\.\d+\.\d+)/i)[1]},m=/android/i.test(c),p=/iphone|ipad|ipod/i.test(c),g=/micromessenger\/([\d.]+)/i.test(c),f=/(weibo).*weibo__([\d.]+)/i.test(c),h=/(baiduboxapp)\/([\d.]+)/i.test(c),b=/qq\/([\d.]+)/i.test(c),y=/(qqbrowser)\/([\d.]+)/i.test(c),w=/qzone\/.*_qz_([\d.]+)/i.test(c),x=/chrome\/[\d.]+ mobile safari\/[\d.]+/i.test(c)&&m&&c.indexOf("Version")<0;function N(e){var t=void 0!==e?Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&"):"";return t?"?".concat(t):""}function v(e,t){var a=e.path,n=e.param,i=t.scheme,r=t.buildScheme;if(void 0!==r)return r(e,t);var s=i.host,o=i.port,c=i.protocol,l=o?":".concat(o):"",d=s?"".concat(s).concat(l,"/"):"",u=N(n);return"".concat(c,"://").concat(d).concat(a).concat(u)}function M(e,t){var a=t.outChain,n=v(e,t);if(void 0!==a&&a){var i=a.protocol,r=a.path,s=a.key;n="".concat(i,"://").concat(r,"?").concat(s,"=").concat(encodeURIComponent(n))}return n}function A(e,t){var a=t.outChain,n=t.intent,i=t.fallback;if(void 0===n)return"";var r=Object.keys(n).map((function(e){return"".concat(e,"=").concat(n[e],";")})).join(""),s="#Intent;".concat(r,"S.browser_fallback_url=").concat(encodeURIComponent(i),";end;"),o=v(e,t);if(void 0!==a&&a){var c=a.path,l=a.key;return"intent://".concat(c,"?").concat(l,"=").concat(encodeURIComponent(o)).concat(s)}return o=o.slice(o.indexOf("//")+2),"intent://".concat(o).concat(s)}function I(e,t){var a=t.universal;if(void 0===a)return"";var n=a.host,i=a.pathKey,r=e.path,s=N(e.param),o="https://".concat(n,"/").concat(r).concat(s),c="https://".concat(n,"?").concat(i,"=").concat(r).concat(s.replace("?","&"));return i?c:o}function k(e,t){var a=M(e,t);return"".concat(t.yingyongbao,"&android_schema=").concat(encodeURIComponent(a))}function E(){"undefined"!=typeof document&&(void 0!==document.hidden?(r="hidden",s="visibilitychange"):void 0!==document.msHidden?(r="msHidden",s="msvisibilitychange"):void 0!==document.webkitHidden&&(r="webkitHidden",s="webkitvisibilitychange"))}function L(){return void 0!==r&&document[r]}function T(e){window.top.location.href=e}function j(e){var t=document.createElement("a");t.setAttribute("href",e),t.style.display="none",document.body.appendChild(t),t.click()}function S(e){o||((o=document.createElement("iframe")).style.cssText="display:none;border:0;width:0;height:0;",document.body.appendChild(o)),o.src=e}function z(e,t){var a=setTimeout((function(){L()||e()}),t);void 0!==s?document.addEventListener(s,(function(){clearTimeout(a)})):window.addEventListener("pagehide",(function(){clearTimeout(a)}))}return E(),function(){function t(a){e(this,t),n(this,"options",void 0);var r={timeout:2e3};this.options=i(r,a)}return a(t,[{key:"generateScheme",value:function(e){return M(e,this.options)}},{key:"generateIntent",value:function(e){return A(e,this.options)}},{key:"generateUniversalLink",value:function(e){return I(e,this.options)}},{key:"generateYingYongBao",value:function(e){return k(e,this.options)}},{key:"checkOpen",value:function(e){var t=this.options,a=t.logFunc;return z((function(){void 0!==a&&a("failure"),e()}),t.timeout)}},{key:"fallToAppStore",value:function(){var e=this;this.checkOpen((function(){T(e.options.appstore)}))}},{key:"fallToFbUrl",value:function(){var e=this;this.checkOpen((function(){T(e.options.fallback)}))}},{key:"fallToCustomCb",value:function(e){this.checkOpen((function(){e()}))}},{key:"open",value:function(e){var t,a=this.options,n=a.universal,i=a.appstore,r=a.logFunc,s=a.intent,o=e.callback,c=void 0!==n,m=this.generateScheme(e);void 0!==r&&r("pending");var N=!!this.options.isSupportWeibo;p?g&&-1===l(u(),"7.0.5")||f&&!N?T(i):d()<9?(S(m),t=this.fallToAppStore):!c||b||y||w?(j(m),t=this.fallToAppStore):T(this.generateUniversalLink(e)):g&&void 0!==this.options.yingyongbao?T(this.generateYingYongBao(e)):x?void 0!==s?T(this.generateIntent(e)):(T(m),t=this.fallToFbUrl):g||h||f&&!N||w?T(this.options.fallback):(S(m),t=this.fallToFbUrl),void 0===o?t&&t.call(this):this.fallToCustomCb(o)}}]),t}()}()},4811:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,n=!1;for(let i=0;i<e.length;i++){const r=e[i];t&&/[a-zA-Z]/.test(r)&&r.toUpperCase()===r?(e=e.slice(0,i)+"-"+e.slice(i),t=!1,n=a,a=!0,i++):a&&n&&/[a-zA-Z]/.test(r)&&r.toLowerCase()===r?(e=e.slice(0,i-1)+"-"+e.slice(i-1),n=a,a=!1,t=!0):(t=r.toLowerCase()===r&&r.toUpperCase()!==r,n=a,a=r.toUpperCase()===r&&r.toLowerCase()!==r)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},3723:function(e,t,a){"use strict";a.d(t,{L:function(){return p},M:function(){return N},P:function(){return x},S:function(){return D},_:function(){return o},a:function(){return s},b:function(){return l},g:function(){return d},h:function(){return c}});var n=a(7294),i=(a(4811),a(5697)),r=a.n(i);function s(){return s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t.indexOf(a=r[n])>=0||(i[a]=e[a]);return i}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function l(e,t,a,n,i){return void 0===i&&(i={}),s({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:s({},i,{opacity:t?1:0})})}function d(e,t,a,n,i,r,o,c){const l={};r&&(l.backgroundColor=r,"fixed"===a?(l.width=n,l.height=i,l.backgroundColor=r,l.position="relative"):("constrained"===a||"fullWidth"===a)&&(l.position="absolute",l.top=0,l.left=0,l.bottom=0,l.right=0)),o&&(l.objectFit=o),c&&(l.objectPosition=c);const d=s({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:s({opacity:t?0:1,transition:"opacity 500ms linear"},l)});return d}const u=["children"],m=function(e){let{layout:t,width:a,height:i}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:i/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+i+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},p=function(e){let{children:t}=e,a=o(e,u);return n.createElement(n.Fragment,null,n.createElement(m,s({},a)),t,null)},g=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:a,loading:i,alt:r="",shouldLoad:c}=e,l=o(e,g);return n.createElement("img",s({},l,{decoding:"async",loading:i,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:r}))},b=function(e){let{fallback:t,sources:a=[],shouldLoad:i=!0}=e,r=o(e,f);const c=r.sizes||(null==t?void 0:t.sizes),l=n.createElement(h,s({},r,t,{sizes:c,shouldLoad:i}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:r}=e;return n.createElement("source",{key:t+"-"+r+"-"+a,type:r,media:t,srcSet:i?a:void 0,"data-srcset":i?void 0:a,sizes:c})})),l):l};var y;h.propTypes={src:i.string.isRequired,alt:i.string.isRequired,sizes:i.string,srcSet:i.string,shouldLoad:i.bool},b.displayName="Picture",b.propTypes={alt:i.string.isRequired,shouldLoad:i.bool,fallback:i.exact({src:i.string.isRequired,srcSet:i.string,sizes:i.string}),sources:i.arrayOf(i.oneOfType([i.exact({media:i.string.isRequired,type:i.string,sizes:i.string,srcSet:i.string.isRequired}),i.exact({media:i.string,type:i.string.isRequired,sizes:i.string,srcSet:i.string.isRequired})]))};const w=["fallback"],x=function(e){let{fallback:t}=e,a=o(e,w);return t?n.createElement(b,s({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",s({},a))};x.displayName="Placeholder",x.propTypes={fallback:i.string,sources:null==(y=b.propTypes)?void 0:y.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const N=function(e){return n.createElement(n.Fragment,null,n.createElement(b,s({},e)),n.createElement("noscript",null,n.createElement(b,s({},e,{shouldLoad:!0}))))};N.displayName="MainImage",N.propTypes=b.propTypes;const v=function(e,t,a){for(var n=arguments.length,i=new Array(n>3?n-3:0),s=3;s<n;s++)i[s-3]=arguments[s];return e.alt||""===e.alt?r().string.apply(r(),[e,t,a].concat(i)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},M={image:r().object.isRequired,alt:v},A=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],k=new Set;let E,L;const T=function(e){let{as:t="div",image:i,style:r,backgroundColor:l,className:d,class:u,onStartLoad:m,onLoad:p,onError:g}=e,f=o(e,A);const{width:h,height:b,layout:y}=i,w=function(e,t,a){const n={};let i="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(i="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:i,"data-gatsby-image-wrapper":"",style:n}}(h,b,y),{style:x,className:N}=w,v=o(w,I),M=(0,n.useRef)(),T=(0,n.useMemo)((()=>JSON.stringify(i.images)),[i.images]);u&&(d=u);const j=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(y,h,b);return(0,n.useEffect)((()=>{E||(E=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return L=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=M.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==m||m({wasCached:!0}),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==p||p({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void k.add(T);if(L&&k.has(T))return;let t,n;return E.then((e=>{let{renderImageToString:a,swapPlaceholderImage:o}=e;M.current&&(M.current.innerHTML=a(s({isLoading:!0,isLoaded:k.has(T),image:i},f)),k.has(T)||(t=requestAnimationFrame((()=>{M.current&&(n=o(M.current,T,k,r,m,p,g))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[i]),(0,n.useLayoutEffect)((()=>{k.has(T)&&L&&(M.current.innerHTML=L(s({isLoading:k.has(T),isLoaded:k.has(T),image:i},f)),null==m||m({wasCached:!0}),null==p||p({wasCached:!0}))}),[i]),(0,n.createElement)(t,s({},v,{style:s({},x,r,{backgroundColor:l}),className:N+(d?" "+d:""),ref:M,dangerouslySetInnerHTML:{__html:j},suppressHydrationWarning:!0}))},j=(0,n.memo)((function(e){return e.image?(0,n.createElement)(T,e):null}));j.propTypes=M,j.displayName="GatsbyImage";const S=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],z=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),i=2;i<a;i++)n[i-2]=arguments[i];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?r().number.apply(r(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),C={src:r().string.isRequired,alt:v,width:z,height:z,sizes:r().string,layout:e=>{if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},D=(U=j,function(e){let{src:t,__imageData:a,__error:i}=e,r=o(e,S);return i&&console.warn(i),a?n.createElement(U,s({image:a},r)):(console.warn("Image not loaded",t),null)});var U;D.displayName="StaticImage",D.propTypes=C},9473:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(7294),i=a(1992),r=a(3723),s=a.p+"static/chrome-8e29900ad505920d9133e9e62e9a599a.png",o=a.p+"static/firefox-b4c305cab5d9ad56cca2aa9c2aabd50c.png",c=a.p+"static/mobile_side_app-5292b277fb55af95aa79c6280715f344.png",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABQCAMAAAByFOZhAAAAD1BMVEUAAADVQ+2SUP////+Xh/zt5PtvAAAAAXRSTlMAQObYZgAAAIFJREFUeNrtlTEOwCAMA2nh/2+u0sXooBHqGt8UKs6DRaG9XEEMXOZUk/MsYfm8cqFvlhPvDpBguTVt3MlIsDzvhjcCJVhm2wQJiq4r7+rV1ANUbnkuemSw8royvE7Wyi3rPBImWF5kTVpaXi4yy7/kFHhlZT62n7+yPMtMIPJqyw8n6h1/lHM8RgAAAABJRU5ErkJggg==",d="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE2LjY2NTEiIHgyPSIxNi42NjUxIiB5MT0iLjY1MjI1NSIgeTI9IjM5LjQxNzkiPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiNmZjFiMmQiLz48c3RvcCBvZmZzZXQ9Ii40MzgiIHN0b3AtY29sb3I9IiNmYTFhMmMiLz48c3RvcCBvZmZzZXQ9Ii41OTQiIHN0b3AtY29sb3I9IiNlZDE1MjgiLz48c3RvcCBvZmZzZXQ9Ii43NTgiIHN0b3AtY29sb3I9IiNkNjBlMjEiLz48c3RvcCBvZmZzZXQ9Ii45MjciIHN0b3AtY29sb3I9IiNiNzA1MTkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNhNzAwMTQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNi43MDgxIiB4Mj0iMjYuNzA4MSIgeTE9IjIuOTM2OSIgeTI9IjM3LjIyMzMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzljMDAwMCIvPjxzdG9wIG9mZnNldD0iLjciIHN0b3AtY29sb3I9IiNmZjRiNGIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Im0xMy40MTY4IDMxLjI3MDljLTIuMjExLTIuNjEtMy42NDM0Mi02LjQ2OTMtMy43NDE0NC0xMC43OTk3di0uOTQyNGMuMDk3NTItNC4zMzA0IDEuNTI5OTQtOC4xODkyIDMuNzQxNDQtMTAuNzk5NzMgMi44Njg3LTMuNzI2NDYgNy4xMzQ1LTYuMDg4MjEgMTEuODk2OC02LjA4ODIxIDIuOTI5NCAwIDUuNjcwOC44OTQ1NSA4LjAxNTEgMi40NTAzMS0zLjUxOTUtMy4xNDkzMy04LjE2MTktNS4wNzEyNjktMTMuMjUzNi01LjA4OTY3NzQzbC0uMDc0Ni0uMDAxNDkyNTdjLTExLjA0NjU1IDAtMjAuMDAwNSA4Ljk1NDQ1LTIwLjAwMDUgMjAuMDAwNSAwIDEwLjcyNTEgOC40NDM5OSAxOS40NzgxIDE5LjA0NzcgMTkuOTc1Ni4zMTYuMDE0OS42MzM0LjAyMzkuOTUyOC4wMjM5IDUuMTIwNSAwIDkuNzkwMy0xLjkyNTQgMTMuMzI4Ny01LjA4OTctMi4zNDQ0IDEuNTU0OC01LjA4NDcgMi40NDkzLTguMDE1MSAyLjQ0OTMtNC43NjI4IDAtOS4wMjgxLTIuMzYyMi0xMS44OTczLTYuMDg4MnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtMTMuNDE2NyA4LjcyOTU4YzEuODM0OS0yLjE2NjIzIDQuMjA2MS0zLjQ3MjczIDYuNzk2Mi0zLjQ3MjczIDUuODIxMSAwIDEwLjU0MTYgNi42MDExNSAxMC41NDE2IDE0Ljc0MzY1cy00LjcxOTUgMTQuNzQzNy0xMC41NDI2IDE0Ljc0MzdjLTIuNTg5MSAwLTQuOTYwMy0xLjMwNjUtNi43OTQ3LTMuNDcyOCAyLjg2OTMgMy43MjY1IDcuMTM0NiA2LjA4ODIgMTEuODk3NCA2LjA4ODIgMi45MzA0IDAgNS42NzA3LS44OTQgOC4wMTUxLTIuNDQ4OCA0LjA5NDYtMy42NjE4IDYuNjcxOC04Ljk4NTMgNi42NzE4LTE0LjkxMDggMC01LjkyNC0yLjU3NzItMTEuMjQ2MDQtNi42NzAzLTE0LjkwODMyLTIuMzQ1NC0xLjU1NTc2LTUuMDg2Ny0yLjQ1MDgxLTguMDE3MS0yLjQ1MDgxLTQuNzYyOCAwLTkuMDI4MSAyLjM2MzI0LTExLjg5NzQgNi4wODg3MXoiIGZpbGw9InVybCgjYikiLz48L3N2Zz4=",u=a(486),m=a(221);var p=()=>{const{0:e,1:t}=(0,n.useState)(""),{0:p,1:g}=(0,n.useState)(!1);(0,n.useEffect)((()=>{const e=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(e)?t("Android"):/iPad|iPhone|iPod/.test(e)?t("iOS"):t("Other")}),[]);return e?n.createElement(u.Z,null,n.createElement(i.H,{title:"Download Links - Mask Network"}),"Other"===e||p?n.createElement("div",{className:"mt-16 sm:mt-0 w-full max-sm:my-8"},n.createElement("div",{className:"flex flex-col items-center text-center px-4 sm:hidden"},n.createElement("p",{className:"h2 mb-4"},"Install Mask Network on Your Devices"),n.createElement("p",{className:"text-2xl max-sm:text-xl max-sm:font-light hg:mb-24 md:mb-16 mb-8"},"Enjoy the Web 3.0 world with Mask Network"),n.createElement(r.S,{quality:90,alt:"",src:"../images/download.png",placeholder:"none",className:"max-w-5xl w-10/12",__imageData:a(5130)}),n.createElement("div",{className:"max-w-4xl w-10/12 flex justify-between max-sm:flex-col my-16"},[{name:"Chrome / Edge",image:s,text:"Chrome Web Store",link:"https://chrome.google.com/webstore/detail/mask-network/jkoeaghipilijlahjplgbfiocjhldnap",type:"ChromeWebStore"},{name:"Opera",image:d,text:"ADD-ONS",link:"https://addons.opera.com/en/extensions/details/maskbook/",type:"Add_ons"},{name:"Firefox",image:o,text:"ADD-ONS",link:"https://addons.mozilla.org/en-US/firefox/addon/maskbook",type:"Add_ons"}].map(((e,t)=>n.createElement("div",{className:(0===t?"mb-24":"")+" flex flex-col justify-between h-72 items-center md:w-64"},n.createElement("p",{className:"text-4xl font-light"},e.name),n.createElement("p",{className:"text-xl font-medium"},"Status: Stable"),n.createElement("img",{alt:"",src:e.image,className:"w-20 h-20"}),n.createElement("a",{href:e.link,onClick:()=>(0,m.Z)("event",e.type),className:"bg-black-main text-white py-3 text-center w-download-badge rounded-md cursor-pointer",target:"_blank",rel:"noreferrer"},e.text)))))),n.createElement("div",{className:"bg-blue-mask w-full py-[114px]"},n.createElement("div",{className:"mx-auto flex container md:justify-between flex-row sm:flex-col-reverse items-center justify-between px-16 max-md:px-8"},n.createElement("div",{className:"h-48 max-sm:h-36 max-sm:px-4 w-full text-white flex flex-col justify-between sm:items-center md:mt-0 mt-20 min-lg:mt-0"},n.createElement("p",{className:"text-[48px] font-bold max-sm:text-center mb-4 sm:text-[32px] sm:text-center"},"Mobile App Firefly"),n.createElement("p",{className:"w-full font-poppins md:max-w-xss font-bold text-[24px] sm:text-sm leading-tight sm:text-center mb-14"},"WEB3 SOCIAL AGGRTGATOR​"),n.createElement("div",{className:"flex border-2 border-white rounded-[12px] w-[206px] p-[10px] bg-black-main gap-[12px] justify-center items-center cursor-pointer",onClick:()=>{window.open("https://firefly.land/#download","_blank")}},n.createElement("img",{alt:"a download icon",src:l,className:"w-[30px] h-[40px]"}),n.createElement("div",{className:"flex text-[20px] font-medium font-poppin text-white font-poppins"},"Get Firefly"))),n.createElement("img",{alt:"a mobile phone with firefly installed",src:c,className:"max-w-1/3 max-md:max-w-1/2"})))):n.createElement("div",{className:"w-full bg-blue-mask flex flex-col items-center"},n.createElement("p",{className:"text-white text-[32px] font-bold h2 text-center pt-28 max-sm:pt-12 mb-7 px-4"},"Install Firefly on Your Devices!"),n.createElement("p",{className:"text-white font-Manrope font-normal text-[20px] items-center px-6 text-center mb-7"},"WEB3 SOCIAL AGGRTGATOR​"),n.createElement("div",{className:"mb-16 flex-col items-center gap-8"},n.createElement("div",{className:"flex border-2 border-white rounded-[12px] w-[206px] p-[10px] bg-black-main gap-[12px] justify-center items-center cursor-pointer",onClick:()=>{window.open("https://firefly.land/#download","_blank")}},n.createElement("img",{alt:"a download icon",src:l,className:"w-[30px] h-[40px]"}),n.createElement("div",{className:"flex text-[20px] font-medium text-white font-poppins"},"Get Firefly"))),n.createElement("div",{className:"w-full px-6 mb-24"},n.createElement(r.S,{alt:"",src:"../images/mobile_side_app.png",placeholder:"blurred",className:"w-full",__imageData:a(9971)})))):null}},9971:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsUlEQVQ4yy2RSWwbZRTHP9eJPbZjsjWe8Xyzz3hWe7zUaybO4talzSaSuCWhQdRxQS1Sa1FiDqESQoXSe4XKBYlzOSFxgguqObQXuNUXQBzhRKsK0dqeeciBd/q95f+X3nuIYXmEkH8MAJDP50dTU9NoFMEg4bt9+/4xz8wQSOGmjnk0F52c8414Km4g38nkcQ0hNM5wIkLz805RFITfSTL+YyQS/Whqenpl1CSCBNrZ3h8N+kaC/0W+B19/h0LhyRH7g9NCNUSat/auffpDY//dP5KmVkfnztauKkYeYrQCk5PTEKc5UBL6A4TQHEXhb0gS/0wQoceBAPGYptmfZFn9HiHEvH10/4trR/fgym4Dvrz3Oby19wbU62eO0Ma56kGqvAO8Vn3JscJLhpWB4+Vfo9Foy9AsYBhplAPPK8fMsBKMB4j3DpoHjw47H0C7eenFUj7zj6qo0Gg0DlHt3FqrVspBPpkcyAnLFUQVKIp9Eg6Hm0oiCbqVHyb07FDRMkNRSfUxp8KEH92gS+sPmd2PYcqougkl2dfNLGxurnfQ5sZ6y0xmQdVyA02zXVHSIB7neqFQqGlaGShXFj3DTHskxXkMKw9ZToLAeOBGsVrpzjvzoCqGywtmX1EM2N7e6qC1tbWWbecgnSkNMtmia5g2YEbo+f3+pp0uwcLSeS+VLnkJPedpVmmoazmg5nA7ZZtdZ2EJFC3rxkimzwsybG1tddDq6vmWpOjAcspAVS1X12xgWak3Fgg2Ld2GUmnFS2UdTzXzXsIoDtPZFChSvM2JRldWbYjFaDcWY/o8L8Pq6moHOdWllm1oIHDSIEayLh3nj1cOhkJNLWHCqbzjWemipxoZT5CTQzOpAcvMtiVJ7yZUCwRRcwXR7I8ed/p0rYOKpXJLUxOgquZAlDSXxgLQNN8bDwSbhWQeilnHy6VLHhOXvMlIbDg7jSEUmmhLstY1rRyY1ilXUaw+wwrgOE4HZdO5VkJXQZS1AcaiS9M8xGm2h9BYc3P7Vdi5vuUtv37GW75Y89avbQwr5xeBGCfasmJ0ddMGTU+NNH2MeSgWix2kaVqrXHYgX5gfkBTrUnEOaMz3EDrRrNYduHB916vvb3iLjbNe/fL6MLNUBCIQavNCopu0HeB41SVJto8xB4VCoYMymXQroeqgasmBeHwPFTAWej6/v7lSPQ37uwfexcab3vZre15je3/ozNcgHA6343Guu1y7ArJiuxgLfY6T/jNMZ+yWmrBAkow+SeFhnD5+yhOEfJcbF3bhkzufuTffv+ke3frQvXP37mDv0j4QROg6ZoSHmJEAY36IGfElx0tQyOcPUTptXxVFFWTF8LL5OshKEhhW+CUQIN5J2TlYXFqBSnUVVmo7UCzNQzpTAIIIH/Ki8ki3spDLnwWBV92RYTabPUILC86CJCnPaMw9LxSqTyVZ92Kx+LcTkYhOUvg3zAh/pzOlp5lM+SlJ4ecn56g/oxPRHEnhr2RFh3J5+S+Wk54JgvyiUqmsoZmZWURRsTmOZfly2WZMS+cpioy88soUGvOjyOzsSdoyeCppi5QgCHQgcCIajU4ikooRuq6ylYqNZUVmKTI2R2OM/gV18aQnEZWAXAAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/ba895/mobile_side_app.png","srcSet":"/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/5bc0e/mobile_side_app.png 1024w,\\n/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/594c1/mobile_side_app.png 2048w,\\n/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/ba895/mobile_side_app.png 4096w","sizes":"(min-width: 4096px) 4096px, 100vw"},"sources":[{"srcSet":"/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/0f8da/mobile_side_app.webp 1024w,\\n/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/082af/mobile_side_app.webp 2048w,\\n/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/6cef3/mobile_side_app.webp 4096w","type":"image/webp","sizes":"(min-width: 4096px) 4096px, 100vw"}]},"width":4096,"height":3491}')},5130:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/0423a/download.png","srcSet":"/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/4cecc/download.png 1060w,\\n/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/3054f/download.png 2120w,\\n/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/0423a/download.png 4240w","sizes":"(min-width: 4240px) 4240px, 100vw"},"sources":[{"srcSet":"/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/22bb5/download.webp 1060w,\\n/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/6a7a7/download.webp 2120w,\\n/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/4a7ec/download.webp 4240w","type":"image/webp","sizes":"(min-width: 4240px) 4240px, 100vw"}]},"width":4240,"height":2240}')}}]);
//# sourceMappingURL=component---src-pages-download-links-tsx-4cbb4f25c510e6d87e70.js.map