var y=(s,d)=>()=>(d||s((d={exports:{}}).exports,d),d.exports);var w=y((L,b)=>{var u;u=function(){function s(o){var i=!0,a=!1,m=null,p={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function c(e){return!!(e&&e!==document&&e.nodeName!=="HTML"&&e.nodeName!=="BODY"&&"classList"in e&&"contains"in e.classList)}function v(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function r(e){i=!1}function l(){document.addEventListener("mousemove",t),document.addEventListener("mousedown",t),document.addEventListener("mouseup",t),document.addEventListener("pointermove",t),document.addEventListener("pointerdown",t),document.addEventListener("pointerup",t),document.addEventListener("touchmove",t),document.addEventListener("touchstart",t),document.addEventListener("touchend",t)}function t(e){e.target.nodeName&&e.target.nodeName.toLowerCase()==="html"||(i=!1,document.removeEventListener("mousemove",t),document.removeEventListener("mousedown",t),document.removeEventListener("mouseup",t),document.removeEventListener("pointermove",t),document.removeEventListener("pointerdown",t),document.removeEventListener("pointerup",t),document.removeEventListener("touchmove",t),document.removeEventListener("touchstart",t),document.removeEventListener("touchend",t))}document.addEventListener("keydown",function(e){e.metaKey||e.altKey||e.ctrlKey||(c(o.activeElement)&&v(o.activeElement),i=!0)},!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",function(e){document.visibilityState==="hidden"&&(a&&(i=!0),l())},!0),l(),o.addEventListener("focus",function(e){var n,f,E;c(e.target)&&(i||(n=e.target,f=n.type,(E=n.tagName)==="INPUT"&&p[f]&&!n.readOnly||E==="TEXTAREA"&&!n.readOnly||n.isContentEditable))&&v(e.target)},!0),o.addEventListener("blur",function(e){var n;c(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(a=!0,window.clearTimeout(m),m=window.setTimeout(function(){a=!1},100),(n=e.target).hasAttribute("data-focus-visible-added")&&(n.classList.remove("focus-visible"),n.removeAttribute("data-focus-visible-added")))},!0),o.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&o.host?o.host.setAttribute("data-js-focus-visible",""):o.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if(typeof window<"u"&&typeof document<"u"){var d;window.applyFocusVisiblePolyfill=s;try{d=new CustomEvent("focus-visible-polyfill-ready")}catch(o){(d=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(d)}typeof document<"u"&&s(document)},typeof L=="object"&&typeof b<"u"?u():typeof define=="function"&&define.amd?define(u):u()});export default w();
//# sourceMappingURL=focus-visible.js.map
