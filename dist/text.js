(()=>{var e,t,n,_,o,r,l,i={},u=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,c=Array.isArray;function p(e,t){for(var n in t)e[n]=t[n];return e}function f(e){var t=e.parentNode;t&&t.removeChild(e)}function a(t,n,_){var o,r,l,i={};for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===i[l]&&(i[l]=t.defaultProps[l]);return d(t,i,o,r,null)}function d(e,_,o,r,l){var i={type:e,props:_,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++n:l};return null==l&&null!=t.vnode&&t.vnode(i),i}function h(e){return e.children}function v(e,t){this.props=e,this.context=t}function y(e,t){if(null==t)return e.__?y(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?y(e):null}function m(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!b.__r++||o!==t.debounceRendering)&&((o=t.debounceRendering)||r)(b)}function b(){var e,t,n,o,r,i,u,s,c;for(_.sort(l);e=_.shift();)e.__d&&(t=_.length,o=void 0,r=void 0,i=void 0,s=(u=(n=e).__v).__e,(c=n.__P)&&(o=[],r=[],(i=p({},u)).__v=u.__v+1,S(c,u,i,n.__n,void 0!==c.ownerSVGElement,null!=u.__h?[s]:null,o,null==s?y(u):s,u.__h,r),E(o,u,r),u.__e!=s&&function e(t){var n,_;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,n=0;n<t.__k.length;n++)if(null!=(_=t.__k[n])&&null!=_.__e){t.__e=t.__c.base=_.__e;break}return e(t)}}(u)),_.length>t&&_.sort(l));b.__r=0}function g(e,t,n,_,o,r,l,s,p,f,a){var v,m,b,g,x,C,w,P,E,N=0,D=_&&_.__k||u,U=D.length,M=U,O=t.length;for(n.__k=[],v=0;v<O;v++)null!=(g=n.__k[v]=null==(g=t[v])||"boolean"==typeof g||"function"==typeof g?null:"string"==typeof g||"number"==typeof g||"bigint"==typeof g?d(null,g,null,null,g):c(g)?d(h,{children:g},null,null,null):g.__b>0?d(g.type,g.props,g.key,g.ref?g.ref:null,g.__v):g)?(g.__=n,g.__b=n.__b+1,-1===(P=function(e,t,n,_){var o=e.key,r=e.type,l=n-1,i=n+1,u=t[n];if(null===u||u&&o==u.key&&r===u.type)return n;if(_>(null!=u?1:0))for(;l>=0||i<t.length;){if(l>=0){if((u=t[l])&&o==u.key&&r===u.type)return l;l--}if(i<t.length){if((u=t[i])&&o==u.key&&r===u.type)return i;i++}}return -1}(g,D,w=v+N,M))?b=i:(b=D[P]||i,D[P]=void 0,M--),S(e,g,b,o,r,l,s,p,f,a),x=g.__e,(m=g.ref)&&b.ref!=m&&(b.ref&&T(b.ref,null,g),a.push(m,g.__c||x,g)),null!=x&&(null==C&&(C=x),(E=b===i||null===b.__v)?-1==P&&N--:P!==w&&(P===w+1?N++:P>w?M>O-w?N+=P-w:N--:N=P<w&&P==w-1?P-w:0),w=v+N,"function"!=typeof g.type||P===w&&b.__k!==g.__k?"function"!=typeof g.type&&(P!==w||E)?p=k(e,x,p):void 0!==g.__d?(p=g.__d,g.__d=void 0):p=x.nextSibling:p=function e(t,n,_){for(var o,r=t.__k,l=0;r&&l<r.length;l++)(o=r[l])&&(o.__=t,n="function"==typeof o.type?e(o,n,_):k(_,o.__e,n));return n}(g,p,e),"function"==typeof n.type&&(n.__d=p))):(b=D[v])&&null==b.key&&b.__e&&(b.__e==p&&(p=y(b)),L(b,b,!1),D[v]=null);for(n.__e=C,v=U;v--;)null!=D[v]&&("function"==typeof n.type&&null!=D[v].__e&&D[v].__e==n.__d&&(n.__d=D[v].__e.nextSibling),L(D[v],D[v]))}function k(e,t,n){return null==n||n.parentNode!==e?e.insertBefore(t,null):t==n&&null!=t.parentNode||e.insertBefore(t,n),t.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function C(e,t,n,_,o){var r;e:if("style"===t){if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||x(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||x(e.style,t,n[t])}}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/(PointerCapture)$|Capture$/,"$1")),t=t.toLowerCase() in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?P:w,r):e.removeEventListener(t,r?P:w,r);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!==t&&"height"!==t&&"href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&"rowSpan"!==t&&"colSpan"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,n))}}function w(e){return this.l[e.type+!1](t.event?t.event(e):e)}function P(e){return this.l[e.type+!0](t.event?t.event(e):e)}function S(n,_,o,r,l,u,s,a,d,m){var b,k,x,w,P,S,E,T,L,D,U,M,O,A,H,W=_.type;if(void 0!==_.constructor)return null;null!=o.__h&&(d=o.__h,a=_.__e=o.__e,_.__h=null,u=[a]),(b=t.__b)&&b(_);e:if("function"==typeof W)try{if(T=_.props,L=(b=W.contextType)&&r[b.__c],D=b?L?L.props.value:b.__:r,o.__c?E=(k=_.__c=o.__c).__=k.__E:("prototype"in W&&W.prototype.render?_.__c=k=new W(T,D):(_.__c=k=new v(T,D),k.constructor=W,k.render=N),L&&L.sub(k),k.props=T,k.state||(k.state={}),k.context=D,k.__n=r,x=k.__d=!0,k.__h=[],k._sb=[]),null==k.__s&&(k.__s=k.state),null!=W.getDerivedStateFromProps&&(k.__s==k.state&&(k.__s=p({},k.__s)),p(k.__s,W.getDerivedStateFromProps(T,k.__s))),w=k.props,P=k.state,k.__v=_,x)null==W.getDerivedStateFromProps&&null!=k.componentWillMount&&k.componentWillMount(),null!=k.componentDidMount&&k.__h.push(k.componentDidMount);else{if(null==W.getDerivedStateFromProps&&T!==w&&null!=k.componentWillReceiveProps&&k.componentWillReceiveProps(T,D),!k.__e&&(null!=k.shouldComponentUpdate&&!1===k.shouldComponentUpdate(T,k.__s,D)||_.__v===o.__v)){for(_.__v!==o.__v&&(k.props=T,k.state=k.__s,k.__d=!1),_.__e=o.__e,_.__k=o.__k,_.__k.forEach(function(e){e&&(e.__=_)}),U=0;U<k._sb.length;U++)k.__h.push(k._sb[U]);k._sb=[],k.__h.length&&s.push(k);break e}null!=k.componentWillUpdate&&k.componentWillUpdate(T,k.__s,D),null!=k.componentDidUpdate&&k.__h.push(function(){k.componentDidUpdate(w,P,S)})}if(k.context=D,k.props=T,k.__P=n,k.__e=!1,M=t.__r,O=0,"prototype"in W&&W.prototype.render){for(k.state=k.__s,k.__d=!1,M&&M(_),b=k.render(k.props,k.state,k.context),A=0;A<k._sb.length;A++)k.__h.push(k._sb[A]);k._sb=[]}else do k.__d=!1,M&&M(_),b=k.render(k.props,k.state,k.context),k.state=k.__s;while(k.__d&&++O<25)k.state=k.__s,null!=k.getChildContext&&(r=p(p({},r),k.getChildContext())),x||null==k.getSnapshotBeforeUpdate||(S=k.getSnapshotBeforeUpdate(w,P)),g(n,c(H=null!=b&&b.type===h&&null==b.key?b.props.children:b)?H:[H],_,o,r,l,u,s,a,d,m),k.base=_.__e,_.__h=null,k.__h.length&&s.push(k),E&&(k.__E=k.__=null)}catch(e){_.__v=null,(d||null!=u)&&(_.__e=a,_.__h=!!d,u[u.indexOf(a)]=null),t.__e(e,_,o)}else null==u&&_.__v===o.__v?(_.__k=o.__k,_.__e=o.__e):_.__e=function(t,n,_,o,r,l,u,s,p){var a,d,h,v=_.props,m=n.props,b=n.type,k=0;if("svg"===b&&(r=!0),null!=l){for(;k<l.length;k++)if((a=l[k])&&"setAttribute"in a==!!b&&(b?a.localName===b:3===a.nodeType)){t=a,l[k]=null;break}}if(null==t){if(null===b)return document.createTextNode(m);t=r?document.createElementNS("http://www.w3.org/2000/svg",b):document.createElement(b,m.is&&m),l=null,s=!1}if(null===b)v===m||s&&t.data===m||(t.data=m);else{if(l=l&&e.call(t.childNodes),d=(v=_.props||i).dangerouslySetInnerHTML,h=m.dangerouslySetInnerHTML,!s){if(null!=l)for(v={},k=0;k<t.attributes.length;k++)v[t.attributes[k].name]=t.attributes[k].value;(h||d)&&(h&&(d&&h.__html==d.__html||h.__html===t.innerHTML)||(t.innerHTML=h&&h.__html||""))}if(function(e,t,n,_,o){var r;for(r in n)"children"===r||"key"===r||r in t||C(e,r,null,n[r],_);for(r in t)o&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||C(e,r,t[r],n[r],_)}(t,m,v,r,s),h)n.__k=[];else if(g(t,c(k=n.props.children)?k:[k],n,_,o,r&&"foreignObject"!==b,l,u,l?l[0]:_.__k&&y(_,0),s,p),null!=l)for(k=l.length;k--;)null!=l[k]&&f(l[k]);s||("value"in m&&void 0!==(k=m.value)&&(k!==t.value||"progress"===b&&!k||"option"===b&&k!==v.value)&&C(t,"value",k,v.value,!1),"checked"in m&&void 0!==(k=m.checked)&&k!==t.checked&&C(t,"checked",k,v.checked,!1))}return t}(o.__e,_,o,r,l,u,s,d,m);(b=t.diffed)&&b(_)}function E(e,n,_){for(var o=0;o<_.length;o++)T(_[o],_[++o],_[++o]);t.__c&&t.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){t.__e(e,n.__v)}})}function T(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function L(e,n,_){var o,r;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||T(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null,e.__c=void 0}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&L(o[r],n,_||"function"!=typeof e.type);_||null==e.__e||f(e.__e),e.__=e.__e=e.__d=void 0}function N(e,t,n){return this.constructor(e,n)}function D(n,_,o){var r,l,u,s;t.__&&t.__(n,_),l=(r="function"==typeof o)?null:o&&o.__k||_.__k,u=[],s=[],S(_,n=(!r&&o||_).__k=a(h,null,[n]),l||i,i,void 0!==_.ownerSVGElement,!r&&o?[o]:l?null:_.firstChild?e.call(_.childNodes):null,u,!r&&o?o:l?l.__e:_.firstChild,r,s),E(u,n,s)}function U(t,n,_){var o,r,l,i,u=p({},t.props);for(l in t.type&&t.type.defaultProps&&(i=t.type.defaultProps),n)"key"==l?o=n[l]:"ref"==l?r=n[l]:u[l]=void 0===n[l]&&void 0!==i?i[l]:n[l];return arguments.length>2&&(u.children=arguments.length>3?e.call(arguments,2):_),d(t.type,u,o||t.key,r||t.ref,null)}e=u.slice,t={__e:function(e,t,n,_){for(var o,r,l;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&null!=r.getDerivedStateFromError&&(o.setState(r.getDerivedStateFromError(e)),l=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,_||{}),l=o.__d),l)return o.__E=o}catch(t){e=t}throw e}},n=0,v.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=p({},this.state),"function"==typeof e&&(e=e(p({},n),this.props)),e&&p(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),m(this))},v.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},v.prototype.render=h,_=[],r="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,l=function(e,t){return e.__v.__b-t.__v.__b},b.__r=0;var M=0;function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var _ in n)Object.prototype.hasOwnProperty.call(n,_)&&(e[_]=n[_])}return e}).apply(this,arguments)}function A(e){return this.getChildContext=function(){return e.context},U(e.children,function(e,t){if(null==e)return{};var n,_,o={},r=Object.keys(e);for(_=0;_<r.length;_++)t.indexOf(n=r[_])>=0||(o[n]=e[n]);return o}(e,["context","children"]))}function H(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=a(A,O({},this._props,{context:e.detail.context}),function e(t,n){if(3===t.nodeType)return t.data;if(1!==t.nodeType)return null;var _=[],o={},r=0,l=t.attributes,i=t.childNodes;for(r=l.length;r--;)"slot"!==l[r].name&&(o[l[r].name]=l[r].value,o[W(l[r].name)]=l[r].value);for(r=i.length;r--;){var u=e(i[r],null),s=i[r].slot;s?o[s]=a(R,{name:s},u):_[r]=u}var c=n?a(R,null,_):_;return a(n||t.nodeName.toLowerCase(),o,c)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?function e(t,n){D(t,n,e)}:D)(this._vdom,this._root)}function W(e){return e.replace(/-(\w)/g,function(e,t){return t?t.toUpperCase():""})}function j(e,t,n){if(this._vdom){var _={};_[e]=n=null==n?void 0:n,_[W(e)]=n,this._vdom=U(this._vdom,_),D(this._vdom,this._root)}}function F(){D(this._vdom=null,this._root)}function R(e,t){var n=this;return a("slot",O({},e,{ref:function(e){e?(n.ref=e,n._listener||(n._listener=function(e){e.stopPropagation(),e.detail.context=t},e.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}!function(e,t,n,_){function o(){var t=Reflect.construct(HTMLElement,[],o);return t._vdomComponent=e,t._root=_&&_.shadow?t.attachShadow({mode:"open"}):t,t}(o.prototype=Object.create(HTMLElement.prototype)).constructor=o,o.prototype.connectedCallback=H,o.prototype.attributeChangedCallback=j,o.prototype.disconnectedCallback=F,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),o.observedAttributes=n,n.forEach(function(e){Object.defineProperty(o.prototype,e,{get:function(){return this._vdom.props[e]},set:function(t){this._vdom?this.attributeChangedCallback(e,null,t):(this._props||(this._props={}),this._props[e]=t,this.connectedCallback());var n=typeof t;null!=t&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(e,t)}})}),customElements.define(t||e.tagName||e.displayName||e.name,o)}(({name:e="World"})=>(function(e,n,_,o,r,l){var i,u,s={};for(u in n)"ref"==u?i=n[u]:s[u]=n[u];var c={type:e,props:s,key:void 0,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--M,__source:void 0,__self:void 0};if("function"==typeof e&&(i=e.defaultProps))for(u in i)void 0===s[u]&&(s[u]=i[u]);return t.vnode&&t.vnode(c),c})("p",{class:"text-orange-500",children:["Hello, ",e,"!"]}),"x-greeting",["name"],{shadow:!1})})();//# sourceMappingURL=text.js.map

//# sourceMappingURL=text.js.map
