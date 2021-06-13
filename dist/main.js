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

/***/ "../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass":
/*!******************************************************************************************************!*\
  !*** ../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"../node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".logo {\\n  padding: 40px 16px 16px 16px;\\n}\\n.logo img {\\n  width: 90%;\\n}\\n\\n.ui.inverted.segment {\\n  margin-top: 0;\\n}\\n\\n.ui.grid {\\n  padding: 40px !important;\\n}\\n\\n.sidebar.menu h5 {\\n  padding: 0px 16px;\\n  color: white;\\n  margin-bottom: 8px;\\n}\\n\\n.todo-list {\\n  padding: 0;\\n}\\n.todo-list li {\\n  list-style-type: none;\\n  margin-bottom: 12px;\\n}\\n\\n.ui.card {\\n  width: 100%;\\n}\\n.ui.card .content {\\n  display: flex;\\n  align-items: center;\\n}\\n.ui.card .content .description {\\n  flex-grow: 1;\\n}\\n\\n.form.one-liner {\\n  margin-top: 1em;\\n}\\n\\n.form-actions {\\n  display: flex;\\n  justify-content: flex-end;\\n}\\n\\n#add-category {\\n  display: flex;\\n  justify-content: space-between;\\n}\\n#add-category input {\\n  background-color: #333333;\\n  color: white;\\n  flex-grow: 1;\\n}\\n\\n#categories-list a.item {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 8px 14px 8px 14px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-app/./src/style.sass?../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "../node_modules/css-loader/dist/runtime/api.js":
/*!******************************************************!*\
  !*** ../node_modules/css-loader/dist/runtime/api.js ***!
  \******************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-app/../node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.sass":
/*!************************!*\
  !*** ./src/style.sass ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.sass */ \"../node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.sass\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_sass__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-app/./src/style.sass?");

/***/ }),

