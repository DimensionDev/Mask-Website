(self.webpackChunkmask_website=self.webpackChunkmask_website||[]).push([[288],{4811:function(e){"use strict";const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,n=!1;for(let o=0;o<e.length;o++){const s=e[o];t&&/[a-zA-Z]/.test(s)&&s.toUpperCase()===s?(e=e.slice(0,o)+"-"+e.slice(o),t=!1,n=a,a=!0,o++):a&&n&&/[a-zA-Z]/.test(s)&&s.toLowerCase()===s?(e=e.slice(0,o-1)+"-"+e.slice(o-1),n=a,a=!1,t=!0):(t=s.toLowerCase()===s&&s.toUpperCase()!==s,n=a,a=s.toUpperCase()===s&&s.toLowerCase()!==s)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},8163:function(e,t,a){var n;"undefined"!=typeof self&&self,n=function(e){return function(e){var t={};function a(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,a),o.l=!0,o.exports}return a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=a(1),s=(n=o)&&n.__esModule?n:{default:n};t.default=s.default},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),r=a(2),i=(n=r)&&n.__esModule?n:{default:n},l=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.smoothScroll=a.smoothScroll.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"componentDidMount",value:function(){a(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var a=function(){return 0};void 0!==this.props.offset&&(a=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var n=e.currentTarget.getAttribute("href").slice(1),o=document.getElementById(n).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:o-a(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}(e,["offset"]));return i.default.createElement("a",o({},t,{onClick:this.smoothScroll}))}}]),t}(r.Component);t.default=l},function(t,a){t.exports=e},function(e,t,a){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var a,n=e.HTMLElement||e.Element,o=468,s={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:n.prototype.scroll||l,scrollIntoView:n.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,i=(a=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(a)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?u.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):s.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(c(arguments[0])?s.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):u.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},n.prototype.scroll=n.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==c(arguments[0])){var e=arguments[0].left,t=arguments[0].top;u.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},n.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==c(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):s.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},n.prototype.scrollIntoView=function(){if(!0!==c(arguments[0])){var a=function(e){var a;do{a=(e=e.parentNode)===t.body}while(!1===a&&!1===m(e));return a=null,e}(this),n=a.getBoundingClientRect(),o=this.getBoundingClientRect();a!==t.body?(u.call(this,a,a.scrollLeft+o.left-n.left,a.scrollTop+o.top-n.top),"fixed"!==e.getComputedStyle(a).position&&e.scrollBy({left:n.left,top:n.top,behavior:"smooth"})):e.scrollBy({left:o.left,top:o.top,behavior:"smooth"})}else s.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function l(e,t){this.scrollLeft=e,this.scrollTop=t}function c(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function d(e,t){return"Y"===t?e.clientHeight+i<e.scrollHeight:"X"===t?e.clientWidth+i<e.scrollWidth:void 0}function p(t,a){var n=e.getComputedStyle(t,null)["overflow"+a];return"auto"===n||"scroll"===n}function m(e){var t=d(e,"Y")&&p(e,"Y"),a=d(e,"X")&&p(e,"X");return t||a}function f(t){var a,n,s,i,l=(r()-t.startTime)/o;i=l=l>1?1:l,a=.5*(1-Math.cos(Math.PI*i)),n=t.startX+(t.x-t.startX)*a,s=t.startY+(t.y-t.startY)*a,t.method.call(t.scrollable,n,s),n===t.x&&s===t.y||e.requestAnimationFrame(f.bind(e,t))}function u(a,n,o){var i,c,d,p,m=r();a===t.body?(i=e,c=e.scrollX||e.pageXOffset,d=e.scrollY||e.pageYOffset,p=s.scroll):(i=a,c=a.scrollLeft,d=a.scrollTop,p=l),f({scrollable:i,method:p,startTime:m,startX:c,startY:d,x:n,y:o})}}}}()}])},e.exports=n(a(7294))},3723:function(e,t,a){"use strict";a.d(t,{L:function(){return f},M:function(){return k},P:function(){return x},S:function(){return q},_:function(){return i},a:function(){return r},b:function(){return c},g:function(){return d},h:function(){return l}});var n=a(7294),o=(a(4811),a(5697)),s=a.n(o);function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(a=s[n])>=0||(o[a]=e[a]);return o}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a,n,o){return void 0===o&&(o={}),r({},a,{loading:n,shouldLoad:e,"data-main-image":"",style:r({},o,{opacity:t?1:0})})}function d(e,t,a,n,o,s,i,l){const c={};s&&(c.backgroundColor=s,"fixed"===a?(c.width=n,c.height=o,c.backgroundColor=s,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),i&&(c.objectFit=i),l&&(c.objectPosition=l);const d=r({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:r({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],m=function(e){let{layout:t,width:a,height:o}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/a*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:a,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+o+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},f=function(e){let{children:t}=e,a=i(e,p);return n.createElement(n.Fragment,null,n.createElement(m,r({},a)),t,null)},u=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:o,alt:s="",shouldLoad:l}=e,c=i(e,u);return n.createElement("img",r({},c,{decoding:"async",loading:o,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?a:void 0,"data-srcset":l?void 0:a,alt:s}))},g=function(e){let{fallback:t,sources:a=[],shouldLoad:o=!0}=e,s=i(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(b,r({},s,t,{sizes:l,shouldLoad:o}));return a.length?n.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return n.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:l})})),c):c};var w;b.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},g.displayName="Picture",g.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const y=["fallback"],x=function(e){let{fallback:t}=e,a=i(e,y);return t?n.createElement(g,r({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",r({},a))};x.displayName="Placeholder",x.propTypes={fallback:o.string,sources:null==(w=g.propTypes)?void 0:w.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return n.createElement(n.Fragment,null,n.createElement(g,r({},e)),n.createElement("noscript",null,n.createElement(g,r({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=g.propTypes;const v=function(e,t,a){for(var n=arguments.length,o=new Array(n>3?n-3:0),r=3;r<n;r++)o[r-3]=arguments[r];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(o)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},E={image:s().object.isRequired,alt:v},S=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],A=["style","className"],T=new Set;let C,N;const M=function(e){let{as:t="div",image:o,style:s,backgroundColor:c,className:d,class:p,onStartLoad:m,onLoad:f,onError:u}=e,h=i(e,S);const{width:b,height:g,layout:w}=o,y=function(e,t,a){const n={};let o="gatsby-image-wrapper";return"fixed"===a?(n.width=e,n.height=t):"constrained"===a&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:n}}(b,g,w),{style:x,className:k}=y,v=i(y,A),E=(0,n.useRef)(),M=(0,n.useMemo)((()=>JSON.stringify(o.images)),[o.images]);p&&(d=p);const _=function(e,t,a){let n="";return"fullWidth"===e&&(n='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(n='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),n}(w,b,g);return(0,n.useEffect)((()=>{C||(C=Promise.all([a.e(774),a.e(223)]).then(a.bind(a,8223)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return N=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==m||m({wasCached:!0}),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==m||m({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==f||f({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void T.add(M);if(N&&T.has(M))return;let t,n;return C.then((e=>{let{renderImageToString:a,swapPlaceholderImage:i}=e;E.current&&(E.current.innerHTML=a(r({isLoading:!0,isLoaded:T.has(M),image:o},h)),T.has(M)||(t=requestAnimationFrame((()=>{E.current&&(n=i(E.current,M,T,s,m,f,u))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[o]),(0,n.useLayoutEffect)((()=>{T.has(M)&&N&&(E.current.innerHTML=N(r({isLoading:T.has(M),isLoaded:T.has(M),image:o},h)),null==m||m({wasCached:!0}),null==f||f({wasCached:!0}))}),[o]),(0,n.createElement)(t,r({},v,{style:r({},x,s,{backgroundColor:c}),className:k+(d?" "+d:""),ref:E,dangerouslySetInnerHTML:{__html:_},suppressHydrationWarning:!0}))},_=(0,n.memo)((function(e){return e.image?(0,n.createElement)(M,e):null}));_.propTypes=E,_.displayName="GatsbyImage";const O=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],P=function(e,t){for(var a=arguments.length,n=new Array(a>2?a-2:0),o=2;o<a;o++)n[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},B=new Set(["fixed","fullWidth","constrained"]),L={src:s().string.isRequired,alt:v,width:P,height:P,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!B.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},q=(I=_,function(e){let{src:t,__imageData:a,__error:o}=e,s=i(e,O);return o&&console.warn(o),a?n.createElement(I,r({image:a},s)):(console.warn("Image not loaded",t),null)});var I;q.displayName="StaticImage",q.propTypes=L},6577:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return C}});var n=a(7294),o=a(8163),s=a.n(o),r=a(3723),i=a(1992),l=a(5647);var c=a.p+"static/faq_sm-0b37f921930eb66481b8313e50c5e87c.png",d=a.p+"static/faq_one-15ac605907a4a321a49ed3ef6484a7d1.png",p=a.p+"static/faq_two-7e952e2c72ffd48fd3d560ad9f43fed4.png",m=a.p+"static/faq_three-5d9fdb0d24c7ead7e6a8c87527f3d6dc.png",f=a.p+"static/faq_five-d62674fbe1d7e21158c3adeb4128aa6b.png",u=a.p+"static/faq_six-dfae41addafb279b86533ae0dd6e8f59.png",h=a.p+"static/faq_other-56d0ab44d8bad0a80f041c2fdb2ebed6.png",b=a.p+"static/faq_seven-f61c1b48218ddfec6db899f540d23954.png",g=a.p+"static/faq_eight-242fad0cde93bc3a21f49eb8bb6eb190.png",w=a.p+"static/faq_nine-c129957763943d6d9156630f63a7b6ed.png",y=a.p+"static/faq_ten-f564bf2ba5446ec6500040a86f34d450.png",x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAA5BAMAAABg/64FAAAAMFBMVEUAAAAQEBsTExsQEBASEhwTEhwQECAQEB0TER0SEBwTERwSEBsSEh0SERwTERwTEBkyy1g1AAAAEHRSTlMAMGAQgP8gUK9vv3Cfz69QjF5QCwAAAElJREFUeAFjQAFCSkpKBgw4gGtoaGjC4JAclRyVZFdCgFag5CQ4T4GBgSsUFwgYapLcZxDgKlDoDZx3YEhE2ajkqOQfYGpFqlcABGykonZ2/WQAAAAASUVORK5CYII=",k="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAJCAYAAABnoO8WAAAAL0lEQVR4AWNg5eBIGM6YgZ2D6/8wxv9GPUgRHvXgqAdHPTjqQQ4OrvmDAM+jFQYAig3uwhEMIGAAAAAASUVORK5CYII=";function v(e){return n.createElement(n.Fragment,null,n.createElement("div",{className:"flex items-center mb-8 max-md:mb-4 "+(0===e.i?"":"mt-20 max-sm:mt-6")},n.createElement("img",{alt:"",src:e.content.image,className:"w-12 h-12 max-sm:w-9 max-sm:h-9"}),n.createElement("p",{className:"text-4xl ml-2 font-bold md:text-3xl sm:text-2xl"},e.content.title)),n.createElement("div",{className:"ml-14 max-sm:ml-2 flex flex-col"},e.content.contents.map((e=>n.createElement("a",{href:e.link,target:"_blank",rel:"noreferrer",className:"font-semibold mb-8 max-md:mb-4 text-xl max-sm:text-base max-sm:font-light max-sm:mb-4 max-sm:underline md:text-base sm:text-sm "},e.text)))))}function E(e){const t=(0,n.useRef)(null);return(0,n.useEffect)((()=>{if(!t)return;if(!t.current)return;new IntersectionObserver((a=>{t&&t.current&&a[0]&&a[0].isIntersecting&&e.action(t.current.textContent)}),{root:document,rootMargin:"0px",threshold:1}).observe(t.current)}),[e,t]),n.createElement(n.Fragment,null,n.createElement("div",{ref:t,className:"flex items-center mb-12 max-md:mb-6 "+(0===e.i?"":"mt-24")},n.createElement("img",{alt:"",src:e.content.image,className:"w-12 h-12 max-sm:w-9 max-sm:h-9"}),n.createElement("p",{className:"text-4xl md:text-3xl sm:text-2xl ml-2 font-bold",id:e.content.title},e.content.title)),n.createElement("div",{className:"pl-14 max-sm:pl-3"},e.content.contents.map(((e,t)=>n.createElement("div",{key:t.toString()},n.createElement(A,{show:e.show,title:e.title,content:e.content}))))))}function S(e){return n.createElement(s(),{offset:"100",href:"#"+e.title,className:"whitespace-nowrap py-3 px-4 border-l-4 "+(e.title===e.current?" border-gray-800 text-gray-800":"border-gray-300 text-gray-300 font-light"),onClick:e.action},e.title)}function A(e){const{0:t,1:a}=(0,n.useState)(Boolean(e.show));return n.createElement("div",{className:"mb-10 max-sm:mb-6"},n.createElement("p",{className:"text-2xl md:text-xl sm:text-base mb-4 max-md:mb-2 cursor-pointer flex items-center",onClick:()=>a(!t)},n.createElement("img",{src:t?k:x,className:"pr-4 w-8 max-md:w-6",alt:""}),n.createElement("h5",{className:"font-bold"},e.title)),t?n.createElement("p",{className:"text-gray-500 text-xl md:text-base sm:text-sm relative left-8 max-sm:left-7 max-xsm:left-6 w-5/6 animate__animated animate__fadeIn",dangerouslySetInnerHTML:{__html:e.content}}):null)}function T(e){const{innerWidth:t}=e;return t}var C=()=>{var e;const{0:t,1:o}=(0,n.useState)(0),{0:s,1:x}=(0,n.useState)(null!==(e=new URLSearchParams("undefined"!=typeof location?location.search:"").get("type"))&&void 0!==e?e:""),k=[{title:"Getting Started",image:d,contents:[{title:"Where can I use Mask Network ?",show:!0,content:"Mask Network is now available on Facebook, Twitter, and Minds.com.<p> We will support more platforms in the future.</p>"},{title:"How to install Mask Network?",content:"Go to <a class='font-semibold' href='/download-links'>download page</a> to install Mask Network directly. You can also install through the , Google Play Store(beta), or the Apple App Store(beta)."},{title:"How to create a persona?",content:"Once installed, the Mask extension will guide you to create a persona. Make sure you take a good note of the mnemonic phrases, then you will have a persona ready to connect all the Web 2.0 accounts and Web 3.0 addresses."},{title:"Explain like I am a nerd.",content:"Alice encrypts cleartext (M) with a random AES key (K) to get ciphertext (CT) and then securely shares <span class='underline-dotted'>K</span> via <span class='underline-dotted'>ECIES</span> over <a href='https://en.wikipedia.org/wiki/ECC' class='font-semibold'>SECP256K1</a> with Bob using Bob's public key (K.Bob). Alice publishes <span class='underline-dotted'>CT</span> on Facebook and synchronizes <span class='underline-dotted'>K.Bob</span> over GUN. Bob can then retrieve <span class='underline-dotted'>K</span> to decrypt <span class='underline-dotted'>M</span>."}]},{title:"Trade and Swaps",image:p,contents:[{title:"Where does the crypto price info come from?",content:"Mask Network supports price chart by CoinMarketCap, CoinGecko, and UniSwap Info."},{title:"What is swap and where can I find it?",content:"<p class='max-sm:mb-2 mb-3'>Mask Network will auto-detect trading pairs, and the “Swap🔥” will be lit. Click “Swap🔥” and you will be able to purchase the token.</p><p class='max-sm:mb-2 mb-3'>The Mask extension now supports:</p><p class='max-sm:mb-2 mb-3'>Ethereum: Uniswap, SushiSwap, 0x, Balancer, DODO</p><p class='max-sm:mb-2 mb-3'>Binance Smart Chain: PancakeSwap, SushiSwap, DODO</p><p class='max-sm:mb-2 mb-3'>Polygon: QuickSwap, SushiSwap, DODO</p><p class='max-sm:mb-2 mb-3'>Arbitrum: UniSwap</p><p class='max-sm:mb-2 mb-3'>xDai: SushiSwap</p>"},{title:"Does Mask Network charge a fee on swap?",content:"No, we don’t charge any fee."}]},{title:"File Service",image:m,contents:[{title:"How to use the file service on Mask Network?",content:"Please check <a class='font-semibold' href='https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-8c8fe1efce5a48b49739a38f4ea8c60f'>this tutorial</<a>."},{title:"Who will be able to see the uploaded file?",content:"You can set & make amend to the recipients of the designated file."},{title:"Can my friends see the uploaded file?",content:"Only Mask Network users with specific permission settings can see this file."}]},{title:"Wallet",image:f,contents:[{title:"How to create a wallet?",content:"Please check <a class='font-semibold' href='https://realmasknetwork.notion.site/Setting-up-your-wallet-Support-MetaMask-and-WalletConnect-67c1ba13c5664eda9a9240f8e145366a'>this tutorial</<a>."},{title:"I already have a wallet…?",content:"<p class='max-sm:mb-2 mb-3'>You can connect wallets from Mask Network, MetaMask, and Wallet Connect.</p> <p class='max-sm:mb-2 mb-3'>The Mask Network extension currently supports Ethereum, Binance Smart Chain (BSC), Polygon (Matic), Arbitrum, and xDai. We will support more chains in the future.</p>"}]},{title:"Lucky Drop",image:u,contents:[{title:"How to view the history and detailed information of the received Lucky Drop?",content:"Click the blue smiley face in the compose window, select “Lucky Drop.” You will be able to see them in the “Past” tab."},{title:"How long is the Lucky Drop validity period? What happens when the lucky drop is expired?",content:"Lucky Drop is valid for 24 hours. After 24 hours, if parts of the Lucky Drop is unclaimed, then the remaining amount will be refunded."}]},{title:"Other",image:h,contents:[{title:"Will Mask Network be banned (by Twitter)?",content:"<p class='max-sm:mb-2 mb-3'>Mask Network is part of the BlueSky ecosystem. Bluesky is funded by Jack Dorsey, who proposed the creation of a decentralized social media standard/protocol in December 2019. Mask joined this chat and talked about the issues regarding the centralized social media protocols. We talked to many big names, including Tim Berners Lee, and we will post more progress in the future.</p> <p class='max-sm:mb-2 mb-3'>Check <a class='font-semibold' href='https://hackmd.io/lW-K1-97R_C1wv-bg2rfGw?view'>this article</a> for the technical details about Mask Network.</p>"},{title:"My Twitter account is banned :( What happens to my assets now?",content:"Don’t worry, the assets are still in your wallet. Your wallet address is separate from the Twitter account, therefore as long as you have access to your wallet, your assets will be fine."},{title:"Where can I trade $MASK?",content:"You can trade $MASK in Uniswap, SushiSwap, Quickswap, Coinbase, Binance, and other exchanges."}]}],A=[{title:"Set up & Back up",image:b,contents:[{link:"https://realmasknetwork.notion.site/Installation-set-up-dd3329c7b3124108a8e992829a61a51e",text:"🔨 Installation & set up"},{link:"https://realmasknetwork.notion.site/Setting-up-your-wallet-Support-MetaMask-and-WalletConnect-67c1ba13c5664eda9a9240f8e145366a",text:"👛 Setting up your wallet (Support MetaMask and WalletConnect)"},{link:"https://realmasknetwork.notion.site/Manually-update-the-Mask-Network-plugin-44fa7bbb3bab48bab4cb6198f54cc126",text:"🛠️ Manually update the Mask Network plugin"},{link:"https://realmasknetwork.notion.site/Back-up-your-private-key-5af0c5f5f7f342fe97b66d029159f9ca",text:"🗝️ Back up your private key"}]},{title:"NFT Features",image:g,contents:[{link:"https://realmasknetwork.notion.site/Set-any-NFT-you-own-as-your-Twitter-Profile-Picture-b60da726f7054f918d72634400479d1d",text:"👻 Set any NFT you owned as your Twitter Profile Avatar"},{link:"https://realmasknetwork.notion.site/Display-Your-NFTs-on-your-Twitter-profile-page-5772759b609843309839beb056bead02",text:"🖼️ Customise your Twitter page: Set up a Web3 Tab & create a NFT gallery"},{link:"https://realmasknetwork.notion.site/Purchase-or-bid-for-NFTs-via-OpenSea-or-Rarible-on-Twitter-c388746f11774ecfa17914c900d3ed97",text:"🎨 Purchase or bid for NFTs via OpenSea or Rarible on Twitter"},{link:"https://realmasknetwork.notion.site/See-the-latest-offer-of-a-Tweet-NFT-by-Valuables-Plugin-27424923ee454a4a9b0ed16fc5cb93d0",text:"🔓 See the latest offer of a Tweet NFT by Valuables Plugin"},{link:"https://realmasknetwork.notion.site/How-to-participate-in-a-MaskBox-sale-d0941687649a4ef7a38d71f23ecbe4da",text:"📦 How to participate in a MaskBox sale"}]},{title:"Personal Finance / DeFi Features",image:d,contents:[{link:"https://realmasknetwork.notion.site/Trade-cryptos-on-Twitter-via-Uniswap-Sushi-0x-Support-ETH-BSC-Polygon-Arbitrum-f2e7d081ee38487ca1db958393ac1edc",text:"💸 Trade cryptos on Twitter via Uniswap, Sushi, 0x (Support ETH, BSC, Polygon, Arbitrum)"},{link:"https://realmasknetwork.notion.site/Check-crypto-info-on-Twitter-Support-CoinGecko-CoinMarketCap-307619336f704ff78063550c7b37a1f6",text:"💹 Check crypto info on Twitter (Support  CoinGecko, CoinMarketCap)"},{link:"https://realmasknetwork.notion.site/Invest-in-your-favourite-fund-manager-via-dHEDGE-on-Twitter-ETH-and-Polygon-fb00ff2e626949279c83b59ed9207b9a",text:"👨🏼‍🎤 Invest in your favourite fund manager via dHEDGE on Twitter (ETH and Polygon)"},{link:"https://realmasknetwork.notion.site/Cultivate-a-weekly-saving-habit-via-GoodGhosting-on-Twitter-Polygon-only-f94aa38b01404b9c99c7a03935840962",text:"🏦 Cultivate a weekly saving habit via GoodGhosting on Twitter (Polygon only)"},{link:"https://realmasknetwork.notion.site/Participate-in-lossless-lottery-via-PoolTogether-on-Twitter-ETH-and-Polygon-377597e14aff441ab645ecba5ea690f1",text:"💱 Participate in lossless lottery via PoolTogether on Twitter (ETH and Polygon)"}]},{title:"Broader Web 3.0 Features",image:w,contents:[{link:"https://realmasknetwork.notion.site/Send-an-Encrypted-Tweet-b76c1e6ec9fd4e9a8033df51669b4daf",text:"🔏 Send an Encrypted Tweet"},{link:"https://realmasknetwork.notion.site/Gift-token-NFTs-to-your-friends-Support-ETH-BSC-and-Polygon-0a71fd421aae4563bd07caa3e2129e5b",text:"💰 Gift token/NFTs to your friends (Support ETH, BSC and Polygon)"},{link:"https://realmasknetwork.notion.site/Cast-a-Snapshot-vote-10c08ed9629942dd852d9afbfab61208",text:"🗳️ Cast a Snapshot vote"},{link:"https://realmasknetwork.notion.site/Use-File-Service-via-Arweave-IPFS-SIA-Swarm-soon-8c8fe1efce5a48b49739a38f4ea8c60f",text:"🗄️ Use File Service via Arweave (IPFS, SIA, Swarm soon)"},{link:"https://realmasknetwork.notion.site/Make-a-quick-Gitcoin-Grant-donation-98ed83784ed4446a8a13fa685c7bddfb",text:"🔗 Make a quick Gitcoin Grant donation"}]},{title:"Switch Network & Cross Chain",image:y,contents:[{link:"https://realmasknetwork.notion.site/MultiChain-Switch-networks-d9ba6324159741d49e816bd96f7867f2",text:"⛓️ MultiChain - Switch networks"},{link:"https://realmasknetwork.notion.site/Use-the-Polygon-Bridge-to-convert-from-Ethereum-Mainnet-and-Polygon-295ba2736178444dbea5c1cc8b474489",text:"🌉 Use the Polygon Bridge to convert from Ethereum Mainnet between Polygon"},{link:"https://realmasknetwork.notion.site/Convert-MASK-from-ERC20-to-BEP20-04d205700d0246d3a27909eac408b971",text:"🌉 Convert $MASK from ERC20 to BEP20"}]}],{0:C,1:N}=(0,n.useState)(k[0].title);return(0,n.useEffect)((()=>{function e(){o(T(window))}return o(T(window)),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),n.createElement(l.Z,null,n.createElement(i.H,{title:"FAQs — Mask Network"}),t?n.createElement(n.Fragment,null,t>768?n.createElement("div",{className:"w-full h-full flex relative max-h-screen-1/3 min-h-300"},n.createElement("div",{className:"flex justify-center items-center bg-gray-200 w-1/2 max-md:absolute max-md:top-0 max-md:left-0 max-md:w-full"},n.createElement("p",{className:"h2 w-1/2 max-md:w-full max-md:text-gray-h2"},"How can we help you?")),n.createElement("div",{className:"w-1/2 max-md:w-full overflow-hidden"},t>768?n.createElement(r.S,{alt:"",src:"../images/faq.png",className:"noise-img",placeholder:"none",__imageData:a(3857)}):n.createElement(r.S,{alt:"",src:"../images/faq_sm.png",className:"noise-img",placeholder:"none",__imageData:a(4355)}))):n.createElement("img",{alt:"",src:c,className:"w-full"}),n.createElement("div",{className:"w-full md:mb-32 mb-16 min-lg:mt-48 md:mt-24 mt-16"},n.createElement("div",{className:"w-full max-w-7xl mx-auto px-5 flex justify-between"},n.createElement("div",{className:"w-full md:pr-8 pl-4 md:pl-2 sm:pl-0"},n.createElement("p",{className:"cursor-pointer mb-14 max-sm:mb-6",onClick:()=>{x("faq"===s?"tutorials":"faq")}},n.createElement("span",{className:"faq"===s?"text-5xl text-gray-500 md:text-4xl sm:text-3xl font-bold":"text-6xl md:text-4xl sm:text-3xl font-bold"},"Tutorial / "),n.createElement("span",{className:"faq"===s?"text-6xl md:text-4xl sm:text-3xl font-bold":"text-5xl text-gray-500 md:text-4xl sm:text-3xl font-bold"},"FAQs")),"tutorials"!==s&&s?null:n.createElement("div",{className:"max-w-4xl my-24 max-sm:my-8"},n.createElement("p",{className:"text-4xl mb-8 px-4 md:px-0 max-sm:mb-4 max-sm:px-0 md:text-3xl sm:text-2xl"},"An (In)Complete Guide to Mask Network (2.0)"),n.createElement("p",{className:"text-xl text-gray-500 px-4 md:px-0 max-sm:text-base max-sm:px-0"},"Mask has dedicated itself to protect data privacy and build the best bridge between Web 2.0 and Web 3.0. Through our browser extension, we have introduced an ecosystem of 30+ popular Web 3.0 dApps / Features that works seamlessly on top of existing Web 2.0 sites like Twitter and Facebook.")),"tutorials"!==s&&s?null:A.map(((e,t)=>n.createElement("div",{key:t.toString(),className:"w-full"},n.createElement(v,{i:t,content:e})))),"faq"===s?k.map(((e,t)=>n.createElement("div",{key:t.toString(),className:"max-w-3xl"},n.createElement(E,{contents:k,i:t,content:e,action:e=>N(e)})))):null),"faq"===s?n.createElement("div",null,n.createElement("aside",{className:"sticky top-16 flex sm:hidden flex-col"},k.map(((e,t)=>n.createElement(S,{title:e.title,i:t.toString(),current:C,action:()=>N(e.title)}))))):null))):n.createElement("div",{className:"h-screen"}))}},4355:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/gatsby-assets/static/2c7d8fbaa2664f0b058dce9b9ef6cde1/f14e8/faq_sm.png","srcSet":"/gatsby-assets/static/2c7d8fbaa2664f0b058dce9b9ef6cde1/fbf51/faq_sm.png 288w,\\n/gatsby-assets/static/2c7d8fbaa2664f0b058dce9b9ef6cde1/7822f/faq_sm.png 577w,\\n/gatsby-assets/static/2c7d8fbaa2664f0b058dce9b9ef6cde1/f14e8/faq_sm.png 1153w","sizes":"(min-width: 1153px) 1153px, 100vw"},"sources":[{"srcSet":"/gatsby-assets/static/2c7d8fbaa2664f0b058dce9b9ef6cde1/3136c/faq_sm.webp 288w,\\n/gatsby-assets/static/2c7d8fbaa2664f0b058dce9b9ef6cde1/44198/faq_sm.webp 577w,\\n/gatsby-assets/static/2c7d8fbaa2664f0b058dce9b9ef6cde1/56bf2/faq_sm.webp 1153w","type":"image/webp","sizes":"(min-width: 1153px) 1153px, 100vw"}]},"width":1153,"height":674}')},3857:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/gatsby-assets/static/f68f44860597a09cb269d599bb10982f/87487/faq.png","srcSet":"/gatsby-assets/static/f68f44860597a09cb269d599bb10982f/41f46/faq.png 720w,\\n/gatsby-assets/static/f68f44860597a09cb269d599bb10982f/bc523/faq.png 1441w,\\n/gatsby-assets/static/f68f44860597a09cb269d599bb10982f/87487/faq.png 2881w","sizes":"(min-width: 2881px) 2881px, 100vw"},"sources":[{"srcSet":"/gatsby-assets/static/f68f44860597a09cb269d599bb10982f/7cc02/faq.webp 720w,\\n/gatsby-assets/static/f68f44860597a09cb269d599bb10982f/cd176/faq.webp 1441w,\\n/gatsby-assets/static/f68f44860597a09cb269d599bb10982f/d6123/faq.webp 2881w","type":"image/webp","sizes":"(min-width: 2881px) 2881px, 100vw"}]},"width":2881,"height":1683}')}}]);
//# sourceMappingURL=component---src-pages-faq-tsx-dc7380a54144f558904f.js.map