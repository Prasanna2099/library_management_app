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

/***/ "(app-pages-browser)/./app/components/BookForm.jsx":
/*!*************************************!*\
  !*** ./app/components/BookForm.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst supaBase = __webpack_require__(/*! ../../lib/supabase */ \"(app-pages-browser)/./lib/supabase.js\");\nconst BookForm = ()=>{\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [author, setAuthor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [subject, setSubject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [publishDate, setPublishDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // You can perform form validation here if needed\n        const { data, error } = await supaBase.from(\"books\").insert([\n            {\n                title,\n                author,\n                subject,\n                publish_date: publishDate\n            }\n        ]);\n        if (error) {\n            console.error(\"Error inserting data:\", error.message);\n        } else {\n            console.log(\"Data inserted successfully:\", data);\n            setTitle(\"\");\n            setAuthor(\"\");\n            setSubject(\"\");\n            setPublishDate(\"\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"form-container m-25\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n            onSubmit: handleSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Title:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: title,\n                            onChange: (e)=>setTitle(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Author:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: author,\n                            onChange: (e)=>setAuthor(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                            lineNumber: 41,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Subject:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            value: subject,\n                            onChange: (e)=>setSubject(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            children: \"Publish Date:\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"date\",\n                            value: publishDate,\n                            onChange: (e)=>setPublishDate(e.target.value)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"submit\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n                    lineNumber: 51,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookForm.jsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BookForm, \"+CP3pXTIBefn8m2rl74ajXkMDko=\");\n_c = BookForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookForm);\nvar _c;\n$RefreshReg$(_c, \"BookForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Jvb2tGb3JtLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDd0M7QUFHeEMsTUFBTUUsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsV0FBVzs7SUFDZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTSxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ1EsU0FBU0MsV0FBVyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFFL0MsTUFBTVksZUFBZSxPQUFPQztRQUMxQkEsRUFBRUMsY0FBYztRQUNoQixpREFBaUQ7UUFDakQsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHLE1BQU1mLFNBQzNCZ0IsSUFBSSxDQUFDLFNBQ0xDLE1BQU0sQ0FBQztZQUFDO2dCQUFFZDtnQkFBT0U7Z0JBQVFFO2dCQUFTVyxjQUFjVDtZQUFZO1NBQUU7UUFFakUsSUFBSU0sT0FBTztZQUNUSSxRQUFRSixLQUFLLENBQUMseUJBQXlCQSxNQUFNSyxPQUFPO1FBQ3RELE9BQU87WUFDTEQsUUFBUUUsR0FBRyxDQUFDLCtCQUErQlA7WUFFM0NWLFNBQVM7WUFDVEUsVUFBVTtZQUNWRSxXQUFXO1lBQ1hFLGVBQWU7UUFDakI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDWTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDQztZQUFLQyxVQUFVZDs7OEJBQ2QsOERBQUNXOztzQ0FDQyw4REFBQ0k7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLE9BQU8xQjs0QkFBTzJCLFVBQVUsQ0FBQ2xCLElBQU1SLFNBQVNRLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFM0UsOERBQUNQOztzQ0FDQyw4REFBQ0k7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLE9BQU94Qjs0QkFBUXlCLFVBQVUsQ0FBQ2xCLElBQU1OLFVBQVVNLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFN0UsOERBQUNQOztzQ0FDQyw4REFBQ0k7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLE9BQU90Qjs0QkFBU3VCLFVBQVUsQ0FBQ2xCLElBQU1KLFdBQVdJLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFL0UsOERBQUNQOztzQ0FDQyw4REFBQ0k7c0NBQU07Ozs7OztzQ0FDUCw4REFBQ0M7NEJBQU1DLE1BQUs7NEJBQU9DLE9BQU9wQjs0QkFBYXFCLFVBQVUsQ0FBQ2xCLElBQU1GLGVBQWVFLEVBQUVtQixNQUFNLENBQUNGLEtBQUs7Ozs7Ozs7Ozs7Ozs4QkFFdkYsOERBQUNHO29CQUFPSixNQUFLOzhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5QjtHQWhETTFCO0tBQUFBO0FBa0ROLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0Jvb2tGb3JtLmpzeD82ZTBiIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuY29uc3Qgc3VwYUJhc2UgPSByZXF1aXJlKCcuLi8uLi9saWIvc3VwYWJhc2UnKTtcclxuXHJcbmNvbnN0IEJvb2tGb3JtID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0aXRsZSwgc2V0VGl0bGVdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFthdXRob3IsIHNldEF1dGhvcl0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3N1YmplY3QsIHNldFN1YmplY3RdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtwdWJsaXNoRGF0ZSwgc2V0UHVibGlzaERhdGVdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gWW91IGNhbiBwZXJmb3JtIGZvcm0gdmFsaWRhdGlvbiBoZXJlIGlmIG5lZWRlZFxyXG4gICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYUJhc2VcclxuICAgICAgLmZyb20oJ2Jvb2tzJylcclxuICAgICAgLmluc2VydChbeyB0aXRsZSwgYXV0aG9yLCBzdWJqZWN0LCBwdWJsaXNoX2RhdGU6IHB1Ymxpc2hEYXRlIH1dKTtcclxuXHJcbiAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW5zZXJ0aW5nIGRhdGE6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmxvZygnRGF0YSBpbnNlcnRlZCBzdWNjZXNzZnVsbHk6JywgZGF0YSk7XHJcbiAgICAgIFxyXG4gICAgICBzZXRUaXRsZSgnJyk7XHJcbiAgICAgIHNldEF1dGhvcignJyk7XHJcbiAgICAgIHNldFN1YmplY3QoJycpO1xyXG4gICAgICBzZXRQdWJsaXNoRGF0ZSgnJyk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmb3JtLWNvbnRhaW5lciBtLTI1Jz5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD5UaXRsZTo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RpdGxlfSBvbkNoYW5nZT17KGUpID0+IHNldFRpdGxlKGUudGFyZ2V0LnZhbHVlKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGxhYmVsPkF1dGhvcjo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e2F1dGhvcn0gb25DaGFuZ2U9eyhlKSA9PiBzZXRBdXRob3IoZS50YXJnZXQudmFsdWUpfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8bGFiZWw+U3ViamVjdDo8L2xhYmVsPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3N1YmplY3R9IG9uQ2hhbmdlPXsoZSkgPT4gc2V0U3ViamVjdChlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbD5QdWJsaXNoIERhdGU6PC9sYWJlbD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIHZhbHVlPXtwdWJsaXNoRGF0ZX0gb25DaGFuZ2U9eyhlKSA9PiBzZXRQdWJsaXNoRGF0ZShlLnRhcmdldC52YWx1ZSl9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCb29rRm9ybTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdXBhQmFzZSIsInJlcXVpcmUiLCJCb29rRm9ybSIsInRpdGxlIiwic2V0VGl0bGUiLCJhdXRob3IiLCJzZXRBdXRob3IiLCJzdWJqZWN0Iiwic2V0U3ViamVjdCIsInB1Ymxpc2hEYXRlIiwic2V0UHVibGlzaERhdGUiLCJoYW5kbGVTdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwiaW5zZXJ0IiwicHVibGlzaF9kYXRlIiwiY29uc29sZSIsIm1lc3NhZ2UiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/BookForm.jsx\n"));

/***/ })

});