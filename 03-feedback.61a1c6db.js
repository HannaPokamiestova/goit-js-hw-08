function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,p=function(){return l.Date.now()};function g(t,e,n){var r,o,i,f,a,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function y(e){var n=r,i=o;return r=o=void 0,c=e,f=t.apply(i,n)}function j(t){return c=t,a=setTimeout(O,e),l?y(t):f}function h(t){var n=t-u;return void 0===u||n>=e||n<0||s&&t-c>=i}function O(){var t=p();if(h(t))return w(t);a=setTimeout(O,function(t){var n=e-(t-u);return s?v(n,i-(t-c)):n}(t))}function w(t){return a=void 0,g&&r?y(t):(r=o=void 0,f)}function S(){var t=p(),n=h(t);if(r=arguments,o=this,u=t,n){if(void 0===a)return j(u);if(s)return a=setTimeout(O,e),y(u)}return void 0===a&&(a=setTimeout(O,e)),f}return e=b(e)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(b(n.maxWait)||0,e):i,g="trailing"in n?!!n.trailing:g),S.cancel=function(){void 0!==a&&clearTimeout(a),c=0,r=u=o=a=void 0},S.flush=function(){return void 0===a?f:w(p())},S}function m(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==s.call(t)}(t))return NaN;if(m(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=m(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=i.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):o.test(t)?NaN:+t}e=function(t,e,n){var r=!0,o=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return m(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),g(t,e,{leading:r,maxWait:e,trailing:o})};const y=document.querySelector(".js-feedback-form");let j={};y.addEventListener("input",t(e)((function(t){j[t.target.name]=t.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),j=function(){const t=localStorage.getItem("feedback-form-state");if(!t)return{};try{return JSON.parse(t)}catch{console.error("Invalid JSON")}}(),j&&Object.entries(j).forEach((t=>{let e=t[0],n=t[1];y.elements[e].value=n})),y.addEventListener("submit",(function(t){t.preventDefault(),console.log(j),j={},localStorage.removeItem("feedback-form-state"),t.target.reset()}));
//# sourceMappingURL=03-feedback.61a1c6db.js.map