/***/ "../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-app/../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nvar getRandomValues;\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n    // find the complete implementation of crypto (msCrypto) on IE11.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo-app/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_sass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.sass */ \"./src/style.sass\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _modules_functions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/functions */ \"./src/modules/functions.js\");\n\n\n\n\nconst todos = [];\nconst categories = [\"Personal\", \"Work\"];\nconst priorities = [\"Low\", \"Medium\", \"High\"];\n\nclass Todo {\n  constructor(name, id) {\n    this.name = name;\n    this.id = id;\n    this.completed = false;\n    this.category = \"Personal\";\n    this.notes = \"\";\n    this.priority = \"\";\n    this.dueDate = \"\";\n  }\n  getName() {\n    return this.name;\n  }\n  getNotes() {\n    return this.notes;\n  }\n  getDueDate() {\n    return this.dueDate;\n  }\n}\n\nconst addTodoToList = (todo) => {\n  todos.push(todo);\n};\n\nconst createTodo = (todo, id) => {\n  return new Todo(todo, id);\n};\n\nconst resetDOM = () => {\n  const dom = document.getElementById(\"todoList\");\n  dom.innerHTML = \"\";\n};\n\nconst resetTodoForm = () => {\n  document.getElementById(\"todoInputSimple\").value = \"\";\n};\n\nconst addCategory = (category) => {\n  categories.push(category);\n};\n\nconst renderCategories = (() => {\n  console.log(categories);\n  const categoryList = document.getElementById(\"categories-list\");\n\n  categories.forEach((category) => {\n    const element = document.createElement(\"a\");\n    const span = document.createElement(\"span\");\n    const button = document.createElement(\"button\");\n    element.setAttribute(\"href\", `#${category}`);\n    element.classList.add(\"item\");\n    span.innerText = category;\n    button.classList.add(\"ui\", \"icon\", \"grey\", \"button\");\n    button.setAttribute(\"id\", `delete-category-button-${category}`);\n    button.innerHTML = `<i class=\"delete icon\"></i>`;\n    button.onclick = function () {\n      console.log(category);\n    };\n    element.appendChild(span);\n    element.appendChild(button);\n    categoryList.appendChild(element);\n    console.log(element);\n  });\n})();\n\nconst categoryFormListener = (() => {\n  const categoryForm = document.getElementById(\"add-category\");\n  categoryForm.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const category = document.getElementById(\"add-category-input\").value;\n    addCategory(category);\n    renderCategories();\n    document.getElementById(\"add-category-input\").value = \"\";\n  });\n})();\n\nwindow.addEventListener(\"hashchange\", () => {\n  if (window.location.hash) {\n    const hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character\n    document.getElementById(\"page-title\").innerText = hash;\n    // hash found\n  } else {\n    // No hash found\n  }\n});\n\nconst simpleFormListener = (() => {\n  const todoFormSimple = document.getElementById(\"todoFormSimple\");\n  todoFormSimple.addEventListener(\"submit\", (e) => {\n    e.preventDefault();\n    const todo = document.getElementById(\"todoInputSimple\").value;\n    if (todo.length > 0) {\n      newTodoController(todo);\n    }\n  });\n})();\n\nconst renderTodos = (todos) => {\n  resetDOM();\n  console.log(todos);\n  todos.forEach((todo) => {\n    renderChecklistItem(todo);\n    renderDetailedForm(todo);\n  });\n};\n\nconst newTodoController = (todo) => {\n  const newTodo = createTodo(todo, (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)());\n  addTodoToList(newTodo);\n  renderTodos(todos);\n  resetTodoForm();\n};\n\nconst updateCompleted = (id, value) => {\n  const todo = todos.find((todo) => todo.id === id);\n  todo.completed = value;\n};\n\nconst todoUpdateController = (\n  id,\n  name,\n  notes,\n  category,\n  priority,\n  dueDate,\n  status\n) => {\n  const todo = todos.find((todo) => todo.id === id);\n  todo.name = name;\n  todo.notes = notes;\n  todo.category = category;\n  todo.priority = priority;\n  todo.completed = status;\n  todo.dueDate = dueDate;\n  renderTodos(todos);\n};\n\n// render category form\n\n// create the elements of the simplified checklist and append to the DOM\nconst renderChecklistItem = (todo) => {\n  const list = document.getElementById(\"todoList\");\n  const element = document.createElement(\"div\");\n  element.classList.add(\"ui\", \"card\");\n  element.innerHTML = (0,_modules_functions__WEBPACK_IMPORTED_MODULE_1__.checklistItemTemplate)(todo);\n  list.appendChild(element);\n  $(\".ui.checkbox\").checkbox();\n\n  // add event listener to the checkbox\n  document\n    .getElementById(`checkbox-${todo.id}`)\n    .addEventListener(\"change\", (e) => {\n      updateCompleted(todo.id, e.target.checked);\n      console.log(todos);\n    });\n};\n\n// render detailed form and enable logic\nconst renderDetailedForm = (todo) => {\n  const moreButton = document.getElementById(`more-button-${todo.id}`);\n  moreButton.addEventListener(\"click\", (e) => {\n    const todoForm = document.getElementById(`form-${todo.id}`);\n    moreButton.setAttribute(\"style\", \"display:none\");\n    todoForm.innerHTML = (0,_modules_functions__WEBPACK_IMPORTED_MODULE_1__.todoFormDetailedTemplate)(todo);\n\n    const renderDropdownValues = (dropdownArray, selectedValue) => {\n      const dropdownValues = [];\n      dropdownArray.forEach((item) => {\n        if (item == selectedValue) {\n          dropdownValues.push({\n            name: item,\n            value: item,\n            selected: true,\n          });\n        } else {\n          dropdownValues.push({ name: item, value: item });\n        }\n      });\n      return dropdownValues;\n    };\n    $(`#category-dropdown-${todo.id}`).dropdown({\n      values: renderDropdownValues(categories, todo.category),\n    });\n    $(`#priority-dropdown-${todo.id}`).dropdown({\n      values: renderDropdownValues(priorities, todo.priority),\n    });\n    $(`#status-dropdown-${todo.id}`).dropdown({\n      values: [\n        {\n          name: \"Completed\",\n          value: \"true\",\n          selected: todo.completed === false ? false : true,\n        },\n        {\n          name: \"Not Completed\",\n          value: \"false\",\n          selected: todo.completed === false ? true : false,\n        },\n      ],\n    });\n\n    document\n      .getElementById(`delete-button-${todo.id}`)\n      .addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        const index = todos.findIndex((x) => x.id === todo.id);\n        todos.splice(index, 1);\n        renderTodos(todos);\n      });\n\n    //event listener for form submission\n    document\n      .getElementById(`detailed-form-${todo.id}`)\n      .addEventListener(\"submit\", (e) => {\n        e.preventDefault();\n        const name = document.getElementById(`name-${todo.id}`).value;\n        const notes = document.getElementById(`notes-${todo.id}`).value;\n        const category = $(`#category-dropdown-${todo.id}`).dropdown(\n          \"get value\"\n        );\n        const priority = $(`#priority-dropdown-${todo.id}`).dropdown(\n          \"get value\"\n        );\n        const status =\n          $(`#status-dropdown-${todo.id}`).dropdown(\"get value\") === \"true\"\n            ? true\n            : false;\n        const dueDate = document.getElementById(`dueDate-${todo.id}`).value;\n        todoUpdateController(\n          todo.id,\n          name,\n          notes,\n          category,\n          priority,\n          dueDate,\n          status\n        );\n      });\n  });\n};\n\n\n//# sourceURL=webpack://todo-app/./src/index.js?");

