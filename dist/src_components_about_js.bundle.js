/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkassignment4"] = self["webpackChunkassignment4"] || []).push([["src_components_about_js"],{

/***/ "./src/components/about.js":
/*!*********************************!*\
  !*** ./src/components/about.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderAbout)\n/* harmony export */ });\n/* harmony import */ var _templates_about_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/about.hbs */ \"./src/templates/about.hbs\");\n/* harmony import */ var _templates_about_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_about_hbs__WEBPACK_IMPORTED_MODULE_0__);\n\nconst aboutData = __webpack_require__(/*! ../data/about.js */ \"./src/data/about.js\");\n\nfunction renderAbout() {\n    const app = document.getElementById('app');\n    if (!app) return;\n    app.innerHTML = _templates_about_hbs__WEBPACK_IMPORTED_MODULE_0___default()(aboutData);\n}\n\n//# sourceURL=webpack://assignment4/./src/components/about.js?");

/***/ }),

/***/ "./src/data/about.js":
/*!***************************!*\
  !*** ./src/data/about.js ***!
  \***************************/
/***/ ((module) => {

eval("module.exports = {\n    title: \"About Us\",\n    description: \"We are a fictional company providing tech products.\"\n};\n\n//# sourceURL=webpack://assignment4/./src/data/about.js?");

/***/ }),

/***/ "./src/templates/about.hbs":
/*!*********************************!*\
  !*** ./src/templates/about.hbs ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"compiler\":[8,\">= 4.3.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3=\"function\", alias4=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return \"<section>\\n  <h2>\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"title\") || (depth0 != null ? lookupProperty(depth0,\"title\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"title\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":2,\"column\":6},\"end\":{\"line\":2,\"column\":17}}}) : helper)))\n    + \"</h2>\\n  <p>\"\n    + alias4(((helper = (helper = lookupProperty(helpers,\"description\") || (depth0 != null ? lookupProperty(depth0,\"description\") : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{\"name\":\"description\",\"hash\":{},\"data\":data,\"loc\":{\"start\":{\"line\":3,\"column\":5},\"end\":{\"line\":3,\"column\":22}}}) : helper)))\n    + \"</p>\\n</section>\";\n},\"useData\":true});\n\n//# sourceURL=webpack://assignment4/./src/templates/about.hbs?");

/***/ })

}]);