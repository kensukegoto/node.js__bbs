/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./develop/es2015/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./develop/es2015/ajax.js":
/*!********************************!*\
  !*** ./develop/es2015/ajax.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var server = 'http://localhost:3000';\n\nvar get = function get() {\n  return fetch(\"\".concat(server, \"/get\"), {\n    mode: 'cors'\n  }).then(function (response) {\n    return response.json();\n  });\n};\n\nvar post = function post(e) {\n  var form = e.target;\n  var body = new FormData(form);\n  return fetch(\"\".concat(server, \"/post\"), {\n    method: 'POST',\n    body: body\n  }).then(function (response) {\n    return response.json();\n  });\n};\n\nmodule.exports = {\n  get: get,\n  post: post\n};\n\n//# sourceURL=webpack:///./develop/es2015/ajax.js?");

/***/ }),

/***/ "./develop/es2015/index.js":
/*!*********************************!*\
  !*** ./develop/es2015/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var _require = __webpack_require__(/*! ./ajax */ \"./develop/es2015/ajax.js\"),\n    get = _require.get,\n    post = _require.post;\n\nvar _require2 = __webpack_require__(/*! ./show_list */ \"./develop/es2015/show_list.js\"),\n    show_list = _require2.show_list;\n\nfunction onload() {\n  // ゲット\n  get().then(function (response) {\n    show_list('.posts', response);\n  });\n  var form = document.forms.main__form;\n  form.addEventListener('submit', function (e) {\n    // ポスト\n    post(e).then(function (response) {\n      // ポストに成功\n      console.log('きたこれ！');\n      console.log(response);\n    });\n  }, false); // post_event(form);\n}\n\nwindow.addEventListener('load', onload, false);\n\n//# sourceURL=webpack:///./develop/es2015/index.js?");

/***/ }),

/***/ "./develop/es2015/show_list.js":
/*!*************************************!*\
  !*** ./develop/es2015/show_list.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var saved = null;\n\nvar show_list = function show_list(selecor, data) {\n  var mydata = null;\n  var ul = document.querySelector(selecor);\n\n  for (var k in data) {\n    if (data.hasOwnProperty(k)) {\n      console.log(k, data[k]);\n      mydata = data[k];\n      var post = document.createElement('li');\n      post.classList.add('post');\n      post.innerHTML = \"\\n          <dl>\\n            <dt>\\n              <p class=\\\"user\\\">\".concat(mydata.user, \"</p>\\n              <time>\").concat(mydata.date, \"</time>\\n            </dt>\\n            <dd>\\n              <p class=\\\"message\\\">\").concat(mydata.message, \"</p>\\n            </dd>\\n          </dl>\\n      \");\n      ul.appendChild(post);\n    }\n  } // for\n\n};\n\nmodule.exports = {\n  show_list: show_list\n};\n\n//# sourceURL=webpack:///./develop/es2015/show_list.js?");

/***/ })

/******/ });