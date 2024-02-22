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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst supabase = __webpack_require__(/*! ../../lib/supabase */ \"(app-pages-browser)/./lib/supabase.js\");\nconst BookList = ()=>{\n    _s();\n    const [books, setBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const router = useRouter(); // Initialize useRouter\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        fetchBooks();\n    }, []);\n    const fetchBooks = async ()=>{\n        try {\n            const { data, error } = await supabase.from(\"books\").select(\"*\");\n            if (error) {\n                throw error;\n            }\n            setBooks(data);\n        } catch (error) {\n            console.error(\"Error fetching books:\", error.message);\n        }\n    };\n    const handleEdit = (id)=>{\n        router.push(\"/bookedit/\".concat(id));\n    };\n    const handleDelete = async (id)=>{\n        try {\n            const { error } = await supabase.from(\"books\").delete().eq(\"id\", id);\n            if (error) {\n                throw error;\n            }\n            console.log(\"Book deleted successfully\");\n            fetchBooks(); // Fetch updated list of books after deletion\n        } catch (error) {\n            console.error(\"Error deleting book:\", error.message);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"book-list\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Submitted Books\"\n            }, void 0, false, {\n                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                style: {\n                    backgroundColor: \"lightblue\"\n                },\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"thead\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Title\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Author\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Subject\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Publish Date\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"th\", {\n                                    children: \"Actions\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                        children: books.map((book)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.title\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.author\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.subject\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: book.publish_date\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 62,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleEdit(book.id),\n                                                children: \"Edit\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                                lineNumber: 64,\n                                                columnNumber: 17\n                                            }, undefined),\n                                            \" \",\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                onClick: ()=>handleDelete(book.id),\n                                                children: \"Delete\"\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                                lineNumber: 65,\n                                                columnNumber: 17\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, book.id, true, {\n                                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\CS Stuff\\\\LibraryApp\\\\app\\\\components\\\\BookList.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BookList, \"xAVLpBRYALBm0odNqN9wXuH9aNU=\", true);\n_c = BookList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BookList); // // components/BookList.js\n // 'use client'\n // import { useEffect, useState } from 'react';\n // import { createClient } from '@supabase/supabase-js';\n // import BookEdit from './BookEdit';\n // const supabaseUrl = 'https://bsitlagwqnrznccgjixz.supabase.co';\n // const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJzaXRsYWd3cW5yem5jY2dqaXh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0ODQ1NDIsImV4cCI6MjAyNDA2MDU0Mn0.rjai8hkHeneSmKR_6dzlItWFCEahBvcYk2NWSLe-w_k';\n // const supabase = createClient(supabaseUrl, supabaseKey);\n // const BookList = () => {\n //   const [books, setBooks] = useState([]);\n //   const [editBook, setEditBook] = useState(null);\n //   useEffect(() => {\n //     fetchBooks();\n //   }, []);\n //   const fetchBooks = async () => {\n //     try {\n //       const { data, error } = await supabase.from('Books').select('*');\n //       if (error) {\n //         throw error;\n //       }\n //       setBooks(data);\n //     } catch (error) {\n //       console.error('Error fetching books:', error.message);\n //     }\n //   };\n //   const handleEdit = (book) => {\n //     setEditBook(book);\n //   };\n //   const handleSave = async (updatedBook) => {\n //     try {\n //       const { data, error } = await supabase.from('Books').update(updatedBook).eq('id', updatedBook.id);\n //       if (error) {\n //         throw error;\n //       }\n //       console.log('Book updated successfully:', data);\n //       fetchBooks();\n //       setEditBook(null);\n //     } catch (error) {\n //       console.error('Error updating book:', error.message);\n //     }\n //   };\n //   const handleCancel = () => {\n //     setEditBook(null);\n //   };\n //   const handleDelete = async (id) => {\n //     try {\n //       const { error } = await supabase.from('Books').delete().eq('id', id);\n //       if (error) {\n //         throw error;\n //       }\n //       console.log('Book deleted successfully');\n //       fetchBooks();\n //     } catch (error) {\n //       console.error('Error deleting book:', error.message);\n //     }\n //   };\n //   return (\n //     <div className='book-list'>\n //       <h2>Submitted Books</h2>\n //       <table>\n //         <thead>\n //           <tr>\n //             <th>Title</th>\n //             <th>Author</th>\n //             <th>Subject</th>\n //             <th>Publish Date</th>\n //             <th>Actions</th>\n //           </tr>\n //         </thead>\n //         <tbody>\n //           {books.map((book) => (\n //             <tr key={book.id}>\n //               <td>{book.title}</td>\n //               <td>{book.author}</td>\n //               <td>{book.subject}</td>\n //               <td>{book.publish_date}</td>\n //               <td>\n //                 <button onClick={() => handleEdit(book)}>Edit</button>\n //                 <button onClick={() => handleDelete(book.id)}>Delete</button>\n //               </td>\n //             </tr>\n //           ))}\n //         </tbody>\n //       </table>\n //       {editBook && (\n //         <BookEdit\n //           book={editBook}\n //           onSave={handleSave}\n //           onCancel={handleCancel}\n //         />\n //       )}\n //     </div>\n //   );\n // };\n // export default BookList;\nvar _c;\n$RefreshReg$(_c, \"BookList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0Jvb2tMaXN0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDNEM7QUFFNUMsTUFBTUUsV0FBV0MsbUJBQU9BLENBQUM7QUFFekIsTUFBTUMsV0FBVzs7SUFDZixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUNyQyxNQUFNTSxTQUFTQyxhQUFhLHVCQUF1QjtJQUVuRFIsZ0RBQVNBLENBQUM7UUFDUlM7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNQSxhQUFhO1FBQ2pCLElBQUk7WUFDRixNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFLEdBQUcsTUFBTVQsU0FBU1UsSUFBSSxDQUFDLFNBQVNDLE1BQU0sQ0FBQztZQUM1RCxJQUFJRixPQUFPO2dCQUNULE1BQU1BO1lBQ1I7WUFDQUwsU0FBU0k7UUFDWCxFQUFFLE9BQU9DLE9BQU87WUFDZEcsUUFBUUgsS0FBSyxDQUFDLHlCQUF5QkEsTUFBTUksT0FBTztRQUN0RDtJQUNGO0lBRUEsTUFBTUMsYUFBYSxDQUFDQztRQUNsQlYsT0FBT1csSUFBSSxDQUFDLGFBQWdCLE9BQUhEO0lBQzNCO0lBRUEsTUFBTUUsZUFBZSxPQUFPRjtRQUMxQixJQUFJO1lBQ0YsTUFBTSxFQUFFTixLQUFLLEVBQUUsR0FBRyxNQUFNVCxTQUFTVSxJQUFJLENBQUMsU0FBU1EsTUFBTSxHQUFHQyxFQUFFLENBQUMsTUFBTUo7WUFDakUsSUFBSU4sT0FBTztnQkFDVCxNQUFNQTtZQUNSO1lBQ0FHLFFBQVFRLEdBQUcsQ0FBQztZQUNaYixjQUFjLDZDQUE2QztRQUM3RCxFQUFFLE9BQU9FLE9BQU87WUFDZEcsUUFBUUgsS0FBSyxDQUFDLHdCQUF3QkEsTUFBTUksT0FBTztRQUNyRDtJQUNGO0lBRUEscUJBQ0UsOERBQUNRO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFBTUMsT0FBTztv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dXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9Cb29rTGlzdC5qc3g/ZmQ0MCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHN1cGFiYXNlID0gcmVxdWlyZSgnLi4vLi4vbGliL3N1cGFiYXNlJyk7XHJcblxyXG5jb25zdCBCb29rTGlzdCA9ICgpID0+IHtcclxuICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTsgLy8gSW5pdGlhbGl6ZSB1c2VSb3V0ZXJcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGZldGNoQm9va3MoKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGZldGNoQm9va3MgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdib29rcycpLnNlbGVjdCgnKicpO1xyXG4gICAgICBpZiAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgfVxyXG4gICAgICBzZXRCb29rcyhkYXRhKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGJvb2tzOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVkaXQgPSAoaWQpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKGAvYm9va2VkaXQvJHtpZH1gKTtcclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IGFzeW5jIChpZCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgeyBlcnJvciB9ID0gYXdhaXQgc3VwYWJhc2UuZnJvbSgnYm9va3MnKS5kZWxldGUoKS5lcSgnaWQnLCBpZCk7XHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdCb29rIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgIGZldGNoQm9va3MoKTsgLy8gRmV0Y2ggdXBkYXRlZCBsaXN0IG9mIGJvb2tzIGFmdGVyIGRlbGV0aW9uXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBkZWxldGluZyBib29rOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYm9vay1saXN0Jz5cclxuICAgICAgPGgyPlN1Ym1pdHRlZCBCb29rczwvaDI+XHJcbiAgICAgIDx0YWJsZSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICdsaWdodGJsdWUnIH19PiB7LyogQ2hhbmdlIGJhY2tncm91bmQgY29sb3IgdG8gbGlnaHQgYmx1ZSAqL31cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICA8dHI+XHJcbiAgICAgICAgICAgIDx0aD5UaXRsZTwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5BdXRob3I8L3RoPlxyXG4gICAgICAgICAgICA8dGg+U3ViamVjdDwvdGg+XHJcbiAgICAgICAgICAgIDx0aD5QdWJsaXNoIERhdGU8L3RoPlxyXG4gICAgICAgICAgICA8dGg+QWN0aW9uczwvdGg+XHJcbiAgICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGhlYWQ+XHJcbiAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAge2Jvb2tzLm1hcCgoYm9vaykgPT4gKFxyXG4gICAgICAgICAgICA8dHIga2V5PXtib29rLmlkfT5cclxuICAgICAgICAgICAgICA8dGQ+e2Jvb2sudGl0bGV9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2Jvb2suYXV0aG9yfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPntib29rLnN1YmplY3R9PC90ZD5cclxuICAgICAgICAgICAgICA8dGQ+e2Jvb2sucHVibGlzaF9kYXRlfTwvdGQ+XHJcbiAgICAgICAgICAgICAgPHRkPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVFZGl0KGJvb2suaWQpfT5FZGl0PC9idXR0b24+IHsvKiBBZGQgRWRpdCBidXR0b24gKi99XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShib29rLmlkKX0+RGVsZXRlPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC90cj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQm9va0xpc3Q7XHJcblxyXG4vLyAvLyBjb21wb25lbnRzL0Jvb2tMaXN0LmpzXHJcbi8vICd1c2UgY2xpZW50J1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG4vLyBpbXBvcnQgeyBjcmVhdGVDbGllbnQgfSBmcm9tICdAc3VwYWJhc2Uvc3VwYWJhc2UtanMnO1xyXG4vLyBpbXBvcnQgQm9va0VkaXQgZnJvbSAnLi9Cb29rRWRpdCc7XHJcblxyXG4vLyBjb25zdCBzdXBhYmFzZVVybCA9ICdodHRwczovL2JzaXRsYWd3cW5yem5jY2dqaXh6LnN1cGFiYXNlLmNvJztcclxuLy8gY29uc3Qgc3VwYWJhc2VLZXkgPSAnZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SnBjM01pT2lKemRYQmhZbUZ6WlNJc0luSmxaaUk2SW1KemFYUnNZV2QzY1c1eWVtNWpZMmRxYVhoNklpd2ljbTlzWlNJNkltRnViMjRpTENKcFlYUWlPakUzTURnME9EUTFORElzSW1WNGNDSTZNakF5TkRBMk1EVTBNbjAucmphaThoa0hlbmVTbUtSXzZkemxJdFdGQ0VhaEJ2Y1lrMk5XU0xlLXdfayc7XHJcbi8vIGNvbnN0IHN1cGFiYXNlID0gY3JlYXRlQ2xpZW50KHN1cGFiYXNlVXJsLCBzdXBhYmFzZUtleSk7XHJcblxyXG4vLyBjb25zdCBCb29rTGlzdCA9ICgpID0+IHtcclxuLy8gICBjb25zdCBbYm9va3MsIHNldEJvb2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuLy8gICBjb25zdCBbZWRpdEJvb2ssIHNldEVkaXRCb29rXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuLy8gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4vLyAgICAgZmV0Y2hCb29rcygpO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgY29uc3QgZmV0Y2hCb29rcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgIGNvbnN0IHsgZGF0YSwgZXJyb3IgfSA9IGF3YWl0IHN1cGFiYXNlLmZyb20oJ0Jvb2tzJykuc2VsZWN0KCcqJyk7XHJcbi8vICAgICAgIGlmIChlcnJvcikge1xyXG4vLyAgICAgICAgIHRocm93IGVycm9yO1xyXG4vLyAgICAgICB9XHJcbi8vICAgICAgIHNldEJvb2tzKGRhdGEpO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgYm9va3M6JywgZXJyb3IubWVzc2FnZSk7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlRWRpdCA9IChib29rKSA9PiB7XHJcbi8vICAgICBzZXRFZGl0Qm9vayhib29rKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICBjb25zdCBoYW5kbGVTYXZlID0gYXN5bmMgKHVwZGF0ZWRCb29rKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdCb29rcycpLnVwZGF0ZSh1cGRhdGVkQm9vaykuZXEoJ2lkJywgdXBkYXRlZEJvb2suaWQpO1xyXG4vLyAgICAgICBpZiAoZXJyb3IpIHtcclxuLy8gICAgICAgICB0aHJvdyBlcnJvcjtcclxuLy8gICAgICAgfVxyXG4vLyAgICAgICBjb25zb2xlLmxvZygnQm9vayB1cGRhdGVkIHN1Y2Nlc3NmdWxseTonLCBkYXRhKTtcclxuLy8gICAgICAgZmV0Y2hCb29rcygpO1xyXG4vLyAgICAgICBzZXRFZGl0Qm9vayhudWxsKTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIGJvb2s6JywgZXJyb3IubWVzc2FnZSk7XHJcbi8vICAgICB9XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlQ2FuY2VsID0gKCkgPT4ge1xyXG4vLyAgICAgc2V0RWRpdEJvb2sobnVsbCk7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgY29uc3QgaGFuZGxlRGVsZXRlID0gYXN5bmMgKGlkKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICBjb25zdCB7IGVycm9yIH0gPSBhd2FpdCBzdXBhYmFzZS5mcm9tKCdCb29rcycpLmRlbGV0ZSgpLmVxKCdpZCcsIGlkKTtcclxuLy8gICAgICAgaWYgKGVycm9yKSB7XHJcbi8vICAgICAgICAgdGhyb3cgZXJyb3I7XHJcbi8vICAgICAgIH1cclxuLy8gICAgICAgY29uc29sZS5sb2coJ0Jvb2sgZGVsZXRlZCBzdWNjZXNzZnVsbHknKTtcclxuLy8gICAgICAgZmV0Y2hCb29rcygpO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGVsZXRpbmcgYm9vazonLCBlcnJvci5tZXNzYWdlKTtcclxuLy8gICAgIH1cclxuLy8gICB9O1xyXG5cclxuLy8gICByZXR1cm4gKFxyXG4vLyAgICAgPGRpdiBjbGFzc05hbWU9J2Jvb2stbGlzdCc+XHJcbi8vICAgICAgIDxoMj5TdWJtaXR0ZWQgQm9va3M8L2gyPlxyXG4vLyAgICAgICA8dGFibGU+XHJcbi8vICAgICAgICAgPHRoZWFkPlxyXG4vLyAgICAgICAgICAgPHRyPlxyXG4vLyAgICAgICAgICAgICA8dGg+VGl0bGU8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGg+QXV0aG9yPC90aD5cclxuLy8gICAgICAgICAgICAgPHRoPlN1YmplY3Q8L3RoPlxyXG4vLyAgICAgICAgICAgICA8dGg+UHVibGlzaCBEYXRlPC90aD5cclxuLy8gICAgICAgICAgICAgPHRoPkFjdGlvbnM8L3RoPlxyXG4vLyAgICAgICAgICAgPC90cj5cclxuLy8gICAgICAgICA8L3RoZWFkPlxyXG4vLyAgICAgICAgIDx0Ym9keT5cclxuLy8gICAgICAgICAgIHtib29rcy5tYXAoKGJvb2spID0+IChcclxuLy8gICAgICAgICAgICAgPHRyIGtleT17Ym9vay5pZH0+XHJcbi8vICAgICAgICAgICAgICAgPHRkPntib29rLnRpdGxlfTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgPHRkPntib29rLmF1dGhvcn08L3RkPlxyXG4vLyAgICAgICAgICAgICAgIDx0ZD57Ym9vay5zdWJqZWN0fTwvdGQ+XHJcbi8vICAgICAgICAgICAgICAgPHRkPntib29rLnB1Ymxpc2hfZGF0ZX08L3RkPlxyXG4vLyAgICAgICAgICAgICAgIDx0ZD5cclxuLy8gICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlRWRpdChib29rKX0+RWRpdDwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGUoYm9vay5pZCl9PkRlbGV0ZTwvYnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgIDwvdGQ+XHJcbi8vICAgICAgICAgICAgIDwvdHI+XHJcbi8vICAgICAgICAgICApKX1cclxuLy8gICAgICAgICA8L3Rib2R5PlxyXG4vLyAgICAgICA8L3RhYmxlPlxyXG4vLyAgICAgICB7ZWRpdEJvb2sgJiYgKFxyXG4vLyAgICAgICAgIDxCb29rRWRpdFxyXG4vLyAgICAgICAgICAgYm9vaz17ZWRpdEJvb2t9XHJcbi8vICAgICAgICAgICBvblNhdmU9e2hhbmRsZVNhdmV9XHJcbi8vICAgICAgICAgICBvbkNhbmNlbD17aGFuZGxlQ2FuY2VsfVxyXG4vLyAgICAgICAgIC8+XHJcbi8vICAgICAgICl9XHJcbi8vICAgICA8L2Rpdj5cclxuLy8gICApO1xyXG4vLyB9O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgQm9va0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN1cGFiYXNlIiwicmVxdWlyZSIsIkJvb2tMaXN0IiwiYm9va3MiLCJzZXRCb29rcyIsInJvdXRlciIsInVzZVJvdXRlciIsImZldGNoQm9va3MiLCJkYXRhIiwiZXJyb3IiLCJmcm9tIiwic2VsZWN0IiwiY29uc29sZSIsIm1lc3NhZ2UiLCJoYW5kbGVFZGl0IiwiaWQiLCJwdXNoIiwiaGFuZGxlRGVsZXRlIiwiZGVsZXRlIiwiZXEiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJoMiIsInRhYmxlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aGVhZCIsInRyIiwidGgiLCJ0Ym9keSIsIm1hcCIsImJvb2siLCJ0ZCIsInRpdGxlIiwiYXV0aG9yIiwic3ViamVjdCIsInB1Ymxpc2hfZGF0ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/BookList.jsx\n"));

/***/ })

});