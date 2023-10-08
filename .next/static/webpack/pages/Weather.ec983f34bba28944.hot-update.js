"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/Weather",{

/***/ "./pages/Weather.js":
/*!**************************!*\
  !*** ./pages/Weather.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/weatherComps/InputPart */ \"./weatherComps/InputPart.jsx\");\n/* harmony import */ var _weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/weatherComps/WeatherDiv */ \"./weatherComps/WeatherDiv.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Weather = ()=>{\n    _s();\n    const [dataFromInput, setDataFromInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [temp, setTemp] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleDataFromChild = (data)=>{\n        setDataFromInput(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getLocation() {\n            const res = await fetch(\"http://api.openweathermap.org/geo/1.0/direct?q=\".concat(dataFromInput, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f\"));\n            const res2 = await res.json();\n            if (res2.length > 0) {\n                setLocation(res2[0].name);\n                setLatitude(res2[0].lat);\n                setLongitude(res2[0].lon);\n            }\n        }\n        if (dataFromInput) {\n            getLocation();\n        }\n    }, [\n        dataFromInput\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getCurrentWeather() {\n            const res3 = await fetch(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f&units=metric\"));\n            const res4 = await res3.json();\n            setTemp(res4.main.temp);\n        }\n    }, [\n        latitude,\n        longitude\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-[rgb(41,52,83)] font-Poppins\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onDataFromChild: handleDataFromChild\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                location: location,\n                lat: latitude,\n                lon: longitude,\n                temp: temp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Weather, \"Av4M5Vdf+OXZuARKe/Snh7gcQC4=\");\n_c = Weather;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XZWF0aGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNFO0FBQ3pCO0FBQ2tCO0FBRTVDLE1BQU1LLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1ZLHNCQUFzQixDQUFDQztRQUMzQlYsaUJBQWlCVTtJQUNuQjtJQUVBZCxnREFBU0EsQ0FBQztRQUNSLGVBQWVlO1lBQ2IsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixrREFBZ0UsT0FBZGQsZUFBYztZQUVsRSxNQUFNZSxPQUFPLE1BQU1GLElBQUlHLElBQUk7WUFDM0IsSUFBSUQsS0FBS0UsTUFBTSxHQUFHLEdBQUc7Z0JBQ25CZCxZQUFZWSxJQUFJLENBQUMsRUFBRSxDQUFDRyxJQUFJO2dCQUN4QmIsWUFBWVUsSUFBSSxDQUFDLEVBQUUsQ0FBQ0ksR0FBRztnQkFDdkJaLGFBQWFRLElBQUksQ0FBQyxFQUFFLENBQUNLLEdBQUc7WUFDMUI7UUFDRjtRQUNBLElBQUlwQixlQUFlO1lBQ2pCWTtRQUNGO0lBQ0YsR0FBRztRQUFDWjtLQUFjO0lBRWxCSCxnREFBU0EsQ0FBQztRQUNSLGVBQWV3QjtZQUNiLE1BQU1DLE9BQU8sTUFBTVIsTUFDakIsdURBQXVFUixPQUFoQkYsVUFBUyxTQUFpQixPQUFWRSxXQUFVO1lBRW5GLE1BQU1pQixPQUFPLE1BQU1ELEtBQUtOLElBQUk7WUFDNUJQLFFBQVFjLEtBQUtDLElBQUksQ0FBQ2hCLElBQUk7UUFDeEI7SUFDRixHQUFHO1FBQUNKO1FBQVVFO0tBQVU7SUFFeEIscUJBQ0UsOERBQUNtQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2hDLCtEQUFTQTtnQkFBQ2lDLGlCQUFpQmpCOzs7Ozs7MEJBQzVCLDhEQUFDZixnRUFBVUE7Z0JBQ1RPLFVBQVVBO2dCQUNWaUIsS0FBS2Y7Z0JBQ0xnQixLQUFLZDtnQkFDTEUsTUFBTUE7Ozs7Ozs7Ozs7OztBQUlkO0dBakRNVDtLQUFBQTtBQW1ETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9XZWF0aGVyLmpzPzkzMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0UGFydCBmcm9tIFwiQC93ZWF0aGVyQ29tcHMvSW5wdXRQYXJ0XCI7XHJcbmltcG9ydCBXZWF0aGVyRGl2IGZyb20gXCJAL3dlYXRoZXJDb21wcy9XZWF0aGVyRGl2XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgV2VhdGhlciA9ICgpID0+IHtcclxuICBjb25zdCBbZGF0YUZyb21JbnB1dCwgc2V0RGF0YUZyb21JbnB1dF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsYXRpdHVkZSwgc2V0TGF0aXR1ZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0ZW1wLCBzZXRUZW1wXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEYXRhRnJvbUNoaWxkID0gKGRhdGEpID0+IHtcclxuICAgIHNldERhdGFGcm9tSW5wdXQoZGF0YSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2RhdGFGcm9tSW5wdXR9JmFwcGlkPTg1ZDFmMTBiMWUyOGZhMDhiY2IyYzg2NGZhMTE2MDRmYFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXMyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgaWYgKHJlczIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldExvY2F0aW9uKHJlczJbMF0ubmFtZSk7XHJcbiAgICAgICAgc2V0TGF0aXR1ZGUocmVzMlswXS5sYXQpO1xyXG4gICAgICAgIHNldExvbmdpdHVkZShyZXMyWzBdLmxvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChkYXRhRnJvbUlucHV0KSB7XHJcbiAgICAgIGdldExvY2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFGcm9tSW5wdXRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKCkge1xyXG4gICAgICBjb25zdCByZXMzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPTg1ZDFmMTBiMWUyOGZhMDhiY2IyYzg2NGZhMTE2MDRmJnVuaXRzPW1ldHJpY2BcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzNCA9IGF3YWl0IHJlczMuanNvbigpO1xyXG4gICAgICBzZXRUZW1wKHJlczQubWFpbi50ZW1wKTtcclxuICAgIH1cclxuICB9LCBbbGF0aXR1ZGUsIGxvbmdpdHVkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gYmctW3JnYig0MSw1Miw4MyldIGZvbnQtUG9wcGluc1wiPlxyXG4gICAgICA8SW5wdXRQYXJ0IG9uRGF0YUZyb21DaGlsZD17aGFuZGxlRGF0YUZyb21DaGlsZH0gLz5cclxuICAgICAgPFdlYXRoZXJEaXZcclxuICAgICAgICBsb2NhdGlvbj17bG9jYXRpb259XHJcbiAgICAgICAgbGF0PXtsYXRpdHVkZX1cclxuICAgICAgICBsb249e2xvbmdpdHVkZX1cclxuICAgICAgICB0ZW1wPXt0ZW1wfVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdlYXRoZXI7XHJcbiJdLCJuYW1lcyI6WyJJbnB1dFBhcnQiLCJXZWF0aGVyRGl2IiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIldlYXRoZXIiLCJkYXRhRnJvbUlucHV0Iiwic2V0RGF0YUZyb21JbnB1dCIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJsYXRpdHVkZSIsInNldExhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwidGVtcCIsInNldFRlbXAiLCJoYW5kbGVEYXRhRnJvbUNoaWxkIiwiZGF0YSIsImdldExvY2F0aW9uIiwicmVzIiwiZmV0Y2giLCJyZXMyIiwianNvbiIsImxlbmd0aCIsIm5hbWUiLCJsYXQiLCJsb24iLCJnZXRDdXJyZW50V2VhdGhlciIsInJlczMiLCJyZXM0IiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsIm9uRGF0YUZyb21DaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Weather.js\n"));

/***/ })

});