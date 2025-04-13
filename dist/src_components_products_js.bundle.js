/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkassignment4"] = self["webpackChunkassignment4"] || []).push([["src_components_products_js"],{

/***/ "./src/components/products.js":
/*!************************************!*\
  !*** ./src/components/products.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ render)\n/* harmony export */ });\n/* harmony import */ var _templates_products_hbs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/products.hbs */ \"./src/templates/products.hbs\");\n/* harmony import */ var _templates_products_hbs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_templates_products_hbs__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/products */ \"./src/data/products.js\");\n/* harmony import */ var _data_products__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_products__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nfunction render() {\n  try {\n    const html = _templates_products_hbs__WEBPACK_IMPORTED_MODULE_0___default()((_data_products__WEBPACK_IMPORTED_MODULE_1___default()));\n    const appDiv = document.getElementById('app');\n    if (appDiv) {\n      appDiv.innerHTML = html;\n    } else {\n      console.error('App div not found for products component');\n    }\n  } catch (error) {\n    console.error('Error rendering products component:', error);\n  }\n}\n\n//# sourceURL=webpack://assignment4/./src/components/products.js?");

/***/ }),

/***/ "./src/data/products.js":
/*!******************************!*\
  !*** ./src/data/products.js ***!
  \******************************/
/***/ ((module) => {

eval("module.exports = { products: [\n  { \"id\": 1, \"name\": \"Laptop\", \"price\": 999 },\n  { \"id\": 2, \"name\": \"Phone\", \"price\": 599 },\n  { \"id\": 3, \"name\": \"Tablet\", \"price\": 399 }\n]};\n\n\n//# sourceURL=webpack://assignment4/./src/data/products.js?");

/***/ }),

/***/ "./src/templates/products.hbs":
/*!************************************!*\
  !*** ./src/templates/products.hbs ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var Handlebars = __webpack_require__(/*! ../../node_modules/handlebars/runtime.js */ \"./node_modules/handlebars/runtime.js\");\nfunction __default(obj) { return obj && (obj.__esModule ? obj[\"default\"] : obj); }\nmodule.exports = (Handlebars[\"default\"] || Handlebars).template({\"1\":function(container,depth0,helpers,partials,data) {\n    var alias1=container.lambda, alias2=container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return \"      <li>\"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,\"name\") : depth0), depth0))\n    + \" - $\"\n    + alias2(alias1((depth0 != null ? lookupProperty(depth0,\"price\") : depth0), depth0))\n    + \"</li>\\r\\n\";\n},\"compiler\":[8,\">= 4.3.0\"],\"main\":function(container,depth0,helpers,partials,data) {\n    var stack1, lookupProperty = container.lookupProperty || function(parent, propertyName) {\n        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {\n          return parent[propertyName];\n        }\n        return undefined\n    };\n\n  return \"<section>\\r\\n  <h2>Product List</h2>\\r\\n  <ul>\\r\\n\"\n    + ((stack1 = lookupProperty(helpers,\"each\").call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? lookupProperty(depth0,\"products\") : depth0),{\"name\":\"each\",\"hash\":{},\"fn\":container.program(1, data, 0),\"inverse\":container.noop,\"data\":data,\"loc\":{\"start\":{\"line\":4,\"column\":4},\"end\":{\"line\":6,\"column\":14}}})) != null ? stack1 : \"\")\n    + \"  </ul>\\r\\n</section>\";\n},\"useData\":true});\n\n//# sourceURL=webpack://assignment4/./src/templates/products.hbs?");

/***/ })

}]);