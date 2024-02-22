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

/***/ "(app-pages-browser)/./app/components/BookList.jsx":
/*!*************************************!*\
  !*** ./app/components/BookList.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst supabase = __webpack_require__(/*! ../../lib/supabase */ \"(app-pages-browser)/./lib/supabase.js\");\nconst BookList = ()=>{\n    _s();\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchBooks();\n    }, []);\n    const fetchBooks = async ()=>{\n        try {\n            const { data, error } = await supabase.from(\"books\").select(\"*\");\n            if (error) {\n                throw error;\n            }\n            setBooks(data);\n        } catch (error) {\n            console.error(\"Error fetching books:\", error.message);\n        }\n    };\n    const handleEdit = (id)=>{\n        router.push(\"/bookedit/\".concat(id));\n    };\n    // const handleEdit = async (id) => {\n    //   // Implement edit functionality here\n    //   console.log('Editing book with id:', id);\n    // };\n    const handleDelete = async (id)=>{\n        try {\n            const { error } = await supabase.from(\"books\").delete().eq(\"id\", id);\n            if (error) {\n                throw error;\n            }\n            console.log(\"Book deleted successfully\");\n            // After deleting, fetch updated list of books\n            fetchBooks();\n        } catch (error) {\n            console.error(\"Error deleting book:\", error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"book-list\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Submitted Books\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                lineNumber: 50,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            className: \"bg-black\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    className: \"bg-white\",\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Author\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Publish Date\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.author\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.subject\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.publish_date\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleDelete(book.id),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                            lineNumber: 70,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, book.id, true, {\n                                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                lineNumber: 63,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BookList, \"ww1JAI05mMsgubm5EIyBKqdj5S0=\");\n_c = BookList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookList); // // components/BookList.js\n // 'use client'\n // import { useEffect, useState } from 'react';\n // import { createClient } from '@supabase/supabase-js';\n // import BookEdit from './BookEdit';\n // const supabaseUrl = 'https://bsitlagwqnrznccgjixz.supabase.co';\n // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaXRsYWd3cW5yem5jY2dqaXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0ODQ1NDIsImV4cCI6MjAyNDA2MDU0Mn0.rjai8hkHeneSmKR_6dzlItWFCEahBvcYk2NWSLe-w_k';\n // const supabase = createClient(supabaseUrl, supabaseKey);\n // const BookList = () => {\n //   const [books, setBooks] = useState([]);\n //   const [editBook, setEditBook] = useState(null);\n //   useEffect(() => {\n //     fetchBooks();\n //   }, []);\n //   const fetchBooks = async () => {\n //     try {\n //       const { data, error } = await supabase.from('Books').select('*');\n //       if (error) {\n //         throw error;\n //       }\n //       setBooks(data);\n //     } catch (error) {\n //       console.error('Error fetching books:', error.message);\n //     }\n //   };\n //   const handleEdit = (book) => {\n //     setEditBook(book);\n //   };\n //   const handleSave = async (updatedBook) => {\n //     try {\n //       const { data, error } = await supabase.from('Books').update(updatedBook).eq('id', updatedBook.id);\n //       if (error) {\n //         throw error;\n //       }\n //       console.log('Book updated successfully:', data);\n //       fetchBooks();\n //       setEditBook(null);\n //     } catch (error) {\n //       console.error('Error updating book:', error.message);\n //     }\n //   };\n //   const handleCancel = () => {\n //     setEditBook(null);\n //   };\n //   const handleDelete = async (id) => {\n //     try {\n //       const { error } = await supabase.from('Books').delete().eq('id', id);\n //       if (error) {\n //         throw error;\n //       }\n //       console.log('Book deleted successfully');\n //       fetchBooks();\n //     } catch (error) {\n //       console.error('Error deleting book:', error.message);\n //     }\n //   };\n //   return (\n //     <div className='book-list'>\n //       <h2>Submitted Books</h2>\n //       <table>\n //         <thead>\n //           <tr>\n //             <th>Title</th>\n //             <th>Author</th>\n //             <th>Subject</th>\n //             <th>Publish Date</th>\n //             <th>Actions</th>\n //           </tr>\n //         </thead>\n //         <tbody>\n //           {books.map((book) => (\n //             <tr key={book.id}>\n //               <td>{book.title}</td>\n //               <td>{book.author}</td>\n //               <td>{book.subject}</td>\n //               <td>{book.publish_date}</td>\n //               <td>\n //                 <button onClick={() => handleEdit(book)}>Edit</button>\n //                 <button onClick={() => handleDelete(book.id)}>Delete</button>\n //               </td>\n //             </tr>\n //           ))}\n //         </tbody>\n //       </table>\n //       {editBook && (\n //         <BookEdit\n //           book={editBook}\n //           onSave={handleSave}\n //           onCancel={handleCancel}\n //         />\n //       )}\n //     </div>\n //   );\n // };\n // export default BookList;\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Jvb2tMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNEM7QUFHNUMsTUFBTUUsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsV0FBVzs7SUFDZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDUk87SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTVAsU0FBU1EsSUFBSSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztZQUM1RCxJQUFJRixPQUFPO2dCQUNULE1BQU1BO1lBQ1I7WUFDQUgsU0FBU0U7UUFDWCxFQUFFLE9BQU9DLE9BQU87WUFDZEcsUUFBUUgsS0FBSyxDQUFDLHlCQUF5QkEsTUFBTUksT0FBTztRQUN0RDtJQUNGO0lBQ0EsTUFBTUMsYUFBYSxDQUFDQztRQUNsQkMsT0FBT0MsSUFBSSxDQUFDLGFBQWdCLE9BQUhGO0lBQzNCO0lBRUEscUNBQXFDO0lBQ3JDLHlDQUF5QztJQUN6Qyw4Q0FBOEM7SUFDOUMsS0FBSztJQUVMLE1BQU1HLGVBQWUsT0FBT0g7UUFDMUIsSUFBSTtZQUNGLE1BQU0sRUFBRU4sS0FBSyxFQUFFLEdBQUcsTUFBTVAsU0FBU1EsSUFBSSxDQUFDLFNBQVNTLE1BQU0sR0FBR0MsRUFBRSxDQUFDLE1BQU1MO1lBQ2pFLElBQUlOLE9BQU87Z0JBQ1QsTUFBTUE7WUFDUjtZQUNBRyxRQUFRUyxHQUFHLENBQUM7WUFDWiw4Q0FBOEM7WUFDOUNkO1FBQ0YsRUFBRSxPQUFPRSxPQUFPO1lBQ2RHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JBLE1BQU1JLE9BQU87UUFDckQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7O2tDQUNDLDhEQUFDQztrQ0FDQyw0RUFBQ0M7NEJBQUdKLFdBQVU7OzhDQUNaLDhEQUFDSztvQ0FBR0wsV0FBVTs4Q0FBVzs7Ozs7OzhDQUN6Qiw4REFBQ0s7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs4Q0FDSiw4REFBQ0E7OENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDQztrQ0FDRXhCLE1BQU15QixHQUFHLENBQUMsQ0FBQ0MscUJBQ1YsOERBQUNKOztrREFDQyw4REFBQ0s7a0RBQUlELEtBQUtFLEtBQUs7Ozs7OztrREFDZiw4REFBQ0Q7a0RBQUlELEtBQUtHLE1BQU07Ozs7OztrREFDaEIsOERBQUNGO2tEQUFJRCxLQUFLSSxPQUFPOzs7Ozs7a0RBQ2pCLDhEQUFDSDtrREFBSUQsS0FBS0ssWUFBWTs7Ozs7O2tEQUN0Qiw4REFBQ0o7a0RBRUMsNEVBQUNLOzRDQUFPQyxTQUFTLElBQU1wQixhQUFhYSxLQUFLaEIsRUFBRTtzREFBRzs7Ozs7Ozs7Ozs7OytCQVB6Q2dCLEtBQUtoQixFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZTVCO0dBdkVNWDtLQUFBQTtBQXlFTiwrREFBZUEsUUFBUUEsRUFBQyxDQUl4Qiw0QkFBNEI7Q0FDNUIsZUFBZTtDQUNmLCtDQUErQztDQUMvQyx3REFBd0Q7Q0FDeEQscUNBQXFDO0NBRXJDLGtFQUFrRTtDQUNsRSwwT0FBME87Q0FDMU8sMkRBQTJEO0NBRTNELDJCQUEyQjtDQUMzQiw0Q0FBNEM7Q0FDNUMsb0RBQW9EO0NBRXBELHNCQUFzQjtDQUN0QixvQkFBb0I7Q0FDcEIsWUFBWTtDQUVaLHFDQUFxQztDQUNyQyxZQUFZO0NBQ1osMEVBQTBFO0NBQzFFLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsVUFBVTtDQUNWLHdCQUF3QjtDQUN4Qix3QkFBd0I7Q0FDeEIsK0RBQStEO0NBQy9ELFFBQVE7Q0FDUixPQUFPO0NBRVAsbUNBQW1DO0NBQ25DLHlCQUF5QjtDQUN6QixPQUFPO0NBRVAsZ0RBQWdEO0NBQ2hELFlBQVk7Q0FDWiwyR0FBMkc7Q0FDM0cscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixVQUFVO0NBQ1YseURBQXlEO0NBQ3pELHNCQUFzQjtDQUN0QiwyQkFBMkI7Q0FDM0Isd0JBQXdCO0NBQ3hCLDhEQUE4RDtDQUM5RCxRQUFRO0NBQ1IsT0FBTztDQUVQLGlDQUFpQztDQUNqQyx5QkFBeUI7Q0FDekIsT0FBTztDQUVQLHlDQUF5QztDQUN6QyxZQUFZO0NBQ1osOEVBQThFO0NBQzlFLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsVUFBVTtDQUNWLGtEQUFrRDtDQUNsRCxzQkFBc0I7Q0FDdEIsd0JBQXdCO0NBQ3hCLDhEQUE4RDtDQUM5RCxRQUFRO0NBQ1IsT0FBTztDQUVQLGFBQWE7Q0FDYixrQ0FBa0M7Q0FDbEMsaUNBQWlDO0NBQ2pDLGdCQUFnQjtDQUNoQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLDZCQUE2QjtDQUM3Qiw4QkFBOEI7Q0FDOUIsK0JBQStCO0NBQy9CLG9DQUFvQztDQUNwQywrQkFBK0I7Q0FDL0Isa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsbUNBQW1DO0NBQ25DLGlDQUFpQztDQUNqQyxzQ0FBc0M7Q0FDdEMsdUNBQXVDO0NBQ3ZDLHdDQUF3QztDQUN4Qyw2Q0FBNkM7Q0FDN0MscUJBQXFCO0NBQ3JCLHlFQUF5RTtDQUN6RSxnRkFBZ0Y7Q0FDaEYsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGlCQUFpQjtDQUNqQix1QkFBdUI7Q0FDdkIsb0JBQW9CO0NBQ3BCLDRCQUE0QjtDQUM1QixnQ0FBZ0M7Q0FDaEMsb0NBQW9DO0NBQ3BDLGFBQWE7Q0FDYixXQUFXO0NBQ1gsYUFBYTtDQUNiLE9BQU87Q0FDUCxLQUFLO0NBRUwsMkJBQTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL0Jvb2tMaXN0LmpzeD9mZDQwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuXHJcbmNvbnN0IHN1cGFiYXNlID0gcmVxdWlyZSgnLi4vLi4vbGliL3N1cGFiYXNlJylcclxuXHJcbmNvbnN0IEJvb2tMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtib29rcywgc2V0Qm9va3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hCb29rcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hCb29rcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2Jvb2tzJykuc2VsZWN0KCcqJyk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEJvb2tzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va3M6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGlkKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgL2Jvb2tlZGl0LyR7aWR9YCk7XHJcbiAgfTtcclxuICBcclxuICAvLyBjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgLy8gICAvLyBJbXBsZW1lbnQgZWRpdCBmdW5jdGlvbmFsaXR5IGhlcmVcclxuICAvLyAgIGNvbnNvbGUubG9nKCdFZGl0aW5nIGJvb2sgd2l0aCBpZDonLCBpZCk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdib29rcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGlkKTtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ0Jvb2sgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgLy8gQWZ0ZXIgZGVsZXRpbmcsIGZldGNoIHVwZGF0ZWQgbGlzdCBvZiBib29rc1xyXG4gICAgICBmZXRjaEJvb2tzKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBib29rOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1saXN0Jz5cclxuICAgICAgPGgyPlN1Ym1pdHRlZCBCb29rczwvaDI+XHJcbiAgICAgIDx0YWJsZT5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiYmctYmxhY2tcIj5cclxuICAgICAgICAgICAgPHRoIGNsYXNzTmFtZT1cImJnLXdoaXRlXCI+VGl0bGU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+QXV0aG9yPC90aD5cclxuICAgICAgICAgICAgPHRoPlN1YmplY3Q8L3RoPlxyXG4gICAgICAgICAgICA8dGg+UHVibGlzaCBEYXRlPC90aD5cclxuICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgIHtib29rcy5tYXAoKGJvb2spID0+IChcclxuICAgICAgICAgICAgPHRyIGtleT17Ym9vay5pZH0+XHJcbiAgICAgICAgICAgICAgPHRkPntib29rLnRpdGxlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntib29rLmF1dGhvcn08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Ym9vay5zdWJqZWN0fTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntib29rLnB1Ymxpc2hfZGF0ZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD5cclxuICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUVkaXQoYm9vay5pZCl9PkVkaXQ8L2J1dHRvbj4gKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShib29rLmlkKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3Q7XHJcblxyXG5cclxuXHJcbi8vIC8vIGNvbXBvbmVudHMvQm9va0xpc3QuanNcclxuLy8gJ3VzZSBjbGllbnQnXHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbi8vIGltcG9ydCB7IGNyZWF0ZUNsaWVudCB9IGZyb20gJ0BzdXBhYmFzZS9zdXBhYmFzZS1qcyc7XHJcbi8vIGltcG9ydCBCb29rRWRpdCBmcm9tICcuL0Jvb2tFZGl0JztcclxuXHJcbi8vIGNvbnN0IHN1cGFiYXNlVXJsID0gJ2h0dHBzOi8vYnNpdGxhZ3dxbnJ6bmNjZ2ppeHouc3VwYWJhc2UuY28nO1xyXG4vLyBjb25zdCBzdXBhYmFzZUtleSA9ICdleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcGMzTWlPaUp6ZFhCaFltRnpaU0lzSW5KbFppSTZJbUp6YVhSc1lXZDNjVzV5ZW01alkyZHFhWGg2SWl3aWNtOXNaU0k2SW1GdWIyNGlMQ0pwWVhRaU9qRTNNRGcwT0RRMU5ESXNJbVY0Y0NJNk1qQXlOREEyTURVME1uMC5yamFpOGhrSGVuZVNtS1JfNmR6bEl0V0ZDRWFoQnZjWWsyTldTTGUtd19rJztcclxuLy8gY29uc3Qgc3VwYWJhc2UgPSBjcmVhdGVDbGllbnQoc3VwYWJhc2VVcmwsIHN1cGFiYXNlS2V5KTtcclxuXHJcbi8vIGNvbnN0IEJvb2tMaXN0ID0gKCkgPT4ge1xyXG4vLyAgIGNvbnN0IFtib29rcywgc2V0Qm9va3NdID0gdXNlU3RhdGUoW10pO1xyXG4vLyAgIGNvbnN0IFtlZGl0Qm9vaywgc2V0RWRpdEJvb2tdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4vLyAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbi8vICAgICBmZXRjaEJvb2tzKCk7XHJcbi8vICAgfSwgW10pO1xyXG5cclxuLy8gICBjb25zdCBmZXRjaEJvb2tzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgY29uc3QgeyBkYXRhLCBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnQm9va3MnKS5zZWxlY3QoJyonKTtcclxuLy8gICAgICAgaWYgKGVycm9yKSB7XHJcbi8vICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgc2V0Qm9va3MoZGF0YSk7XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBib29rczonLCBlcnJvci5tZXNzYWdlKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBoYW5kbGVFZGl0ID0gKGJvb2spID0+IHtcclxuLy8gICAgIHNldEVkaXRCb29rKGJvb2spO1xyXG4vLyAgIH07XHJcblxyXG4vLyAgIGNvbnN0IGhhbmRsZVNhdmUgPSBhc3luYyAodXBkYXRlZEJvb2spID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ0Jvb2tzJykudXBkYXRlKHVwZGF0ZWRCb29rKS5lcSgnaWQnLCB1cGRhdGVkQm9vay5pZCk7XHJcbi8vICAgICAgIGlmIChlcnJvcikge1xyXG4vLyAgICAgICAgIHRocm93IGVycm9yO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIGNvbnNvbGUubG9nKCdCb29rIHVwZGF0ZWQgc3VjY2Vzc2Z1bGx5OicsIGRhdGEpO1xyXG4vLyAgICAgICBmZXRjaEJvb2tzKCk7XHJcbi8vICAgICAgIHNldEVkaXRCb29rKG51bGwpO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgYm9vazonLCBlcnJvci5tZXNzYWdlKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBoYW5kbGVDYW5jZWwgPSAoKSA9PiB7XHJcbi8vICAgICBzZXRFZGl0Qm9vayhudWxsKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBoYW5kbGVEZWxldGUgPSBhc3luYyAoaWQpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ0Jvb2tzJykuZGVsZXRlKCkuZXEoJ2lkJywgaWQpO1xyXG4vLyAgICAgICBpZiAoZXJyb3IpIHtcclxuLy8gICAgICAgICB0aHJvdyBlcnJvcjtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBjb25zb2xlLmxvZygnQm9vayBkZWxldGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4vLyAgICAgICBmZXRjaEJvb2tzKCk7XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBib29rOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4vLyAgICAgfVxyXG4vLyAgIH07XHJcblxyXG4vLyAgIHJldHVybiAoXHJcbi8vICAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1saXN0Jz5cclxuLy8gICAgICAgPGgyPlN1Ym1pdHRlZCBCb29rczwvaDI+XHJcbi8vICAgICAgIDx0YWJsZT5cclxuLy8gICAgICAgICA8dGhlYWQ+XHJcbi8vICAgICAgICAgICA8dHI+XHJcbi8vICAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XHJcbi8vICAgICAgICAgICAgIDx0aD5BdXRob3I8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGg+U3ViamVjdDwvdGg+XHJcbi8vICAgICAgICAgICAgIDx0aD5QdWJsaXNoIERhdGU8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XHJcbi8vICAgICAgICAgICA8L3RyPlxyXG4vLyAgICAgICAgIDwvdGhlYWQ+XHJcbi8vICAgICAgICAgPHRib2R5PlxyXG4vLyAgICAgICAgICAge2Jvb2tzLm1hcCgoYm9vaykgPT4gKFxyXG4vLyAgICAgICAgICAgICA8dHIga2V5PXtib29rLmlkfT5cclxuLy8gICAgICAgICAgICAgICA8dGQ+e2Jvb2sudGl0bGV9PC90ZD5cclxuLy8gICAgICAgICAgICAgICA8dGQ+e2Jvb2suYXV0aG9yfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgPHRkPntib29rLnN1YmplY3R9PC90ZD5cclxuLy8gICAgICAgICAgICAgICA8dGQ+e2Jvb2sucHVibGlzaF9kYXRlfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgPHRkPlxyXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KGJvb2spfT5FZGl0PC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShib29rLmlkKX0+RGVsZXRlPC9idXR0b24+XHJcbi8vICAgICAgICAgICAgICAgPC90ZD5cclxuLy8gICAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICAgICkpfVxyXG4vLyAgICAgICAgIDwvdGJvZHk+XHJcbi8vICAgICAgIDwvdGFibGU+XHJcbi8vICAgICAgIHtlZGl0Qm9vayAmJiAoXHJcbi8vICAgICAgICAgPEJvb2tFZGl0XHJcbi8vICAgICAgICAgICBib29rPXtlZGl0Qm9va31cclxuLy8gICAgICAgICAgIG9uU2F2ZT17aGFuZGxlU2F2ZX1cclxuLy8gICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVDYW5jZWx9XHJcbi8vICAgICAgICAgLz5cclxuLy8gICAgICAgKX1cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgICk7XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCBCb29rTGlzdDtcclxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3VwYWJhc2UiLCJyZXF1aXJlIiwiQm9va0xpc3QiLCJib29rcyIsInNldEJvb2tzIiwiZmV0Y2hCb29rcyIsImRhdGEiLCJlcnJvciIsImZyb20iLCJzZWxlY3QiLCJjb25zb2xlIiwibWVzc2FnZSIsImhhbmRsZUVkaXQiLCJpZCIsInJvdXRlciIsInB1c2giLCJoYW5kbGVEZWxldGUiLCJkZWxldGUiLCJlcSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImgyIiwidGFibGUiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsImJvb2siLCJ0ZCIsInRpdGxlIiwiYXV0aG9yIiwic3ViamVjdCIsInB1Ymxpc2hfZGF0ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/BookList.jsx\n"));

/***/ })

});