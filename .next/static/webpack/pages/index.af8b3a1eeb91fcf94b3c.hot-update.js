webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_sheeyaofoong_Development_FIT3077_Assignment_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_sheeyaofoong_Development_FIT3077_Assignment_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_sheeyaofoong_Development_FIT3077_Assignment_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Users_sheeyaofoong_Development_FIT3077_Assignment_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _layouts_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/Layout */ \"./layouts/Layout.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\nvar _jsxFileName = \"/Users/sheeyaofoong/Development/FIT3077_Assignment_2/pages/index.tsx\",\n    _s = $RefreshSig$();\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      message = _useState[0],\n      setMessage = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      auth = _useState2[0],\n      setAuth = _useState2[1];\n\n  var css = \"\\n    #index-btn {\\n       margin-bottom: 20px;\\n    }\\n\";\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    Object(_Users_sheeyaofoong_Development_FIT3077_Assignment_2_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__[\"default\"])( /*#__PURE__*/_Users_sheeyaofoong_Development_FIT3077_Assignment_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {\n      var token;\n      return _Users_sheeyaofoong_Development_FIT3077_Assignment_2_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              try {\n                token = localStorage.getItem(\"token\");\n\n                if (token && token !== undefined) {\n                  //   setMessage(`Logged in successfully`);\n                  setAuth(true);\n                } // const response = await fetch(\"http://localhost:8000/api/user\", {\n                //   credentials: \"include\",\n                // });\n                // const content = await response.json();\n                // setMessage(`Hi ${content.name}`);\n                // setAuth(true);\n\n              } catch (e) {\n                console.log(e);\n              }\n\n            case 1:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }))();\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_layouts_Layout__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    auth: auth,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"style\", {\n      children: css\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"w-100 btn btn-lg btn-primary\",\n      type: \"submit\",\n      id: \"index-btn\",\n      children: \"Search Testing Sites\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: \"w-100 btn btn-lg btn-primary\",\n      type: \"submit\",\n      id: \"index-btn\",\n      children: \"OnSite Testing\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"oXPqyE3QzN5d9/o0hQ843XMDDZU=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXgudHN4P2RiNzYiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJhdXRoIiwic2V0QXV0aCIsImNzcyIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVuZGVmaW5lZCIsImUiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0NDLHNEQUFRLENBQUMsRUFBRCxDQURUO0FBQUEsTUFDdEJDLE9BRHNCO0FBQUEsTUFDYkMsVUFEYTs7QUFBQSxtQkFFTEYsc0RBQVEsQ0FBQyxLQUFELENBRkg7QUFBQSxNQUV0QkcsSUFGc0I7QUFBQSxNQUVoQkMsT0FGZ0I7O0FBRzdCLE1BQU1DLEdBQUcsNkRBQVQ7QUFNQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsdVRBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0Msa0JBQUk7QUFDSUMscUJBREosR0FDWUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBRFo7O0FBR0Ysb0JBQUlGLEtBQUssSUFBSUEsS0FBSyxLQUFLRyxTQUF2QixFQUFrQztBQUNoQztBQUNBTix5QkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNELGlCQU5DLENBT0Y7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNELGVBZEQsQ0FjRSxPQUFPTyxDQUFQLEVBQVU7QUFDVkMsdUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0Q7O0FBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUQ7QUFtQkQsR0FwQlEsQ0FBVDtBQXNCQSxzQkFDRSxxRUFBQyx1REFBRDtBQUFRLFFBQUksRUFBRVIsSUFBZDtBQUFBLDRCQUNFO0FBQUEsZ0JBQVFFO0FBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBR0U7QUFDRSxlQUFTLEVBQUMsOEJBRFo7QUFFRSxVQUFJLEVBQUMsUUFGUDtBQUdFLFFBQUUsRUFBQyxXQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFVRTtBQUNFLGVBQVMsRUFBQyw4QkFEWjtBQUVFLFVBQUksRUFBQyxRQUZQO0FBR0UsUUFBRSxFQUFDLFdBSEw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW9CRDs7R0FuRHVCTixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXgudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vbGF5b3V0cy9MYXlvdXRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthdXRoLCBzZXRBdXRoXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgY3NzID0gYFxuICAgICNpbmRleC1idG4ge1xuICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuYDtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIChhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG5cbiAgICAgICAgaWYgKHRva2VuICYmIHRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvLyAgIHNldE1lc3NhZ2UoYExvZ2dlZCBpbiBzdWNjZXNzZnVsbHlgKTtcbiAgICAgICAgICBzZXRBdXRoKHRydWUpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXJcIiwge1xuICAgICAgICAvLyAgIGNyZWRlbnRpYWxzOiBcImluY2x1ZGVcIixcbiAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgLy8gY29uc3QgY29udGVudCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgLy8gc2V0TWVzc2FnZShgSGkgJHtjb250ZW50Lm5hbWV9YCk7XG4gICAgICAgIC8vIHNldEF1dGgodHJ1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfVxuICAgIH0pKCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPExheW91dCBhdXRoPXthdXRofT5cbiAgICAgIDxzdHlsZT57Y3NzfTwvc3R5bGU+XG4gICAgICB7LyogPHNwYW4+e21lc3NhZ2V9PC9zcGFuPiAqL31cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVwiXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBpZD1cImluZGV4LWJ0blwiXG4gICAgICA+XG4gICAgICAgIFNlYXJjaCBUZXN0aW5nIFNpdGVzXG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwidy0xMDAgYnRuIGJ0bi1sZyBidG4tcHJpbWFyeVwiXG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBpZD1cImluZGV4LWJ0blwiXG4gICAgICA+XG4gICAgICAgIE9uU2l0ZSBUZXN0aW5nXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L0xheW91dD5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ })

})