!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=Error().stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="1fcf84aa-53d4-4cd0-ba95-52014368c35f",e._sentryDebugIdIdentifier="sentry-dbid-1fcf84aa-53d4-4cd0-ba95-52014368c35f")}catch(e){}}();"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1466],{22903:function(e,t,n){n.d(t,{d:function(){return d},f:function(){return s}});var r=n(64380),o=n(30057),l=n(5061),a=n(69031),i=n(85572),u=n(84676);let c=(0,r.createContext)(null);function s(){let[e,t]=(0,r.useState)([]);return[e.length>0?e.join(" "):void 0,(0,r.useMemo)(()=>function(e){let n=(0,o.z)(e=>(t(t=>[...t,e]),()=>t(t=>{let n=t.slice(),r=n.indexOf(e);return -1!==r&&n.splice(r,1),n}))),l=(0,r.useMemo)(()=>({register:n,slot:e.slot,name:e.name,props:e.props}),[n,e.slot,e.name,e.props]);return r.createElement(c.Provider,{value:l},e.children)},[t])]}let d=Object.assign((0,u.yV)(function(e,t){let n=(0,l.M)(),{id:o="headlessui-description-".concat(n),...s}=e,d=function e(){let t=(0,r.useContext)(c);if(null===t){let t=Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,e),t}return t}(),f=(0,i.T)(t);(0,a.e)(()=>d.register(o),[o,d.register]);let p={ref:f,...d.props,id:o};return(0,u.sY)({ourProps:p,theirProps:s,slot:d.slot||{},defaultTag:"p",name:d.name||"Description"})}),{})},61466:function(e,t,n){let r,o,l,a,i;n.d(t,{V:function(){return Q}});var u,c,s=n(64380),d=n.t(s,2),f=n(32115),p=n(64881);let{useState:m,useEffect:g,useLayoutEffect:v,useDebugValue:h}=d;"undefined"!=typeof window&&void 0!==window.document&&window.document.createElement;let E=d.useSyncExternalStore;var w=n(69031),y=n(99748),b=n(3567);let T=(u=()=>new Map,c={PUSH(e,t){var n;let r=null!=(n=this.get(e))?n:{doc:e,count:0,d:(0,y.k)(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT(e){let t,{doc:n,d:r,meta:o}=e,l={doc:n,d:r,meta:function(e){let t={};for(let n of e)Object.assign(t,n(t));return t}(o)},a=[(0,b.gn)()?{before(e){let{doc:t,d:n,meta:r}=e;function o(e){return r.containers.flatMap(e=>e()).some(t=>t.contains(e))}n.microTask(()=>{var e;if("auto"!==window.getComputedStyle(t.documentElement).scrollBehavior){let e=(0,y.k)();e.style(t.documentElement,"scrollBehavior","auto"),n.add(()=>n.microTask(()=>e.dispose()))}let r=null!=(e=window.scrollY)?e:window.pageYOffset,l=null;n.addEventListener(t,"click",e=>{if(e.target instanceof HTMLElement)try{let n=e.target.closest("a");if(!n)return;let{hash:r}=new URL(n.href),a=t.querySelector(r);a&&!o(a)&&(l=a)}catch(e){}},!0),n.addEventListener(t,"touchstart",e=>{if(e.target instanceof HTMLElement){if(o(e.target)){let t=e.target;for(;t.parentElement&&o(t.parentElement);)t=t.parentElement;n.style(t,"overscrollBehavior","contain")}else n.style(e.target,"touchAction","none")}}),n.addEventListener(t,"touchmove",e=>{if(e.target instanceof HTMLElement){if(o(e.target)){let t=e.target;for(;t.parentElement&&""!==t.dataset.headlessuiPortal&&!(t.scrollHeight>t.clientHeight||t.scrollWidth>t.clientWidth);)t=t.parentElement;""===t.dataset.headlessuiPortal&&e.preventDefault()}else e.preventDefault()}},{passive:!1}),n.add(()=>{var e;r!==(null!=(e=window.scrollY)?e:window.pageYOffset)&&window.scrollTo(0,r),l&&l.isConnected&&(l.scrollIntoView({block:"nearest"}),l=null)})})}}:{},{before(e){var n;let{doc:r}=e,o=r.documentElement;t=(null!=(n=r.defaultView)?n:window).innerWidth-o.clientWidth},after(e){let{doc:n,d:r}=e,o=n.documentElement,l=o.clientWidth-o.offsetWidth,a=t-l;r.style(o,"paddingRight","".concat(a,"px"))}},{before(e){let{doc:t,d:n}=e;n.style(t.documentElement,"overflow","hidden")}}];a.forEach(e=>{let{before:t}=e;return null==t?void 0:t(l)}),a.forEach(e=>{let{after:t}=e;return null==t?void 0:t(l)})},SCROLL_ALLOW(e){let{d:t}=e;t.dispose()},TEARDOWN(e){let{doc:t}=e;this.delete(t)}},r=u(),o=new Set,{getSnapshot:()=>r,subscribe:e=>(o.add(e),()=>o.delete(e)),dispatch(e){for(var t=arguments.length,n=Array(t>1?t-1:0),l=1;l<t;l++)n[l-1]=arguments[l];let a=c[e].call(r,...n);a&&(r=a,o.forEach(e=>e()))}});T.subscribe(()=>{let e=T.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let e="hidden"===t.get(n.doc),r=0!==n.count;(r&&!e||!r&&e)&&T.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),0===n.count&&T.dispatch("TEARDOWN",n)}});var D=n(30057),L=n(27899),C=n(5061);let O=new Map,k=new Map;function P(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1];(0,w.e)(()=>{var n;if(!t)return;let r="function"==typeof e?e():e.current;if(!r)return;let o=null!=(n=k.get(r))?n:0;return k.set(r,o+1),0!==o||(O.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),function(){var e;if(!r)return;let t=null!=(e=k.get(r))?e:1;if(1===t?k.delete(r):k.set(r,t-1),1!==t)return;let n=O.get(r);n&&(null===n["aria-hidden"]?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",n["aria-hidden"]),r.inert=n.inert,O.delete(r))}},[e,t])}var M=n(7822),S=n(4523),R=n(65700),A=n(17898),F=n(85572),N=n(38747),Y=n(60763);let H=(0,s.createContext)(()=>{});H.displayName="StackContext";var I=((l=I||{})[l.Add=0]="Add",l[l.Remove=1]="Remove",l);function _(e){let{children:t,onUpdate:n,type:r,element:o,enabled:l}=e,a=(0,s.useContext)(H),i=(0,D.z)(function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];null==n||n(...t),a(...t)});return(0,w.e)(()=>{let e=void 0===l||!0===l;return e&&i(0,r,o),()=>{e&&i(1,r,o)}},[i,r,o,l]),s.createElement(H.Provider,{value:i},t)}var V=n(17379),x=n(71362),z=n(84676),B=n(22903),W=n(76876),j=((a=j||{})[a.Open=0]="Open",a[a.Closed=1]="Closed",a),q=((i=q||{})[i.SetTitleId=0]="SetTitleId",i);let U={0:(e,t)=>e.titleId===t.id?e:{...e,titleId:t.id}},Z=(0,s.createContext)(null);function G(e){let t=(0,s.useContext)(Z);if(null===t){let t=Error("<".concat(e," /> is missing a parent <Dialog /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,G),t}return t}function J(e,t){return(0,x.E)(t.type,U,e,t)}Z.displayName="DialogContext";let K=z.AN.RenderStrategy|z.AN.Static,Q=Object.assign((0,z.yV)(function(e,t){let n=(0,C.M)(),{id:r="headlessui-dialog-".concat(n),open:o,onClose:l,initialFocus:a,role:i="dialog",__demoMode:u=!1,...c}=e,[d,m]=(0,s.useState)(0),g=(0,s.useRef)(!1);i="dialog"===i||"alertdialog"===i?i:(g.current||(g.current=!0,console.warn("Invalid role [".concat(i,"] passed to <Dialog />. Only `dialog` and and `alertdialog` are supported. Using `dialog` instead."))),"dialog");let v=(0,N.oJ)();void 0===o&&null!==v&&(o=(v&N.ZM.Open)===N.ZM.Open);let h=(0,s.useRef)(null),y=(0,F.T)(h,t),b=(0,S.i)(h),O=e.hasOwnProperty("open")||null!==v,k=e.hasOwnProperty("onClose");if(!O&&!k)throw Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!O)throw Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!k)throw Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if("boolean"!=typeof o)throw Error("You provided an `open` prop to the `Dialog`, but the value is not a boolean. Received: ".concat(o));if("function"!=typeof l)throw Error("You provided an `onClose` prop to the `Dialog`, but the value is not a function. Received: ".concat(l));let H=o?0:1,[V,j]=(0,s.useReducer)(J,{titleId:null,descriptionId:null,panelRef:(0,s.createRef)()}),q=(0,D.z)(()=>l(!1)),U=(0,D.z)(e=>j({type:0,id:e})),G=!!(0,A.H)()&&!u&&0===H,Q=d>1,X=null!==(0,s.useContext)(Z),[$,ee]=(0,p.k)(),{resolveContainers:et,mainTreeNodeRef:en,MainTreeNode:er}=(0,R.v)({portals:$,defaultContainers:[{get current(){var eo;return null!=(eo=V.panelRef.current)?eo:h.current}}]}),el=null!==v&&(v&N.ZM.Closing)===N.ZM.Closing,ea=!X&&!el&&G;P((0,s.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("body > *"))?e:[]).find(e=>"headlessui-portal-root"!==e.id&&e.contains(en.current)&&e instanceof HTMLElement))?t:null},[en]),ea);let ei=!!Q||G;P((0,s.useCallback)(()=>{var e,t;return null!=(t=Array.from(null!=(e=null==b?void 0:b.querySelectorAll("[data-headlessui-portal]"))?e:[]).find(e=>e.contains(en.current)&&e instanceof HTMLElement))?t:null},[en]),ei);let eu=!(!G||Q);(0,M.O)(et,e=>{e.preventDefault(),q()},eu);let ec=!(Q||0!==H);(0,L.O)(null==b?void 0:b.defaultView,"keydown",e=>{ec&&(e.defaultPrevented||e.key===W.R.Escape&&(e.preventDefault(),e.stopPropagation(),q()))}),function(e,t){var n;let r,o,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>[document.body];n=e=>{var t;return{containers:[...null!=(t=e.containers)?t:[],l]}},r=E(T.subscribe,T.getSnapshot,T.getSnapshot),(o=e?r.get(e):void 0)&&o.count,(0,w.e)(()=>{if(!(!e||!t))return T.dispatch("PUSH",e,n),()=>T.dispatch("POP",e,n)},[t,e])}(b,!(el||0!==H||X),et),(0,s.useEffect)(()=>{if(0!==H||!h.current)return;let e=new ResizeObserver(e=>{for(let t of e){let e=t.target.getBoundingClientRect();0===e.x&&0===e.y&&0===e.width&&0===e.height&&q()}});return e.observe(h.current),()=>e.disconnect()},[H,h,q]);let[es,ed]=(0,B.f)(),ef=(0,s.useMemo)(()=>[{dialogState:H,close:q,setTitleId:U},V],[H,V,q,U]),ep=(0,s.useMemo)(()=>({open:0===H}),[H]),em={ref:y,id:r,role:i,"aria-modal":0===H||void 0,"aria-labelledby":V.titleId,"aria-describedby":es};return s.createElement(_,{type:"Dialog",enabled:0===H,element:h,onUpdate:(0,D.z)((e,t)=>{"Dialog"===t&&(0,x.E)(e,{[I.Add]:()=>m(e=>e+1),[I.Remove]:()=>m(e=>e-1)})})},s.createElement(Y.O,{force:!0},s.createElement(p.h,null,s.createElement(Z.Provider,{value:ef},s.createElement(p.h.Group,{target:h},s.createElement(Y.O,{force:!1},s.createElement(ed,{slot:ep,name:"Dialog.Description"},s.createElement(f.i,{initialFocus:a,containers:et,features:G?(0,x.E)(Q?"parent":"leaf",{parent:f.i.features.RestoreFocus,leaf:f.i.features.All&~f.i.features.FocusLock}):f.i.features.None},s.createElement(ee,null,(0,z.sY)({ourProps:em,theirProps:c,slot:ep,defaultTag:"div",features:K,visible:0===H,name:"Dialog"}))))))))),s.createElement(er,null))}),{Backdrop:(0,z.yV)(function(e,t){let n=(0,C.M)(),{id:r="headlessui-dialog-backdrop-".concat(n),...o}=e,[{dialogState:l},a]=G("Dialog.Backdrop"),i=(0,F.T)(t);(0,s.useEffect)(()=>{if(null===a.panelRef.current)throw Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[a.panelRef]);let u=(0,s.useMemo)(()=>({open:0===l}),[l]);return s.createElement(Y.O,{force:!0},s.createElement(p.h,null,(0,z.sY)({ourProps:{ref:i,id:r,"aria-hidden":!0},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Backdrop"})))}),Panel:(0,z.yV)(function(e,t){let n=(0,C.M)(),{id:r="headlessui-dialog-panel-".concat(n),...o}=e,[{dialogState:l},a]=G("Dialog.Panel"),i=(0,F.T)(t,a.panelRef),u=(0,s.useMemo)(()=>({open:0===l}),[l]),c=(0,D.z)(e=>{e.stopPropagation()});return(0,z.sY)({ourProps:{ref:i,id:r,onClick:c},theirProps:o,slot:u,defaultTag:"div",name:"Dialog.Panel"})}),Overlay:(0,z.yV)(function(e,t){let n=(0,C.M)(),{id:r="headlessui-dialog-overlay-".concat(n),...o}=e,[{dialogState:l,close:a}]=G("Dialog.Overlay"),i=(0,F.T)(t),u=(0,D.z)(e=>{if(e.target===e.currentTarget){if((0,V.P)(e.currentTarget))return e.preventDefault();e.preventDefault(),e.stopPropagation(),a()}}),c=(0,s.useMemo)(()=>({open:0===l}),[l]);return(0,z.sY)({ourProps:{ref:i,id:r,"aria-hidden":!0,onClick:u},theirProps:o,slot:c,defaultTag:"div",name:"Dialog.Overlay"})}),Title:(0,z.yV)(function(e,t){let n=(0,C.M)(),{id:r="headlessui-dialog-title-".concat(n),...o}=e,[{dialogState:l,setTitleId:a}]=G("Dialog.Title"),i=(0,F.T)(t);(0,s.useEffect)(()=>(a(r),()=>a(null)),[r,a]);let u=(0,s.useMemo)(()=>({open:0===l}),[l]);return(0,z.sY)({ourProps:{ref:i,id:r},theirProps:o,slot:u,defaultTag:"h2",name:"Dialog.Title"})}),Description:B.d})},32115:function(e,t,n){let r;n.d(t,{i:function(){return D}});var o=n(64380),l=n(56454),a=n(30057),i=n(27899),u=n(51259),c=n(40172),s=n(4523),d=n(17898),f=n(85572),p=n(25048),m=n(54615),g=n(51590),v=n(98292),h=n(49950),E=n(71362),w=n(47896),y=n(84676);function b(e){if(!e)return new Set;if("function"==typeof e)return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}var T=((r=T||{})[r.None=1]="None",r[r.InitialFocus=2]="InitialFocus",r[r.TabLock=4]="TabLock",r[r.FocusLock=8]="FocusLock",r[r.RestoreFocus=16]="RestoreFocus",r[r.All=30]="All",r);let D=Object.assign((0,y.yV)(function(e,t){let n=(0,o.useRef)(null),r=(0,f.T)(n,t),{initialFocus:T,containers:D,features:C=30,...O}=e;(0,d.H)()||(C=1);let k=(0,s.i)(n);!function(e,t){let{ownerDocument:n}=e,r=function(){let e=!(arguments.length>0)||void 0===arguments[0]||arguments[0],t=(0,o.useRef)(v.m.slice());return(0,m.q)((e,n)=>{let[r]=e,[o]=n;!0===o&&!1===r&&(0,w.Y)(()=>{t.current.splice(0)}),!1===o&&!0===r&&(t.current=v.m.slice())},[e,v.m,t]),(0,a.z)(()=>{var e;return null!=(e=t.current.find(e=>null!=e&&e.isConnected))?e:null})}(t);(0,m.q)(()=>{t||(null==n?void 0:n.activeElement)===(null==n?void 0:n.body)&&(0,h.C5)(r())},[t]),(0,c.L)(()=>{t&&(0,h.C5)(r())})}({ownerDocument:k},!!(16&C));let P=function(e,t){let{ownerDocument:n,container:r,initialFocus:l}=e,a=(0,o.useRef)(null),i=(0,u.t)();return(0,m.q)(()=>{if(!t)return;let e=r.current;e&&(0,w.Y)(()=>{if(!i.current)return;let t=null==n?void 0:n.activeElement;if(null!=l&&l.current){if((null==l?void 0:l.current)===t){a.current=t;return}}else if(e.contains(t)){a.current=t;return}null!=l&&l.current?(0,h.C5)(l.current):(0,h.jA)(e,h.TO.First)===h.fE.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=null==n?void 0:n.activeElement})},[t]),a}({ownerDocument:k,container:n,initialFocus:T},!!(2&C));!function(e,t){let{ownerDocument:n,container:r,containers:o,previousActiveElement:l}=e,a=(0,u.t)();(0,i.O)(null==n?void 0:n.defaultView,"focus",e=>{if(!t||!a.current)return;let n=b(o);r.current instanceof HTMLElement&&n.add(r.current);let i=l.current;if(!i)return;let u=e.target;u&&u instanceof HTMLElement?L(n,u)?(l.current=u,(0,h.C5)(u)):(e.preventDefault(),e.stopPropagation(),(0,h.C5)(i)):(0,h.C5)(l.current)},!0)}({ownerDocument:k,container:n,containers:D,previousActiveElement:P},!!(8&C));let M=(0,p.l)(),S=(0,a.z)(e=>{let t=n.current;t&&(0,E.E)(M.current,{[p.N.Forwards]:()=>{(0,h.jA)(t,h.TO.First,{skipElements:[e.relatedTarget]})},[p.N.Backwards]:()=>{(0,h.jA)(t,h.TO.Last,{skipElements:[e.relatedTarget]})}})}),R=(0,l.G)(),A=(0,o.useRef)(!1);return o.createElement(o.Fragment,null,!!(4&C)&&o.createElement(g._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:S,features:g.A.Focusable}),(0,y.sY)({ourProps:{ref:r,onKeyDown(e){"Tab"==e.key&&(A.current=!0,R.requestAnimationFrame(()=>{A.current=!1}))},onBlur(e){let t=b(D);n.current instanceof HTMLElement&&t.add(n.current);let r=e.relatedTarget;r instanceof HTMLElement&&"true"!==r.dataset.headlessuiFocusGuard&&(L(t,r)||(A.current?(0,h.jA)(n.current,(0,E.E)(M.current,{[p.N.Forwards]:()=>h.TO.Next,[p.N.Backwards]:()=>h.TO.Previous})|h.TO.WrapAround,{relativeTo:e.target}):e.target instanceof HTMLElement&&(0,h.C5)(e.target)))}},theirProps:O,defaultTag:"div",name:"FocusTrap"}),!!(4&C)&&o.createElement(g._,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:S,features:g.A.Focusable}))}),{features:T});function L(e,t){for(let n of e)if(n.contains(t))return!0;return!1}},54615:function(e,t,n){n.d(t,{q:function(){return l}});var r=n(64380),o=n(30057);function l(e,t){let n=(0,r.useRef)([]),l=(0,o.z)(e);(0,r.useEffect)(()=>{let e=[...n.current];for(let[r,o]of t.entries())if(n.current[r]!==o){let r=l(t,e);return n.current=t,r}},[l,...t])}},98292:function(e,t,n){n.d(t,{m:function(){return r}});let r=[];!function(e){function t(){"loading"!==document.readyState&&(e(),document.removeEventListener("DOMContentLoaded",t))}"undefined"!=typeof window&&"undefined"!=typeof document&&(document.addEventListener("DOMContentLoaded",t),t())}(()=>{function e(e){e.target instanceof HTMLElement&&e.target!==document.body&&r[0]!==e.target&&(r.unshift(e.target),(r=r.filter(e=>null!=e&&e.isConnected)).splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})})}}]);