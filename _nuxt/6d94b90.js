/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[11,21],{346:function(e,t,n){var r=n(2),o=n(237).values;r({target:"Object",stat:!0},{values:function(e){return o(e)}})},363:function(e,t,n){var content=n(404);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(36).default)("f84e4bac",content,!0,{sourceMap:!1})},380:function(e,t,n){var r,o,d;o=[],r=function s(){"use strict";var e="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:{},t=!e.document&&!!e.postMessage,n=t&&/blob:/i.test((e.location||{}).protocol),a={},r=0,b={parse:function(t,n){var i=(n=n||{}).dynamicTyping||!1;if(w(i)&&(n.dynamicTypingFunction=i,i={}),n.dynamicTyping=i,n.transform=!!w(n.transform)&&n.transform,n.worker&&b.WORKERS_SUPPORTED){var o=function(){if(!b.WORKERS_SUPPORTED)return!1;var i,t,n=(i=e.URL||e.webkitURL||null,t=s.toString(),b.BLOB_URL||(b.BLOB_URL=i.createObjectURL(new Blob(["(",t,")();"],{type:"text/javascript"})))),o=new e.Worker(n);return o.onmessage=c,o.id=r++,a[o.id]=o}();return o.userStep=n.step,o.userChunk=n.chunk,o.userComplete=n.complete,o.userError=n.error,n.step=w(n.step),n.chunk=w(n.chunk),n.complete=w(n.complete),n.error=w(n.error),delete n.worker,void o.postMessage({input:t,config:n,workerId:o.id})}var f=null;return b.NODE_STREAM_INPUT,"string"==typeof t?f=n.download?new d(n):new p(n):!0===t.readable&&w(t.read)&&w(t.on)?f=new g(n):(e.File&&t instanceof File||t instanceof Object)&&(f=new l(n)),f.stream(t)},unparse:function(e,t){var n=!1,r=!0,o=",",d="\r\n",s='"',a=s+s,i=!1,l=null,h=!1;!function(){if("object"==typeof t){if("string"!=typeof t.delimiter||b.BAD_DELIMITERS.filter((function(e){return-1!==t.delimiter.indexOf(e)})).length||(o=t.delimiter),("boolean"==typeof t.quotes||"function"==typeof t.quotes||Array.isArray(t.quotes))&&(n=t.quotes),"boolean"!=typeof t.skipEmptyLines&&"string"!=typeof t.skipEmptyLines||(i=t.skipEmptyLines),"string"==typeof t.newline&&(d=t.newline),"string"==typeof t.quoteChar&&(s=t.quoteChar),"boolean"==typeof t.header&&(r=t.header),Array.isArray(t.columns)){if(0===t.columns.length)throw new Error("Option columns is empty");l=t.columns}void 0!==t.escapeChar&&(a=t.escapeChar+s),("boolean"==typeof t.escapeFormulae||t.escapeFormulae instanceof RegExp)&&(h=t.escapeFormulae instanceof RegExp?t.escapeFormulae:/^[=+\-@\t\r].*$/)}}();var c=new RegExp(f(s),"g");if("string"==typeof e&&(e=JSON.parse(e)),Array.isArray(e)){if(!e.length||Array.isArray(e[0]))return u(null,e,i);if("object"==typeof e[0])return u(l||Object.keys(e[0]),e,i)}else if("object"==typeof e)return"string"==typeof e.data&&(e.data=JSON.parse(e.data)),Array.isArray(e.data)&&(e.fields||(e.fields=e.meta&&e.meta.fields||l),e.fields||(e.fields=Array.isArray(e.data[0])?e.fields:"object"==typeof e.data[0]?Object.keys(e.data[0]):[]),Array.isArray(e.data[0])||"object"==typeof e.data[0]||(e.data=[e.data])),u(e.fields||[],e.data||[],i);throw new Error("Unable to serialize unrecognized input");function u(e,t,i){var n="";"string"==typeof e&&(e=JSON.parse(e)),"string"==typeof t&&(t=JSON.parse(t));var l=Array.isArray(e)&&0<e.length,s=!Array.isArray(t[0]);if(l&&r){for(var a=0;a<e.length;a++)0<a&&(n+=o),n+=m(e[a],a);0<t.length&&(n+=d)}for(var f=0;f<t.length;f++){var h=l?e.length:t[f].length,u=!1,c=l?0===Object.keys(t[f]).length:0===t[f].length;if(i&&!l&&(u="greedy"===i?""===t[f].join("").trim():1===t[f].length&&0===t[f][0].length),"greedy"===i&&l){for(var _=[],v=0;v<h;v++){var y=s?e[v]:v;_.push(t[f][y])}u=""===_.join("").trim()}if(!u){for(var p=0;p<h;p++){0<p&&!c&&(n+=o);var g=l&&s?e[p]:p;n+=m(t[f][g],p)}f<t.length-1&&(!i||0<h&&!c)&&(n+=d)}}return n}function m(e,t){if(null==e)return"";if(e.constructor===Date)return JSON.stringify(e).slice(1,25);var i=!1;h&&"string"==typeof e&&h.test(e)&&(e="'"+e,i=!0);var r=e.toString().replace(c,a);return(i=i||!0===n||"function"==typeof n&&n(e,t)||Array.isArray(n)&&n[t]||function(e,t){for(var i=0;i<t.length;i++)if(-1<e.indexOf(t[i]))return!0;return!1}(r,b.BAD_DELIMITERS)||-1<r.indexOf(o)||" "===r.charAt(0)||" "===r.charAt(r.length-1))?s+r+s:r}}};if(b.RECORD_SEP=String.fromCharCode(30),b.UNIT_SEP=String.fromCharCode(31),b.BYTE_ORDER_MARK="\ufeff",b.BAD_DELIMITERS=["\r","\n",'"',b.BYTE_ORDER_MARK],b.WORKERS_SUPPORTED=!t&&!!e.Worker,b.NODE_STREAM_INPUT=1,b.LocalChunkSize=10485760,b.RemoteChunkSize=5242880,b.DefaultDelimiter=",",b.Parser=h,b.ParserHandle=i,b.NetworkStreamer=d,b.FileStreamer=l,b.StringStreamer=p,b.ReadableStreamStreamer=g,e.jQuery){var o=e.jQuery;o.fn.parse=function(t){var i=t.config||{},n=[];return this.each((function(t){if("INPUT"!==o(this).prop("tagName").toUpperCase()||"file"!==o(this).attr("type").toLowerCase()||!e.FileReader||!this.files||0===this.files.length)return!0;for(var r=0;r<this.files.length;r++)n.push({file:this.files[r],inputElem:this,instanceConfig:o.extend({},i)})})),r(),this;function r(){if(0!==n.length){var e,r,i,d,l=n[0];if(w(t.before)){var s=t.before(l.file,l.inputElem);if("object"==typeof s){if("abort"===s.action)return e="AbortError",r=l.file,i=l.inputElem,d=s.reason,void(w(t.error)&&t.error({name:e},r,i,d));if("skip"===s.action)return void u();"object"==typeof s.config&&(l.instanceConfig=o.extend(l.instanceConfig,s.config))}else if("skip"===s)return void u()}var a=l.instanceConfig.complete;l.instanceConfig.complete=function(e){w(a)&&a(e,l.file,l.inputElem),u()},b.parse(l.file,l.instanceConfig)}else w(t.complete)&&t.complete()}function u(){n.splice(0,1),r()}}}function u(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var t=v(e);t.chunkSize=parseInt(t.chunkSize),e.step||e.chunk||(t.chunkSize=null),this._handle=new i(t),(this._handle.streamer=this)._config=t}.call(this,t),this.parseChunk=function(t,r){if(this.isFirstChunk&&w(this._config.beforeFirstChunk)){var i=this._config.beforeFirstChunk(t);void 0!==i&&(t=i)}this.isFirstChunk=!1,this._halted=!1;var o=this._partialLine+t;this._partialLine="";var d=this._handle.parse(o,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var s=d.meta.cursor;this._finished||(this._partialLine=o.substring(s-this._baseIndex),this._baseIndex=s),d&&d.data&&(this._rowCount+=d.data.length);var a=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(n)e.postMessage({results:d,workerId:b.WORKER_ID,finished:a});else if(w(this._config.chunk)&&!r){if(this._config.chunk(d,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);d=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(d.data),this._completeResults.errors=this._completeResults.errors.concat(d.errors),this._completeResults.meta=d.meta),this._completed||!a||!w(this._config.complete)||d&&d.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),a||d&&d.meta.paused||this._nextChunk(),d}this._halted=!0},this._sendError=function(t){w(this._config.error)?this._config.error(t):n&&this._config.error&&e.postMessage({workerId:b.WORKER_ID,error:t,finished:!1})}}function d(e){var n;(e=e||{}).chunkSize||(e.chunkSize=b.RemoteChunkSize),u.call(this,e),this._nextChunk=t?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(e){this._input=e,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(n=new XMLHttpRequest,this._config.withCredentials&&(n.withCredentials=this._config.withCredentials),t||(n.onload=y(this._chunkLoaded,this),n.onerror=y(this._chunkError,this)),n.open(this._config.downloadRequestBody?"POST":"GET",this._input,!t),this._config.downloadRequestHeaders){var e=this._config.downloadRequestHeaders;for(var r in e)n.setRequestHeader(r,e[r])}if(this._config.chunkSize){var i=this._start+this._config.chunkSize-1;n.setRequestHeader("Range","bytes="+this._start+"-"+i)}try{n.send(this._config.downloadRequestBody)}catch(e){this._chunkError(e.message)}t&&0===n.status&&this._chunkError()}},this._chunkLoaded=function(){4===n.readyState&&(n.status<200||400<=n.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:n.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(e){var t=e.getResponseHeader("Content-Range");return null===t?-1:parseInt(t.substring(t.lastIndexOf("/")+1))}(n),this.parseChunk(n.responseText)))},this._chunkError=function(e){var t=n.statusText||e;this._sendError(new Error(t))}}function l(e){var t,n;(e=e||{}).chunkSize||(e.chunkSize=b.LocalChunkSize),u.call(this,e);var s="undefined"!=typeof FileReader;this.stream=function(e){this._input=e,n=e.slice||e.webkitSlice||e.mozSlice,s?((t=new FileReader).onload=y(this._chunkLoaded,this),t.onerror=y(this._chunkError,this)):t=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var e=this._input;if(this._config.chunkSize){var r=Math.min(this._start+this._config.chunkSize,this._input.size);e=n.call(e,this._start,r)}var i=t.readAsText(e,this._config.encoding);s||this._chunkLoaded({target:{result:i}})},this._chunkLoaded=function(e){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(e.target.result)},this._chunkError=function(){this._sendError(t.error)}}function p(e){var i;u.call(this,e=e||{}),this.stream=function(e){return i=e,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var e,t=this._config.chunkSize;return t?(e=i.substring(0,t),i=i.substring(t)):(e=i,i=""),this._finished=!i,this.parseChunk(e)}}}function g(e){u.call(this,e=e||{});var t=[],i=!0,n=!1;this.pause=function(){u.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){u.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(e){this._input=e,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){n&&1===t.length&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),t.length?this.parseChunk(t.shift()):i=!0},this._streamData=y((function(e){try{t.push("string"==typeof e?e:e.toString(this._config.encoding)),i&&(i=!1,this._checkIsFinished(),this.parseChunk(t.shift()))}catch(e){this._streamError(e)}}),this),this._streamError=y((function(e){this._streamCleanUp(),this._sendError(e)}),this),this._streamEnd=y((function(){this._streamCleanUp(),n=!0,this._streamData("")}),this),this._streamCleanUp=y((function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)}),this)}function i(e){var a,t,n,r=Math.pow(2,53),o=-r,s=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,u=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,d=this,i=0,l=0,c=!1,m=!1,_=[],y={data:[],errors:[],meta:{}};if(w(e.step)){var p=e.step;e.step=function(n){if(y=n,E())g();else{if(g(),0===y.data.length)return;i+=n.data.length,e.preview&&i>e.preview?t.abort():(y.data=y.data[0],p(y,d))}}}function k(t){return"greedy"===e.skipEmptyLines?""===t.join("").trim():1===t.length&&0===t[0].length}function g(){return y&&n&&(C("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+b.DefaultDelimiter+"'"),n=!1),e.skipEmptyLines&&(y.data=y.data.filter((function(e){return!k(e)}))),E()&&function(){if(y)if(Array.isArray(y.data[0])){for(var t=0;E()&&t<y.data.length;t++)y.data[t].forEach(n);y.data.splice(0,1)}else y.data.forEach(n);function n(t,n){w(e.transformHeader)&&(t=e.transformHeader(t,n)),_.push(t)}}(),function(){if(!y||!e.header&&!e.dynamicTyping&&!e.transform)return y;function t(t,n){var i,r=e.header?{}:[];for(i=0;i<t.length;i++){var o=i,s=t[i];e.header&&(o=i>=_.length?"__parsed_extra":_[i]),e.transform&&(s=e.transform(s,o)),s=R(o,s),"__parsed_extra"===o?(r[o]=r[o]||[],r[o].push(s)):r[o]=s}return e.header&&(i>_.length?C("FieldMismatch","TooManyFields","Too many fields: expected "+_.length+" fields but parsed "+i,l+n):i<_.length&&C("FieldMismatch","TooFewFields","Too few fields: expected "+_.length+" fields but parsed "+i,l+n)),r}var n=1;return!y.data.length||Array.isArray(y.data[0])?(y.data=y.data.map(t),n=y.data.length):y.data=t(y.data,0),e.header&&y.meta&&(y.meta.fields=_),l+=n,y}()}function E(){return e.header&&0===_.length}function R(t,n){return i=t,e.dynamicTypingFunction&&void 0===e.dynamicTyping[i]&&(e.dynamicTyping[i]=e.dynamicTypingFunction(i)),!0===(e.dynamicTyping[i]||e.dynamicTyping)?"true"===n||"TRUE"===n||"false"!==n&&"FALSE"!==n&&(function(e){if(s.test(e)){var t=parseFloat(e);if(o<t&&t<r)return!0}return!1}(n)?parseFloat(n):u.test(n)?new Date(n):""===n?null:n):n;var i}function C(e,t,i,n){var r={type:e,code:t,message:i};void 0!==n&&(r.row=n),y.errors.push(r)}this.parse=function(r,o,i){var d=e.quoteChar||'"';if(e.newline||(e.newline=function(e,t){e=e.substring(0,1048576);var i=new RegExp(f(t)+"([^]*?)"+f(t),"gm"),n=(e=e.replace(i,"")).split("\r"),r=e.split("\n"),s=1<r.length&&r[0].length<n[0].length;if(1===n.length||s)return"\n";for(var a=0,o=0;o<n.length;o++)"\n"===n[o][0]&&a++;return a>=n.length/2?"\r\n":"\r"}(r,d)),n=!1,e.delimiter)w(e.delimiter)&&(e.delimiter=e.delimiter(r),y.meta.delimiter=e.delimiter);else{var l=function(t,n,i,r,o){var s,a,d,l;o=o||[",","\t","|",";",b.RECORD_SEP,b.UNIT_SEP];for(var u=0;u<o.length;u++){var f=o[u],c=0,m=0,_=0;d=void 0;for(var p=new h({comments:r,delimiter:f,newline:n,preview:10}).parse(t),g=0;g<p.data.length;g++)if(i&&k(p.data[g]))_++;else{var v=p.data[g].length;m+=v,void 0!==d?0<v&&(c+=Math.abs(v-d),d=v):d=v}0<p.data.length&&(m/=p.data.length-_),(void 0===a||c<=a)&&(void 0===l||l<m)&&1.99<m&&(a=c,s=f,l=m)}return{successful:!!(e.delimiter=s),bestDelimiter:s}}(r,e.newline,e.skipEmptyLines,e.comments,e.delimitersToGuess);l.successful?e.delimiter=l.bestDelimiter:(n=!0,e.delimiter=b.DefaultDelimiter),y.meta.delimiter=e.delimiter}var s=v(e);return e.preview&&e.header&&s.preview++,a=r,t=new h(s),y=t.parse(a,o,i),g(),c?{meta:{paused:!0}}:y||{meta:{paused:!1}}},this.paused=function(){return c},this.pause=function(){c=!0,t.abort(),a=w(e.chunk)?"":a.substring(t.getCharIndex())},this.resume=function(){d.streamer._halted?(c=!1,d.streamer.parseChunk(a,!0)):setTimeout(d.resume,3)},this.aborted=function(){return m},this.abort=function(){m=!0,t.abort(),y.meta.aborted=!0,w(e.complete)&&e.complete(y),a=""}}function f(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function h(e){var t,n=(e=e||{}).delimiter,r=e.newline,o=e.comments,d=e.step,l=e.preview,h=e.fastMode,c=t=void 0===e.quoteChar||null===e.quoteChar?'"':e.quoteChar;if(void 0!==e.escapeChar&&(c=e.escapeChar),("string"!=typeof n||-1<b.BAD_DELIMITERS.indexOf(n))&&(n=","),o===n)throw new Error("Comment character same as delimiter");!0===o?o="#":("string"!=typeof o||-1<b.BAD_DELIMITERS.indexOf(o))&&(o=!1),"\n"!==r&&"\r"!==r&&"\r\n"!==r&&(r="\n");var m=0,_=!1;this.parse=function(e,v,i){if("string"!=typeof e)throw new Error("Input must be a string");var y=e.length,k=n.length,s=r.length,a=o.length,E=w(d),R=[],u=[],C=[],S=m=0;if(!e)return M();if(h||!1!==h&&-1===e.indexOf(t)){for(var O=e.split(r),x=0;x<O.length;x++){if(C=O[x],m+=C.length,x!==O.length-1)m+=r.length;else if(i)return M();if(!o||C.substring(0,a)!==o){if(E){if(R=[],I(C.split(n)),U(),_)return M()}else I(C.split(n));if(l&&l<=x)return R=R.slice(0,l),M(!0)}}return M()}for(var p=e.indexOf(n,m),g=e.indexOf(r,m),A=new RegExp(f(c)+f(t),"g"),T=e.indexOf(t,m);;)if(e[m]!==t)if(o&&0===C.length&&e.substring(m,m+a)===o){if(-1===g)return M();m=g+s,g=e.indexOf(r,m),p=e.indexOf(n,m)}else if(-1!==p&&(p<g||-1===g))C.push(e.substring(m,p)),m=p+k,p=e.indexOf(n,m);else{if(-1===g)break;if(C.push(e.substring(m,g)),F(g+s),E&&(U(),_))return M();if(l&&R.length>=l)return M(!0)}else for(T=m,m++;;){if(-1===(T=e.indexOf(t,T+1)))return i||u.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:R.length,index:m}),j();if(T===y-1)return j(e.substring(m,T).replace(A,t));if(t!==c||e[T+1]!==c){if(t===c||0===T||e[T-1]!==c){-1!==p&&p<T+1&&(p=e.indexOf(n,T+1)),-1!==g&&g<T+1&&(g=e.indexOf(r,T+1));var L=b(-1===g?p:Math.min(p,g));if(e.substr(T+1+L,k)===n){C.push(e.substring(m,T).replace(A,t)),e[m=T+1+L+k]!==t&&(T=e.indexOf(t,m)),p=e.indexOf(n,m),g=e.indexOf(r,m);break}var D=b(g);if(e.substring(T+1+D,T+1+D+s)===r){if(C.push(e.substring(m,T).replace(A,t)),F(T+1+D+s),p=e.indexOf(n,m),T=e.indexOf(t,m),E&&(U(),_))return M();if(l&&R.length>=l)return M(!0);break}u.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:R.length,index:m}),T++}}else T++}return j();function I(e){R.push(e),S=m}function b(t){var n=0;if(-1!==t){var i=e.substring(T+1,t);i&&""===i.trim()&&(n=i.length)}return n}function j(t){return i||(void 0===t&&(t=e.substring(m)),C.push(t),m=y,I(C),E&&U()),M()}function F(t){m=t,I(C),C=[],g=e.indexOf(r,m)}function M(e){return{data:R,errors:u,meta:{delimiter:n,linebreak:r,aborted:_,truncated:!!e,cursor:S+(v||0)}}}function U(){d(M()),R=[],u=[]}},this.abort=function(){_=!0},this.getCharIndex=function(){return m}}function c(e){var t=e.data,i=a[t.workerId],n=!1;if(t.error)i.userError(t.error,t.file);else if(t.results&&t.results.data){var r={abort:function(){n=!0,m(t.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:_,resume:_};if(w(i.userStep)){for(var s=0;s<t.results.data.length&&(i.userStep({data:t.results.data[s],errors:t.results.errors,meta:t.results.meta},r),!n);s++);delete t.results}else w(i.userChunk)&&(i.userChunk(t.results,r,t.file),delete t.results)}t.finished&&!n&&m(t.workerId,t.results)}function m(e,t){var i=a[e];w(i.userComplete)&&i.userComplete(t),i.terminate(),delete a[e]}function _(){throw new Error("Not implemented.")}function v(e){if("object"!=typeof e||null===e)return e;var t=Array.isArray(e)?[]:{};for(var i in e)t[i]=v(e[i]);return t}function y(e,t){return function(){e.apply(t,arguments)}}function w(e){return"function"==typeof e}return n&&(e.onmessage=function(t){var n=t.data;if(void 0===b.WORKER_ID&&n&&(b.WORKER_ID=n.workerId),"string"==typeof n.input)e.postMessage({workerId:b.WORKER_ID,results:b.parse(n.input,n.config),finished:!0});else if(e.File&&n.input instanceof File||n.input instanceof Object){var i=b.parse(n.input,n.config);i&&e.postMessage({workerId:b.WORKER_ID,results:i,finished:!0})}}),(d.prototype=Object.create(u.prototype)).constructor=d,(l.prototype=Object.create(u.prototype)).constructor=l,(p.prototype=Object.create(p.prototype)).constructor=p,(g.prototype=Object.create(u.prototype)).constructor=g,b},void 0===(d="function"==typeof r?r.apply(t,o):r)||(e.exports=d)},381:function(e,t,n){(function(n){var r,o,d;o=[],void 0===(d="function"==typeof(r=function(){"use strict";function b(a,b){return void 0===b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\ufeff",a],{type:a.type}):a}function t(a,b,e){var t=new XMLHttpRequest;t.open("GET",a),t.responseType="blob",t.onload=function(){g(t.response,b,e)},t.onerror=function(){console.error("could not download file")},t.send()}function r(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function o(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(e){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var d="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,a=d.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=d.saveAs||("object"!=typeof window||window!==d?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,e){var i=d.URL||d.webkitURL,n=document.createElement("a");g=g||b.name||"download",n.download=g,n.rel="noopener","string"==typeof b?(n.href=b,n.origin===location.origin?o(n):r(n.href)?t(b,g,e):o(n,n.target="_blank")):(n.href=i.createObjectURL(b),setTimeout((function(){i.revokeObjectURL(n.href)}),4e4),setTimeout((function(){o(n)}),0))}:"msSaveOrOpenBlob"in navigator?function(e,g,n){if(g=g||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(b(e,n),g);else if(r(e))t(e,g,n);else{var i=document.createElement("a");i.href=e,i.target="_blank",setTimeout((function(){o(i)}))}}:function(b,e,n,g){if((g=g||open("","_blank"))&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return t(b,e,n);var r="application/octet-stream"===b.type,i=/constructor/i.test(d.HTMLElement)||d.safari,o=/CriOS\/[\d]+/.test(navigator.userAgent);if((o||r&&i||a)&&"undefined"!=typeof FileReader){var l=new FileReader;l.onloadend=function(){var a=l.result;a=o?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},l.readAsDataURL(b)}else{var f=d.URL||d.webkitURL,h=f.createObjectURL(b);g?g.location=h:location.href=h,g=null,setTimeout((function(){f.revokeObjectURL(h)}),4e4)}});d.saveAs=g.saveAs=g,e.exports=g})?r.apply(t,o):r)||(e.exports=d)}).call(this,n(34))},403:function(e,t,n){"use strict";n(363)},404:function(e,t,n){var r=n(35)((function(i){return i[1]}));r.push([e.i,".download_btn[data-v-4d82603a]{align-items:center;background:#488ec4;border:none;border-radius:.2rem;color:#fff;display:flex;font-size:16px;font-weight:500;gap:5px;padding:.4em 1.2em;transition:background .3s ease-in-out;white-space:nowrap}.download_btn[data-v-4d82603a]:focus{outline:none}.download_btn[data-v-4d82603a]:hover{background:#095493;cursor:pointer}.download_btn>svg[data-v-4d82603a]{align-self:flex-start;display:block}.download_btn.update[data-v-4d82603a]{background:#ff8a17}.download_btn.update[data-v-4d82603a]:hover{background:#f06a06}.download_btn[disabled][data-v-4d82603a]{background:#ccc;color:#fff;cursor:not-allowed}.download_btn[disabled][data-v-4d82603a]:hover{background:#ccc}",""]),r.locals={},e.exports=r},426:function(e,t,n){"use strict";n.r(t);n(56),n(31),n(346);var r=n(380),o=n.n(r),d=n(381),l=n.n(d),f={props:{downloadData:{type:Array,default:function(){return[]}},fieldsArray:{type:Array,default:function(){return[]}},fileName:{type:String,default:"download.tsv"},delimiter:{type:String,default:"\t"},disabled:{type:Boolean,default:!1}},computed:{oldFields:function(){return this.fieldsArray.map((function(e){return Object.keys(e)[0]}))},newFields:function(){return this.fieldsArray.map((function(e){return Object.values(e)[0]}))},dataArray:function(){var e=this;return this.downloadData.map((function(t){return e.oldFields.map((function(e){return t[e]}))}))}},methods:{downloadTsv:function(){var e=o.a.unparse({fields:this.newFields,data:this.dataArray},{delimiter:this.delimiter}),t=new Blob([e],{type:"text/plain;charset=utf-8"});l.a.saveAs(t,this.fileName)}}},h=(n(403),n(48)),component=Object(h.a)(f,(function(){var e=this,t=e._self._c;return t("button",{staticClass:"download_btn",attrs:{disabled:e.disabled},on:{click:e.downloadTsv}},[t("font-awesome-icon",{attrs:{icon:"arrow-down-to-line"}}),e._v("\n  Download as table (TSV)\n")],1)}),[],!1,null,"4d82603a",null);t.default=component.exports}}]);