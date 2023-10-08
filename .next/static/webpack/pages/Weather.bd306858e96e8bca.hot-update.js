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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/weatherComps/InputPart */ \"./weatherComps/InputPart.jsx\");\n/* harmony import */ var _weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/weatherComps/WeatherDiv */ \"./weatherComps/WeatherDiv.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Weather = ()=>{\n    _s();\n    const [dataFromInput, setDataFromInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [temp, setTemp] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleDataFromChild = (data)=>{\n        setDataFromInput(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getLocation() {\n            const res = await fetch(\"http://api.openweathermap.org/geo/1.0/direct?q=\".concat(dataFromInput, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f\"));\n            const res2 = await res.json();\n            if (res2.length > 0) {\n                setLocation(res2[0].name);\n                setLatitude(res2[0].lat);\n                setLongitude(res2[0].lon);\n            }\n        }\n        if (dataFromInput) {\n            getLocation();\n        }\n    }, [\n        dataFromInput\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getCurrentWeather() {\n            const res3 = await fetch(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f&units=metric\"));\n            const res4 = await res3.json();\n            if (latitude && longitude && res4.length) {\n                setTemp(res4.main.temp);\n            }\n        }\n        if (latitude && longitude) {\n            getCurrentWeather();\n        }\n    }, [\n        latitude,\n        longitude\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-[rgb(41,52,83)] font-Poppins\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onDataFromChild: handleDataFromChild\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                location: location,\n                temp: temp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Weather, \"Av4M5Vdf+OXZuARKe/Snh7gcQC4=\");\n_c = Weather;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XZWF0aGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNFO0FBQ3pCO0FBQ2tCO0FBRTVDLE1BQU1LLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1ZLHNCQUFzQixDQUFDQztRQUMzQlYsaUJBQWlCVTtJQUNuQjtJQUVBZCxnREFBU0EsQ0FBQztRQUNSLGVBQWVlO1lBQ2IsTUFBTUMsTUFBTSxNQUFNQyxNQUNoQixrREFBZ0UsT0FBZGQsZUFBYztZQUVsRSxNQUFNZSxPQUFPLE1BQU1GLElBQUlHLElBQUk7WUFDM0IsSUFBSUQsS0FBS0UsTUFBTSxHQUFHLEdBQUc7Z0JBQ25CZCxZQUFZWSxJQUFJLENBQUMsRUFBRSxDQUFDRyxJQUFJO2dCQUN4QmIsWUFBWVUsSUFBSSxDQUFDLEVBQUUsQ0FBQ0ksR0FBRztnQkFDdkJaLGFBQWFRLElBQUksQ0FBQyxFQUFFLENBQUNLLEdBQUc7WUFDMUI7UUFDRjtRQUNBLElBQUlwQixlQUFlO1lBQ2pCWTtRQUNGO0lBQ0YsR0FBRztRQUFDWjtLQUFjO0lBRWxCSCxnREFBU0EsQ0FBQztRQUNSLGVBQWV3QjtZQUNiLE1BQU1DLE9BQU8sTUFBTVIsTUFDakIsdURBQXVFUixPQUFoQkYsVUFBUyxTQUFpQixPQUFWRSxXQUFVO1lBRW5GLE1BQU1pQixPQUFPLE1BQU1ELEtBQUtOLElBQUk7WUFDNUIsSUFBSVosWUFBWUUsYUFBYWlCLEtBQUtOLE1BQU0sRUFBRTtnQkFDeENSLFFBQVFjLEtBQUtDLElBQUksQ0FBQ2hCLElBQUk7WUFDeEI7UUFDRjtRQUNBLElBQUlKLFlBQVlFLFdBQVc7WUFDekJlO1FBQ0Y7SUFDRixHQUFHO1FBQUNqQjtRQUFVRTtLQUFVO0lBRXhCLHFCQUNFLDhEQUFDbUI7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNoQywrREFBU0E7Z0JBQUNpQyxpQkFBaUJqQjs7Ozs7OzBCQUM1Qiw4REFBQ2YsZ0VBQVVBO2dCQUFDTyxVQUFVQTtnQkFBVU0sTUFBTUE7Ozs7Ozs7Ozs7OztBQUc1QztHQWpETVQ7S0FBQUE7QUFtRE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qcz85MzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dFBhcnQgZnJvbSBcIkAvd2VhdGhlckNvbXBzL0lucHV0UGFydFwiO1xyXG5pbXBvcnQgV2VhdGhlckRpdiBmcm9tIFwiQC93ZWF0aGVyQ29tcHMvV2VhdGhlckRpdlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFdlYXRoZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGFGcm9tSW5wdXQsIHNldERhdGFGcm9tSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb25naXR1ZGUsIHNldExvbmdpdHVkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGVtcCwgc2V0VGVtcF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGF0YUZyb21DaGlsZCA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXREYXRhRnJvbUlucHV0KGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtkYXRhRnJvbUlucHV0fSZhcHBpZD04NWQxZjEwYjFlMjhmYTA4YmNiMmM4NjRmYTExNjA0ZmBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRMb2NhdGlvbihyZXMyWzBdLm5hbWUpO1xyXG4gICAgICAgIHNldExhdGl0dWRlKHJlczJbMF0ubGF0KTtcclxuICAgICAgICBzZXRMb25naXR1ZGUocmVzMlswXS5sb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YUZyb21JbnB1dCkge1xyXG4gICAgICBnZXRMb2NhdGlvbigpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhRnJvbUlucHV0XSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50V2VhdGhlcigpIHtcclxuICAgICAgY29uc3QgcmVzMyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtsYXRpdHVkZX0mbG9uPSR7bG9uZ2l0dWRlfSZhcHBpZD04NWQxZjEwYjFlMjhmYTA4YmNiMmM4NjRmYTExNjA0ZiZ1bml0cz1tZXRyaWNgXHJcbiAgICAgICk7XHJcbiAgICAgIGNvbnN0IHJlczQgPSBhd2FpdCByZXMzLmpzb24oKTtcclxuICAgICAgaWYgKGxhdGl0dWRlICYmIGxvbmdpdHVkZSAmJiByZXM0Lmxlbmd0aCkge1xyXG4gICAgICAgIHNldFRlbXAocmVzNC5tYWluLnRlbXApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobGF0aXR1ZGUgJiYgbG9uZ2l0dWRlKSB7XHJcbiAgICAgIGdldEN1cnJlbnRXZWF0aGVyKCk7XHJcbiAgICB9XHJcbiAgfSwgW2xhdGl0dWRlLCBsb25naXR1ZGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGJnLVtyZ2IoNDEsNTIsODMpXSBmb250LVBvcHBpbnNcIj5cclxuICAgICAgPElucHV0UGFydCBvbkRhdGFGcm9tQ2hpbGQ9e2hhbmRsZURhdGFGcm9tQ2hpbGR9IC8+XHJcbiAgICAgIDxXZWF0aGVyRGl2IGxvY2F0aW9uPXtsb2NhdGlvbn0gdGVtcD17dGVtcH0gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWF0aGVyO1xyXG4iXSwibmFtZXMiOlsiSW5wdXRQYXJ0IiwiV2VhdGhlckRpdiIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJXZWF0aGVyIiwiZGF0YUZyb21JbnB1dCIsInNldERhdGFGcm9tSW5wdXQiLCJsb2NhdGlvbiIsInNldExvY2F0aW9uIiwibGF0aXR1ZGUiLCJzZXRMYXRpdHVkZSIsImxvbmdpdHVkZSIsInNldExvbmdpdHVkZSIsInRlbXAiLCJzZXRUZW1wIiwiaGFuZGxlRGF0YUZyb21DaGlsZCIsImRhdGEiLCJnZXRMb2NhdGlvbiIsInJlcyIsImZldGNoIiwicmVzMiIsImpzb24iLCJsZW5ndGgiLCJuYW1lIiwibGF0IiwibG9uIiwiZ2V0Q3VycmVudFdlYXRoZXIiLCJyZXMzIiwicmVzNCIsIm1haW4iLCJkaXYiLCJjbGFzc05hbWUiLCJvbkRhdGFGcm9tQ2hpbGQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/Weather.js\n"));

/***/ })

});