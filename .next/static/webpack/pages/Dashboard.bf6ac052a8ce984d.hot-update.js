"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Dashboard",{

/***/ "./DashboardComponents/AreaChart.jsx":
/*!*******************************************!*\
  !*** ./DashboardComponents/AreaChart.jsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! chart.js */ \"./node_modules/chart.js/dist/chart.js\");\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var _faker_js_faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @faker-js/faker */ \"./node_modules/@faker-js/faker/dist/esm/index.mjs\");\n\n\n\n\n\nchart_js__WEBPACK_IMPORTED_MODULE_3__.Chart.register(chart_js__WEBPACK_IMPORTED_MODULE_3__.CategoryScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.LinearScale, chart_js__WEBPACK_IMPORTED_MODULE_3__.PointElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.LineElement, chart_js__WEBPACK_IMPORTED_MODULE_3__.Title, chart_js__WEBPACK_IMPORTED_MODULE_3__.Tooltip, chart_js__WEBPACK_IMPORTED_MODULE_3__.Filler, chart_js__WEBPACK_IMPORTED_MODULE_3__.Legend);\nconst labels = [\n    \"Jan\",\n    \"Feb\",\n    \"Mar\",\n    \"Apr\",\n    \"May\",\n    \"Jun\",\n    \"Jul\",\n    \"Aug\",\n    \"Sep\",\n    \"Oct\",\n    \"Nov\",\n    \"Dec\"\n];\nconst data = {\n    labels,\n    datasets: [\n        {\n            fill: true,\n            label: \"above chart and below title\",\n            data: labels.map(()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.datatype.number({\n                    min: 0,\n                    max: 1000\n                })),\n            borderColor: \"rgb(44,217,255)\",\n            tension: 0.4,\n            borderWidth: 4,\n            pointRadius: 0,\n            backgroundGradient: {\n                angle: 90,\n                type: \"linear\",\n                gradientColors: [\n                    \"rgb(34,135,180)\",\n                    \"rgb(30,76,130)\"\n                ]\n            }\n        },\n        {\n            fill: true,\n            label: \"above chart and below title\",\n            data: labels.map(()=>_faker_js_faker__WEBPACK_IMPORTED_MODULE_2__.faker.datatype.number({\n                    min: 0,\n                    max: 1000\n                })),\n            borderColor: \"rgb(0,117,255)\",\n            tension: 0.4,\n            borderWidth: 4,\n            pointRadius: 0,\n            backgroundGradient: {\n                angle: 90,\n                type: \"linear\",\n                gradientColors: [\n                    \"rgb(7,75,174)\",\n                    \"rgb(18,42,98)\"\n                ]\n            }\n        }\n    ]\n};\nconst options = {\n    responsive: true,\n    scales: {\n        x: {\n            grid: {\n                display: false\n            },\n            ticks: {\n                font: {\n                    size: 14,\n                    fcolor: \"white\"\n                }\n            }\n        },\n        y: {\n            grid: {\n                color: \"rgb(86,87,122)\",\n                borderColor: \"transparent\",\n                borderDash: [\n                    1,\n                    1\n                ]\n            },\n            ticks: {\n                font: {\n                    size: 14,\n                    color: \"white\"\n                }\n            }\n        }\n    },\n    plugins: {\n        title: {\n            display: true,\n            text: \"this is the title\"\n        },\n        tooltip: {\n            enabled: true\n        }\n    }\n};\nconst AreaChart = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-gradient-to-br from-slate-800 to-blue-700 w-[50%]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n            options: options,\n            data: data\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\DashboardComponents\\\\AreaChart.jsx\",\n            lineNumber: 119,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\DashboardComponents\\\\AreaChart.jsx\",\n        lineNumber: 118,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AreaChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AreaChart);\nvar _c;\n$RefreshReg$(_c, \"AreaChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9EYXNoYm9hcmRDb21wb25lbnRzL0FyZWFDaGFydC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBWVI7QUFDcUI7QUFDQztBQUV4Q0UsMkNBQU9BLENBQUNXLFFBQVEsQ0FDZFYsbURBQWFBLEVBQ2JDLGlEQUFXQSxFQUNYQyxrREFBWUEsRUFDWkMsaURBQVdBLEVBQ1hDLDJDQUFLQSxFQUNMQyw2Q0FBT0EsRUFDUEMsNENBQU1BLEVBQ05DLDRDQUFNQTtBQUdSLE1BQU1JLFNBQVM7SUFDYjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7Q0FDRDtBQUVELE1BQU1DLE9BQU87SUFDWEQ7SUFDQUUsVUFBVTtRQUNSO1lBQ0VDLE1BQU07WUFDTkMsT0FBTztZQUNQSCxNQUFNRCxPQUFPSyxHQUFHLENBQUMsSUFBTVAsa0RBQUtBLENBQUNRLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDO29CQUFFQyxLQUFLO29CQUFHQyxLQUFLO2dCQUFLO1lBQ2pFQyxhQUFhO1lBQ2JDLFNBQVM7WUFDVEMsYUFBYTtZQUNiQyxhQUFhO1lBQ2JDLG9CQUFvQjtnQkFDbEJDLE9BQU87Z0JBQ1BDLE1BQU07Z0JBQ05DLGdCQUFnQjtvQkFBQztvQkFBbUI7aUJBQWlCO1lBQ3ZEO1FBQ0Y7UUFDQTtZQUNFZCxNQUFNO1lBQ05DLE9BQU87WUFDUEgsTUFBTUQsT0FBT0ssR0FBRyxDQUFDLElBQU1QLGtEQUFLQSxDQUFDUSxRQUFRLENBQUNDLE1BQU0sQ0FBQztvQkFBRUMsS0FBSztvQkFBR0MsS0FBSztnQkFBSztZQUNqRUMsYUFBYTtZQUNiQyxTQUFTO1lBQ1RDLGFBQWE7WUFDYkMsYUFBYTtZQUNiQyxvQkFBb0I7Z0JBQ2xCQyxPQUFPO2dCQUNQQyxNQUFNO2dCQUNOQyxnQkFBZ0I7b0JBQUM7b0JBQWlCO2lCQUFnQjtZQUNwRDtRQUNGO0tBQ0Q7QUFDSDtBQUVBLE1BQU1DLFVBQVU7SUFDZEMsWUFBWTtJQUNaQyxRQUFRO1FBQ05DLEdBQUc7WUFDREMsTUFBTTtnQkFDSkMsU0FBUztZQUNYO1lBQ0FDLE9BQU87Z0JBQ0xDLE1BQU07b0JBQ0pDLE1BQU07b0JBQ05DLFFBQVE7Z0JBQ1Y7WUFDRjtRQUNGO1FBQ0FDLEdBQUc7WUFDRE4sTUFBTTtnQkFDSk8sT0FBTztnQkFDUG5CLGFBQWE7Z0JBQ2JvQixZQUFZO29CQUFDO29CQUFHO2lCQUFFO1lBQ3BCO1lBQ0FOLE9BQU87Z0JBQ0xDLE1BQU07b0JBQ0pDLE1BQU07b0JBQ05HLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0lBQ0Y7SUFDQUUsU0FBUztRQUNQQyxPQUFPO1lBQ0xULFNBQVM7WUFDVFUsTUFBTTtRQUNSO1FBQ0FDLFNBQVM7WUFDUEMsU0FBUztRQUNYO0lBQ0Y7QUFDRjtBQUVBLE1BQU1DLFlBQVk7SUFDaEIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUN6QyxpREFBSUE7WUFBQ3FCLFNBQVNBO1lBQVNqQixNQUFNQTs7Ozs7Ozs7Ozs7QUFHcEM7S0FOTW1DO0FBUU4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vRGFzaGJvYXJkQ29tcG9uZW50cy9BcmVhQ2hhcnQuanN4PzdlY2MiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFydCBhcyBDaGFydEpTLFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgUG9pbnRFbGVtZW50LFxyXG4gIExpbmVFbGVtZW50LFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgRmlsbGVyLFxyXG4gIExlZ2VuZCxcclxufSBmcm9tIFwiY2hhcnQuanNcIjtcclxuaW1wb3J0IHsgTGluZSB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcclxuaW1wb3J0IHsgZmFrZXIgfSBmcm9tIFwiQGZha2VyLWpzL2Zha2VyXCI7XHJcblxyXG5DaGFydEpTLnJlZ2lzdGVyKFxyXG4gIENhdGVnb3J5U2NhbGUsXHJcbiAgTGluZWFyU2NhbGUsXHJcbiAgUG9pbnRFbGVtZW50LFxyXG4gIExpbmVFbGVtZW50LFxyXG4gIFRpdGxlLFxyXG4gIFRvb2x0aXAsXHJcbiAgRmlsbGVyLFxyXG4gIExlZ2VuZFxyXG4pO1xyXG5cclxuY29uc3QgbGFiZWxzID0gW1xyXG4gIFwiSmFuXCIsXHJcbiAgXCJGZWJcIixcclxuICBcIk1hclwiLFxyXG4gIFwiQXByXCIsXHJcbiAgXCJNYXlcIixcclxuICBcIkp1blwiLFxyXG4gIFwiSnVsXCIsXHJcbiAgXCJBdWdcIixcclxuICBcIlNlcFwiLFxyXG4gIFwiT2N0XCIsXHJcbiAgXCJOb3ZcIixcclxuICBcIkRlY1wiLFxyXG5dO1xyXG5cclxuY29uc3QgZGF0YSA9IHtcclxuICBsYWJlbHMsXHJcbiAgZGF0YXNldHM6IFtcclxuICAgIHtcclxuICAgICAgZmlsbDogdHJ1ZSxcclxuICAgICAgbGFiZWw6IFwiYWJvdmUgY2hhcnQgYW5kIGJlbG93IHRpdGxlXCIsXHJcbiAgICAgIGRhdGE6IGxhYmVscy5tYXAoKCkgPT4gZmFrZXIuZGF0YXR5cGUubnVtYmVyKHsgbWluOiAwLCBtYXg6IDEwMDAgfSkpLFxyXG4gICAgICBib3JkZXJDb2xvcjogXCJyZ2IoNDQsMjE3LDI1NSlcIixcclxuICAgICAgdGVuc2lvbjogMC40LFxyXG4gICAgICBib3JkZXJXaWR0aDogNCxcclxuICAgICAgcG9pbnRSYWRpdXM6IDAsXHJcbiAgICAgIGJhY2tncm91bmRHcmFkaWVudDoge1xyXG4gICAgICAgIGFuZ2xlOiA5MCxcclxuICAgICAgICB0eXBlOiBcImxpbmVhclwiLFxyXG4gICAgICAgIGdyYWRpZW50Q29sb3JzOiBbXCJyZ2IoMzQsMTM1LDE4MClcIiwgXCJyZ2IoMzAsNzYsMTMwKVwiXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGZpbGw6IHRydWUsXHJcbiAgICAgIGxhYmVsOiBcImFib3ZlIGNoYXJ0IGFuZCBiZWxvdyB0aXRsZVwiLFxyXG4gICAgICBkYXRhOiBsYWJlbHMubWFwKCgpID0+IGZha2VyLmRhdGF0eXBlLm51bWJlcih7IG1pbjogMCwgbWF4OiAxMDAwIH0pKSxcclxuICAgICAgYm9yZGVyQ29sb3I6IFwicmdiKDAsMTE3LDI1NSlcIixcclxuICAgICAgdGVuc2lvbjogMC40LFxyXG4gICAgICBib3JkZXJXaWR0aDogNCxcclxuICAgICAgcG9pbnRSYWRpdXM6IDAsXHJcbiAgICAgIGJhY2tncm91bmRHcmFkaWVudDoge1xyXG4gICAgICAgIGFuZ2xlOiA5MCxcclxuICAgICAgICB0eXBlOiBcImxpbmVhclwiLFxyXG4gICAgICAgIGdyYWRpZW50Q29sb3JzOiBbXCJyZ2IoNyw3NSwxNzQpXCIsIFwicmdiKDE4LDQyLDk4KVwiXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICBzY2FsZXM6IHtcclxuICAgIHg6IHtcclxuICAgICAgZ3JpZDoge1xyXG4gICAgICAgIGRpc3BsYXk6IGZhbHNlLFxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrczoge1xyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgIHNpemU6IDE0LFxyXG4gICAgICAgICAgZmNvbG9yOiBcIndoaXRlXCIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB5OiB7XHJcbiAgICAgIGdyaWQ6IHtcclxuICAgICAgICBjb2xvcjogXCJyZ2IoODYsODcsMTIyKVwiLFxyXG4gICAgICAgIGJvcmRlckNvbG9yOiBcInRyYW5zcGFyZW50XCIsXHJcbiAgICAgICAgYm9yZGVyRGFzaDogWzEsIDFdLFxyXG4gICAgICB9LFxyXG4gICAgICB0aWNrczoge1xyXG4gICAgICAgIGZvbnQ6IHtcclxuICAgICAgICAgIHNpemU6IDE0LFxyXG4gICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHBsdWdpbnM6IHtcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIGRpc3BsYXk6IHRydWUsXHJcbiAgICAgIHRleHQ6IFwidGhpcyBpcyB0aGUgdGl0bGVcIixcclxuICAgIH0sXHJcbiAgICB0b29sdGlwOiB7XHJcbiAgICAgIGVuYWJsZWQ6IHRydWUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCBBcmVhQ2hhcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctZ3JhZGllbnQtdG8tYnIgZnJvbS1zbGF0ZS04MDAgdG8tYmx1ZS03MDAgdy1bNTAlXVwiPlxyXG4gICAgICA8TGluZSBvcHRpb25zPXtvcHRpb25zfSBkYXRhPXtkYXRhfSAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFyZWFDaGFydDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2hhcnQiLCJDaGFydEpTIiwiQ2F0ZWdvcnlTY2FsZSIsIkxpbmVhclNjYWxlIiwiUG9pbnRFbGVtZW50IiwiTGluZUVsZW1lbnQiLCJUaXRsZSIsIlRvb2x0aXAiLCJGaWxsZXIiLCJMZWdlbmQiLCJMaW5lIiwiZmFrZXIiLCJyZWdpc3RlciIsImxhYmVscyIsImRhdGEiLCJkYXRhc2V0cyIsImZpbGwiLCJsYWJlbCIsIm1hcCIsImRhdGF0eXBlIiwibnVtYmVyIiwibWluIiwibWF4IiwiYm9yZGVyQ29sb3IiLCJ0ZW5zaW9uIiwiYm9yZGVyV2lkdGgiLCJwb2ludFJhZGl1cyIsImJhY2tncm91bmRHcmFkaWVudCIsImFuZ2xlIiwidHlwZSIsImdyYWRpZW50Q29sb3JzIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJzY2FsZXMiLCJ4IiwiZ3JpZCIsImRpc3BsYXkiLCJ0aWNrcyIsImZvbnQiLCJzaXplIiwiZmNvbG9yIiwieSIsImNvbG9yIiwiYm9yZGVyRGFzaCIsInBsdWdpbnMiLCJ0aXRsZSIsInRleHQiLCJ0b29sdGlwIiwiZW5hYmxlZCIsIkFyZWFDaGFydCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./DashboardComponents/AreaChart.jsx\n"));

/***/ })

});