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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/weatherComps/InputPart */ \"./weatherComps/InputPart.jsx\");\n/* harmony import */ var _weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/weatherComps/WeatherDiv */ \"./weatherComps/WeatherDiv.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Weather = ()=>{\n    _s();\n    const [dataFromInput, setDataFromInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [temp, setTemp] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleDataFromChild = (data)=>{\n        setDataFromInput(data);\n    };\n    const handleLocationFromChild = (lat, lon)=>{\n        setLatitude(lat);\n        setLongitude(lon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getLocation() {\n            const res = await fetch(\"http://api.openweathermap.org/geo/1.0/direct?q=\".concat(dataFromInput, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f\"));\n            const res2 = await res.json();\n            if (res2.length > 0) {\n                setLocation(res2[0].name);\n                setLatitude(res2[0].lat);\n                setLongitude(res2[0].lon);\n            }\n        }\n        if (dataFromInput) {\n            getLocation();\n        }\n    }, [\n        dataFromInput\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getCurrentWeather() {\n            const res3 = await fetch(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f&units=metric\"));\n            const res4 = await res3.json();\n            setTemp(res4.main.temp);\n        }\n        async function getCurrentLocation() {\n            const res5 = await fetch(\"http://api.openweathermap.org/geo/1.0/reverse?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f\"));\n        }\n        if (latitude !== null && longitude !== null) {\n            getCurrentWeather();\n        }\n    }, [\n        latitude,\n        longitude\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-[rgb(41,52,83)] font-Poppins\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onDataFromChild: handleDataFromChild,\n                onLocationFromChild: handleLocationFromChild\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                location: location,\n                lat: latitude,\n                lon: longitude,\n                temp: temp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n        lineNumber: 60,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Weather, \"Av4M5Vdf+OXZuARKe/Snh7gcQC4=\");\n_c = Weather;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XZWF0aGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNFO0FBQ3pCO0FBQ2tCO0FBRTVDLE1BQU1LLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1ZLHNCQUFzQixDQUFDQztRQUMzQlYsaUJBQWlCVTtJQUNuQjtJQUVBLE1BQU1DLDBCQUEwQixDQUFDQyxLQUFLQztRQUNwQ1QsWUFBWVE7UUFDWk4sYUFBYU87SUFDZjtJQUVBakIsZ0RBQVNBLENBQUM7UUFDUixlQUFla0I7WUFDYixNQUFNQyxNQUFNLE1BQU1DLE1BQ2hCLGtEQUFnRSxPQUFkakIsZUFBYztZQUVsRSxNQUFNa0IsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1lBQzNCLElBQUlELEtBQUtFLE1BQU0sR0FBRyxHQUFHO2dCQUNuQmpCLFlBQVllLElBQUksQ0FBQyxFQUFFLENBQUNHLElBQUk7Z0JBQ3hCaEIsWUFBWWEsSUFBSSxDQUFDLEVBQUUsQ0FBQ0wsR0FBRztnQkFDdkJOLGFBQWFXLElBQUksQ0FBQyxFQUFFLENBQUNKLEdBQUc7WUFDMUI7UUFDRjtRQUNBLElBQUlkLGVBQWU7WUFDakJlO1FBQ0Y7SUFDRixHQUFHO1FBQUNmO0tBQWM7SUFFbEJILGdEQUFTQSxDQUFDO1FBQ1IsZUFBZXlCO1lBQ2IsTUFBTUMsT0FBTyxNQUFNTixNQUNqQix1REFBdUVYLE9BQWhCRixVQUFTLFNBQWlCLE9BQVZFLFdBQVU7WUFFbkYsTUFBTWtCLE9BQU8sTUFBTUQsS0FBS0osSUFBSTtZQUM1QlYsUUFBUWUsS0FBS0MsSUFBSSxDQUFDakIsSUFBSTtRQUN4QjtRQUVBLGVBQWVrQjtZQUNiLE1BQU1DLE9BQU8sTUFBTVYsTUFDakIscURBQXFFWCxPQUFoQkYsVUFBUyxTQUFpQixPQUFWRSxXQUFVO1FBRW5GO1FBRUEsSUFBSUYsYUFBYSxRQUFRRSxjQUFjLE1BQU07WUFDM0NnQjtRQUNGO0lBQ0YsR0FBRztRQUFDbEI7UUFBVUU7S0FBVTtJQUV4QixxQkFDRSw4REFBQ3NCO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDbkMsK0RBQVNBO2dCQUNSb0MsaUJBQWlCcEI7Z0JBQ2pCcUIscUJBQXFCbkI7Ozs7OzswQkFFdkIsOERBQUNqQixnRUFBVUE7Z0JBQ1RPLFVBQVVBO2dCQUNWVyxLQUFLVDtnQkFDTFUsS0FBS1I7Z0JBQ0xFLE1BQU1BOzs7Ozs7Ozs7Ozs7QUFJZDtHQW5FTVQ7S0FBQUE7QUFxRU4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvV2VhdGhlci5qcz85MzAyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbnB1dFBhcnQgZnJvbSBcIkAvd2VhdGhlckNvbXBzL0lucHV0UGFydFwiO1xyXG5pbXBvcnQgV2VhdGhlckRpdiBmcm9tIFwiQC93ZWF0aGVyQ29tcHMvV2VhdGhlckRpdlwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IFdlYXRoZXIgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2RhdGFGcm9tSW5wdXQsIHNldERhdGFGcm9tSW5wdXRdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgY29uc3QgW2xvY2F0aW9uLCBzZXRMb2NhdGlvbl0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbGF0aXR1ZGUsIHNldExhdGl0dWRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsb25naXR1ZGUsIHNldExvbmdpdHVkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbdGVtcCwgc2V0VGVtcF0gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlRGF0YUZyb21DaGlsZCA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXREYXRhRnJvbUlucHV0KGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvY2F0aW9uRnJvbUNoaWxkID0gKGxhdCwgbG9uKSA9PiB7XHJcbiAgICBzZXRMYXRpdHVkZShsYXQpO1xyXG4gICAgc2V0TG9uZ2l0dWRlKGxvbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2RhdGFGcm9tSW5wdXR9JmFwcGlkPTg1ZDFmMTBiMWUyOGZhMDhiY2IyYzg2NGZhMTE2MDRmYFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXMyID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgICAgaWYgKHJlczIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHNldExvY2F0aW9uKHJlczJbMF0ubmFtZSk7XHJcbiAgICAgICAgc2V0TGF0aXR1ZGUocmVzMlswXS5sYXQpO1xyXG4gICAgICAgIHNldExvbmdpdHVkZShyZXMyWzBdLmxvbik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChkYXRhRnJvbUlucHV0KSB7XHJcbiAgICAgIGdldExvY2F0aW9uKCk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFGcm9tSW5wdXRdKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKCkge1xyXG4gICAgICBjb25zdCByZXMzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPTg1ZDFmMTBiMWUyOGZhMDhiY2IyYzg2NGZhMTE2MDRmJnVuaXRzPW1ldHJpY2BcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzNCA9IGF3YWl0IHJlczMuanNvbigpO1xyXG4gICAgICBzZXRUZW1wKHJlczQubWFpbi50ZW1wKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBmdW5jdGlvbiBnZXRDdXJyZW50TG9jYXRpb24oKSB7XHJcbiAgICAgIGNvbnN0IHJlczUgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9yZXZlcnNlP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPTg1ZDFmMTBiMWUyOGZhMDhiY2IyYzg2NGZhMTE2MDRmYFxyXG4gICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsYXRpdHVkZSAhPT0gbnVsbCAmJiBsb25naXR1ZGUgIT09IG51bGwpIHtcclxuICAgICAgZ2V0Q3VycmVudFdlYXRoZXIoKTtcclxuICAgIH1cclxuICB9LCBbbGF0aXR1ZGUsIGxvbmdpdHVkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gYmctW3JnYig0MSw1Miw4MyldIGZvbnQtUG9wcGluc1wiPlxyXG4gICAgICA8SW5wdXRQYXJ0XHJcbiAgICAgICAgb25EYXRhRnJvbUNoaWxkPXtoYW5kbGVEYXRhRnJvbUNoaWxkfVxyXG4gICAgICAgIG9uTG9jYXRpb25Gcm9tQ2hpbGQ9e2hhbmRsZUxvY2F0aW9uRnJvbUNoaWxkfVxyXG4gICAgICAvPlxyXG4gICAgICA8V2VhdGhlckRpdlxyXG4gICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cclxuICAgICAgICBsYXQ9e2xhdGl0dWRlfVxyXG4gICAgICAgIGxvbj17bG9uZ2l0dWRlfVxyXG4gICAgICAgIHRlbXA9e3RlbXB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcclxuIl0sIm5hbWVzIjpbIklucHV0UGFydCIsIldlYXRoZXJEaXYiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2VhdGhlciIsImRhdGFGcm9tSW5wdXQiLCJzZXREYXRhRnJvbUlucHV0IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImxhdGl0dWRlIiwic2V0TGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJ0ZW1wIiwic2V0VGVtcCIsImhhbmRsZURhdGFGcm9tQ2hpbGQiLCJkYXRhIiwiaGFuZGxlTG9jYXRpb25Gcm9tQ2hpbGQiLCJsYXQiLCJsb24iLCJnZXRMb2NhdGlvbiIsInJlcyIsImZldGNoIiwicmVzMiIsImpzb24iLCJsZW5ndGgiLCJuYW1lIiwiZ2V0Q3VycmVudFdlYXRoZXIiLCJyZXMzIiwicmVzNCIsIm1haW4iLCJnZXRDdXJyZW50TG9jYXRpb24iLCJyZXM1IiwiZGl2IiwiY2xhc3NOYW1lIiwib25EYXRhRnJvbUNoaWxkIiwib25Mb2NhdGlvbkZyb21DaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/Weather.js\n"));

/***/ })

});