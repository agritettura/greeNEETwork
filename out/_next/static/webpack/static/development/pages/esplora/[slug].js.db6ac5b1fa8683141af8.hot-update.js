webpackHotUpdate("static/development/pages/esplora/[slug].js",{

/***/ "./src/components/Contacts/Contacts.tsx":
/*!**********************************************!*\
  !*** ./src/components/Contacts/Contacts.tsx ***!
  \**********************************************/
/*! exports provided: Contacts */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Contacts\", function() { return Contacts; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! atomize */ \"./node_modules/atomize/index.js\");\n/* harmony import */ var atomize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(atomize__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/djr3/greeneetwork/src/components/Contacts/Contacts.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction Contacts(_ref) {\n  var _this = this;\n\n  var luogo = _ref.luogo;\n\n  var formatLink = function formatLink(s) {\n    if (s.includes(\"http\")) return s;\n    if (s.includes(\"@\")) return \"mailto:\" + s;\n    return \"tel:+39\" + s;\n  };\n\n  var checkLength = function checkLength(obj, key, IconName) {\n    if (obj[key] && obj[key].length > 7) {\n      var verticalAlign = {\n        display: \"inline-block\",\n        verticalAlign: \"middle\"\n      };\n      return __jsx(\"li\", {\n        className: \"icon-\".concat(IconName.toLowerCase()),\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 17,\n          columnNumber: 9\n        }\n      }, __jsx(\"a\", {\n        href: formatLink(obj[key]),\n        target: \"_blank\",\n        rel: \"noreferrer\",\n        style: {\n          lineHeight: 1.5\n        },\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 18,\n          columnNumber: 11\n        }\n      }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_1__[\"Icon\"], {\n        name: IconName,\n        size: \"20px\",\n        style: verticalAlign,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 13\n        }\n      }), __jsx(\"span\", {\n        style: verticalAlign,\n        __self: _this,\n        __source: {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 13\n        }\n      }, key.replace(\"_\", \" \"))));\n    }\n  };\n\n  var hasContacts = function hasContacts(_ref2) {\n    var email = _ref2.email,\n        telefono = _ref2.telefono,\n        pagina_web = _ref2.pagina_web,\n        pagina_facebook = _ref2.pagina_facebook,\n        pagina_instagram = _ref2.pagina_instagram;\n    return new Boolean(email || telefono || pagina_web || pagina_facebook || pagina_instagram);\n  };\n\n  return __jsx(atomize__WEBPACK_IMPORTED_MODULE_1__[\"Div\"], {\n    tag: \"address\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 45,\n      columnNumber: 5\n    }\n  }, __jsx(atomize__WEBPACK_IMPORTED_MODULE_1__[\"Div\"], {\n    tag: \"ul\",\n    d: \"flex\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 46,\n      columnNumber: 7\n    }\n  }, checkLength(luogo, \"email\", \"Email\"), checkLength(luogo, \"telefono\", \"Info\"), checkLength(luogo, \"pagina_web\", \"Link\"), checkLength(luogo, \"pagina_facebook\", \"Facebook\"), checkLength(luogo, \"pagina_instagram\", \"Instagram\")));\n}\n_c = Contacts;\n\nvar _c;\n\n$RefreshReg$(_c, \"Contacts\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9Db250YWN0cy9Db250YWN0cy50c3g/NWNkNSJdLCJuYW1lcyI6WyJDb250YWN0cyIsImx1b2dvIiwiZm9ybWF0TGluayIsInMiLCJpbmNsdWRlcyIsImNoZWNrTGVuZ3RoIiwib2JqIiwia2V5IiwiSWNvbk5hbWUiLCJsZW5ndGgiLCJ2ZXJ0aWNhbEFsaWduIiwiZGlzcGxheSIsInRvTG93ZXJDYXNlIiwibGluZUhlaWdodCIsInJlcGxhY2UiLCJoYXNDb250YWN0cyIsImVtYWlsIiwidGVsZWZvbm8iLCJwYWdpbmFfd2ViIiwicGFnaW5hX2ZhY2Vib29rIiwicGFnaW5hX2luc3RhZ3JhbSIsIkJvb2xlYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRU8sU0FBU0EsUUFBVCxPQUE2QjtBQUFBOztBQUFBLE1BQVRDLEtBQVMsUUFBVEEsS0FBUzs7QUFDbEMsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsQ0FBQ0MsQ0FBRCxFQUFlO0FBQ2hDLFFBQUlBLENBQUMsQ0FBQ0MsUUFBRixDQUFXLE1BQVgsQ0FBSixFQUF3QixPQUFPRCxDQUFQO0FBQ3hCLFFBQUlBLENBQUMsQ0FBQ0MsUUFBRixDQUFXLEdBQVgsQ0FBSixFQUFxQixPQUFPLFlBQVlELENBQW5CO0FBQ3JCLFdBQU8sWUFBWUEsQ0FBbkI7QUFDRCxHQUpEOztBQU1BLE1BQU1FLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLEdBQUQsRUFBTUMsR0FBTixFQUFXQyxRQUFYLEVBQXdCO0FBQzFDLFFBQUlGLEdBQUcsQ0FBQ0MsR0FBRCxDQUFILElBQVlELEdBQUcsQ0FBQ0MsR0FBRCxDQUFILENBQVNFLE1BQVQsR0FBa0IsQ0FBbEMsRUFBcUM7QUFDbkMsVUFBTUMsYUFBYSxHQUFHO0FBQ3BCQyxlQUFPLEVBQUUsY0FEVztBQUVwQkQscUJBQWEsRUFBRTtBQUZLLE9BQXRCO0FBSUEsYUFDRTtBQUFJLGlCQUFTLGlCQUFVRixRQUFRLENBQUNJLFdBQVQsRUFBVixDQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDRTtBQUNFLFlBQUksRUFBRVYsVUFBVSxDQUFDSSxHQUFHLENBQUNDLEdBQUQsQ0FBSixDQURsQjtBQUVFLGNBQU0sRUFBQyxRQUZUO0FBR0UsV0FBRyxFQUFDLFlBSE47QUFJRSxhQUFLLEVBQUU7QUFBRU0sb0JBQVUsRUFBRTtBQUFkLFNBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQU1FLE1BQUMsNENBQUQ7QUFBTSxZQUFJLEVBQUVMLFFBQVo7QUFBc0IsWUFBSSxFQUFDLE1BQTNCO0FBQWtDLGFBQUssRUFBRUUsYUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQU5GLEVBT0U7QUFBTSxhQUFLLEVBQUVBLGFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUE2QkgsR0FBRyxDQUFDTyxPQUFKLENBQVksR0FBWixFQUFpQixHQUFqQixDQUE3QixDQVBGLENBREYsQ0FERjtBQWFEO0FBQ0YsR0FwQkQ7O0FBc0JBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLFFBTWQ7QUFBQSxRQUxKQyxLQUtJLFNBTEpBLEtBS0k7QUFBQSxRQUpKQyxRQUlJLFNBSkpBLFFBSUk7QUFBQSxRQUhKQyxVQUdJLFNBSEpBLFVBR0k7QUFBQSxRQUZKQyxlQUVJLFNBRkpBLGVBRUk7QUFBQSxRQURKQyxnQkFDSSxTQURKQSxnQkFDSTtBQUNKLFdBQU8sSUFBSUMsT0FBSixDQUNMTCxLQUFLLElBQUlDLFFBQVQsSUFBcUJDLFVBQXJCLElBQW1DQyxlQUFuQyxJQUFzREMsZ0JBRGpELENBQVA7QUFHRCxHQVZEOztBQVlBLFNBQ0UsTUFBQywyQ0FBRDtBQUFLLE9BQUcsRUFBQyxTQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLDJDQUFEO0FBQUssT0FBRyxFQUFDLElBQVQ7QUFBYyxLQUFDLEVBQUMsTUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHZixXQUFXLENBQUNKLEtBQUQsRUFBUSxPQUFSLEVBQWlCLE9BQWpCLENBRGQsRUFFR0ksV0FBVyxDQUFDSixLQUFELEVBQVEsVUFBUixFQUFvQixNQUFwQixDQUZkLEVBR0dJLFdBQVcsQ0FBQ0osS0FBRCxFQUFRLFlBQVIsRUFBc0IsTUFBdEIsQ0FIZCxFQUlHSSxXQUFXLENBQUNKLEtBQUQsRUFBUSxpQkFBUixFQUEyQixVQUEzQixDQUpkLEVBS0dJLFdBQVcsQ0FBQ0osS0FBRCxFQUFRLGtCQUFSLEVBQTRCLFdBQTVCLENBTGQsQ0FERixDQURGO0FBV0Q7S0FwRGVELFEiLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Db250YWN0cy9Db250YWN0cy50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXYsIEljb24gfSBmcm9tIFwiYXRvbWl6ZVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gQ29udGFjdHMoeyBsdW9nbyB9KSB7XG4gIGNvbnN0IGZvcm1hdExpbmsgPSAoczogc3RyaW5nKSA9PiB7XG4gICAgaWYgKHMuaW5jbHVkZXMoXCJodHRwXCIpKSByZXR1cm4gcztcbiAgICBpZiAocy5pbmNsdWRlcyhcIkBcIikpIHJldHVybiBcIm1haWx0bzpcIiArIHM7XG4gICAgcmV0dXJuIFwidGVsOiszOVwiICsgcztcbiAgfTtcblxuICBjb25zdCBjaGVja0xlbmd0aCA9IChvYmosIGtleSwgSWNvbk5hbWUpID0+IHtcbiAgICBpZiAob2JqW2tleV0gJiYgb2JqW2tleV0ubGVuZ3RoID4gNykge1xuICAgICAgY29uc3QgdmVydGljYWxBbGlnbiA9IHtcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgdmVydGljYWxBbGlnbjogXCJtaWRkbGVcIixcbiAgICAgIH07XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgaWNvbi0ke0ljb25OYW1lLnRvTG93ZXJDYXNlKCl9YH0+XG4gICAgICAgICAgPGFcbiAgICAgICAgICAgIGhyZWY9e2Zvcm1hdExpbmsob2JqW2tleV0pfVxuICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgIHJlbD1cIm5vcmVmZXJyZXJcIlxuICAgICAgICAgICAgc3R5bGU9e3sgbGluZUhlaWdodDogMS41IH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gbmFtZT17SWNvbk5hbWV9IHNpemU9XCIyMHB4XCIgc3R5bGU9e3ZlcnRpY2FsQWxpZ259IC8+XG4gICAgICAgICAgICA8c3BhbiBzdHlsZT17dmVydGljYWxBbGlnbn0+e2tleS5yZXBsYWNlKFwiX1wiLCBcIiBcIil9PC9zcGFuPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhc0NvbnRhY3RzID0gKHtcbiAgICBlbWFpbCxcbiAgICB0ZWxlZm9ubyxcbiAgICBwYWdpbmFfd2ViLFxuICAgIHBhZ2luYV9mYWNlYm9vayxcbiAgICBwYWdpbmFfaW5zdGFncmFtLFxuICB9KSA9PiB7XG4gICAgcmV0dXJuIG5ldyBCb29sZWFuKFxuICAgICAgZW1haWwgfHwgdGVsZWZvbm8gfHwgcGFnaW5hX3dlYiB8fCBwYWdpbmFfZmFjZWJvb2sgfHwgcGFnaW5hX2luc3RhZ3JhbVxuICAgICk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8RGl2IHRhZz1cImFkZHJlc3NcIj5cbiAgICAgIDxEaXYgdGFnPVwidWxcIiBkPVwiZmxleFwiPlxuICAgICAgICB7Y2hlY2tMZW5ndGgobHVvZ28sIFwiZW1haWxcIiwgXCJFbWFpbFwiKX1cbiAgICAgICAge2NoZWNrTGVuZ3RoKGx1b2dvLCBcInRlbGVmb25vXCIsIFwiSW5mb1wiKX1cbiAgICAgICAge2NoZWNrTGVuZ3RoKGx1b2dvLCBcInBhZ2luYV93ZWJcIiwgXCJMaW5rXCIpfVxuICAgICAgICB7Y2hlY2tMZW5ndGgobHVvZ28sIFwicGFnaW5hX2ZhY2Vib29rXCIsIFwiRmFjZWJvb2tcIil9XG4gICAgICAgIHtjaGVja0xlbmd0aChsdW9nbywgXCJwYWdpbmFfaW5zdGFncmFtXCIsIFwiSW5zdGFncmFtXCIpfVxuICAgICAgPC9EaXY+XG4gICAgPC9EaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Contacts/Contacts.tsx\n");

/***/ })

})