"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/BookSearch.jsx":
/*!***************************************!*\
  !*** ./app/components/BookSearch.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nfunction BookSearch() {\n    _s();\n    const [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [searchResults, setSearchResults] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const supaBase = __webpack_require__(/*! ../../lib/supabase */ \"(app-pages-browser)/./lib/supabase.js\");\n    const handleSearch = async ()=>{\n        try {\n            const { data, error } = await supaBase.from(\"books\").select(\"*\").textSearch(\"title\", searchTerm, {\n                type: \"plain\"\n            });\n            if (error) {\n                throw error;\n            }\n            setSearchResults(data);\n        } catch (error) {\n            console.error(\"Error searching for books:\", error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                value: searchTerm,\n                onChange: (e)=>setSearchTerm(e.target.value),\n                placeholder: \"Search for books...\",\n                className: \"seach-box\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookSearch.jsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"submit-button\",\n                onClick: handleSearch,\n                className: \"search-button\",\n                children: \"Search\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookSearch.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"search-list-ul\",\n                children: searchResults.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            book.title,\n                            \" by \",\n                            book.author\n                        ]\n                    }, book.id, true, {\n                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookSearch.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookSearch.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookSearch.jsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(BookSearch, \"brRzk7tj+pGuNPv2srA2r/nQjm0=\");\n_c = BookSearch;\nvar _c;\n$RefreshReg$(_c, \"BookSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Jvb2tTZWFyY2guanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNpQztBQUVsQixTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdILCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ0ksZUFBZUMsaUJBQWlCLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFDckQsTUFBTU0sV0FBV0MsbUJBQU9BLENBQUM7SUFDekIsTUFBTUMsZUFBZTtRQUNuQixJQUFJO1lBQ0YsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1KLFNBQzNCSyxJQUFJLENBQUMsU0FDTEMsTUFBTSxDQUFDLEtBQ1BDLFVBQVUsQ0FBQyxTQUFTWCxZQUFZO2dCQUFFWSxNQUFNO1lBQVE7WUFFbkQsSUFBSUosT0FBTztnQkFDVCxNQUFNQTtZQUNSO1lBRUFMLGlCQUFpQkk7UUFDbkIsRUFBRSxPQUFPQyxPQUFPO1lBQ2RLLFFBQVFMLEtBQUssQ0FBQyw4QkFBOEJBLE1BQU1NLE9BQU87UUFDM0Q7SUFDRjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQ0NMLE1BQUs7Z0JBQ0xNLE9BQU9sQjtnQkFDUG1CLFVBQVUsQ0FBQ0MsSUFBTW5CLGNBQWNtQixFQUFFQyxNQUFNLENBQUNILEtBQUs7Z0JBQzdDSSxhQUFZO2dCQUNaTixXQUFVOzs7Ozs7MEJBRVosOERBQUNPO2dCQUFPUCxXQUFVO2dCQUFnQlEsU0FBU2xCO2dCQUFjVSxXQUFVOzBCQUFnQjs7Ozs7OzBCQUNuRiw4REFBQ1M7Z0JBQUdULFdBQVU7MEJBQ1hkLGNBQWN3QixHQUFHLENBQUMsQ0FBQ0MscUJBQ2xCLDhEQUFDQzs7NEJBQWtCRCxLQUFLRSxLQUFLOzRCQUFDOzRCQUFLRixLQUFLRyxNQUFNOzt1QkFBckNILEtBQUtJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUI7R0FyQ3dCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQm9va1NlYXJjaC5qc3g/NWE3ZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCb29rU2VhcmNoKCkge1xyXG4gIGNvbnN0IFtzZWFyY2hUZXJtLCBzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbc2VhcmNoUmVzdWx0cywgc2V0U2VhcmNoUmVzdWx0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3Qgc3VwYUJhc2UgPSByZXF1aXJlKCcuLi8uLi9saWIvc3VwYWJhc2UnKTtcclxuICBjb25zdCBoYW5kbGVTZWFyY2ggPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhQmFzZVxyXG4gICAgICAgIC5mcm9tKCdib29rcycpXHJcbiAgICAgICAgLnNlbGVjdCgnKicpXHJcbiAgICAgICAgLnRleHRTZWFyY2goJ3RpdGxlJywgc2VhcmNoVGVybSwgeyB0eXBlOiAncGxhaW4nIH0pO1xyXG5cclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNldFNlYXJjaFJlc3VsdHMoZGF0YSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBzZWFyY2hpbmcgZm9yIGJvb2tzOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoLWNvbnRhaW5lclwiPlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgdmFsdWU9e3NlYXJjaFRlcm19XHJcbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hUZXJtKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBmb3IgYm9va3MuLi5cIlxyXG4gICAgICAgIGNsYXNzTmFtZT1cInNlYWNoLWJveFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwic3VibWl0LWJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaH0gY2xhc3NOYW1lPVwic2VhcmNoLWJ1dHRvblwiPlNlYXJjaDwvYnV0dG9uPlxyXG4gICAgICA8dWwgY2xhc3NOYW1lPVwic2VhcmNoLWxpc3QtdWxcIj5cclxuICAgICAgICB7c2VhcmNoUmVzdWx0cy5tYXAoKGJvb2spID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2Jvb2suaWR9Pntib29rLnRpdGxlfSBieSB7Ym9vay5hdXRob3J9PC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwiQm9va1NlYXJjaCIsInNlYXJjaFRlcm0iLCJzZXRTZWFyY2hUZXJtIiwic2VhcmNoUmVzdWx0cyIsInNldFNlYXJjaFJlc3VsdHMiLCJzdXBhQmFzZSIsInJlcXVpcmUiLCJoYW5kbGVTZWFyY2giLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwidGV4dFNlYXJjaCIsInR5cGUiLCJjb25zb2xlIiwibWVzc2FnZSIsImRpdiIsImNsYXNzTmFtZSIsImlucHV0IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsImJvb2siLCJsaSIsInRpdGxlIiwiYXV0aG9yIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/BookSearch.jsx\n"));

/***/ })

});