/***/ }),

/***/ "./src/modules/functions.js":
/*!**********************************!*\
  !*** ./src/modules/functions.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderChecklistItem\": () => (/* binding */ renderChecklistItem),\n/* harmony export */   \"checklistItemTemplate\": () => (/* binding */ checklistItemTemplate),\n/* harmony export */   \"todoFormDetailedTemplate\": () => (/* binding */ todoFormDetailedTemplate)\n/* harmony export */ });\n// update the completed value\nconst updateCompleted = (todos, id, value) => {\n  const todo = todos.find((todo) => (todo.id = id));\n  todo.completed = value;\n};\n\n// create the elements of the simplified checklist and append to the DOM\nconst renderChecklistItem = (todos, todo) => {\n  const list = document.getElementById(\"todoList\");\n  const element = document.createElement(\"div\");\n  element.classList.add(\"ui\", \"card\");\n  element.innerHTML = `\n          <div class=\"content\">\n              <div class=\"description form-simple\" id=\"form-${todo.id}\">\n                  <div class=\"ui checkbox\">\n                      <input value=\"55\" id=${`checkbox-${todo.id}`} type=\"checkbox\" name=${`checkbox-${todo.id}`} ${\n    todo.completed && \"checked\"\n  }>\n                      <label for=${`checkbox-${todo.id}`}>${todo.getName()}</label>\n                  </div>\n              </div>\n              <button class=\"ui compact icon button positive basic\" id=${`more-button-${todo.id}`}><i class=\"ellipsis horizontal icon\"></i></button>\n          </div>\n          `;\n  list.appendChild(element);\n  $(\".ui.checkbox\").checkbox();\n\n  // add event listener to the checkbox\n  document\n    .getElementById(`checkbox-${todo.id}`)\n    .addEventListener(\"change\", (e) => {\n      updateCompleted(todos, todo.id, e.target.checked);\n    });\n};\n\nconst checklistItemTemplate = (todo) => `\n<div class=\"content\">\n    <div class=\"description form-simple\" id=\"form-${todo.id}\">\n        <div class=\"ui checkbox\">\n            <input value=\"55\" id=${`checkbox-${todo.id}`} type=\"checkbox\" name=${`checkbox-${todo.id}`} ${\n  todo.completed && \"checked\"\n}>\n            <label for=${`checkbox-${todo.id}`}>${todo.getName()}</label>\n        </div>\n    </div>\n    <button class=\"ui compact icon button positive basic\" id=${`more-button-${todo.id}`}><i class=\"ellipsis horizontal icon\"></i></button>\n</div>\n`;\n\nconst todoFormDetailedTemplate = (todo) => `\n<form class=\"ui form\" id=\"detailed-form-${todo.id}\">\n  <div class=\"field\">\n    <label>Task name</label>\n    <input type=\"text\" name=\"name\" placeholder=\"Todo name\" id=\"name-${\n      todo.id\n    }\" value=\"${todo.getName()}\">\n  </div>\n  \n  <div class=\"field\">\n    <label>Notes</label>\n    <textarea rows=\"2\" name=\"notes-${todo.id}\" id=\"notes-${\n  todo.id\n}\" value=\"test\">${todo.getNotes()}</textarea>\n  </div>\n  <div class=\"field\">\n    <label>Category</label>\n    <div class=\"ui selection dropdown\" id=\"category-dropdown-${todo.id}\">\n      <div class=\"text\"></div>\n      <i class=\"dropdown icon\"></i>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Priority</label>\n    <div class=\"ui selection dropdown\" id=\"priority-dropdown-${todo.id}\">\n      <div class=\"text\"></div>\n      <i class=\"dropdown icon\"></i>\n    </div>\n  </div>\n  <div class=\"field\">\n    <label>Due Date</label>\n    <input type=\"date\" name=\"date\" id=\"dueDate-${\n      todo.id\n    }\" value=\"${todo.getDueDate()}\">\n  </div>\n  <div class=\"field\">\n    <label>Status</label>\n    <div class=\"ui selection dropdown\" id=\"status-dropdown-${todo.id}\">\n      <div class=\"text\"></div>\n      <i class=\"dropdown icon\"></i>\n    </div>\n  </div>\n  <div class=\"form-actions\">\n    <button class=\"ui red button\" id=\"delete-button-${todo.id}\">Delete</button>\n    <button class=\"ui button positive\" type=\"submit\">Update</button>\n  </div>\n</form>`;\n\n\n\n\n//# sourceURL=webpack://todo-app/./src/modules/functions.js?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;