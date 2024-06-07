/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/BackgroundImage2.jpg */ \"./src/images/BackgroundImage2.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/searchIcon.png */ \"./src/images/searchIcon.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n___CSS_LOADER_EXPORT___.push([module.id, \"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap);\"]);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `*{\n    box-sizing: border-box;\n    margin: 0;\n    font-family: \"Josefin Sans\";\n    color: rgb(204, 217, 228);\n}\n\nbody{\n    overflow-y: hidden;\n    overflow-x: hidden;\n    background-image:    url(${___CSS_LOADER_URL_REPLACEMENT_0___});\n    background-size: 100% 100%;                  \n    background-repeat:   no-repeat;\n    background-position: center center; \n    height: 100vh;\n    width: 100vw;   \n}\n\n.defaultContentContainer{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    width:30em;\n    height:15em;\n    margin-top: -9em;\n    margin-left: -15em;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n}\n\n.renderedContentContainer{\n    position: relative;\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: 33% 33% 33%;\n    grid-template-rows: 8% 6% 6% auto;\n    align-items: center;\n    border: 0.5em solid transparent;\n}\n\n.renderedPageTitle{\n    font-size: 24px;\n    grid-column: 1/2;\n    grid-row: 1/2;\n}\n\n.defaultInputForm{\n    width: 100%;\n    height: 2em; \n    border-radius: 1em;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: white;\n}\n\n.renderedInputForm{\n    width: 100%;\n    min-width: 220px;\n    height: 2em; \n    min-height: 40px;\n    border-radius: 1em;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-evenly;\n    background-color: white;\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    justify-content: center;\n    background-color: transparent;\n}\n\n.defaultInput{\n    height: 2em; \n    width: 30em;\n    border: none;\n    border-radius: 0.5em;\n    color: black;\n}\n\n.renderedInput{\n    height: 2.3em; \n    width: 30em;\n    border: none;\n    border-radius: 0.5em;\n    color: black;\n}\n\n.defaultSearchButton{\n    height: 2em;\n    width: 2em;\n    background-color: white;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n    border: none;\n}\n\n.defaultSearchButton:hover{\n    cursor: pointer;\n}\n\n.renderedSearchButton{\n    height: 2em;\n    width: 2em;\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\n    background-position: center;\n    background-size: contain;\n    background-repeat: no-repeat;\n    border: none;\n    background-color: transparent;\n    position: relative;\n    right: 2em;\n}\n\n.renderedSearchButton:hover{\n    cursor: pointer;\n}\n\n.timeList{\n    grid-row: 4 / 5;\n    grid-column: 1 / 2;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n}\n\n.timeList li{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.locationName{\n    grid-row: 1 / 2;\n    grid-column: 3 / 4;\n    font-size: 2em;\n}\n\n.countryName{\n    grid-row: 2 / 3;\n    grid-column: 3 / 4;\n    font-size: 1.2em;\n}\n\n.dateTime{\n    grid-row: 3 / 4;\n    grid-column: 3 / 4;\n    font-size: 1.2em;\n}\n\n.dataWrapper{\n    grid-row: 4 / 5;\n    grid-column: 3 / 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    height: 100%;\n}\n\n.dataWrapper div{\n    font-size: 1.5em;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://tempchecks/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://tempchecks/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://tempchecks/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://tempchecks/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://tempchecks/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://tempchecks/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://tempchecks/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://tempchecks/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://tempchecks/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://tempchecks/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://tempchecks/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n/* \n    getWeather fetches a response containing weather data of a given location and returns it\n    as a JavaScript object.\n*/\nasync function getWeather(location){  \n    const response = await fetch(\n        `https://api.weatherapi.com/v1/forecast.json?key=19be7690d2fb42ce924102105241802&q=${location}`\n    );   \n    const weatherData = await response.json();\n    if(!weatherData.location){\n        throw new Error(\"No location found!\")\n    }\n    return weatherData;\n}\n\n/**\n * getHourlyDataList assigns the list of all of the hourly readings for a locations temperatures \n * to a variable and returns it\n */\nasync function getHourlyDataList(location){\n    const weatherData = await getWeather(location);\n    const hourlyDataList = weatherData.forecast.forecastday[0].hour;\n    return hourlyDataList;\n}\n\n/**\n * renderFirstHourlyDataList renders the first half of the hourly data list on to the page and adds \n * a navigation button with an event listener to render the second half of the hourly data list.\n */\nasync function renderFirstHourlyDataList(){\n    let startingHour = 0;\n    const timeList = document.querySelector(\".timeList\");\n    const hourlyDataList = await getHourlyDataList(location);\n    const navButton = await createNavigationButton(renderSecondHourlyDataList);\n    for(let i = startingHour; i < startingHour + 12 && i < 24; i++){\n        //Create the hour element for each hour:\n        const hourElement = document.createElement(\"li\");\n        const hourTime = document.createElement(\"p\");\n        const hourData = document.createElement(\"p\");\n\n\n        //Fill each element with each hour of the day:\n        if(i < 10){\n            hourTime.innerHTML = `0${i}:00`;\n        } \n        else{\n            hourTime.innerHTML = `${i}:00`;\n        }\n\n        //Add the weather data to each hour element:\n        hourData.innerHTML = `${hourlyDataList[i].temp_c}°C`\n\n        //Append the hour time and hour data elements to the hour container element:\n        hourElement.appendChild(hourTime);\n        hourElement.appendChild(hourData);\n\n        //Append the whole hour element to the time list:\n        timeList.appendChild(hourElement);\n    }\n    timeList.appendChild(navButton);\n}\n\n/**\n * renderSecondHourlyDataList renders the second half of the hourly data list on to the page and adds \n * a navigation button with an event listener to render the first half of the hourly data list.\n */\nasync function renderSecondHourlyDataList(){\n    let startingHour = 12;\n    const timeList = document.querySelector(\".timeList\");\n    const hourlyDataList = await getHourlyDataList(location);\n    const navButton = await createNavigationButton(renderFirstHourlyDataList);\n    timeList.appendChild(navButton);\n    for(let i = startingHour; i < startingHour + 12 && i < 24; i++){\n        //Create the hour element for each hour:\n        const hourElement = document.createElement(\"li\");\n        const hourTime = document.createElement(\"p\");\n        const hourData = document.createElement(\"p\");\n\n        //Fill each element with each hour of the day:\n        if(i < 10){\n            hourTime.innerHTML = `0${i}:00`;\n        } \n        else{\n            hourTime.innerHTML = `${i}:00`;\n        }\n\n        //Add the weather data to each hour element:\n        hourData.innerHTML = `${hourlyDataList[i].temp_c}°C`\n\n        //Append the hour time and hour data elements to the hour container element:\n        hourElement.appendChild(hourTime);\n        hourElement.appendChild(hourData);\n\n        //Append the hour element and the navigation button to the time list:\n        timeList.appendChild(hourElement);\n        \n    }\n}\n\nfunction clearPageData(){\n    const contentContainer = document.querySelector('.renderedContentContainer');\n    if(contentContainer != null){\n        const locationName = document.querySelector(\".locationName\");\n        const countryName = document.querySelector(\".countryName\");\n        const dateTime = document.querySelector('.dateTime');\n        const dataWrapper = document.querySelector('.dataWrapper');\n        const timeList = document.querySelector('.timeList');\n\n        locationName.remove();\n        countryName.remove();\n        dateTime.remove();\n        dataWrapper.remove();\n        timeList.remove();\n    }\n}\n\n/**\n * clearHourlyDataList clears the list element containing all of the hourly data.\n */\nfunction clearHourlyDataList(){\n    const timeList = document.querySelector('.timeList');\n    if(timeList != null){\n        timeList.innerHTML = \"\";\n    }\n}\n\n/**\n * createNavigationButton creates and returns a button with an event listener attached to it.\n * When clicked the button first clears the hourly data list before rendering one of the halfs \n * of the list depending on the function given to the parameter. \n */\nasync function createNavigationButton(renderDataList){\n    const navButton = document.createElement('button');\n    navButton.className = 'navButton';\n    navButton.innerHTML = 'test';\n    navButton.addEventListener('click', () => {\n        clearHourlyDataList();\n        renderDataList(getHourlyDataList(location));\n    });\n    \n    return navButton;\n}\n\n/*\n    getUserInput returns the user's input from the text input box.\n*/\nfunction getUserInput(){\n    const textInput = document.querySelector(\"#input\");\n    const userInput = textInput.value;\n    return userInput;\n}\n\n\n\n/*\n    submitInput calls the Weather API with the user's input as the argument.\n    getWeather is only called if a value has been entered by the user.\n*/\nasync function submitInput(location){\n    if(getUserInput() != \"\"){\n        const data = await getWeather(location); \n        return data;\n    } else{\n        alert(\"A location must be entered first!\")\n        throw new Error(\"A location must be entered first!\")\n    }\n}\n\n/*\n    renderPage renders the new layout of the page once a submission of \n    the form is made.\n*/\nfunction renderPage(){\n    //Change existing elements:\n    const contentContainer = document.querySelector(\"#contentContainer\");\n    const pageTitle = document.querySelector(\"#pageTitle\");\n    const inputForm = document.querySelector(\"#inputForm\");\n    const input = document.querySelector(\"#input\");\n    const searchButton = document.querySelector(\"#searchButton\");\n\n    //Change layout of the page:\n    contentContainer.className = \"renderedContentContainer\";\n    pageTitle.className = \"renderedPageTitle\";\n    inputForm.className = \"renderedInputForm\";\n    input.className = \"renderedInput\";\n    searchButton.className = \"renderedSearchButton\";\n\n    //Create new elements for the page:\n    const locationName = document.createElement('h3');\n    const countryName = document.createElement('h4');\n    const dateTime = document.createElement('h4');\n    const dataWrapper = document.createElement('div');\n    const timeList = document.createElement('ul');\n    const locationTemp = createWeatherElement(\"Current Temperature: \", \"locationTemp\");\n    const feelsLikeTemp = createWeatherElement(\"Feels Like: \", \"feelsLikeTemp\");\n    const rainChance = createWeatherElement(\"Chance Of Rain: \", \"rainChance\");\n    const humidity = createWeatherElement(\"Humidity: \", \"humidity\");\n    const uvIndex = createWeatherElement(\"UV Index: \", \"uvIndex\");\n\n    //Add class names to the new elements:\n    locationName.className = \"locationName\";\n    countryName.className = \"countryName\";\n    dateTime.className = \"dateTime\";\n    dataWrapper.className = \"dataWrapper\";\n    timeList.className = \"timeList\";\n\n    //Append weather data to data wrapper:\n    dataWrapper.appendChild(locationTemp);\n    dataWrapper.appendChild(feelsLikeTemp);\n    dataWrapper.appendChild(rainChance);\n    dataWrapper.appendChild(humidity);\n    dataWrapper.appendChild(uvIndex);\n\n    //Append the new elements to the page:\n    contentContainer.appendChild(locationName);\n    contentContainer.appendChild(countryName);\n    contentContainer.appendChild(dateTime);\n    contentContainer.appendChild(dataWrapper);\n    contentContainer.appendChild(timeList);\n}\n\n\n/**\n * fillPageData receives the data from the API, selects the weather\n * elements and puts the pieces of data into the corresponding weather \n * elements.\n */\nfunction fillPageData(data){\n    const locationName = document.querySelector('.locationName');\n    const countryName = document.querySelector('.countryName');\n    const dateTime = document.querySelector('.dateTime');\n    const locationTemp = document.querySelector('.locationTemp');\n    const feelsLikeTemp = document.querySelector('.feelsLikeTemp');\n    const rainChance = document.querySelector('.rainChance');\n    const humidity = document.querySelector('.humidity');\n    const uvIndex = document.querySelector('.uvIndex');\n\n    locationName.innerHTML = data.location.name;\n    countryName.innerHTML = data.location.country;\n    dateTime.innerHTML = data.location.localtime;\n    locationTemp.innerHTML = `${data.current.temp_c}°C`;\n    feelsLikeTemp.innerHTML = `${data.current.feelslike_c}°C`;\n    rainChance.innerHTML = `${data.forecast.forecastday[0].day.daily_chance_of_rain}%`;\n    humidity.innerHTML = `${data.current.humidity}%`;\n    uvIndex.innerHTML = `${data.current.uv}`;\n}\n\n/**\n * createWeatherElement is a helper function that will create an element \n * containing a single piece of data, along with the key annotating the \n * piece of data.\n * weatherKey parameter is what the key will display.\n * weatherValClass parameter is the name of the class given \n * to the value element for later access.\n */\nfunction createWeatherElement(weatherKey, weatherValClass){\n    //Create the elements:\n    const div = document.createElement('div');\n    const divKey = document.createElement('p');\n    const divVal = document.createElement('p');\n\n    //Apply the text to applicable elements:\n    divKey.innerHTML = weatherKey;\n\n    //Apply the class name to the value element for later access:\n    divVal.className = weatherValClass;\n\n    //Append the elements to the div:\n    div.appendChild(divKey);\n    div.appendChild(divVal);\n\n    //Return the created weather element\n    return div;\n}\n\nlet location = null;\n\n/**\n * pageAction is the main function for the page when the search button \n * is pressed\n */\nasync function pageAction(){\n    location = getUserInput();\n    console.log(location);\n    await submitInput(location)\n    .then((resolved) => {\n        clearPageData();\n        clearHourlyDataList();\n        renderPage();\n        fillPageData(resolved);\n        renderFirstHourlyDataList(getHourlyDataList(location));\n    },(rejected) => {\n        console.log(rejected);\n    })\n}\n\n/**\n * Event listener to initialise the main event of the page\n */\nconst inputForm = document.querySelector(`#inputForm`);\ninputForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    pageAction();\n});\n\n//# sourceURL=webpack://tempchecks/./src/index.js?");

/***/ }),

/***/ "./src/images/BackgroundImage2.jpg":
/*!*****************************************!*\
  !*** ./src/images/BackgroundImage2.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"dc41d0c4a82fb12bafa8.jpg\";\n\n//# sourceURL=webpack://tempchecks/./src/images/BackgroundImage2.jpg?");

/***/ }),

/***/ "./src/images/searchIcon.png":
/*!***********************************!*\
  !*** ./src/images/searchIcon.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"c6544d3156a8bde3d076.png\";\n\n//# sourceURL=webpack://tempchecks/./src/images/searchIcon.png?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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