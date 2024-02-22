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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst supabase = __webpack_require__(/*! ../../lib/supabase */ \"(app-pages-browser)/./lib/supabase.js\");\nconst BookList = ()=>{\n    _s();\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchBooks();\n    }, []);\n    const fetchBooks = async ()=>{\n        try {\n            const { data, error } = await supabase.from(\"books\").select(\"*\");\n            if (error) {\n                throw error;\n            }\n            setBooks(data);\n        } catch (error) {\n            console.error(\"Error fetching books:\", error.message);\n        }\n    };\n    const handleEdit = (id)=>{\n        router.push(\"/bookedit/\".concat(id));\n    };\n    // const handleEdit = async (id) => {\n    //   // Implement edit functionality here\n    //   console.log('Editing book with id:', id);\n    // };\n    const handleDelete = async (id)=>{\n        try {\n            const { error } = await supabase.from(\"books\").delete().eq(\"id\", id);\n            if (error) {\n                throw error;\n            }\n            console.log(\"Book deleted successfully\");\n            // After deleting, fetch updated list of books\n            fetchBooks();\n        } catch (error) {\n            console.error(\"Error deleting book:\", error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"book-list\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Submitted Books\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                className: \"bg-white\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Author\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 57,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Publish Date\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 59,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 65,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.author\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.subject\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.publish_date\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 68,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            onClick: ()=>handleDelete(book.id),\n                                            children: \"Delete\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, book.id, true, {\n                                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                lineNumber: 64,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BookList, \"ww1JAI05mMsgubm5EIyBKqdj5S0=\");\n_c = BookList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookList); // // components/BookList.js\n // 'use client'\n // import { useEffect, useState } from 'react';\n // import { createClient } from '@supabase/supabase-js';\n // import BookEdit from './BookEdit';\n // const supabaseUrl = 'https://bsitlagwqnrznccgjixz.supabase.co';\n // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaXRsYWd3cW5yem5jY2dqaXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0ODQ1NDIsImV4cCI6MjAyNDA2MDU0Mn0.rjai8hkHeneSmKR_6dzlItWFCEahBvcYk2NWSLe-w_k';\n // const supabase = createClient(supabaseUrl, supabaseKey);\n // const BookList = () => {\n //   const [books, setBooks] = useState([]);\n //   const [editBook, setEditBook] = useState(null);\n //   useEffect(() => {\n //     fetchBooks();\n //   }, []);\n //   const fetchBooks = async () => {\n //     try {\n //       const { data, error } = await supabase.from('Books').select('*');\n //       if (error) {\n //         throw error;\n //       }\n //       setBooks(data);\n //     } catch (error) {\n //       console.error('Error fetching books:', error.message);\n //     }\n //   };\n //   const handleEdit = (book) => {\n //     setEditBook(book);\n //   };\n //   const handleSave = async (updatedBook) => {\n //     try {\n //       const { data, error } = await supabase.from('Books').update(updatedBook).eq('id', updatedBook.id);\n //       if (error) {\n //         throw error;\n //       }\n //       console.log('Book updated successfully:', data);\n //       fetchBooks();\n //       setEditBook(null);\n //     } catch (error) {\n //       console.error('Error updating book:', error.message);\n //     }\n //   };\n //   const handleCancel = () => {\n //     setEditBook(null);\n //   };\n //   const handleDelete = async (id) => {\n //     try {\n //       const { error } = await supabase.from('Books').delete().eq('id', id);\n //       if (error) {\n //         throw error;\n //       }\n //       console.log('Book deleted successfully');\n //       fetchBooks();\n //     } catch (error) {\n //       console.error('Error deleting book:', error.message);\n //     }\n //   };\n //   return (\n //     <div className='book-list'>\n //       <h2>Submitted Books</h2>\n //       <table>\n //         <thead>\n //           <tr>\n //             <th>Title</th>\n //             <th>Author</th>\n //             <th>Subject</th>\n //             <th>Publish Date</th>\n //             <th>Actions</th>\n //           </tr>\n //         </thead>\n //         <tbody>\n //           {books.map((book) => (\n //             <tr key={book.id}>\n //               <td>{book.title}</td>\n //               <td>{book.author}</td>\n //               <td>{book.subject}</td>\n //               <td>{book.publish_date}</td>\n //               <td>\n //                 <button onClick={() => handleEdit(book)}>Edit</button>\n //                 <button onClick={() => handleDelete(book.id)}>Delete</button>\n //               </td>\n //             </tr>\n //           ))}\n //         </tbody>\n //       </table>\n //       {editBook && (\n //         <BookEdit\n //           book={editBook}\n //           onSave={handleSave}\n //           onCancel={handleCancel}\n //         />\n //       )}\n //     </div>\n //   );\n // };\n // export default BookList;\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Jvb2tMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNEM7QUFJNUMsTUFBTUUsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsV0FBVzs7SUFDZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUVyQ0QsZ0RBQVNBLENBQUM7UUFDUk87SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTVAsU0FBU1EsSUFBSSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztZQUM1RCxJQUFJRixPQUFPO2dCQUNULE1BQU1BO1lBQ1I7WUFDQUgsU0FBU0U7UUFDWCxFQUFFLE9BQU9DLE9BQU87WUFDZEcsUUFBUUgsS0FBSyxDQUFDLHlCQUF5QkEsTUFBTUksT0FBTztRQUN0RDtJQUNGO0lBQ0EsTUFBTUMsYUFBYSxDQUFDQztRQUNsQkMsT0FBT0MsSUFBSSxDQUFDLGFBQWdCLE9BQUhGO0lBQzNCO0lBRUEscUNBQXFDO0lBQ3JDLHlDQUF5QztJQUN6Qyw4Q0FBOEM7SUFDOUMsS0FBSztJQUVMLE1BQU1HLGVBQWUsT0FBT0g7UUFDMUIsSUFBSTtZQUNGLE1BQU0sRUFBRU4sS0FBSyxFQUFFLEdBQUcsTUFBTVAsU0FBU1EsSUFBSSxDQUFDLFNBQVNTLE1BQU0sR0FBR0MsRUFBRSxDQUFDLE1BQU1MO1lBQ2pFLElBQUlOLE9BQU87Z0JBQ1QsTUFBTUE7WUFDUjtZQUNBRyxRQUFRUyxHQUFHLENBQUM7WUFDWiw4Q0FBOEM7WUFDOUNkO1FBQ0YsRUFBRSxPQUFPRSxPQUFPO1lBQ2RHLFFBQVFILEtBQUssQ0FBQyx3QkFBd0JBLE1BQU1JLE9BQU87UUFDckQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDUztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQU1GLFdBQVU7O2tDQUNmLDhEQUFDRztrQ0FDQyw0RUFBQ0M7OzhDQUNDLDhEQUFDQzs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7OzhDQUNKLDhEQUFDQTs4Q0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNDO2tDQUNFeEIsTUFBTXlCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDViw4REFBQ0o7O2tEQUNDLDhEQUFDSztrREFBSUQsS0FBS0UsS0FBSzs7Ozs7O2tEQUNmLDhEQUFDRDtrREFBSUQsS0FBS0csTUFBTTs7Ozs7O2tEQUNoQiw4REFBQ0Y7a0RBQUlELEtBQUtJLE9BQU87Ozs7OztrREFDakIsOERBQUNIO2tEQUFJRCxLQUFLSyxZQUFZOzs7Ozs7a0RBQ3RCLDhEQUFDSjtrREFFQyw0RUFBQ0s7NENBQU9DLFNBQVMsSUFBTXBCLGFBQWFhLEtBQUtoQixFQUFFO3NEQUFHOzs7Ozs7Ozs7Ozs7K0JBUHpDZ0IsS0FBS2hCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlNUI7R0F2RU1YO0tBQUFBO0FBeUVOLCtEQUFlQSxRQUFRQSxFQUFDLENBSXhCLDRCQUE0QjtDQUM1QixlQUFlO0NBQ2YsK0NBQStDO0NBQy9DLHdEQUF3RDtDQUN4RCxxQ0FBcUM7Q0FFckMsa0VBQWtFO0NBQ2xFLDBPQUEwTztDQUMxTywyREFBMkQ7Q0FFM0QsMkJBQTJCO0NBQzNCLDRDQUE0QztDQUM1QyxvREFBb0Q7Q0FFcEQsc0JBQXNCO0NBQ3RCLG9CQUFvQjtDQUNwQixZQUFZO0NBRVoscUNBQXFDO0NBQ3JDLFlBQVk7Q0FDWiwwRUFBMEU7Q0FDMUUscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixVQUFVO0NBQ1Ysd0JBQXdCO0NBQ3hCLHdCQUF3QjtDQUN4QiwrREFBK0Q7Q0FDL0QsUUFBUTtDQUNSLE9BQU87Q0FFUCxtQ0FBbUM7Q0FDbkMseUJBQXlCO0NBQ3pCLE9BQU87Q0FFUCxnREFBZ0Q7Q0FDaEQsWUFBWTtDQUNaLDJHQUEyRztDQUMzRyxxQkFBcUI7Q0FDckIsdUJBQXVCO0NBQ3ZCLFVBQVU7Q0FDVix5REFBeUQ7Q0FDekQsc0JBQXNCO0NBQ3RCLDJCQUEyQjtDQUMzQix3QkFBd0I7Q0FDeEIsOERBQThEO0NBQzlELFFBQVE7Q0FDUixPQUFPO0NBRVAsaUNBQWlDO0NBQ2pDLHlCQUF5QjtDQUN6QixPQUFPO0NBRVAseUNBQXlDO0NBQ3pDLFlBQVk7Q0FDWiw4RUFBOEU7Q0FDOUUscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixVQUFVO0NBQ1Ysa0RBQWtEO0NBQ2xELHNCQUFzQjtDQUN0Qix3QkFBd0I7Q0FDeEIsOERBQThEO0NBQzlELFFBQVE7Q0FDUixPQUFPO0NBRVAsYUFBYTtDQUNiLGtDQUFrQztDQUNsQyxpQ0FBaUM7Q0FDakMsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsNkJBQTZCO0NBQzdCLDhCQUE4QjtDQUM5QiwrQkFBK0I7Q0FDL0Isb0NBQW9DO0NBQ3BDLCtCQUErQjtDQUMvQixrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixtQ0FBbUM7Q0FDbkMsaUNBQWlDO0NBQ2pDLHNDQUFzQztDQUN0Qyx1Q0FBdUM7Q0FDdkMsd0NBQXdDO0NBQ3hDLDZDQUE2QztDQUM3QyxxQkFBcUI7Q0FDckIseUVBQXlFO0NBQ3pFLGdGQUFnRjtDQUNoRixzQkFBc0I7Q0FDdEIsb0JBQW9CO0NBQ3BCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsaUJBQWlCO0NBQ2pCLHVCQUF1QjtDQUN2QixvQkFBb0I7Q0FDcEIsNEJBQTRCO0NBQzVCLGdDQUFnQztDQUNoQyxvQ0FBb0M7Q0FDcEMsYUFBYTtDQUNiLFdBQVc7Q0FDWCxhQUFhO0NBQ2IsT0FBTztDQUNQLEtBQUs7Q0FFTCwyQkFBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvQm9va0xpc3QuanN4P2ZkNDAiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5cclxuXHJcbmNvbnN0IHN1cGFiYXNlID0gcmVxdWlyZSgnLi4vLi4vbGliL3N1cGFiYXNlJylcclxuXHJcbmNvbnN0IEJvb2tMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtib29rcywgc2V0Qm9va3NdID0gdXNlU3RhdGUoW10pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZmV0Y2hCb29rcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgZmV0Y2hCb29rcyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ2Jvb2tzJykuc2VsZWN0KCcqJyk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICAgIHNldEJvb2tzKGRhdGEpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va3M6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVFZGl0ID0gKGlkKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChgL2Jvb2tlZGl0LyR7aWR9YCk7XHJcbiAgfTtcclxuICBcclxuICAvLyBjb25zdCBoYW5kbGVFZGl0ID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgLy8gICAvLyBJbXBsZW1lbnQgZWRpdCBmdW5jdGlvbmFsaXR5IGhlcmVcclxuICAvLyAgIGNvbnNvbGUubG9nKCdFZGl0aW5nIGJvb2sgd2l0aCBpZDonLCBpZCk7XHJcbiAgLy8gfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdib29rcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGlkKTtcclxuICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICAgIH1cclxuICAgICAgY29uc29sZS5sb2coJ0Jvb2sgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgLy8gQWZ0ZXIgZGVsZXRpbmcsIGZldGNoIHVwZGF0ZWQgbGlzdCBvZiBib29rc1xyXG4gICAgICBmZXRjaEJvb2tzKCk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBib29rOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1saXN0Jz5cclxuICAgICAgPGgyPlN1Ym1pdHRlZCBCb29rczwvaDI+XHJcbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJiZy13aGl0ZVwiPlxyXG4gICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgIDx0cj5cclxuICAgICAgICAgICAgPHRoPlRpdGxlPC90aD5cclxuICAgICAgICAgICAgPHRoPkF1dGhvcjwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5TdWJqZWN0PC90aD5cclxuICAgICAgICAgICAgPHRoPlB1Ymxpc2ggRGF0ZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5BY3Rpb25zPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgICB7Ym9va3MubWFwKChib29rKSA9PiAoXHJcbiAgICAgICAgICAgIDx0ciBrZXk9e2Jvb2suaWR9PlxyXG4gICAgICAgICAgICAgIDx0ZD57Ym9vay50aXRsZX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Ym9vay5hdXRob3J9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2Jvb2suc3ViamVjdH08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZD57Ym9vay5wdWJsaXNoX2RhdGV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+XHJcbiAgICAgICAgICAgICAgICB7LyogPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KGJvb2suaWQpfT5FZGl0PC9idXR0b24+ICovfVxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoYm9vay5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L3Rib2R5PlxyXG4gICAgICA8L3RhYmxlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJvb2tMaXN0O1xyXG5cclxuXHJcblxyXG4vLyAvLyBjb21wb25lbnRzL0Jvb2tMaXN0LmpzXHJcbi8vICd1c2UgY2xpZW50J1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xyXG4vLyBpbXBvcnQgQm9va0VkaXQgZnJvbSAnLi9Cb29rRWRpdCc7XHJcblxyXG4vLyBjb25zdCBzdXBhYmFzZVVybCA9ICdodHRwczovL2JzaXRsYWd3cW5yem5jY2dqaXh6LnN1cGFiYXNlLmNvJztcclxuLy8gY29uc3Qgc3VwYWJhc2VLZXkgPSAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW1KemFYUnNZV2QzY1c1eWVtNWpZMmRxYVhoNklpd2ljbTlzWlNJNkltRnViMjRpTENKcFlYUWlPakUzTURnME9EUTFORElzSW1WNGNDSTZNakF5TkRBMk1EVTBNbjAucmphaThoa0hlbmVTbUtSXzZkemxJdFdGQ0VhaEJ2Y1lrMk5XU0xlLXdfayc7XHJcbi8vIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUtleSk7XHJcblxyXG4vLyBjb25zdCBCb29rTGlzdCA9ICgpID0+IHtcclxuLy8gICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuLy8gICBjb25zdCBbZWRpdEJvb2ssIHNldEVkaXRCb29rXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgZmV0Y2hCb29rcygpO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgY29uc3QgZmV0Y2hCb29rcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ0Jvb2tzJykuc2VsZWN0KCcqJyk7XHJcbi8vICAgICAgIGlmIChlcnJvcikge1xyXG4vLyAgICAgICAgIHRocm93IGVycm9yO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIHNldEJvb2tzKGRhdGEpO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va3M6JywgZXJyb3IubWVzc2FnZSk7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlRWRpdCA9IChib29rKSA9PiB7XHJcbi8vICAgICBzZXRFZGl0Qm9vayhib29rKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKHVwZGF0ZWRCb29rKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdCb29rcycpLnVwZGF0ZSh1cGRhdGVkQm9vaykuZXEoJ2lkJywgdXBkYXRlZEJvb2suaWQpO1xyXG4vLyAgICAgICBpZiAoZXJyb3IpIHtcclxuLy8gICAgICAgICB0aHJvdyBlcnJvcjtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBjb25zb2xlLmxvZygnQm9vayB1cGRhdGVkIHN1Y2Nlc3NmdWxseTonLCBkYXRhKTtcclxuLy8gICAgICAgZmV0Y2hCb29rcygpO1xyXG4vLyAgICAgICBzZXRFZGl0Qm9vayhudWxsKTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2s6JywgZXJyb3IubWVzc2FnZSk7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4vLyAgICAgc2V0RWRpdEJvb2sobnVsbCk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdCb29rcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGlkKTtcclxuLy8gICAgICAgaWYgKGVycm9yKSB7XHJcbi8vICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgY29uc29sZS5sb2coJ0Jvb2sgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuLy8gICAgICAgZmV0Y2hCb29rcygpO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgYm9vazonLCBlcnJvci5tZXNzYWdlKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XHJcbi8vICAgICAgIDxoMj5TdWJtaXR0ZWQgQm9va3M8L2gyPlxyXG4vLyAgICAgICA8dGFibGU+XHJcbi8vICAgICAgICAgPHRoZWFkPlxyXG4vLyAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGg+QXV0aG9yPC90aD5cclxuLy8gICAgICAgICAgICAgPHRoPlN1YmplY3Q8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGg+UHVibGlzaCBEYXRlPC90aD5cclxuLy8gICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxyXG4vLyAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICA8L3RoZWFkPlxyXG4vLyAgICAgICAgIDx0Ym9keT5cclxuLy8gICAgICAgICAgIHtib29rcy5tYXAoKGJvb2spID0+IChcclxuLy8gICAgICAgICAgICAgPHRyIGtleT17Ym9vay5pZH0+XHJcbi8vICAgICAgICAgICAgICAgPHRkPntib29rLnRpdGxlfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgPHRkPntib29rLmF1dGhvcn08L3RkPlxyXG4vLyAgICAgICAgICAgICAgIDx0ZD57Ym9vay5zdWJqZWN0fTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgPHRkPntib29rLnB1Ymxpc2hfZGF0ZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgIDx0ZD5cclxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdChib29rKX0+RWRpdDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoYm9vay5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICApKX1cclxuLy8gICAgICAgICA8L3Rib2R5PlxyXG4vLyAgICAgICA8L3RhYmxlPlxyXG4vLyAgICAgICB7ZWRpdEJvb2sgJiYgKFxyXG4vLyAgICAgICAgIDxCb29rRWRpdFxyXG4vLyAgICAgICAgICAgYm9vaz17ZWRpdEJvb2t9XHJcbi8vICAgICAgICAgICBvblNhdmU9e2hhbmRsZVNhdmV9XHJcbi8vICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4vLyAgICAgICAgIC8+XHJcbi8vICAgICAgICl9XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQm9va0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN1cGFiYXNlIiwicmVxdWlyZSIsIkJvb2tMaXN0IiwiYm9va3MiLCJzZXRCb29rcyIsImZldGNoQm9va3MiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiY29uc29sZSIsIm1lc3NhZ2UiLCJoYW5kbGVFZGl0IiwiaWQiLCJyb3V0ZXIiLCJwdXNoIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlIiwiZXEiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRhYmxlIiwidGhlYWQiLCJ0ciIsInRoIiwidGJvZHkiLCJtYXAiLCJib29rIiwidGQiLCJ0aXRsZSIsImF1dGhvciIsInN1YmplY3QiLCJwdWJsaXNoX2RhdGUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/BookList.jsx\n"));

/***/ })

});