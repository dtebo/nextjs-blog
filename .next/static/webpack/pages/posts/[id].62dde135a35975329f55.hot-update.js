self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].js":
/*!*****************************!*\
  !*** ./pages/posts/[id].js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Post; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/layout */ "./components/layout.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_date__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/date */ "./components/date.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "D:\\Users\\darre\\Documents\\NextJS\\nextjs-blog\\pages\\posts\\[id].js";




var __N_SSG = true;
function Post(_ref) {
  var postData = _ref.postData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_1__.default, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("article", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingXl),
        children: postData.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().lightText),
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_date__WEBPACK_IMPORTED_MODULE_3__.default, {
          dateString: postData.date
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 21
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        dangerouslySetInnerHTML: {
          __html: postData.contentHtml
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 9
  }, this);
}
_c = Post;

var _c;

$RefreshReg$(_c, "Post");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW2lkXS5qcyJdLCJuYW1lcyI6WyJQb3N0IiwicG9zdERhdGEiLCJ0aXRsZSIsInV0aWxTdHlsZXMiLCJkYXRlIiwiX19odG1sIiwiY29udGVudEh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFFQTs7QUFFZSxTQUFTQSxJQUFULE9BQTRCO0FBQUEsTUFBWkMsUUFBWSxRQUFaQSxRQUFZO0FBQ3ZDLHNCQUNJLDhEQUFDLHVEQUFEO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw2QkFDSTtBQUFBLGtCQUFRQSxRQUFRLENBQUNDO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFJSTtBQUFBLDhCQUNJO0FBQUksaUJBQVMsRUFBRUMsMkVBQWY7QUFBQSxrQkFBc0NGLFFBQVEsQ0FBQ0M7QUFBL0M7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKLGVBR0k7QUFBSyxpQkFBUyxFQUFFQywyRUFBaEI7QUFBQSwrQkFDSSw4REFBQyxxREFBRDtBQUFNLG9CQUFVLEVBQUVGLFFBQVEsQ0FBQ0c7QUFBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixlQU1JO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQU9JO0FBQUssK0JBQXVCLEVBQUU7QUFBRUMsZ0JBQU0sRUFBRUosUUFBUSxDQUFDSztBQUFuQjtBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFnQkg7S0FqQnVCTixJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Bvc3RzL1tpZF0uNjJkZGUxMzVhMzU5NzUzMjlmNTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgZ2V0QWxsUG9zdElkcywgZ2V0UG9zdERhdGEgfSBmcm9tICcuLi8uLi9saWIvcG9zdHMnXHJcbmltcG9ydCBEYXRlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZGF0ZSdcclxuXHJcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uLy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+e3Bvc3REYXRhLnRpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPGFydGljbGU+XHJcbiAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdYbH0+e3Bvc3REYXRhLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8YnIgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmxpZ2h0VGV4dH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPERhdGUgZGF0ZVN0cmluZz17cG9zdERhdGEuZGF0ZX0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cclxuICAgICAgICAgICAgPC9hcnRpY2xlPlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCBwYXRocyA9IGdldEFsbFBvc3RJZHMoKVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwYXRocyxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pe1xyXG4gICAgY29uc3QgcG9zdERhdGEgPSBhd2FpdCBnZXRQb3N0RGF0YShwYXJhbXMuaWQpXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIHBvc3REYXRhXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==