(self.webpackChunkmask_website=self.webpackChunkmask_website||[]).push([[950],{1594:function(e){e.exports=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function a(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i.apply(this,arguments)}var c,o,s,r=navigator.userAgent||"",l=function(e,t){for(var a=window.isNaN,n=e.split("."),i=t.split("."),c=0;c<3;c++){var o=Number(n[c]),s=Number(i[c]);if(o>s)return 1;if(s>o)return-1;if(!a(o)&&a(s))return 1;if(a(o)&&!a(s))return-1}return 0},m=function(){var e=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return Number.parseInt(e[1],10)},d=function(){return navigator.appVersion.match(/micromessenger\/(\d+\.\d+\.\d+)/i)[1]},p=/android/i.test(r),u=/iphone|ipad|ipod/i.test(r),f=/micromessenger\/([\d.]+)/i.test(r),b=/(weibo).*weibo__([\d.]+)/i.test(r),g=/(baiduboxapp)\/([\d.]+)/i.test(r),N=/qq\/([\d.]+)/i.test(r),x=/(qqbrowser)\/([\d.]+)/i.test(r),w=/qzone\/.*_qz_([\d.]+)/i.test(r),M=/chrome\/[\d.]+ mobile safari\/[\d.]+/i.test(r)&&p&&r.indexOf("Version")<0;function h(e){var t=void 0!==e?Object.keys(e).map((function(t){return"".concat(t,"=").concat(e[t])})).join("&"):"";return t?"?".concat(t):""}function A(e,t){var a=e.path,n=e.param,i=t.scheme,c=t.buildScheme;if(void 0!==c)return c(e,t);var o=i.host,s=i.port,r=i.protocol,l=s?":".concat(s):"",m=o?"".concat(o).concat(l,"/"):"",d=h(n);return"".concat(r,"://").concat(m).concat(a).concat(d)}function y(e,t){var a=t.outChain,n=A(e,t);if(void 0!==a&&a){var i=a.protocol,c=a.path,o=a.key;n="".concat(i,"://").concat(c,"?").concat(o,"=").concat(encodeURIComponent(n))}return n}function I(e,t){var a=t.outChain,n=t.intent,i=t.fallback;if(void 0===n)return"";var c=Object.keys(n).map((function(e){return"".concat(e,"=").concat(n[e],";")})).join(""),o="#Intent;".concat(c,"S.browser_fallback_url=").concat(encodeURIComponent(i),";end;"),s=A(e,t);if(void 0!==a&&a){var r=a.path,l=a.key;return"intent://".concat(r,"?").concat(l,"=").concat(encodeURIComponent(s)).concat(o)}return s=s.slice(s.indexOf("//")+2),"intent://".concat(s).concat(o)}function v(e,t){var a=t.universal;if(void 0===a)return"";var n=a.host,i=a.pathKey,c=e.path,o=h(e.param),s="https://".concat(n,"/").concat(c).concat(o),r="https://".concat(n,"?").concat(i,"=").concat(c).concat(o.replace("?","&"));return i?r:s}function j(e,t){var a=y(e,t);return"".concat(t.yingyongbao,"&android_schema=").concat(encodeURIComponent(a))}function k(){"undefined"!=typeof document&&(void 0!==document.hidden?(c="hidden",o="visibilitychange"):void 0!==document.msHidden?(c="msHidden",o="msvisibilitychange"):void 0!==document.webkitHidden&&(c="webkitHidden",o="webkitvisibilitychange"))}function T(){return void 0!==c&&document[c]}function L(e){window.top.location.href=e}function E(e){var t=document.createElement("a");t.setAttribute("href",e),t.style.display="none",document.body.appendChild(t),t.click()}function z(e){s||((s=document.createElement("iframe")).style.cssText="display:none;border:0;width:0;height:0;",document.body.appendChild(s)),s.src=e}function D(e,t){var a=setTimeout((function(){T()||e()}),t);void 0!==o?document.addEventListener(o,(function(){clearTimeout(a)})):window.addEventListener("pagehide",(function(){clearTimeout(a)}))}return k(),function(){function t(a){e(this,t),n(this,"options",void 0);var c={timeout:2e3};this.options=i(c,a)}return a(t,[{key:"generateScheme",value:function(e){return y(e,this.options)}},{key:"generateIntent",value:function(e){return I(e,this.options)}},{key:"generateUniversalLink",value:function(e){return v(e,this.options)}},{key:"generateYingYongBao",value:function(e){return j(e,this.options)}},{key:"checkOpen",value:function(e){var t=this.options,a=t.logFunc;return D((function(){void 0!==a&&a("failure"),e()}),t.timeout)}},{key:"fallToAppStore",value:function(){var e=this;this.checkOpen((function(){L(e.options.appstore)}))}},{key:"fallToFbUrl",value:function(){var e=this;this.checkOpen((function(){L(e.options.fallback)}))}},{key:"fallToCustomCb",value:function(e){this.checkOpen((function(){e()}))}},{key:"open",value:function(e){var t,a=this.options,n=a.universal,i=a.appstore,c=a.logFunc,o=a.intent,s=e.callback,r=void 0!==n,p=this.generateScheme(e);void 0!==c&&c("pending");var h=!!this.options.isSupportWeibo;u?f&&-1===l(d(),"7.0.5")||b&&!h?L(i):m()<9?(z(p),t=this.fallToAppStore):!r||N||x||w?(E(p),t=this.fallToAppStore):L(this.generateUniversalLink(e)):f&&void 0!==this.options.yingyongbao?L(this.generateYingYongBao(e)):M?void 0!==o?L(this.generateIntent(e)):(L(p),t=this.fallToFbUrl):f||g||b&&!h||w?L(this.options.fallback):(z(p),t=this.fallToFbUrl),void 0===s?t&&t.call(this):this.fallToCustomCb(s)}}]),t}()}()},9473:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return u}});var n=a(7294),i=a(1992),c=a(3723),o=a.p+"static/chrome-8e29900ad505920d9133e9e62e9a599a.png",s=a.p+"static/firefox-b4c305cab5d9ad56cca2aa9c2aabd50c.png",r=a.p+"static/mobile_side_app-5292b277fb55af95aa79c6280715f344.png",l="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAABQCAMAAAByFOZhAAAAD1BMVEUAAADVQ+2SUP////+Xh/zt5PtvAAAAAXRSTlMAQObYZgAAAIFJREFUeNrtlTEOwCAMA2nh/2+u0sXooBHqGt8UKs6DRaG9XEEMXOZUk/MsYfm8cqFvlhPvDpBguTVt3MlIsDzvhjcCJVhm2wQJiq4r7+rV1ANUbnkuemSw8royvE7Wyi3rPBImWF5kTVpaXi4yy7/kFHhlZT62n7+yPMtMIPJqyw8n6h1/lHM8RgAAAABJRU5ErkJggg==",m="data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQwIiB2aWV3Qm94PSIwIDAgNDEgNDAiIHdpZHRoPSI0MSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGxpbmVhckdyYWRpZW50IGlkPSJhIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeDE9IjE2LjY2NTEiIHgyPSIxNi42NjUxIiB5MT0iLjY1MjI1NSIgeTI9IjM5LjQxNzkiPjxzdG9wIG9mZnNldD0iLjMiIHN0b3AtY29sb3I9IiNmZjFiMmQiLz48c3RvcCBvZmZzZXQ9Ii40MzgiIHN0b3AtY29sb3I9IiNmYTFhMmMiLz48c3RvcCBvZmZzZXQ9Ii41OTQiIHN0b3AtY29sb3I9IiNlZDE1MjgiLz48c3RvcCBvZmZzZXQ9Ii43NTgiIHN0b3AtY29sb3I9IiNkNjBlMjEiLz48c3RvcCBvZmZzZXQ9Ii45MjciIHN0b3AtY29sb3I9IiNiNzA1MTkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNhNzAwMTQiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCBpZD0iYiIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIyNi43MDgxIiB4Mj0iMjYuNzA4MSIgeTE9IjIuOTM2OSIgeTI9IjM3LjIyMzMiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzljMDAwMCIvPjxzdG9wIG9mZnNldD0iLjciIHN0b3AtY29sb3I9IiNmZjRiNGIiLz48L2xpbmVhckdyYWRpZW50PjxwYXRoIGQ9Im0xMy40MTY4IDMxLjI3MDljLTIuMjExLTIuNjEtMy42NDM0Mi02LjQ2OTMtMy43NDE0NC0xMC43OTk3di0uOTQyNGMuMDk3NTItNC4zMzA0IDEuNTI5OTQtOC4xODkyIDMuNzQxNDQtMTAuNzk5NzMgMi44Njg3LTMuNzI2NDYgNy4xMzQ1LTYuMDg4MjEgMTEuODk2OC02LjA4ODIxIDIuOTI5NCAwIDUuNjcwOC44OTQ1NSA4LjAxNTEgMi40NTAzMS0zLjUxOTUtMy4xNDkzMy04LjE2MTktNS4wNzEyNjktMTMuMjUzNi01LjA4OTY3NzQzbC0uMDc0Ni0uMDAxNDkyNTdjLTExLjA0NjU1IDAtMjAuMDAwNSA4Ljk1NDQ1LTIwLjAwMDUgMjAuMDAwNSAwIDEwLjcyNTEgOC40NDM5OSAxOS40NzgxIDE5LjA0NzcgMTkuOTc1Ni4zMTYuMDE0OS42MzM0LjAyMzkuOTUyOC4wMjM5IDUuMTIwNSAwIDkuNzkwMy0xLjkyNTQgMTMuMzI4Ny01LjA4OTctMi4zNDQ0IDEuNTU0OC01LjA4NDcgMi40NDkzLTguMDE1MSAyLjQ0OTMtNC43NjI4IDAtOS4wMjgxLTIuMzYyMi0xMS44OTczLTYuMDg4MnoiIGZpbGw9InVybCgjYSkiLz48cGF0aCBkPSJtMTMuNDE2NyA4LjcyOTU4YzEuODM0OS0yLjE2NjIzIDQuMjA2MS0zLjQ3MjczIDYuNzk2Mi0zLjQ3MjczIDUuODIxMSAwIDEwLjU0MTYgNi42MDExNSAxMC41NDE2IDE0Ljc0MzY1cy00LjcxOTUgMTQuNzQzNy0xMC41NDI2IDE0Ljc0MzdjLTIuNTg5MSAwLTQuOTYwMy0xLjMwNjUtNi43OTQ3LTMuNDcyOCAyLjg2OTMgMy43MjY1IDcuMTM0NiA2LjA4ODIgMTEuODk3NCA2LjA4ODIgMi45MzA0IDAgNS42NzA3LS44OTQgOC4wMTUxLTIuNDQ4OCA0LjA5NDYtMy42NjE4IDYuNjcxOC04Ljk4NTMgNi42NzE4LTE0LjkxMDggMC01LjkyNC0yLjU3NzItMTEuMjQ2MDQtNi42NzAzLTE0LjkwODMyLTIuMzQ1NC0xLjU1NTc2LTUuMDg2Ny0yLjQ1MDgxLTguMDE3MS0yLjQ1MDgxLTQuNzYyOCAwLTkuMDI4MSAyLjM2MzI0LTExLjg5NzQgNi4wODg3MXoiIGZpbGw9InVybCgjYikiLz48L3N2Zz4=",d=a(8743),p=a(221),u=function(){var e=(0,n.useState)(""),t=e[0],u=e[1],f=(0,n.useState)(!1),b=f[0];f[1];(0,n.useEffect)((function(){var e=navigator.userAgent||navigator.vendor||window.opera;/android/i.test(e)?u("Android"):/iPad|iPhone|iPod/.test(e)?u("iOS"):u("Other")}),[]);return t?n.createElement(d.Z,null,n.createElement(i.H,{title:"Download Links - Mask Network"}),"Other"===t||b?n.createElement("div",{className:"mt-16 sm:mt-0 w-full max-sm:my-8"},n.createElement("div",{className:"flex flex-col items-center text-center px-4 sm:hidden"},n.createElement("p",{className:"h2 mb-4"},"Install Mask Network on Your Devices"),n.createElement("p",{className:"text-2xl max-sm:text-xl max-sm:font-light hg:mb-24 md:mb-16 mb-8"},"Enjoy the Web 3.0 world with Mask Network"),n.createElement(c.S,{quality:90,alt:"",src:"../images/download.png",placeholder:"none",className:"max-w-5xl w-10/12",__imageData:a(5130)}),n.createElement("div",{className:"max-w-4xl w-10/12 flex justify-between max-sm:flex-col my-16"},[{name:"Chrome / Edge",image:o,text:"Chrome Web Store",link:"https://chrome.google.com/webstore/detail/mask-network/jkoeaghipilijlahjplgbfiocjhldnap",type:"ChromeWebStore"},{name:"Opera",image:m,text:"ADD-ONS",link:"https://addons.opera.com/en/extensions/details/maskbook/",type:"Add_ons"},{name:"Firefox",image:s,text:"ADD-ONS",link:"https://addons.mozilla.org/en-US/firefox/addon/maskbook",type:"Add_ons"}].map((function(e,t){return n.createElement("div",{className:(0===t?"mb-24":"")+" flex flex-col justify-between h-72 items-center md:w-64"},n.createElement("p",{className:"text-4xl font-light"},e.name),n.createElement("p",{className:"text-xl font-medium"},"Status: Stable"),n.createElement("img",{alt:"",src:e.image,className:"w-20 h-20"}),n.createElement("a",{href:e.link,onClick:function(){return(0,p.Z)("event",e.type)},className:"bg-black-main text-white py-3 text-center w-download-badge rounded-md cursor-pointer",target:"_blank",rel:"noreferrer"},e.text))})))),n.createElement("div",{className:"bg-blue-mask w-full py-[114px]"},n.createElement("div",{className:"mx-auto flex container md:justify-between flex-row sm:flex-col-reverse items-center justify-between px-16 max-md:px-8"},n.createElement("div",{className:"h-48 max-sm:h-36 max-sm:px-4 w-full text-white flex flex-col justify-between sm:items-center md:mt-0 mt-20 min-lg:mt-0"},n.createElement("p",{className:"text-[48px] font-bold max-sm:text-center mb-4 sm:text-[32px] sm:text-center"},"Mobile App Firefly"),n.createElement("p",{className:"w-full font-poppins md:max-w-xss font-bold text-[24px] sm:text-sm leading-tight sm:text-center mb-14"},"WEB3 SOCIAL AGGRTGATOR​"),n.createElement("div",{className:"flex border-2 border-white rounded-[12px] w-[206px] p-[10px] bg-black-main gap-[12px] justify-center items-center cursor-pointer",onClick:function(){window.open("https://firefly.land/#download","_blank")}},n.createElement("img",{alt:"a download icon",src:l,className:"w-[30px] h-[40px]"}),n.createElement("div",{className:"flex text-[20px] font-medium font-poppin text-white font-poppins"},"Get Firefly"))),n.createElement("img",{alt:"a mobile phone with firefly installed",src:r,className:"max-w-1/3 max-md:max-w-1/2"})))):n.createElement("div",{className:"w-full bg-blue-mask flex flex-col items-center"},n.createElement("p",{className:"text-white text-[32px] font-bold h2 text-center pt-28 max-sm:pt-12 mb-7 px-4"},"Install Firefly on Your Devices!"),n.createElement("p",{className:"text-white font-Manrope font-normal text-[20px] items-center px-6 text-center mb-7"},"WEB3 SOCIAL AGGRTGATOR​"),n.createElement("div",{className:"mb-16 flex-col items-center gap-8"},n.createElement("div",{className:"flex border-2 border-white rounded-[12px] w-[206px] p-[10px] bg-black-main gap-[12px] justify-center items-center cursor-pointer",onClick:function(){window.open("https://firefly.land/#download","_blank")}},n.createElement("img",{alt:"a download icon",src:l,className:"w-[30px] h-[40px]"}),n.createElement("div",{className:"flex text-[20px] font-medium text-white font-poppins"},"Get Firefly"))),n.createElement("div",{className:"w-full px-6 mb-24"},n.createElement(c.S,{alt:"",src:"../images/mobile_side_app.png",placeholder:"blurred",className:"w-full",__imageData:a(9971)})))):null}},9971:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","placeholder":{"fallback":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAEsUlEQVQ4yy2RSWwbZRTHP9eJPbZjsjWe8Xyzz3hWe7zUaybO4talzSaSuCWhQdRxQS1Sa1FiDqESQoXSe4XKBYlzOSFxgguqObQXuNUXQBzhRKsK0dqeeciBd/q95f+X3nuIYXmEkH8MAJDP50dTU9NoFMEg4bt9+/4xz8wQSOGmjnk0F52c8414Km4g38nkcQ0hNM5wIkLz805RFITfSTL+YyQS/Whqenpl1CSCBNrZ3h8N+kaC/0W+B19/h0LhyRH7g9NCNUSat/auffpDY//dP5KmVkfnztauKkYeYrQCk5PTEKc5UBL6A4TQHEXhb0gS/0wQoceBAPGYptmfZFn9HiHEvH10/4trR/fgym4Dvrz3Oby19wbU62eO0Ma56kGqvAO8Vn3JscJLhpWB4+Vfo9Foy9AsYBhplAPPK8fMsBKMB4j3DpoHjw47H0C7eenFUj7zj6qo0Gg0DlHt3FqrVspBPpkcyAnLFUQVKIp9Eg6Hm0oiCbqVHyb07FDRMkNRSfUxp8KEH92gS+sPmd2PYcqougkl2dfNLGxurnfQ5sZ6y0xmQdVyA02zXVHSIB7neqFQqGlaGShXFj3DTHskxXkMKw9ZToLAeOBGsVrpzjvzoCqGywtmX1EM2N7e6qC1tbWWbecgnSkNMtmia5g2YEbo+f3+pp0uwcLSeS+VLnkJPedpVmmoazmg5nA7ZZtdZ2EJFC3rxkimzwsybG1tddDq6vmWpOjAcspAVS1X12xgWak3Fgg2Ld2GUmnFS2UdTzXzXsIoDtPZFChSvM2JRldWbYjFaDcWY/o8L8Pq6moHOdWllm1oIHDSIEayLh3nj1cOhkJNLWHCqbzjWemipxoZT5CTQzOpAcvMtiVJ7yZUCwRRcwXR7I8ed/p0rYOKpXJLUxOgquZAlDSXxgLQNN8bDwSbhWQeilnHy6VLHhOXvMlIbDg7jSEUmmhLstY1rRyY1ilXUaw+wwrgOE4HZdO5VkJXQZS1AcaiS9M8xGm2h9BYc3P7Vdi5vuUtv37GW75Y89avbQwr5xeBGCfasmJ0ddMGTU+NNH2MeSgWix2kaVqrXHYgX5gfkBTrUnEOaMz3EDrRrNYduHB916vvb3iLjbNe/fL6MLNUBCIQavNCopu0HeB41SVJto8xB4VCoYMymXQroeqgasmBeHwPFTAWej6/v7lSPQ37uwfexcab3vZre15je3/ozNcgHA6343Guu1y7ArJiuxgLfY6T/jNMZ+yWmrBAkow+SeFhnD5+yhOEfJcbF3bhkzufuTffv+ke3frQvXP37mDv0j4QROg6ZoSHmJEAY36IGfElx0tQyOcPUTptXxVFFWTF8LL5OshKEhhW+CUQIN5J2TlYXFqBSnUVVmo7UCzNQzpTAIIIH/Ki8ki3spDLnwWBV92RYTabPUILC86CJCnPaMw9LxSqTyVZ92Kx+LcTkYhOUvg3zAh/pzOlp5lM+SlJ4ecn56g/oxPRHEnhr2RFh3J5+S+Wk54JgvyiUqmsoZmZWURRsTmOZfly2WZMS+cpioy88soUGvOjyOzsSdoyeCppi5QgCHQgcCIajU4ikooRuq6ylYqNZUVmKTI2R2OM/gV18aQnEZWAXAAAAABJRU5ErkJggg=="},"images":{"fallback":{"src":"/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/ba895/mobile_side_app.png","srcSet":"/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/5bc0e/mobile_side_app.png 1024w,\\n/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/594c1/mobile_side_app.png 2048w,\\n/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/ba895/mobile_side_app.png 4096w","sizes":"(min-width: 4096px) 4096px, 100vw"},"sources":[{"srcSet":"/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/0f8da/mobile_side_app.webp 1024w,\\n/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/082af/mobile_side_app.webp 2048w,\\n/gatsby-assets/static/7559126a122d18c58f090a0891a02b20/6cef3/mobile_side_app.webp 4096w","type":"image/webp","sizes":"(min-width: 4096px) 4096px, 100vw"}]},"width":4096,"height":3491}')},5130:function(e){"use strict";e.exports=JSON.parse('{"layout":"constrained","images":{"fallback":{"src":"/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/0423a/download.png","srcSet":"/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/4cecc/download.png 1060w,\\n/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/3054f/download.png 2120w,\\n/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/0423a/download.png 4240w","sizes":"(min-width: 4240px) 4240px, 100vw"},"sources":[{"srcSet":"/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/22bb5/download.webp 1060w,\\n/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/6a7a7/download.webp 2120w,\\n/gatsby-assets/static/042d342fccf93d084c7a49cf58045c7f/4a7ec/download.webp 4240w","type":"image/webp","sizes":"(min-width: 4240px) 4240px, 100vw"}]},"width":4240,"height":2240}')}}]);
//# sourceMappingURL=component---src-pages-download-links-tsx-01551cedbd562beeadd0.js.map