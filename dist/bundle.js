/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/dots.svg */ \"./src/images/dots.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar code = \"<!DOCTYPE html>\\n<html lang=\\\"en\\\">\\n\\n<head>\\n    <meta charset=\\\"UTF-8\\\">\\n    <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n    <title>Test task ЯСП</title>\\n</head>\\n<header>\\n\\n</header>\\n\\n<body>\\n    <main>\\n        <div class=\\\"container\\\">\\n            <div class=\\\"chart__wrapper\\\">\\n                <div class=\\\"title__wrapper\\\">\\n                    <h2 id=\\\"title\\\"></h2>\\n                    <button class=\\\"title__btn-more\\\">\\n                        <img class=\\\"btn-img\\\" src=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" alt=\\\"button more\\\">\\n                        <ul class=\\\"dropdown-menu\\\">\\n                            <li data-url=\\\"https://rcslabs.ru/ttrp1.json\\\">OS Doors</li>\\n                            <li data-url=\\\"https://rcslabs.ru/ttrp2.json\\\">OS Bombuntu</li>\\n                            <li data-url=\\\"https://rcslabs.ru/ttrp3.json\\\">Mibre Office</li>\\n                            <li data-url=\\\"https://rcslabs.ru/ttrp4.json\\\">LoWtEx</li>\\n                            <li data-url=\\\"https://rcslabs.ru/ttrp5.json\\\">W$ POS</li>\\n                        </ul>\\n                    </button>\\n                </div>\\n                <div class=\\\"chart__content\\\" id=\\\"chart-content\\\">\\n                </div>\\n                <div class=\\\"chart__footer\\\">\\n                    <div class=\\\"chart__footer-item\\\">\\n                        <div class=\\\"chart__footer-info chart__footer-front\\\"></div>\\n                        <div class=\\\"chart__footer-text\\\">Клиентская часть</div>\\n                    </div>\\n                    <div class=\\\"chart__footer-item\\\">\\n                        <div class=\\\"chart__footer-info chart__footer-back\\\"></div>\\n                        <div class=\\\"chart__footer-text\\\">Серверная часть</div>\\n                    </div>\\n                    <div class=\\\"chart__footer-item\\\">\\n                        <div class=\\\"chart__footer-info chart__footer-db\\\"></div>\\n                        <div class=\\\"chart__footer-text\\\">База данных</div>\\n                    </div>\\n                </div>\\n            </div>\\n        </div>\\n    </main>\\n    <footer>\\n    </footer>\\n</body>\\n\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://test-task-luxms/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n\n  // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n  url = String(url.__esModule ? url.default : url);\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://test-task-luxms/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://test-task-luxms/./src/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/app */ \"./src/js/app.js\");\n/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_app__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack://test-task-luxms/./src/index.js?");

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n    const button = document.querySelector('.title__btn-more');\r\n    const dropdownMenu = button.querySelector('.dropdown-menu');\r\n\r\n    button.addEventListener('click', (e) => {\r\n        e.stopPropagation();\r\n        button.classList.toggle('active');\r\n    });\r\n\r\n    document.addEventListener('click', () => {\r\n        button.classList.remove('active');\r\n    });\r\n\r\n    dropdownMenu.addEventListener('click', (e) => {\r\n        e.stopPropagation();\r\n        if (e.target.tagName === 'LI') {\r\n            const url = e.target.getAttribute('data-url');\r\n            fetch(url)\r\n                .then(response => response.json())\r\n                .then(data => {\r\n                    updateChart(data);\r\n                })\r\n                .catch(error => {\r\n                    console.error('Ошибка загрузки данных:', error);\r\n                });\r\n        }\r\n    });\r\n\r\n    const dataUrl = 'https://rcslabs.ru/ttrp1.json';\r\n\r\n    fetch(dataUrl)\r\n        .then(response => response.json())\r\n        .then(data => {\r\n            updateChart(data);\r\n        })\r\n        .catch(error => {\r\n            console.error('Ошибка загрузки данных:', error);\r\n        });\r\n});\r\n\r\nfunction updateChart(data) {\r\n    document.getElementById('title').textContent = `Количество пройденных тестов \"${data.title}\"`;\r\n\r\n    const chartContent = document.getElementById('chart-content');\r\n    chartContent.innerHTML = '';\r\n\r\n    const instances = ['dev', 'test', 'prod'];\r\n    const components = ['front', 'back', 'db'];\r\n    const maxChartHeight = 200;\r\n\r\n    const maxValue = Math.max(\r\n        ...instances.flatMap(instance => components.map(component => data[instance][component])),\r\n        data.norm\r\n    );\r\n\r\n    const scaleFactor = maxChartHeight / maxValue;\r\n\r\n    const instanceSums = {};\r\n\r\n    instances.forEach((instance, index) => {\r\n        let instanceHTML = '<div class=\"chart__lists\">';\r\n        let sum = 0;\r\n\r\n        components.forEach(component => {\r\n            const value = data[instance][component];\r\n            sum += value;\r\n            instanceHTML += `\r\n                        <div class=\"chart__list chart__list-${component}\" style=\"height: ${value * scaleFactor}px;\">\r\n                            ${value}\r\n                        </div>`;\r\n        });\r\n\r\n        instanceHTML += `\r\n                    <span class=\"chart__desc\">${instance}</span>\r\n                </div>`;\r\n\r\n        chartContent.innerHTML += instanceHTML;\r\n        instanceSums[instance] = sum;\r\n\r\n        if (index < instances.length - 1) {\r\n            const nextInstance = instances[index + 1];\r\n            const nextSum = components.reduce((acc, component) => acc + data[nextInstance][component], 0);\r\n            const diff = nextSum - sum;\r\n\r\n            const differenceHTML = `\r\n                        <div class=\"chart__difference ${diff < 0 ? 'orange' : 'green'}\">\r\n                            <div class=\"chart__arrow ${diff < 0 ? '' : 'rotate'}\"></div>\r\n                            <span>${diff > 0 ? '+' : ''}${diff}</span>\r\n                        </div>`;\r\n\r\n            chartContent.innerHTML += differenceHTML;\r\n        }\r\n    });\r\n\r\n    const normHTML = `\r\n                <div class=\"chart__lists\">\r\n                    <div class=\"chart__list chart__list-norm\" style=\"height: ${data.norm * scaleFactor}px;\">\r\n                        <span class=\"chart__list-norm_content\">${data.norm}</span>\r\n                    </div>\r\n                    <span class=\"chart__desc\">Norm</span>\r\n                </div>`;\r\n\r\n    chartContent.innerHTML += normHTML;\r\n}\n\n//# sourceURL=webpack://test-task-luxms/./src/js/app.js?");

/***/ }),

/***/ "./src/images/dots.svg":
/*!*****************************!*\
  !*** ./src/images/dots.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"images\\\\dots..svg\";\n\n//# sourceURL=webpack://test-task-luxms/./src/images/dots.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;