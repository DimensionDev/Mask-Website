(self.webpackChunkmask_website=self.webpackChunkmask_website||[]).push([[329],{8163:function(e,t,o){var a;"undefined"!=typeof self&&self,a=function(e){return function(e){var t={};function o(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,o),n.l=!0,n.exports}return o.m=e,o.c=t,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=o(1),r=(a=n)&&a.__esModule?a:{default:a};t.default=r.default},function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a,n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a])}return e},r=function(){function e(e,t){for(var o=0;o<t.length;o++){var a=t[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,o,a){return o&&e(t.prototype,o),a&&e(t,a),t}}(),l=o(2),i=(a=l)&&a.__esModule?a:{default:a},s=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var o=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return o.smoothScroll=o.smoothScroll.bind(o),o}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r(t,[{key:"componentDidMount",value:function(){o(3).polyfill()}},{key:"smoothScroll",value:function(e){var t=this;e.preventDefault();var o=function(){return 0};void 0!==this.props.offset&&(o=this.props.offset&&this.props.offset.constructor&&this.props.offset.apply?this.props.offset:function(){return parseInt(t.props.offset)});var a=e.currentTarget.getAttribute("href").slice(1),n=document.getElementById(a).getBoundingClientRect().top+window.pageYOffset;window.scroll({top:n-o(),behavior:"smooth"}),this.props.onClick&&this.props.onClick(e)}},{key:"render",value:function(){var e=this.props,t=(e.offset,function(e,t){var o={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(o[a]=e[a]);return o}(e,["offset"]));return i.default.createElement("a",n({},t,{onClick:this.smoothScroll}))}}]),t}(l.Component);t.default=s},function(t,o){t.exports=e},function(e,t,o){!function(){"use strict";e.exports={polyfill:function(){var e=window,t=document;if(!("scrollBehavior"in t.documentElement.style)||!0===e.__forceSmoothScrollPolyfill__){var o,a=e.HTMLElement||e.Element,n={scroll:e.scroll||e.scrollTo,scrollBy:e.scrollBy,elementScroll:a.prototype.scroll||i,scrollIntoView:a.prototype.scrollIntoView},r=e.performance&&e.performance.now?e.performance.now.bind(e.performance):Date.now,l=(o=e.navigator.userAgent,new RegExp(["MSIE ","Trident/","Edge/"].join("|")).test(o)?1:0);e.scroll=e.scrollTo=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?d.call(e,t.body,void 0!==arguments[0].left?~~arguments[0].left:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?~~arguments[0].top:e.scrollY||e.pageYOffset):n.scroll.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:e.scrollX||e.pageXOffset,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:e.scrollY||e.pageYOffset))},e.scrollBy=function(){void 0!==arguments[0]&&(s(arguments[0])?n.scrollBy.call(e,void 0!==arguments[0].left?arguments[0].left:"object"!=typeof arguments[0]?arguments[0]:0,void 0!==arguments[0].top?arguments[0].top:void 0!==arguments[1]?arguments[1]:0):d.call(e,t.body,~~arguments[0].left+(e.scrollX||e.pageXOffset),~~arguments[0].top+(e.scrollY||e.pageYOffset)))},a.prototype.scroll=a.prototype.scrollTo=function(){if(void 0!==arguments[0])if(!0!==s(arguments[0])){var e=arguments[0].left,t=arguments[0].top;d.call(this,this,void 0===e?this.scrollLeft:~~e,void 0===t?this.scrollTop:~~t)}else{if("number"==typeof arguments[0]&&void 0===arguments[1])throw new SyntaxError("Value could not be converted");n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left:"object"!=typeof arguments[0]?~~arguments[0]:this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top:void 0!==arguments[1]?~~arguments[1]:this.scrollTop)}},a.prototype.scrollBy=function(){void 0!==arguments[0]&&(!0!==s(arguments[0])?this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior}):n.elementScroll.call(this,void 0!==arguments[0].left?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,void 0!==arguments[0].top?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop))},a.prototype.scrollIntoView=function(){if(!0!==s(arguments[0])){var o=f(this),a=o.getBoundingClientRect(),r=this.getBoundingClientRect();o!==t.body?(d.call(this,o,o.scrollLeft+r.left-a.left,o.scrollTop+r.top-a.top),"fixed"!==e.getComputedStyle(o).position&&e.scrollBy({left:a.left,top:a.top,behavior:"smooth"})):e.scrollBy({left:r.left,top:r.top,behavior:"smooth"})}else n.scrollIntoView.call(this,void 0===arguments[0]||arguments[0])}}function i(e,t){this.scrollLeft=e,this.scrollTop=t}function s(e){if(null===e||"object"!=typeof e||void 0===e.behavior||"auto"===e.behavior||"instant"===e.behavior)return!0;if("object"==typeof e&&"smooth"===e.behavior)return!1;throw new TypeError("behavior member of ScrollOptions "+e.behavior+" is not a valid value for enumeration ScrollBehavior.")}function c(e,t){return"Y"===t?e.clientHeight+l<e.scrollHeight:"X"===t?e.clientWidth+l<e.scrollWidth:void 0}function u(t,o){var a=e.getComputedStyle(t,null)["overflow"+o];return"auto"===a||"scroll"===a}function p(e){var t=c(e,"Y")&&u(e,"Y"),o=c(e,"X")&&u(e,"X");return t||o}function f(e){var o;do{o=(e=e.parentNode)===t.body}while(!1===o&&!1===p(e));return o=null,e}function m(t){var o,a,n,l,i=(r()-t.startTime)/468;l=i=i>1?1:i,o=.5*(1-Math.cos(Math.PI*l)),a=t.startX+(t.x-t.startX)*o,n=t.startY+(t.y-t.startY)*o,t.method.call(t.scrollable,a,n),a===t.x&&n===t.y||e.requestAnimationFrame(m.bind(e,t))}function d(o,a,l){var s,c,u,p,f=r();o===t.body?(s=e,c=e.scrollX||e.pageXOffset,u=e.scrollY||e.pageYOffset,p=n.scroll):(s=o,c=o.scrollLeft,u=o.scrollTop,p=i),m({scrollable:s,method:p,startTime:f,startX:c,startY:u,x:a,y:l})}}}}()}])},e.exports=a(o(7294))},8810:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return v}});var a=o(7294),n=o(8163),r=o.n(n),l=o(5345),i=o(8908),s=o.p+"static/faq-5c9a949c61798eb73a2efe06ba69cfbe.png",c=o.p+"static/faq_sm-ebeb50314cddff62fe35c3bbef028e74.png",u=o.p+"static/faq_one-6fe3c81735fbc47a62cc62c631cc471d.png",p=o.p+"static/faq_two-c66853ae52fac0691e6f739f973fae73.png",f=o.p+"static/faq_three-1eab83cd9922a8c9ab6d037cc4d1df6e.png",m=o.p+"static/faq_four-149089df7b9719999753b4336578c869.png",d=o.p+"static/faq_five-a6ceb4488426e98c5147c531d8054cf3.png",h=o.p+"static/faq_six-e2c1340b30de58b9c3a7ed77a911a65b.png";function w(e){return a.createElement(r(),{href:"#"+e.title,className:"py-3 px-4 border-l-4 "+(e.title===e.current?" border-gray-800 text-gray-800":"border-gray-300 text-gray-300 font-light"),onClick:e.action},e.title)}function b(e){var t=(0,a.useState)(Boolean(e.show)),o=t[0],n=t[1];return a.createElement("div",{className:"mb-10 max-sm:mb-6"},a.createElement("p",{className:"text-2xl max-sm:text-xl max-sm:font-light mb-4 max-sm:mb-2 cursor-pointer",onClick:function(){return n(!o)}},a.createElement("span",{className:(o?"text-4xl max-sm:text-3xl ":"text-3xl max-sm:text-2xl ")+"pr-4"},o?"-":"+"),a.createElement("span",null,e.title)),o?a.createElement("p",{className:"text-gray-500 text-xl max-sm:text-sm",dangerouslySetInnerHTML:{__html:e.content}}):null)}function y(e){return e.innerWidth}var v=function(){var e=(0,a.useState)(0),t=e[0],o=e[1],n=[{title:"Getting Started",image:u,contents:[{title:"Where can I use Mask Network ?",show:!0,content:"Mask Network is now available on Facebook and Twitter. We will support more platforms in the future."},{title:"How to install Mask Network?",content:"Go to <a class='font-semibold' href='https://mask.io/download'>https://mask.io/download</a> to install Mask Network directly. You can also install through the Chrome Web Store, Google Play Store(beta), or the Apple App Store(beta)."},{title:"How to create a persona?",content:"Mask Network will automatically remind your own persona since you use for the first time.Just follow the steps! Click “Enter the Dashboard” -> “Personas” -> “Create persona” -> Enter Name -> Click “ Create” -> Choose to connect Twitter or Facebook account -> Mask Network will automatically find your username, confirm and click “Connect” -> Done, remember to “Say Hello to everyone”"},{title:"Explain like I am a nerd.",content:"Alice encrypts cleartext (M) with a random AES key (K) to get ciphertext (CT) and then securely shares K via ECIES over <a href='https://en.wikipedia.org/wiki/ECC' class='font-semibold'>SECP256K1</a> with Bob using Bob's public key (K.Bob). Alice publishes CT on Facebook and synchronizes K.Bob over GUN. Bob can then retrieve K to decrypt M."}]},{title:"Trade and Swaps",image:p,contents:[{title:"Where does the crypto price info come from?",show:!0,content:"Mask Network support price chart by both CoinMarketCap and CoinGecko. You can change the data source on “Settings.”"},{title:"What is swap and where can I find it?",content:"<p class='max-sm:mb-2 mb-3'>Mask Network will auto-detect trading pairs, and the “Swap🔥” will be lit. Click “Swap🔥” and you will be able to purchase the token.</p><p class='max-sm:mb-2 mb-3'>The Mask extension now supports:</p><p class='max-sm:mb-2 mb-3'>Ethereum: Uniswap, SushiSwap, 0x, Balancer, DODO</p><p class='max-sm:mb-2 mb-3'>Binance Smart Chain: PancakeSwap, SushiSwap, DODO</p><p class='max-sm:mb-2 mb-3'>Polygon: QuickSwap, SushiSwap, DODO</p>"},{title:"Does Mask Network charge a fee on swap?",content:"No, the swap on Mask Network is provided by Uniswap, we don’t charge any fee."}]},{title:"File Service",image:f,contents:[{title:"How to use the file service on Mask Network?",show:!0,content:"Mask Network is now available on Twitter, Facebook, and Minds.com. We will support more platforms in the future."},{title:"Who will be able to see the uploaded file?",content:"You can set & make amend to the recipients of the designated file."},{title:"Can my friends see the uploaded file?",content:"Only our users with the proper permission can see this file."}]},{title:"About ITO",image:m,contents:[{title:"What is ITO ( Initial Twitter Offering )?",show:!0,content:'<p class="max-sm:mb-2 mb-3">ITO (Initial Twitter Offering) is a decentralized asset offering feature, available on the decentralized blockchain network infrastructure Ethereum, Binance Smart Chain, and Polygon. Users could participate in a token launch directly on Twitter; projects could also reward users or build awareness through ITO by offering their existing tokens with a discount, or simply launch a new token.</p><p class="max-sm:mb-2 mb-3">Please follow our Blog (<a class="font-semibold" href="http://masknetwork.medium.com/">http://masknetwork.medium.com/</a>) or Telegram Channel for more information. After the event starts, find the relevant tweets of ITO and click "Enter" to participate in ITO.</p>'},{title:"How do I prepare for participating in an ITO?",content:"<p class='max-sm:mb-2 mb-3'>First of all, please make sure that you have installed the Mask extension.</p><p class='max-sm:mb-2 mb-3'>Second, please create a Mask account and bind the Twitter account. Remember to back up the Mask account~</p> <p class='max-sm:mb-2 mb-3'>Third, import or bind a wallet, Mask will automatically generate an Ethereum wallet address for you, and we also support binding MetaMask and WalletConnect.</p><p class='max-sm:mb-2 mb-3'>Fourth, prepare enough token for purchasing, and a sufficient gas fee. We encrypt the ITO page in Tweet, and the entrance can only be seen when ITO starts.</p>"},{title:"How much can I purchase a single ITO address?",content:"According to the different rules of each ITO, the purchase limit of a single address is different. Mask Network also plans to support various forms of auctions and joint curves to serve various ITO needs."},{title:"What should I do if gas is very high?",content:"The fluctuating gas fee is annoying, we get that. Mask Network provides a multi-chain solution. You may have more options by switching to Binance Smart Chain (BSC), or Polygon (Matic), a Layer 2 solution."},{title:"If an ITO is on BSC/Polygon, but my $MASK is on Ethereum, will I be able to meet the snapshot requirement?",content:"Don’t worry about it, it doesn’t matter which chain your asset is on."}]},{title:"Wallet",image:d,contents:[{title:"How to create a wallet?",show:!0,content:"Mask Network will automatically create an Ethereum wallet for you since you create a persona. Or you can create a wallet on the dashboard. Click “Enter the Dashboard” -> “Wallets” -> “Create Wallet” -> Enter Wallet Name -> Choose “ I confirm that i need to create a wallet” -> Click “Import” -> Done!"},{title:"I already have a wallet…?",content:"<p class='max-sm:mb-2 mb-3'>You can connect wallets from Mask Network, MetaMask, and Wallet Connect.</p> <p class='max-sm:mb-2 mb-3'> The Mask Network extension currently supports Ethereum, Binance Smart Chain (BSC), and Polygon (Matic).</p>"}]},{title:"Lucky Drop",image:h,contents:[{title:"How to view the history and detail information of the received Lucky Drop?",show:!0,content:'Click the blue smiley face on the top right corner. ->Click “Enter the Dashboard” - > “Wallets” -> Choose "Activity" -> InBound, You can see an OutBound list, Select the record you need to view.'},{title:"How long is the Lucky Drop validity period? What happens when the lucky drop is expired?",content:'The current Red Packet is valid for 24 hours. After 24 hours, if the Red Packet has a remaining quantity, the remaining cryptocurrency will be refunded. You can find that record in “Dashboard” -> “Wallets” -> Choose "Activity" -> OutBound and click the record to refund.'},{title:"Will Mask Network be banned (by Twitter)?",content:"<p class='max-sm:mb-2 mb-3'>Mask Network is part of the BlueSky ecosystem. Bluesky is funded by Jack Dorsey, who proposed the creation of a decentralized social media standard/protocol in December 2019. Mask joined this chat and talked about the issues regarding the centralized social media protocols. We talked to many big names, including Tim Berners Lee, and we will post more progress in the future.</p> <p class='max-sm:mb-2 mb-3'>Check this article for the technical details about Mask Network.</p>"},{title:"My Twitter account is banned :( What happens to my assets now?",content:"Don’t worry, the assets are still in your wallet. Your wallet address is separate from the Twitter account, therefore as long as you have access to your wallet, your assets will be fine."},{title:"Where can I trade $MASK?",content:"You can trade $MASK in Uniswap, SushiSwap, Quickswap, Coinbase, Binance, and other exchanges."}]}],r=(0,a.useState)(n[0].title),v=r[0],g=r[1];return(0,a.useEffect)((function(){function e(){o(y(window))}return o(y(window)),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),a.createElement("main",null,a.createElement(l.w,null),t?a.createElement(a.Fragment,null,t>800?a.createElement("div",{className:"w-full flex"},a.createElement("div",{className:"hidden md:w-1/2 md:flex justify-center items-center bg-gray-200 hg:text-5xl md:text-4xl"},a.createElement("p",{className:"w-4/5"},"How can we help you?")),a.createElement("img",{alt:"",src:t>800?s:c,className:"w-full md:w-1/2 h-auto"})):a.createElement("img",{alt:"",src:c,className:"w-full"}),a.createElement("div",{className:"hg:mt-36 md:mt-24 mt-16 w-full md:mb-32 mb-16"},a.createElement("div",{className:"w-full max-w-7xl mx-auto px-5 flex justify-between"},a.createElement("div",{className:"w-full max-w-3xl md:pr-8"},n.map((function(e,t){return a.createElement("div",{key:t.toString()},a.createElement("div",{className:"flex items-center mb-12 max-sm:mb-6"},a.createElement("img",{alt:"",src:e.image,className:"w-12 h-12 max-sm:w-9 max-sm:h-9"}),a.createElement("p",{className:"text-4xl max-sm:text-3xl ml-2",id:e.title},e.title)),a.createElement("div",{className:"pl-14 max-sm:pl-3"},e.contents.map((function(e,t){return a.createElement("div",{key:t.toString()},a.createElement(b,{show:e.show,title:e.title,content:e.content}))}))))}))),a.createElement("div",null,a.createElement("p",{className:"sticky top-4 md:flex hidden flex-col"},n.map((function(e){return a.createElement(w,{title:e.title,current:v,action:function(){return g(e.title)}})}))))))):a.createElement("div",{className:"h-screen"}),a.createElement(i.$,null))}}}]);
//# sourceMappingURL=component---src-pages-faq-js-b43b9806317d2657c0f5.js.map