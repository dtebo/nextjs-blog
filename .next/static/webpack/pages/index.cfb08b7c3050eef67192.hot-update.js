self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "D:\\Users\\darre\\Documents\\NextJS\\nextjs-blog\\pages\\index.js",
    _this = undefined;





var __N_SSG = true;
function Home(_ref) {
  var allPostsData = _ref.allPostsData;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_layout__WEBPACK_IMPORTED_MODULE_2__.default, {
    home: true,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: _components_layout__WEBPACK_IMPORTED_MODULE_2__.siteTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
      className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_4___default().headingMd),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "I'm a 37 year old, Full-Stack Developer from Erie, PA"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: ["(This is a sample website - you\u2019ll be building a site like this on", ' ', /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          href: "https://nextjs.org/learn",
          children: "our Next.js tutorial"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), ".)"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}
_c = Home;

var ImageComponent = function ImageComponent() {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
    src: "/images/profile.jpg",
    height: 144,
    width: 144,
    alt: "Darren Tebo"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 35,
    columnNumber: 3
  }, _this);
};

_c2 = ImageComponent;

var _c, _c2;

$RefreshReg$(_c, "Home");
$RefreshReg$(_c2, "ImageComponent");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImFsbFBvc3RzRGF0YSIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJJbWFnZUNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7QUFZZSxTQUFTQSxJQUFULE9BQWdDO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUM3QyxzQkFDRSw4REFBQyx1REFBRDtBQUFRLFFBQUksTUFBWjtBQUFBLDRCQUNFLDhEQUFDLGtEQUFEO0FBQUEsNkJBQ0U7QUFBQSxrQkFBUUMseURBQVNBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFTLGVBQVMsRUFBRUMsMkVBQXBCO0FBQUEsOEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQUEsOEZBQ3FFLEdBRHJFLGVBRUU7QUFBRyxjQUFJLEVBQUMsMEJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDtLQWZ1QkgsSTs7QUFpQnhCLElBQU1JLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUI7QUFBQSxzQkFDckIsOERBQUMsbURBQUQ7QUFDRSxPQUFHLEVBQUMscUJBRE47QUFFRSxVQUFNLEVBQUUsR0FGVjtBQUdFLFNBQUssRUFBRSxHQUhUO0FBSUUsT0FBRyxFQUFDO0FBSk47QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURxQjtBQUFBLENBQXZCOztNQUFNQSxjIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNmYjA4YjdjMzA1MGVlZjY3MTkyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyBnZXRTb3J0ZWRQb3N0c0RhdGEgfSBmcm9tICcuLi9saWIvcG9zdHMnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCl7XG4gIGNvbnN0IGFsbFBvc3RzRGF0YSA9IGdldFNvcnRlZFBvc3RzRGF0YSgpXG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgYWxsUG9zdHNEYXRhXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBhbGxQb3N0c0RhdGEgfSkge1xuICByZXR1cm4gKFxuICAgIDxMYXlvdXQgaG9tZT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3NpdGVUaXRsZX08L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPXt1dGlsU3R5bGVzLmhlYWRpbmdNZH0+XG4gICAgICAgIDxwPkknbSBhIDM3IHllYXIgb2xkLCBGdWxsLVN0YWNrIERldmVsb3BlciBmcm9tIEVyaWUsIFBBPC9wPlxuICAgICAgICA8cD5cbiAgICAgICAgICAoVGhpcyBpcyBhIHNhbXBsZSB3ZWJzaXRlIC0geW914oCZbGwgYmUgYnVpbGRpbmcgYSBzaXRlIGxpa2UgdGhpcyBvbnsnICd9XG4gICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vbmV4dGpzLm9yZy9sZWFyblwiPm91ciBOZXh0LmpzIHR1dG9yaWFsPC9hPi4pXG4gICAgICAgIDwvcD5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8L0xheW91dD5cbiAgKVxufVxuXG5jb25zdCBJbWFnZUNvbXBvbmVudCA9ICgpID0+IChcbiAgPEltYWdlXG4gICAgc3JjPVwiL2ltYWdlcy9wcm9maWxlLmpwZ1wiXG4gICAgaGVpZ2h0PXsxNDR9XG4gICAgd2lkdGg9ezE0NH1cbiAgICBhbHQ9XCJEYXJyZW4gVGVib1wiXG4gIC8+XG4pXG4iXSwic291cmNlUm9vdCI6IiJ9