exports.id = "components_layout_js-lib_posts_js";
exports.ids = ["components_layout_js-lib_posts_js"];
exports.modules = {

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "siteTitle": function() { return /* binding */ siteTitle; },
/* harmony export */   "default": function() { return /* binding */ Layout; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ "./node_modules/next/image.js");
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.module.css */ "./components/layout.module.css");
/* harmony import */ var _layout_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_layout_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


var _jsxFileName = "D:\\Users\\darre\\Documents\\NextJS\\nextjs-blog\\components\\layout.js";





const name = 'Darren Tebo';
const siteTitle = 'Next.js Sample Website';
function Layout({
  children,
  home
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "icon",
        href: "/favicon.ico"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "description",
        content: "Learn how to build a personal website using Next.js"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        property: "og:image",
        content: `https://og-image.vercel.app/${encodeURI(siteTitle)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "og:title",
        content: siteTitle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().header),
      children: home ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
          priority: true,
          src: "/images/profile.jpg",
          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderCircle),
          height: 144,
          width: 144,
          alt: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().heading2Xl),
          children: name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 13
        }, this)]
      }, void 0, true) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
          href: "/",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
              priority: true,
              src: "/images/profile.jpg",
              className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().borderCircle),
              height: 108,
              width: 108,
              alt: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
          className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().headingLg),
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
            href: "/",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
              className: (_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default().colorInherit),
              children: name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 13
        }, this)]
      }, void 0, true)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("main", {
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, this), !home && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_layout_module_css__WEBPACK_IMPORTED_MODULE_4___default().backToHome),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
        href: "/",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: "\u2190 Back to home"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 11
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "./lib/posts.js":
/*!**********************!*\
  !*** ./lib/posts.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getSortedPostsData": function() { return /* binding */ getSortedPostsData; },
/* harmony export */   "getAllPostIds": function() { return /* binding */ getAllPostIds; },
/* harmony export */   "getPostData": function() { return /* binding */ getPostData; }
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! remark */ "remark");
/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(remark__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ "remark-html");
/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(remark_html__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const postsDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(process.cwd(), 'posts');
function getSortedPostsData() {
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, fileName);
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8');
    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
    return _objectSpread({
      id
    }, matterResult.data);
  });
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
function getAllPostIds() {
  const fileNames = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    };
  });
}
async function getPostData(id) {
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(postsDirectory, `${id}.md`);
  const fileContents = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(fullPath, 'utf8'); // Use gray-matter to parse the post metadata section

  const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fileContents);
  const processedContent = await remark__WEBPACK_IMPORTED_MODULE_3___default()().use((remark_html__WEBPACK_IMPORTED_MODULE_4___default())).process(matterResult.content);
  const contentHtml = processedContent.toString(); // Combine the data with the id

  return _objectSpread({
    id,
    contentHtml
  }, matterResult.data);
}

/***/ }),

/***/ "./components/layout.module.css":
/*!**************************************!*\
  !*** ./components/layout.module.css ***!
  \**************************************/
/***/ (function(module) {

// Exports
module.exports = {
	"container": "layout_container__2t4v2",
	"header": "layout_header__2rhWq",
	"backToHome": "layout_backToHome__1vZsp"
};


/***/ }),

/***/ "./styles/utils.module.css":
/*!*********************************!*\
  !*** ./styles/utils.module.css ***!
  \*********************************/
/***/ (function(module) {

// Exports
module.exports = {
	"heading2Xl": "utils_heading2Xl__1I65m",
	"headingXl": "utils_headingXl__1XecN",
	"headingLg": "utils_headingLg__de7p0",
	"headingMd": "utils_headingMd__3de6G",
	"borderCircle": "utils_borderCircle__13qdJ",
	"colorInherit": "utils_colorInherit__3Gudf",
	"padding1px": "utils_padding1px__oCny8",
	"list": "utils_list__S7_pe",
	"listItem": "utils_listItem__2eJpJ",
	"lightText": "utils_lightText__12Ckm"
};


/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL2xpYi9wb3N0cy5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vY29tcG9uZW50cy9sYXlvdXQubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyLy4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9pZ25vcmVkfEQ6XFxVc2Vyc1xcZGFycmVcXERvY3VtZW50c1xcTmV4dEpTXFxuZXh0anMtYmxvZ1xcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIm5hbWUiLCJzaXRlVGl0bGUiLCJMYXlvdXQiLCJjaGlsZHJlbiIsImhvbWUiLCJzdHlsZXMiLCJlbmNvZGVVUkkiLCJ1dGlsU3R5bGVzIiwicG9zdHNEaXJlY3RvcnkiLCJwYXRoIiwicHJvY2VzcyIsImN3ZCIsImdldFNvcnRlZFBvc3RzRGF0YSIsImZpbGVOYW1lcyIsImZzIiwiYWxsUG9zdHNEYXRhIiwibWFwIiwiZmlsZU5hbWUiLCJpZCIsInJlcGxhY2UiLCJmdWxsUGF0aCIsImZpbGVDb250ZW50cyIsIm1hdHRlclJlc3VsdCIsIm1hdHRlciIsImRhdGEiLCJzb3J0IiwiYSIsImIiLCJkYXRlIiwiZ2V0QWxsUG9zdElkcyIsInBhcmFtcyIsImdldFBvc3REYXRhIiwicHJvY2Vzc2VkQ29udGVudCIsInJlbWFyayIsInVzZSIsImh0bWwiLCJjb250ZW50IiwiY29udGVudEh0bWwiLCJ0b1N0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxNQUFNQSxJQUFJLEdBQUcsYUFBYjtBQUNPLE1BQU1DLFNB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QUFFVSxFQUFHLEtBQWhDLENBQWpCO0FBQ0EsUUFBTUcsWUFBWSxHQUFHUCxzREFBQSxDQUFnQk0sUUFBaEIsRUFBMEIsTUFBMUIsQ0FBckIsQ0FGa0MsQ0FJbEM7O0FBQ0EsUUFBTUUsWUFBWSxHQUFHQyxrREFBTSxDQUFDRixZQUFELENBQTNCO0FBRUEsUUFBTVcsZ0JBQWdCLEdBQUcsTUFBTUMsNkNBQU0sR0FDaENDLEdBRDBCLENBQ3RCQyxvREFEc0IsRUFFMUJ6QixPQUYwQixDQUVsQlksWUFBWSxDQUFDYyxPQUZLLENBQS9CO0FBSUEsUUFBTUMsV0FBVyxHQUFHTCxnQkFBZ0IsQ0FBQ00sUUFBakIsRUFBcEIsQ0FYa0MsQ0FhbEM7O0FBQ0E7QUFDSXBCLE1BREo7QUFFSW1CO0FBRkosS0FHT2YsWUFBWSxDQUFDRSxJQUhwQjtBQUtILEM7Ozs7Ozs7Ozs7QUNqRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1pBLGUiLCJmaWxlIjoiY29tcG9uZW50c19sYXlvdXRfanMtbGliX3Bvc3RzX2pzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2xheW91dC5tb2R1bGUuY3NzJ1xyXG5pbXBvcnQgdXRpbFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvdXRpbHMubW9kdWxlLmNzcydcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuY29uc3QgbmFtZSA9ICdEYXJyZW4gVGVibydcclxuZXhwb3J0IGNvbnN0IHNpdGVUaXRsZSA9ICdOZXh0LmpzIFNhbXBsZSBXZWJzaXRlJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4sIGhvbWUgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cclxuICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgIGNvbnRlbnQ9XCJMZWFybiBob3cgdG8gYnVpbGQgYSBwZXJzb25hbCB3ZWJzaXRlIHVzaW5nIE5leHQuanNcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPG1ldGFcclxuICAgICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vb2ctaW1hZ2UudmVyY2VsLmFwcC8ke2VuY29kZVVSSShcclxuICAgICAgICAgICAgc2l0ZVRpdGxlXHJcbiAgICAgICAgICApfS5wbmc/dGhlbWU9bGlnaHQmbWQ9MCZmb250U2l6ZT03NXB4JmltYWdlcz1odHRwcyUzQSUyRiUyRmFzc2V0cy52ZXJjZWwuY29tJTJGaW1hZ2UlMkZ1cGxvYWQlMkZmcm9udCUyRmFzc2V0cyUyRmRlc2lnbiUyRm5leHRqcy1ibGFjay1sb2dvLnN2Z2B9XHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwib2c6dGl0bGVcIiBjb250ZW50PXtzaXRlVGl0bGV9IC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y2FyZFwiIGNvbnRlbnQ9XCJzdW1tYXJ5X2xhcmdlX2ltYWdlXCIgLz5cclxuICAgICAgPC9IZWFkPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAge2hvbWUgPyAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBwcmlvcml0eVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5ib3JkZXJDaXJjbGV9XHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxNDR9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezE0NH1cclxuICAgICAgICAgICAgICBhbHQ9e25hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZzJYbH0+e25hbWV9PC9oMT5cclxuICAgICAgICAgIDwvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvcHJvZmlsZS5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3V0aWxTdHlsZXMuYm9yZGVyQ2lyY2xlfVxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9ezEwOH1cclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezEwOH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5oZWFkaW5nTGd9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e3V0aWxTdHlsZXMuY29sb3JJbmhlcml0fT57bmFtZX08L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxtYWluPntjaGlsZHJlbn08L21haW4+XHJcbiAgICAgIHshaG9tZSAmJiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5iYWNrVG9Ib21lfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIDxhPuKGkCBCYWNrIHRvIGhvbWU8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn0iLCJpbXBvcnQgZnMgZnJvbSAnZnMnXHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnXHJcbmltcG9ydCBtYXR0ZXIgZnJvbSAnZ3JheS1tYXR0ZXInXHJcblxyXG5pbXBvcnQgcmVtYXJrIGZyb20gJ3JlbWFyaydcclxuaW1wb3J0IGh0bWwgZnJvbSAncmVtYXJrLWh0bWwnXHJcblxyXG5jb25zdCBwb3N0c0RpcmVjdG9yeSA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAncG9zdHMnKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNvcnRlZFBvc3RzRGF0YSgpIHtcclxuICAgIGNvbnN0IGZpbGVOYW1lcyA9IGZzLnJlYWRkaXJTeW5jKHBvc3RzRGlyZWN0b3J5KVxyXG4gICAgY29uc3QgYWxsUG9zdHNEYXRhID0gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiB7XHJcbiAgICAgICAgY29uc3QgaWQgPSBmaWxlTmFtZS5yZXBsYWNlKC9cXC5tZCQvLCAnJylcclxuXHJcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4ocG9zdHNEaXJlY3RvcnksIGZpbGVOYW1lKVxyXG4gICAgICAgIGNvbnN0IGZpbGVDb250ZW50cyA9IGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ3V0ZjgnKVxyXG5cclxuICAgICAgICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgLi4ubWF0dGVyUmVzdWx0LmRhdGFcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiBhbGxQb3N0c0RhdGEuc29ydCgoYSwgYikgPT4ge1xyXG4gICAgICAgIGlmKGEuZGF0ZSA8IGIuZGF0ZSl7XHJcbiAgICAgICAgICAgIHJldHVybiAxXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbFBvc3RJZHMoKSB7XHJcbiAgICBjb25zdCBmaWxlTmFtZXMgPSBmcy5yZWFkZGlyU3luYyhwb3N0c0RpcmVjdG9yeSlcclxuXHJcbiAgICByZXR1cm4gZmlsZU5hbWVzLm1hcChmaWxlTmFtZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdERhdGEoaWQpIHtcclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKHBvc3RzRGlyZWN0b3J5LCBgJHtpZH0ubWRgKVxyXG4gICAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCAndXRmOCcpXHJcblxyXG4gICAgLy8gVXNlIGdyYXktbWF0dGVyIHRvIHBhcnNlIHRoZSBwb3N0IG1ldGFkYXRhIHNlY3Rpb25cclxuICAgIGNvbnN0IG1hdHRlclJlc3VsdCA9IG1hdHRlcihmaWxlQ29udGVudHMpXHJcblxyXG4gICAgY29uc3QgcHJvY2Vzc2VkQ29udGVudCA9IGF3YWl0IHJlbWFyaygpXHJcbiAgICAgICAgLnVzZShodG1sKVxyXG4gICAgICAgIC5wcm9jZXNzKG1hdHRlclJlc3VsdC5jb250ZW50KVxyXG4gICAgXHJcbiAgICBjb25zdCBjb250ZW50SHRtbCA9IHByb2Nlc3NlZENvbnRlbnQudG9TdHJpbmcoKVxyXG5cclxuICAgIC8vIENvbWJpbmUgdGhlIGRhdGEgd2l0aCB0aGUgaWRcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgY29udGVudEh0bWwsXHJcbiAgICAgICAgLi4ubWF0dGVyUmVzdWx0LmRhdGFcclxuICAgIH1cclxufSIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lclwiOiBcImxheW91dF9jb250YWluZXJfXzJ0NHYyXCIsXG5cdFwiaGVhZGVyXCI6IFwibGF5b3V0X2hlYWRlcl9fMnJoV3FcIixcblx0XCJiYWNrVG9Ib21lXCI6IFwibGF5b3V0X2JhY2tUb0hvbWVfXzF2WnNwXCJcbn07XG4iLCIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJoZWFkaW5nMlhsXCI6IFwidXRpbHNfaGVhZGluZzJYbF9fMUk2NW1cIixcblx0XCJoZWFkaW5nWGxcIjogXCJ1dGlsc19oZWFkaW5nWGxfXzFYZWNOXCIsXG5cdFwiaGVhZGluZ0xnXCI6IFwidXRpbHNfaGVhZGluZ0xnX19kZTdwMFwiLFxuXHRcImhlYWRpbmdNZFwiOiBcInV0aWxzX2hlYWRpbmdNZF9fM2RlNkdcIixcblx0XCJib3JkZXJDaXJjbGVcIjogXCJ1dGlsc19ib3JkZXJDaXJjbGVfXzEzcWRKXCIsXG5cdFwiY29sb3JJbmhlcml0XCI6IFwidXRpbHNfY29sb3JJbmhlcml0X18zR3VkZlwiLFxuXHRcInBhZGRpbmcxcHhcIjogXCJ1dGlsc19wYWRkaW5nMXB4X19vQ255OFwiLFxuXHRcImxpc3RcIjogXCJ1dGlsc19saXN0X19TN19wZVwiLFxuXHRcImxpc3RJdGVtXCI6IFwidXRpbHNfbGlzdEl0ZW1fXzJlSnBKXCIsXG5cdFwibGlnaHRUZXh0XCI6IFwidXRpbHNfbGlnaHRUZXh0X18xMkNrbVwiXG59O1xuIiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==