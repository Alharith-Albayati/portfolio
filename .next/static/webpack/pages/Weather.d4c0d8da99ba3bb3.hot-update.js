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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/weatherComps/InputPart */ \"./weatherComps/InputPart.jsx\");\n/* harmony import */ var _weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/weatherComps/WeatherDiv */ \"./weatherComps/WeatherDiv.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Weather = ()=>{\n    _s();\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [temp, setTemp] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleDataFromChild = (data)=>{\n        setLocation(data);\n    };\n    const getCurrentLocationFromChild = (data, lat, lon)=>{\n        setLocation(data);\n        setLatitude(lat);\n        setLongitude(lon);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getLocation() {\n            const res = await fetch(\"http://api.openweathermap.org/geo/1.0/direct?q=\".concat(location, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f\"));\n            const res2 = await res.json();\n            if (res2.length > 0) {\n                setLocation(res2[0].name);\n                setLatitude(res2[0].lat);\n                setLongitude(res2[0].lon);\n            }\n        }\n        if (location) {\n            getLocation();\n        }\n    }, [\n        location\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getCurrentWeather() {\n            const res3 = await fetch(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f&units=metric\"));\n            const res4 = await res3.json();\n            setTemp(res4.main.temp);\n        }\n        if (latitude !== null && longitude !== null) {\n            getCurrentWeather();\n        }\n    }, [\n        latitude,\n        longitude\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-[rgb(41,52,83)] font-Poppins\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onDataFromChild: handleDataFromChild,\n                onCurrentLocation: getCurrentLocationFromChild\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                location: location,\n                lat: latitude,\n                lon: longitude,\n                temp: temp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Weather, \"fPgw0+4fa0c6rcMVIFiULrR2pOM=\");\n_c = Weather;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XZWF0aGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNFO0FBQ3pCO0FBQ2tCO0FBRTVDLE1BQU1LLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ0ksVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNNLFdBQVdDLGFBQWEsR0FBR1AsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDUSxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1VLHNCQUFzQixDQUFDQztRQUMzQlIsWUFBWVE7SUFDZDtJQUVBLE1BQU1DLDhCQUE4QixDQUFDRCxNQUFNRSxLQUFLQztRQUM5Q1gsWUFBWVE7UUFDWk4sWUFBWVE7UUFDWk4sYUFBYU87SUFDZjtJQUVBZixnREFBU0EsQ0FBQztRQUNSLGVBQWVnQjtZQUNiLE1BQU1DLE1BQU0sTUFBTUMsTUFDaEIsa0RBQTJELE9BQVRmLFVBQVM7WUFFN0QsTUFBTWdCLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtZQUMzQixJQUFJRCxLQUFLRSxNQUFNLEdBQUcsR0FBRztnQkFDbkJqQixZQUFZZSxJQUFJLENBQUMsRUFBRSxDQUFDRyxJQUFJO2dCQUN4QmhCLFlBQVlhLElBQUksQ0FBQyxFQUFFLENBQUNMLEdBQUc7Z0JBQ3ZCTixhQUFhVyxJQUFJLENBQUMsRUFBRSxDQUFDSixHQUFHO1lBQzFCO1FBQ0Y7UUFDQSxJQUFJWixVQUFVO1lBQ1phO1FBQ0Y7SUFDRixHQUFHO1FBQUNiO0tBQVM7SUFFYkgsZ0RBQVNBLENBQUM7UUFDUixlQUFldUI7WUFDYixNQUFNQyxPQUFPLE1BQU1OLE1BQ2pCLHVEQUF1RVgsT0FBaEJGLFVBQVMsU0FBaUIsT0FBVkUsV0FBVTtZQUVuRixNQUFNa0IsT0FBTyxNQUFNRCxLQUFLSixJQUFJO1lBQzVCVixRQUFRZSxLQUFLQyxJQUFJLENBQUNqQixJQUFJO1FBQ3hCO1FBRUEsSUFBSUosYUFBYSxRQUFRRSxjQUFjLE1BQU07WUFDM0NnQjtRQUNGO0lBQ0YsR0FBRztRQUFDbEI7UUFBVUU7S0FBVTtJQUV4QixxQkFDRSw4REFBQ29CO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDL0IsK0RBQVNBO2dCQUNSZ0MsaUJBQWlCbEI7Z0JBQ2pCbUIsbUJBQW1CakI7Ozs7OzswQkFFckIsOERBQUNmLGdFQUFVQTtnQkFDVEssVUFBVUE7Z0JBQ1ZXLEtBQUtUO2dCQUNMVSxLQUFLUjtnQkFDTEUsTUFBTUE7Ozs7Ozs7Ozs7OztBQUlkO0dBN0RNUDtLQUFBQTtBQStETiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9XZWF0aGVyLmpzPzkzMDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IElucHV0UGFydCBmcm9tIFwiQC93ZWF0aGVyQ29tcHMvSW5wdXRQYXJ0XCI7XHJcbmltcG9ydCBXZWF0aGVyRGl2IGZyb20gXCJAL3dlYXRoZXJDb21wcy9XZWF0aGVyRGl2XCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgV2VhdGhlciA9ICgpID0+IHtcclxuICBjb25zdCBbbG9jYXRpb24sIHNldExvY2F0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFtsYXRpdHVkZSwgc2V0TGF0aXR1ZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xvbmdpdHVkZSwgc2V0TG9uZ2l0dWRlXSA9IHVzZVN0YXRlKG51bGwpO1xyXG4gIGNvbnN0IFt0ZW1wLCBzZXRUZW1wXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICBjb25zdCBoYW5kbGVEYXRhRnJvbUNoaWxkID0gKGRhdGEpID0+IHtcclxuICAgIHNldExvY2F0aW9uKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnRMb2NhdGlvbkZyb21DaGlsZCA9IChkYXRhLCBsYXQsIGxvbikgPT4ge1xyXG4gICAgc2V0TG9jYXRpb24oZGF0YSk7XHJcbiAgICBzZXRMYXRpdHVkZShsYXQpO1xyXG4gICAgc2V0TG9uZ2l0dWRlKGxvbik7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldExvY2F0aW9uKCkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9ufSZhcHBpZD04NWQxZjEwYjFlMjhmYTA4YmNiMmM4NjRmYTExNjA0ZmBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRMb2NhdGlvbihyZXMyWzBdLm5hbWUpO1xyXG4gICAgICAgIHNldExhdGl0dWRlKHJlczJbMF0ubGF0KTtcclxuICAgICAgICBzZXRMb25naXR1ZGUocmVzMlswXS5sb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAobG9jYXRpb24pIHtcclxuICAgICAgZ2V0TG9jYXRpb24oKTtcclxuICAgIH1cclxuICB9LCBbbG9jYXRpb25dKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldEN1cnJlbnRXZWF0aGVyKCkge1xyXG4gICAgICBjb25zdCByZXMzID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdGl0dWRlfSZsb249JHtsb25naXR1ZGV9JmFwcGlkPTg1ZDFmMTBiMWUyOGZhMDhiY2IyYzg2NGZhMTE2MDRmJnVuaXRzPW1ldHJpY2BcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzNCA9IGF3YWl0IHJlczMuanNvbigpO1xyXG4gICAgICBzZXRUZW1wKHJlczQubWFpbi50ZW1wKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobGF0aXR1ZGUgIT09IG51bGwgJiYgbG9uZ2l0dWRlICE9PSBudWxsKSB7XHJcbiAgICAgIGdldEN1cnJlbnRXZWF0aGVyKCk7XHJcbiAgICB9XHJcbiAgfSwgW2xhdGl0dWRlLCBsb25naXR1ZGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGJnLVtyZ2IoNDEsNTIsODMpXSBmb250LVBvcHBpbnNcIj5cclxuICAgICAgPElucHV0UGFydFxyXG4gICAgICAgIG9uRGF0YUZyb21DaGlsZD17aGFuZGxlRGF0YUZyb21DaGlsZH1cclxuICAgICAgICBvbkN1cnJlbnRMb2NhdGlvbj17Z2V0Q3VycmVudExvY2F0aW9uRnJvbUNoaWxkfVxyXG4gICAgICAvPlxyXG4gICAgICA8V2VhdGhlckRpdlxyXG4gICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cclxuICAgICAgICBsYXQ9e2xhdGl0dWRlfVxyXG4gICAgICAgIGxvbj17bG9uZ2l0dWRlfVxyXG4gICAgICAgIHRlbXA9e3RlbXB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcclxuIl0sIm5hbWVzIjpbIklucHV0UGFydCIsIldlYXRoZXJEaXYiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2VhdGhlciIsImxvY2F0aW9uIiwic2V0TG9jYXRpb24iLCJsYXRpdHVkZSIsInNldExhdGl0dWRlIiwibG9uZ2l0dWRlIiwic2V0TG9uZ2l0dWRlIiwidGVtcCIsInNldFRlbXAiLCJoYW5kbGVEYXRhRnJvbUNoaWxkIiwiZGF0YSIsImdldEN1cnJlbnRMb2NhdGlvbkZyb21DaGlsZCIsImxhdCIsImxvbiIsImdldExvY2F0aW9uIiwicmVzIiwiZmV0Y2giLCJyZXMyIiwianNvbiIsImxlbmd0aCIsIm5hbWUiLCJnZXRDdXJyZW50V2VhdGhlciIsInJlczMiLCJyZXM0IiwibWFpbiIsImRpdiIsImNsYXNzTmFtZSIsIm9uRGF0YUZyb21DaGlsZCIsIm9uQ3VycmVudExvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Weather.js\n"));

/***/ })

});