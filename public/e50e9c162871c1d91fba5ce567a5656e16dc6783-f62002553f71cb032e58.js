/*! For license information please see e50e9c162871c1d91fba5ce567a5656e16dc6783-f62002553f71cb032e58.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world=self.webpackChunkgatsby_starter_hello_world||[]).push([[61],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)){if(n.length){var a=i.apply(null,n);a&&e.push(a)}}else if("object"===o){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var s in n)r.call(n,s)&&n[s]&&e.push(s)}}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},3639:function(e,t,n){"use strict";var r=n(7462),i=n(3366),o=n(5900),a=n.n(o),s=n(7294),l=n(9541),u=["bsPrefix","fluid","as","className"],c=s.forwardRef((function(e,t){var n=e.bsPrefix,o=e.fluid,c=e.as,f=void 0===c?"div":c,p=e.className,d=(0,i.Z)(e,u),h=(0,l.vE)(n,"container"),v="string"==typeof o?"-"+o:"-fluid";return s.createElement(f,(0,r.Z)({ref:t},d,{className:a()(p,o?""+h+v:h)}))}));c.displayName="Container",c.defaultProps={fluid:!1},t.Z=c},9541:function(e,t,n){"use strict";n.d(t,{vE:function(){return o}});var r=n(7294),i=r.createContext({});i.Consumer,i.Provider;function o(e,t){var n=(0,r.useContext)(i);return e||n[t]||t}},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var s,l,u,c;if(Array.isArray(e)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(!o(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;for(c=e.entries();!(l=c.next()).done;)if(!o(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(c=e.entries();!(l=c.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((s=e.length)!=a.length)return!1;for(l=s;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((s=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=s;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=s;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!o(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},5414:function(e,t,n){"use strict";n.d(t,{q:function(){return de}});var r,i,o,a,s=n(5697),l=n.n(s),u=n(4839),c=n.n(u),f=n(2993),p=n.n(f),d=n(7294),h=n(6494),v=n.n(h),y="bodyAttributes",m="htmlAttributes",b="titleAttributes",w={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},g=(Object.keys(w).map((function(e){return w[e]})),"charset"),T="cssText",E="href",O="http-equiv",S="innerHTML",k="itemprop",A="name",C="property",j="rel",P="src",R="target",x={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",M="defer",I="encodeSpecialCharacters",N="onChangeClientState",_="titleTemplate",H=Object.keys(x).reduce((function(e,t){return e[x[t]]=t,e}),{}),D=[w.NOSCRIPT,w.SCRIPT,w.STYLE],q="data-react-helmet",F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),z=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Y=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=Z(e,w.TITLE),n=Z(e,_);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=Z(e,L);return t||r||void 0},W=function(e){return Z(e,N)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return z({},e,t)}),{})},K=function(e,t){return t.filter((function(e){return void 0!==e[w.BASE]})).map((function(e){return e[w.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),i=0;i<r.length;i++){var o=r[i].toLowerCase();if(-1!==e.indexOf(o)&&n[o])return t.concat(n)}return t}),[])},Q=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+F(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var i={};n.filter((function(e){for(var n=void 0,o=Object.keys(e),a=0;a<o.length;a++){var s=o[a],l=s.toLowerCase();-1===t.indexOf(l)||n===j&&"canonical"===e[n].toLowerCase()||l===j&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(s)||s!==S&&s!==T&&s!==k||(n=s)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),i[n]||(i[n]={}),!r[n][u]&&(i[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var s=o[a],l=v()({},r[s],i[s]);r[s]=l}return e}),[]).reverse()},Z=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},J=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){J(e)}),0)}),$=function(e){return clearTimeout(e)},X="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:n.g.requestAnimationFrame||J,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||$:n.g.cancelAnimationFrame||$,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ne=null,re=function(e,t){var n=e.baseTag,r=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,c=e.styleTags,f=e.title,p=e.titleAttributes;ae(w.BODY,r),ae(w.HTML,i),oe(f,p);var d={baseTag:se(w.BASE,n),linkTags:se(w.LINK,o),metaTags:se(w.META,a),noscriptTags:se(w.NOSCRIPT,s),scriptTags:se(w.SCRIPT,u),styleTags:se(w.STYLE,c)},h={},v={};Object.keys(d).forEach((function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(h[e]=n),r.length&&(v[e]=d[e].oldTags)})),t&&t(),l(e,h,v)},ie=function(e){return Array.isArray(e)?e.join(""):e},oe=function(e,t){void 0!==e&&document.title!==e&&(document.title=ie(e)),ae(w.TITLE,t)},ae=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(q),i=r?r.split(","):[],o=[].concat(i),a=Object.keys(t),s=0;s<a.length;s++){var l=a[s],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===i.indexOf(l)&&i.push(l);var c=o.indexOf(l);-1!==c&&o.splice(c,1)}for(var f=o.length-1;f>=0;f--)n.removeAttribute(o[f]);i.length===o.length?n.removeAttribute(q):n.getAttribute(q)!==a.join(",")&&n.setAttribute(q,a.join(","))}},se=function(e,t){var n=document.head||document.querySelector(w.HEAD),r=n.querySelectorAll(e+"["+q+"]"),i=Array.prototype.slice.call(r),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===S)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var s=void 0===t[r]?"":t[r];n.setAttribute(r,s)}n.setAttribute(q,"true"),i.some((function(e,t){return a=t,n.isEqualNode(e)}))?i.splice(a,1):o.push(n)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return n.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[x[n]||n]=e[n],t}),t)},ce=function(e,t,n){switch(e){case w.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[q]=!0,i=ue(n,r),[d.createElement(w.TITLE,i,e)];var e,n,r,i},toString:function(){return function(e,t,n,r){var i=le(n),o=ie(t);return i?"<"+e+" "+q+'="true" '+i+">"+U(o,r)+"</"+e+">":"<"+e+" "+q+'="true">'+U(o,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case m:return{toComponent:function(){return ue(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,i=((r={key:n})[q]=!0,r);return Object.keys(t).forEach((function(e){var n=x[e]||e;if(n===S||n===T){var r=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:r}}else i[n]=t[e]})),d.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var i=Object.keys(r).filter((function(e){return!(e===S||e===T)})).reduce((function(e,t){var i=void 0===r[t]?t:t+'="'+U(r[t],n)+'"';return e?e+" "+i:i}),""),o=r.innerHTML||r.cssText||"",a=-1===D.indexOf(e);return t+"<"+e+" "+q+'="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,n)}}}},fe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,s=e.noscriptTags,l=e.scriptTags,u=e.styleTags,c=e.title,f=void 0===c?"":c,p=e.titleAttributes;return{base:ce(w.BASE,t,r),bodyAttributes:ce(y,n,r),htmlAttributes:ce(m,i,r),link:ce(w.LINK,o,r),meta:ce(w.META,a,r),noscript:ce(w.NOSCRIPT,s,r),script:ce(w.SCRIPT,l,r),style:ce(w.STYLE,u,r),title:ce(w.TITLE,{title:f,titleAttributes:p},r)}},pe=c()((function(e){return{baseTag:K([E,R],e),bodyAttributes:G(y,e),defer:Z(e,M),encode:Z(e,I),htmlAttributes:G(m,e),linkTags:Q(w.LINK,[j,E],e),metaTags:Q(w.META,[A,g,O,C,k],e),noscriptTags:Q(w.NOSCRIPT,[S],e),onChangeClientState:W(e),scriptTags:Q(w.SCRIPT,[P,S],e),styleTags:Q(w.STYLE,[T],e),title:V(e),titleAttributes:G(b,e)}}),(function(e){ne&&ee(ne),e.defer?ne=X((function(){re(e,(function(){ne=null}))})):(re(e),ne=null)}),fe)((function(){return null})),de=(i=pe,a=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case w.SCRIPT:case w.NOSCRIPT:return{innerHTML:t};case w.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return z({},r,((t={})[n.type]=[].concat(r[n.type]||[],[z({},i,this.mapNestedChildrenToProps(n,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(r.type){case w.TITLE:return z({},i,((t={})[r.type]=a,t.titleAttributes=z({},o),t));case w.BODY:return z({},i,{bodyAttributes:z({},o)});case w.HTML:return z({},i,{htmlAttributes:z({},o)})}return z({},i,((n={})[r.type]=z({},o),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=z({},t);return Object.keys(e).forEach((function(t){var r;n=z({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return d.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[H[n]||n]=e[n],t}),t)}(Y(i,["children"]));switch(n.warnOnInvalidChildren(e,o),e.type){case w.LINK:case w.META:case w.NOSCRIPT:case w.SCRIPT:case w.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:o});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Y(e,["children"]),r=z({},n);return t&&(r=this.mapChildrenToProps(t,r)),d.createElement(i,r)},B(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(d.Component),o.propTypes={base:l().object,bodyAttributes:l().object,children:l().oneOfType([l().arrayOf(l().node),l().node]),defaultTitle:l().string,defer:l().bool,encodeSpecialCharacters:l().bool,htmlAttributes:l().object,link:l().arrayOf(l().object),meta:l().arrayOf(l().object),noscript:l().arrayOf(l().object),onChangeClientState:l().func,script:l().arrayOf(l().object),style:l().arrayOf(l().object),title:l().string,titleAttributes:l().object,titleTemplate:l().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);de.renderStatic=de.rewind},14:function(e,t,n){"use strict";function r(e,t){var n=t.distance,r=t.left,i=t.right,o=t.up,a=t.down,l=t.top,u=t.bottom,c=t.big,p=t.mirror,d=t.opposite,h=(n?n.toString():0)+((r?1:0)|(i?2:0)|(l||a?4:0)|(u||o?8:0)|(p?16:0)|(d?32:0)|(e?64:0)|(c?128:0));if(f.hasOwnProperty(h))return f[h];var v=r||i||o||a||l||u,y=void 0,m=void 0;if(v){if(!p!=!(e&&d)){var b=[i,r,u,l,a,o];r=b[0],i=b[1],l=b[2],u=b[3],o=b[4],a=b[5]}var w=n||(c?"2000px":"100%");y=r?"-"+w:i?w:"0",m=a||l?"-"+w:o||u?w:"0"}return f[h]=(0,s.animation)((e?"to":"from")+" {opacity: 0;"+(v?" transform: translate3d("+y+", "+m+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),f[h]}function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,i=(e.out,e.forever),o=e.timeout,a=e.duration,l=void 0===a?s.defaults.duration:a,c=e.delay,f=void 0===c?s.defaults.delay:c,p=e.count,d=void 0===p?s.defaults.count:p,h=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),v={make:r,duration:void 0===o?l:o,delay:f,forever:i,count:d,style:{animationFillMode:"both"},reverse:h.left};return t?(0,u.default)(h,v,v,n):v}Object.defineProperty(t,"__esModule",{value:!0});var o,a=n(5697),s=n(5321),l=n(1719),u=(o=l)&&o.__esModule?o:{default:o},c={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},f={};i.propTypes=c,t.default=i,e.exports=t.default},3853:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,i=!1,o=void 0;try{for(var a,s=e[Symbol.iterator]();!(r=(a=s.next()).done)&&(n.push(a.value),!t||n.length!==t);r=!0);}catch(e){i=!0,o=e}finally{try{!r&&s.return&&s.return()}finally{if(i)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(7294),u=(r=l)&&r.__esModule?r:{default:r},c=n(5697),f=n(5321),p=(0,c.shape)({make:c.func,duration:c.number.isRequired,delay:c.number.isRequired,forever:c.bool,count:c.number.isRequired,style:c.object.isRequired,reverse:c.bool}),d={collapse:c.bool,collapseEl:c.element,cascade:c.bool,wait:c.number,force:c.bool,disabled:c.bool,appear:c.bool,enter:c.bool,exit:c.bool,fraction:c.number,refProp:c.string,innerRef:c.func,onReveal:c.func,unmountOnExit:c.bool,mountOnEnter:c.bool,inEffect:p.isRequired,outEffect:(0,c.oneOfType)([p,(0,c.oneOf)([!1])]).isRequired,ssrReveal:c.bool,collapseOnly:c.bool,ssrFadeout:c.bool},h={transitionGroup:c.object},v=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var r=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.isOn=void 0===e.when||!!e.when,r.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:r.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},r.savedChild=!1,r.isShown=!1,f.observerMode?r.handleObserve=r.handleObserve.bind(r):(r.revealHandler=r.makeHandler(r.reveal),r.resizeHandler=r.makeHandler(r.resize)),r.saveRef=r.saveRef.bind(r),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),s(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!f.observerMode&&this.props.collapse&&window.document.dispatchEvent(f.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var r=this,i=n.forever,o=n.count,a=n.delay,s=n.duration;if(!i){this.animationEndTimeout=window.setTimeout((function(){r&&r.el&&(r.animationEndTimeout=void 0,e.call(r))}),a+(s+(t?s:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var r=n.duration+(t.cascade?n.duration:0),i=this.isOn?this.getDimensionValue():0,o=void 0,a=void 0;if(t.collapseOnly)o=n.duration/3,a=n.delay;else{var s=r>>2,l=s>>1;o=s,a=n.delay+(this.isOn?0:r-s-l),e.style.animationDuration=r-s+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?s-l:0)+"ms"}return e.collapse={height:i,transition:"height "+o+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],r="style"in n&&n.style.animationName||void 0,i=void 0;e.collapseOnly?i={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(r=n.make),i={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:r}),className:n.className}),this.setState(e.collapse?this.collapse(i,e,n):i),t?(this.savedChild=u.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),f.ssr&&(0,f.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&f.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];f.globalHide||(0,f.hideAll)(),this&&this.el&&(e||(e=this.props),f.ssr&&(0,f.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout((function(){return t.reveal(e)}),200)):n||this.inViewport(e)||e.force?this.animate(e):f.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,r=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!r||f.ssr&&!f.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):f.ssr&&(f.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout((function(){return e.reveal(e.props,!0)}),2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map((function(e,t){return u.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)})):u.default.Children.toArray(e);var r=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=r.duration,s=r.reverse,l=n.length,c=2*o;this.props.collapse&&(c=parseInt(this.state.style.animationDuration,10),o=c/2);var p=s?l:0;return n.map((function(e){return"object"===(void 0===e?"undefined":i(e))&&e?u.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,f.cascade)(s?p--:p++,0,l,o,c))+"ms"})}):e}))}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===i(this.props.children)){var e=u.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:u.default.createElement("div",null,e)}return u.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,r=t.props,i=r.style,o=r.className,s=r.children,l=this.props.disabled?o:(this.props.outEffect?f.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,c=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&s&&this.state.style.animationName?(n=this.cascade(s),c=a({},i,{opacity:1})):c=this.props.disabled?i:a({},i,this.state.style);var p=a({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:c},this.props.refProp,this.saveRef)),d=u.default.cloneElement(t,p,e?n||s:void 0);return void 0!==this.props.collapse?this.props.collapseEl?u.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:d}):u.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:d}):d}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,f.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,r=window.pageYOffset-t.getTop(this.el),i=Math.min(n,window.innerHeight)*(f.globalHide?e.fraction:0);return r>i-window.innerHeight&&r<n-i}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){f.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!f.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}(u.default.Component);v.propTypes=d,v.defaultProps={fraction:.2,refProp:"ref"},v.contextTypes=h,v.displayName="RevealBase",t.default=v,e.exports=t.default},5321:function(e,t){"use strict";function n(e){try{return d.insertRule(e,d.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function r(){u||(t.globalHide=u=!0,window.removeEventListener("scroll",r,!0),n("."+i+" { opacity: 0; }"),window.removeEventListener("orientationchange",r,!0),window.document.removeEventListener("visibilitychange",r))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,n,r,i){var o=Math.log(r),a=(Math.log(i)-o)/(n-t);return Math.exp(o+a*(e-t))},t.animation=function(e){if(!d)return"";var t="@keyframes "+(h+f)+"{"+e+"}",n=p[e];return n?""+h+n:(d.insertRule(t,d.cssRules.length),p[e]=f,""+h+f++)},t.hideAll=r,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var i=t.namespace="react-reveal",o=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),a=t.observerMode=!1,s=t.raf=function(e){return window.setTimeout(e,66)},l=t.disableSsr=function(){return t.ssr=o=!1},u=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),c=(t.ie10=!1,t.collapseend=void 0),f=1,p={},d=!1,h=i+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=a="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=s=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||s,t.ssr=o=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),o&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=o=!1),o&&window.setTimeout(l,1500),a||(t.collapseend=c=document.createEvent("Event"),c.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(d=v.sheet,window.addEventListener("scroll",r,!0),window.addEventListener("orientationchange",r,!0),window.document.addEventListener("visibilitychange",r))}},1719:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e,t,n,r){return"in"in e&&(e.when=e.in),o.default.Children.count(r)<2?o.default.createElement(a.default,i({},e,{inEffect:t,outEffect:n,children:r})):(r=o.default.Children.map(r,(function(r){return o.default.createElement(a.default,i({},e,{inEffect:t,outEffect:n,children:r}))})),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,r):o.default.createElement("span",null,r))};var o=r(n(7294)),a=r(n(3853));e.exports=t.default},4839:function(e,t,n){"use strict";var r,i=n(7294),o=(r=i)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var s=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function c(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function i(){return e.apply(this,arguments)||this}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,i.peek=function(){return l},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),c()},a.componentDidUpdate=function(){c()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),c()},a.render=function(){return o.createElement(r,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",s),f}}},1062:function(e,t,n){"use strict";n.d(t,{QL:function(){return a},Yf:function(){return l},a5:function(){return u},BP:function(){return c},Al:function(){return i},oM:function(){return o},nD:function(){return s}});var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+=(t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_"}),"")},i={title:"Burak Akkaya",lang:"",description:"Welcome to my inn"},o={title:"Hello! My name is",name:"Burak",subtitle:"I am a Software Engineer.",cta:""},a={img:"profile.jpg",paragraphOne:"",paragraphTwo:"",paragraphThree:"",resume:""},s=[{id:r(),img:"byfood.png",title:"byFood",info:"byFood is the best Gastronomy Tourism Start-up in the world!",info2:"We have a small, warm, international team. I am working as a Full Stack Engineer.\n            With MySQL as database, Golang is great with Gorm!\n            Also, we really like React with Typescript.  \n      ",url:"https://byfood.com/",repo:"",dates:"January 2023 - Present"},{id:r(),img:"pingpong.jpeg",title:"PingPong",info:"Newest technologies. Amazing team with experienced engineers. I got to use Macbook here :P. Also we have PS5 in our office!",info2:"We had a mobile app. That's it. 60+ people were working on it, thousands using it! We were writing ASP.NET Core for our backend. PostgreSQL was our main database. \n      ElasticSearch, Redis and HealtCheck were also on the table. My first time with Dapper, it was great with writing SQL's. \n      Also, unit tests were very important to us using xUnit.\n      We were using Scrum as software methodology with Azure DevOps. Also, we were using Jira.\n      ",url:"https://pingpong.university/",repo:"",dates:"May 2022 - December 2022"},{id:r(),img:"udentify.jpg",title:"Udentify",info:"I always wanted to work in a startup. Great team, unique business. I miss them!",info2:"Our app was about data. We mostly used ASP.NET, ASP.NET Core for development. We stored those data in SQL Server and MongoDB. Also I developed the front-end(HTML, CSS, JavaScript, jQuery) for our MVC admin panel. I was also writing Python scripts for automation or integration.",url:"http://udentify.co/",repo:"",dates:"June 2021 - April 2022"},{id:r(),img:"tcm.png",title:"TCM",info:"Worked on product level SharePoint applications with the team.",info2:"Yes, first job. It was very exciting. There were about 15 people on my team. Projects were mostly turnkey. At the same time, I had the opportunity to work on a mobile application that was in development. The architecture of the project was developed with microservices and .NET Core. ",url:"https://www.tcm.com.tr/",repo:"",dates:"December 2020 - May 2021"}],l={cta:"",btn:"",email:"burkakkaya8@gmail.com"},u={networks:[{id:r(),name:"twitter",url:"https://twitter.com/burkakkayaa"},{id:r(),name:"linkedin",url:"https://www.linkedin.com/in/burak--akkaya/"},{id:r(),name:"github",url:"https://github.com/akkayaburak"}]},c={isEnabled:!1}},7462:function(e,t,n){"use strict";function r(){return r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r.apply(this,arguments)}n.d(t,{Z:function(){return r}})},3366:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=e50e9c162871c1d91fba5ce567a5656e16dc6783-f62002553f71cb032e58.js.map