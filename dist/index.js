!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e="undefined"!=typeof globalThis?globalThis:e||self).ultralightCopy=t()}(this,(function(){"use strict";return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=document;try{var n=t.createElement("input");return n.setAttribute("readonly","readonly"),n.setAttribute("style","position: fixed; top:0; left:0; opacity:0;"),n.setAttribute("value",e),t.body.appendChild(n),n.setSelectionRange(0,e.length),n.select(),t.execCommand("copy"),t.body.removeChild(n),!0}catch(e){return!1}}}));
