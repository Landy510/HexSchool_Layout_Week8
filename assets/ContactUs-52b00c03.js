import{d as g,g as Y,r as ne,j as n,p as ie}from"./index-0236e967.js";const oe={"container-bg":"_container-bg_af4vz_1"},se="/HexSchool_Layout_Week8/assets/diane_horizontal-dbbcb181.png",ce="/HexSchool_Layout_Week8/assets/felix_horizontal-1b62d721.png",le="/HexSchool_Layout_Week8/assets/karina_horizontal-82ed456d.png",de="/HexSchool_Layout_Week8/assets/vito_horizontal-9191a4c1.png",me="/HexSchool_Layout_Week8/assets/diane_choose-8bf570a2.png",ue="/HexSchool_Layout_Week8/assets/felix_choose-4a97f366.png",fe="/HexSchool_Layout_Week8/assets/karina_choose-16a4fcd3.png",pe="/HexSchool_Layout_Week8/assets/vito_choose-1cac34cd.png";var U="Expected a function",W=0/0,be="[object Symbol]",he=/^\s+|\s+$/g,ve=/^[-+]0x[0-9a-f]+$/i,xe=/^0b[01]+$/i,ge=/^0o[0-7]+$/i,ke=parseInt,we=typeof g=="object"&&g&&g.Object===Object&&g,ye=typeof self=="object"&&self&&self.Object===Object&&self,je=we||ye||Function("return this")(),Ne=Object.prototype,Oe=Ne.toString,Ee=Math.max,Se=Math.min,$=function(){return je.Date.now()};function _e(t,e,a){var r,i,c,l,s,d,m=0,f=!1,b=!1,w=!0;if(typeof t!="function")throw new TypeError(U);e=q(e)||0,I(a)&&(f=!!a.leading,b="maxWait"in a,c=b?Ee(q(a.maxWait)||0,e):c,w="trailing"in a?!!a.trailing:w);function y(o){var p=r,h=i;return r=i=void 0,m=o,l=t.apply(h,p),l}function T(o){return m=o,s=setTimeout(v,e),f?y(o):l}function L(o){var p=o-d,h=o-m,S=e-p;return b?Se(S,c-h):S}function O(o){var p=o-d,h=o-m;return d===void 0||p>=e||p<0||b&&h>=c}function v(){var o=$();if(O(o))return E(o);s=setTimeout(v,L(o))}function E(o){return s=void 0,w&&r?y(o):(r=i=void 0,l)}function z(){s!==void 0&&clearTimeout(s),m=0,r=d=i=s=void 0}function A(){return s===void 0?l:E($())}function j(){var o=$(),p=O(o);if(r=arguments,i=this,d=o,p){if(s===void 0)return T(d);if(b)return s=setTimeout(v,e),y(d)}return s===void 0&&(s=setTimeout(v,e)),l}return j.cancel=z,j.flush=A,j}function Ce(t,e,a){var r=!0,i=!0;if(typeof t!="function")throw new TypeError(U);return I(a)&&(r="leading"in a?!!a.leading:r,i="trailing"in a?!!a.trailing:i),_e(t,e,{leading:r,maxWait:e,trailing:i})}function I(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Ie(t){return!!t&&typeof t=="object"}function Te(t){return typeof t=="symbol"||Ie(t)&&Oe.call(t)==be}function q(t){if(typeof t=="number")return t;if(Te(t))return W;if(I(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=I(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(he,"");var a=xe.test(t);return a||ge.test(t)?ke(t.slice(2),a?2:8):ve.test(t)?W:+t}var Le=Ce;const ze=Y(Le);var Ae="Expected a function",P=0/0,$e="[object Symbol]",Me=/^\s+|\s+$/g,He=/^[-+]0x[0-9a-f]+$/i,We=/^0b[01]+$/i,qe=/^0o[0-7]+$/i,Pe=parseInt,De=typeof g=="object"&&g&&g.Object===Object&&g,Re=typeof self=="object"&&self&&self.Object===Object&&self,Be=De||Re||Function("return this")(),Fe=Object.prototype,Ke=Fe.toString,Ge=Math.max,Ye=Math.min,M=function(){return Be.Date.now()};function Ue(t,e,a){var r,i,c,l,s,d,m=0,f=!1,b=!1,w=!0;if(typeof t!="function")throw new TypeError(Ae);e=D(e)||0,H(a)&&(f=!!a.leading,b="maxWait"in a,c=b?Ge(D(a.maxWait)||0,e):c,w="trailing"in a?!!a.trailing:w);function y(o){var p=r,h=i;return r=i=void 0,m=o,l=t.apply(h,p),l}function T(o){return m=o,s=setTimeout(v,e),f?y(o):l}function L(o){var p=o-d,h=o-m,S=e-p;return b?Ye(S,c-h):S}function O(o){var p=o-d,h=o-m;return d===void 0||p>=e||p<0||b&&h>=c}function v(){var o=M();if(O(o))return E(o);s=setTimeout(v,L(o))}function E(o){return s=void 0,w&&r?y(o):(r=i=void 0,l)}function z(){s!==void 0&&clearTimeout(s),m=0,r=d=i=s=void 0}function A(){return s===void 0?l:E(M())}function j(){var o=M(),p=O(o);if(r=arguments,i=this,d=o,p){if(s===void 0)return T(d);if(b)return s=setTimeout(v,e),y(d)}return s===void 0&&(s=setTimeout(v,e)),l}return j.cancel=z,j.flush=A,j}function H(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function Xe(t){return!!t&&typeof t=="object"}function Ve(t){return typeof t=="symbol"||Xe(t)&&Ke.call(t)==$e}function D(t){if(typeof t=="number")return t;if(Ve(t))return P;if(H(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=H(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(Me,"");var a=We.test(t);return a||qe.test(t)?Pe(t.slice(2),a?2:8):He.test(t)?P:+t}var Je=Ue;const R=Y(Je);var X=function(){};function V(t){var e=void 0,a=void 0,r=void 0;for(e=0;e<t.length;e+=1)if(a=t[e],a.dataset&&a.dataset.aos||(r=a.children&&V(a.children),r))return!0;return!1}function Qe(t){t&&t.forEach(function(e){var a=Array.prototype.slice.call(e.addedNodes),r=Array.prototype.slice.call(e.removedNodes),i=a.concat(r);if(V(i))return X()})}function J(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function Ze(){return!!J()}function et(t,e){var a=window.document,r=J(),i=new r(Qe);X=e,i.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}var B={isSupported:Ze,ready:et},tt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},at=function(){function t(e,a){for(var r=0;r<a.length;r++){var i=a[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,a,r){return a&&t(e.prototype,a),r&&t(e,r),e}}(),rt=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t},nt=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,it=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,ot=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,st=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function F(){return navigator.userAgent||navigator.vendor||window.opera||""}var ct=function(){function t(){tt(this,t)}return at(t,[{key:"phone",value:function(){var a=F();return!!(nt.test(a)||it.test(a.substr(0,4)))}},{key:"mobile",value:function(){var a=F();return!!(ot.test(a)||st.test(a.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}(),C=new ct,lt=function(e,a){return a&&a.forEach(function(r){return e.classList.add(r)})},dt=function(e,a){return a&&a.forEach(function(r){return e.classList.remove(r)})},_=function(e,a){var r=void 0;return C.ie11()?(r=document.createEvent("CustomEvent"),r.initCustomEvent(e,!0,!0,{detail:a})):r=new CustomEvent(e,{detail:a}),document.dispatchEvent(r)},mt=function(e,a){var r=e.options,i=e.position,c=e.node;e.data;var l=function(){e.animated&&(dt(c,r.animatedClassNames),_("aos:out",c),e.options.id&&_("aos:in:"+e.options.id,c),e.animated=!1)},s=function(){e.animated||(lt(c,r.animatedClassNames),_("aos:in",c),e.options.id&&_("aos:in:"+e.options.id,c),e.animated=!0)};r.mirror&&a>=i.out&&!r.once?l():a>=i.in?s():e.animated&&!r.once&&l()},K=function(e){return e.forEach(function(a,r){return mt(a,window.pageYOffset)})},Q=function(e){for(var a=0,r=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)a+=e.offsetLeft-(e.tagName!="BODY"?e.scrollLeft:0),r+=e.offsetTop-(e.tagName!="BODY"?e.scrollTop:0),e=e.offsetParent;return{top:r,left:a}},k=function(t,e,a){var r=t.getAttribute("data-aos-"+e);if(typeof r<"u"){if(r==="true")return!0;if(r==="false")return!1}return r||a},ut=function(e,a,r){var i=window.innerHeight,c=k(e,"anchor"),l=k(e,"anchor-placement"),s=Number(k(e,"offset",l?0:a)),d=l||r,m=e;c&&document.querySelectorAll(c)&&(m=document.querySelectorAll(c)[0]);var f=Q(m).top-i;switch(d){case"top-bottom":break;case"center-bottom":f+=m.offsetHeight/2;break;case"bottom-bottom":f+=m.offsetHeight;break;case"top-center":f+=i/2;break;case"center-center":f+=i/2+m.offsetHeight/2;break;case"bottom-center":f+=i/2+m.offsetHeight;break;case"top-top":f+=i;break;case"bottom-top":f+=i+m.offsetHeight;break;case"center-top":f+=i+m.offsetHeight/2;break}return f+s},ft=function(e,a){var r=k(e,"anchor"),i=k(e,"offset",a),c=e;r&&document.querySelectorAll(r)&&(c=document.querySelectorAll(r)[0]);var l=Q(c).top;return l+c.offsetHeight-i},pt=function(e,a){return e.forEach(function(r,i){var c=k(r.node,"mirror",a.mirror),l=k(r.node,"once",a.once),s=k(r.node,"id"),d=a.useClassNames&&r.node.getAttribute("data-aos"),m=[a.animatedClassName].concat(d?d.split(" "):[]).filter(function(f){return typeof f=="string"});a.initClassName&&r.node.classList.add(a.initClassName),r.position={in:ut(r.node,a.offset,a.anchorPlacement),out:c&&ft(r.node,a.offset)},r.options={once:l,mirror:c,animatedClassNames:m,id:s}}),e},Z=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(e){return{node:e}})},x=[],G=!1,u={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ee=function(){return document.all&&!window.atob},bt=function(){return x=pt(x,u),K(x),window.addEventListener("scroll",ze(function(){K(x,u.once)},u.throttleDelay)),x},N=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;e&&(G=!0),G&&bt()},te=function(){if(x=Z(),re(u.disable)||ee())return ae();N()},ae=function(){x.forEach(function(e,a){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay"),u.initClassName&&e.node.classList.remove(u.initClassName),u.animatedClassName&&e.node.classList.remove(u.animatedClassName)})},re=function(e){return e===!0||e==="mobile"&&C.mobile()||e==="phone"&&C.phone()||e==="tablet"&&C.tablet()||typeof e=="function"&&e()===!0},ht=function(e){return u=rt(u,e),x=Z(),!u.disableMutationObserver&&!B.isSupported()&&(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),u.disableMutationObserver=!0),u.disableMutationObserver||B.ready("[data-aos]",te),re(u.disable)||ee()?ae():(document.querySelector("body").setAttribute("data-aos-easing",u.easing),document.querySelector("body").setAttribute("data-aos-duration",u.duration),document.querySelector("body").setAttribute("data-aos-delay",u.delay),["DOMContentLoaded","load"].indexOf(u.startEvent)===-1?document.addEventListener(u.startEvent,function(){N(!0)}):window.addEventListener("load",function(){N(!0)}),u.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1&&N(!0),window.addEventListener("resize",R(N,u.debounceDelay,!0)),window.addEventListener("orientationchange",R(N,u.debounceDelay,!0)),x)},vt={init:ht,refresh:N,refreshHard:te};const gt=()=>(ne.useEffect(()=>{vt.init({offset:120,once:!0})},[]),n.jsxs(n.Fragment,{children:[n.jsx("div",{className:[oe["container-bg"],"pt-[3.75rem] pb-15 tablet:py-[10rem] desktop:py-[10rem]"].join(" "),children:n.jsxs("div",{className:"desktop:container px-2-1/2 text-white",children:[n.jsx("h2",{className:"font-black text-[2.5rem] tracking-[2.5rem] mb-8 tablet:mb-3 desktop:mb-3 tablet:text-[3rem] tablet:tracking-[3rem] desktop:text-[4rem] desktop:tracking-[4rem]",children:"聯絡我們"}),n.jsxs("div",{className:"flex flex-wrap -mx-2-1/2",children:[n.jsx("div",{className:"hidden tablet:hidden desktop:block tablet:w-[calc(100%/12)] desktop:w-[calc(100%/12)] px-2-1/2"}),n.jsxs("div",{className:"w-full tablet:w-1/2 desktop:w-1/2 px-2-1/2",children:[n.jsx("p",{className:"mb-12",children:"您的意見與需求對我們至關重要！如果您對 ALPHABOX+ 有任何疑問、建議或需求，請隨時填寫以下表單，我們將在 24 小時內回覆您。您的寶貴意見將幫助我們不斷改進產品與服務，為您帶來更優質的體驗。"}),n.jsx("p",{className:"font-bold mb-12",children:"我們期待您的來信與來電，竭誠為您解答。讓我們攜手共創更美好的未來！"}),n.jsxs("form",{onSubmit:t=>t.preventDefault(),children:[n.jsx("input",{type:"text",placeholder:"姓名",className:"w-full mb-3"}),n.jsx("input",{type:"email",placeholder:"EMAIL",className:"w-full mb-3"}),n.jsx("input",{type:"tel",placeholder:"連絡電話",className:"w-full mb-3"}),n.jsx("textarea",{cols:"30",rows:"10",placeholder:"COMMENTS",className:"w-full mb-3"}),n.jsxs("button",{type:"submit",className:"flex text-white justify-center items-center py-2-1/2 bg-primary-200 w-full rounded-[0.25rem]",children:[n.jsx("img",{src:ie,alt:"",className:"w-[18px] h-[18px] mr-2"}),"送出"]})]})]}),n.jsx("div",{className:"hidden tablet:block desktop:block tablet:w-[calc(100%/12)] desktop:w-[calc(100%/12)] px-2-1/2"}),n.jsxs("div",{className:"pt-[3.75rem] tablet:pt-[0px] desktop:pt-[0px] w-full tablet:w-1/4 desktop:w-1/4 px-2-1/2",children:[n.jsxs("div",{className:"mb-8",children:[n.jsx("p",{className:"text-white/[.5]",children:"客服時間"}),n.jsx("p",{children:n.jsx("time",{children:"週一至週五 09:00-18:00"})})]}),n.jsxs("div",{className:"mb-8",children:[n.jsx("p",{className:"text-white/[.5]",children:"聯絡地址"}),n.jsx("p",{children:"高雄市新興區民生一路 56 號"})]}),n.jsxs("div",{children:[n.jsx("p",{className:"text-white/[.5]",children:"客服時間"}),n.jsx("a",{href:"tel:+886-2-12345678",className:"block",children:"+886-2-12345678"}),n.jsx("a",{href:"mailto:customer@alphabox.com",className:"block",children:"mailto:customer@alphabox.com"})]})]})]})]})}),n.jsxs("div",{className:"bg-black border-t-[0px] tablet:border-t-[1px] desktop:border-t-[1px] border-solid border-white tablet:pt-8 desktop:pt-8 pb-9 ",children:[n.jsx("div",{className:"mx-2-1/2 block tablet:hidden desktop:hidden pb-8 border-t-[1px] border-solid border-white"}),n.jsx("div",{className:"desktop:container flex px-2-1/2",children:n.jsxs("ul",{className:"flex flex-wrap text-white tablet:ml-auto",children:[n.jsx("li",{className:"w-full tablet:w-auto mb-3 tablet:mb-[0] desktop:mb-[0]",children:n.jsx("a",{href:"",className:"block tablet:px-2-1/2 desktop:px-2-1/2 mr-[2.25rem]",children:"INSTAGRAM"})}),n.jsx("li",{className:"w-full tablet:w-auto mb-3 tablet:mb-[0] desktop:mb-[0]",children:n.jsx("a",{href:"",className:"block tablet:px-2-1/2 desktop:px-2-1/2 mr-[2.25rem]",children:"FACEBOOK"})}),n.jsx("li",{className:"w-full tablet:w-auto mb-3 tablet:mb-[0] desktop:mb-[0]",children:n.jsx("a",{href:"",className:"block tablet:px-2-1/2 desktop:px-2-1/2 mr-[2.25rem]",children:"TWITTER"})}),n.jsx("li",{className:"w-full tablet:w-auto",children:n.jsx("a",{href:"",className:"block tablet:px-2-1/2 desktop:px-2-1/2",children:"LINKEDIN"})})]})})]}),n.jsxs("div",{className:"bg-white pt-[3.75rem] tablet:pt-[10rem] desktop:pt-[10rem] pb-[2.5rem] tablet:pb-[7.5rem] desktop:pn-[7.5rem]",children:[n.jsxs("div",{className:"desktop:container px-2-1/2 mb-5 tablet:mb-15 desktop:mb-15",children:[n.jsx("h2",{className:"font-black text-[2.5rem] tracking-[2.5rem] tablet:text-[3rem] tablet:tracking-[3rem] desktop:text-[4rem] desktop:tracking-[4rem] mb-5",children:"選擇自己要的角色"}),n.jsxs("p",{className:"text-[1.5rem] tablet:text-[3rem] desktop:text-[3rem] font-black",children:[n.jsx("span",{className:"text-primary-200 mr-5",children:"20K+"}),"使用者喜歡我們的服務"]})]}),n.jsxs("div",{className:"overflow-y-hidden",children:[n.jsxs("div",{className:"relative",children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(min-width:768px)",srcSet:se}),n.jsx("img",{src:me,className:"tablet:max-w-[1388px] tablet:w-full desktop:max-w-[1388px] desktop:w-full ","data-aos":"fade-right"})]}),n.jsx("p",{className:"desktop:container px-2-1/2 absolute shrikhand text-white text-[2.5rem] tablet:text-[3rem] desktop:text-[4rem] top-1/2 left-[0] right-[0] -translate-y-1/2",children:"Diane"})]}),n.jsxs("div",{className:"relative",children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(min-width:768px)",srcSet:ce}),n.jsx("img",{src:ue,className:"tablet:max-w-[1388px] tablet:w-full desktop:max-w-[1388px] desktop:w-full ml-auto ","data-aos":"fade-left"})]}),n.jsx("p",{className:"text-end desktop:container px-2-1/2 absolute shrikhand text-white text-[2.5rem] tablet:text-[3rem] desktop:text-[4rem] top-1/2 left-[0] right-[0] -translate-y-1/2",children:"Felix"})]}),n.jsxs("div",{className:"relative",children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(min-width:768px)",srcSet:le}),n.jsx("img",{src:fe,className:"tablet:max-w-[1388px] tablet:w-full desktop:max-w-[1388px] desktop:w-full ","data-aos":"fade-left"})]}),n.jsx("p",{className:"desktop:container px-2-1/2 absolute shrikhand text-white text-[2.5rem] tablet:text-[3rem] desktop:text-[4rem] top-1/2 left-[0] right-[0] -translate-y-1/2",children:"Karina"})]}),n.jsxs("div",{className:"relative",children:[n.jsxs("picture",{children:[n.jsx("source",{media:"(min-width:768px)",srcSet:de}),n.jsx("img",{src:pe,className:"tablet:max-w-[1388px] tablet:w-full desktop:max-w-[1388px] desktop:w-full ml-auto ","data-aos":"fade-right"})]}),n.jsx("p",{className:"text-end desktop:container px-2-1/2 absolute shrikhand text-white text-[2.5rem] tablet:text-[3rem] desktop:text-[4rem] top-1/2 left-[0] right-[0] -translate-y-1/2",children:"Vito"})]})]})]})]}));export{gt as default};
