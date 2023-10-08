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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/weatherComps/InputPart */ \"./weatherComps/InputPart.jsx\");\n/* harmony import */ var _weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/weatherComps/WeatherDiv */ \"./weatherComps/WeatherDiv.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Weather = ()=>{\n    _s();\n    const [dataFromInput, setDataFromInput] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [location, setLocation] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [latitude, setLatitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [longitude, setLongitude] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [temp, setTemp] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const handleDataFromChild = (data)=>{\n        setDataFromInput(data);\n        setLocation(data);\n    };\n    const getCurrentLocationFromChild = (data)=>{\n        setLocation(data);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getLocation() {\n            const res = await fetch(\"http://api.openweathermap.org/geo/1.0/direct?q=\".concat(dataFromInput || location, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f\"));\n            const res2 = await res.json();\n            if (res2.length > 0) {\n                setLocation(res2[0].name);\n                setLatitude(res2[0].lat);\n                setLongitude(res2[0].lon);\n            }\n        }\n        if (dataFromInput) {\n            getLocation();\n        }\n    }, [\n        dataFromInput,\n        location\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function getCurrentWeather() {\n            const res3 = await fetch(\"https://api.openweathermap.org/data/2.5/weather?lat=\".concat(latitude, \"&lon=\").concat(longitude, \"&appid=85d1f10b1e28fa08bcb2c864fa11604f&units=metric\"));\n            const res4 = await res3.json();\n            setTemp(res4.main.temp);\n        }\n        if (latitude !== null && longitude !== null) {\n            getCurrentWeather();\n        }\n    }, [\n        latitude,\n        longitude\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen bg-[rgb(41,52,83)] font-Poppins\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_InputPart__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                onDataFromChild: handleDataFromChild,\n                currentLocation: getCurrentLocationFromChild\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_weatherComps_WeatherDiv__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                location: location,\n                lat: latitude,\n                lon: longitude,\n                temp: temp\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Al-Harith\\\\Desktop\\\\alharith_portfolio\\\\pages\\\\Weather.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Weather, \"Av4M5Vdf+OXZuARKe/Snh7gcQC4=\");\n_c = Weather;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Weather);\nvar _c;\n$RefreshReg$(_c, \"Weather\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9XZWF0aGVyLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFpRDtBQUNFO0FBQ3pCO0FBQ2tCO0FBRTVDLE1BQU1LLFVBQVU7O0lBQ2QsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR0gsK0NBQVFBLENBQUM7SUFDbkQsTUFBTSxDQUFDSSxVQUFVQyxZQUFZLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ3pDLE1BQU0sQ0FBQ00sVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNLENBQUNRLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDVSxNQUFNQyxRQUFRLEdBQUdYLCtDQUFRQSxDQUFDO0lBRWpDLE1BQU1ZLHNCQUFzQixDQUFDQztRQUMzQlYsaUJBQWlCVTtRQUNqQlIsWUFBWVE7SUFDZDtJQUVBLE1BQU1DLDhCQUE4QixDQUFDRDtRQUNuQ1IsWUFBWVE7SUFDZDtJQUVBZCxnREFBU0EsQ0FBQztRQUNSLGVBQWVnQjtZQUNiLE1BQU1DLE1BQU0sTUFBTUMsTUFDaEIsa0RBRUMsT0FEQ2YsaUJBQWlCRSxVQUNsQjtZQUVILE1BQU1jLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtZQUMzQixJQUFJRCxLQUFLRSxNQUFNLEdBQUcsR0FBRztnQkFDbkJmLFlBQVlhLElBQUksQ0FBQyxFQUFFLENBQUNHLElBQUk7Z0JBQ3hCZCxZQUFZVyxJQUFJLENBQUMsRUFBRSxDQUFDSSxHQUFHO2dCQUN2QmIsYUFBYVMsSUFBSSxDQUFDLEVBQUUsQ0FBQ0ssR0FBRztZQUMxQjtRQUNGO1FBQ0EsSUFBSXJCLGVBQWU7WUFDakJhO1FBQ0Y7SUFDRixHQUFHO1FBQUNiO1FBQWVFO0tBQVM7SUFFNUJMLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZXlCO1lBQ2IsTUFBTUMsT0FBTyxNQUFNUixNQUNqQix1REFBdUVULE9BQWhCRixVQUFTLFNBQWlCLE9BQVZFLFdBQVU7WUFFbkYsTUFBTWtCLE9BQU8sTUFBTUQsS0FBS04sSUFBSTtZQUM1QlIsUUFBUWUsS0FBS0MsSUFBSSxDQUFDakIsSUFBSTtRQUN4QjtRQUVBLElBQUlKLGFBQWEsUUFBUUUsY0FBYyxNQUFNO1lBQzNDZ0I7UUFDRjtJQUNGLEdBQUc7UUFBQ2xCO1FBQVVFO0tBQVU7SUFFeEIscUJBQ0UsOERBQUNvQjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ2pDLCtEQUFTQTtnQkFDUmtDLGlCQUFpQmxCO2dCQUNqQm1CLGlCQUFpQmpCOzs7Ozs7MEJBRW5CLDhEQUFDakIsZ0VBQVVBO2dCQUNUTyxVQUFVQTtnQkFDVmtCLEtBQUtoQjtnQkFDTGlCLEtBQUtmO2dCQUNMRSxNQUFNQTs7Ozs7Ozs7Ozs7O0FBSWQ7R0EvRE1UO0tBQUFBO0FBaUVOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL1dlYXRoZXIuanM/OTMwMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW5wdXRQYXJ0IGZyb20gXCJAL3dlYXRoZXJDb21wcy9JbnB1dFBhcnRcIjtcclxuaW1wb3J0IFdlYXRoZXJEaXYgZnJvbSBcIkAvd2VhdGhlckNvbXBzL1dlYXRoZXJEaXZcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBXZWF0aGVyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtkYXRhRnJvbUlucHV0LCBzZXREYXRhRnJvbUlucHV0XSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtsb2NhdGlvbiwgc2V0TG9jYXRpb25dID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW2xhdGl0dWRlLCBzZXRMYXRpdHVkZV0gPSB1c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBbbG9uZ2l0dWRlLCBzZXRMb25naXR1ZGVdID0gdXNlU3RhdGUobnVsbCk7XHJcbiAgY29uc3QgW3RlbXAsIHNldFRlbXBdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZURhdGFGcm9tQ2hpbGQgPSAoZGF0YSkgPT4ge1xyXG4gICAgc2V0RGF0YUZyb21JbnB1dChkYXRhKTtcclxuICAgIHNldExvY2F0aW9uKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldEN1cnJlbnRMb2NhdGlvbkZyb21DaGlsZCA9IChkYXRhKSA9PiB7XHJcbiAgICBzZXRMb2NhdGlvbihkYXRhKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0TG9jYXRpb24oKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7XHJcbiAgICAgICAgICBkYXRhRnJvbUlucHV0IHx8IGxvY2F0aW9uXHJcbiAgICAgICAgfSZhcHBpZD04NWQxZjEwYjFlMjhmYTA4YmNiMmM4NjRmYTExNjA0ZmBcclxuICAgICAgKTtcclxuICAgICAgY29uc3QgcmVzMiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXMyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBzZXRMb2NhdGlvbihyZXMyWzBdLm5hbWUpO1xyXG4gICAgICAgIHNldExhdGl0dWRlKHJlczJbMF0ubGF0KTtcclxuICAgICAgICBzZXRMb25naXR1ZGUocmVzMlswXS5sb24pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YUZyb21JbnB1dCkge1xyXG4gICAgICBnZXRMb2NhdGlvbigpO1xyXG4gICAgfVxyXG4gIH0sIFtkYXRhRnJvbUlucHV0LCBsb2NhdGlvbl0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0Q3VycmVudFdlYXRoZXIoKSB7XHJcbiAgICAgIGNvbnN0IHJlczMgPSBhd2FpdCBmZXRjaChcclxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/bGF0PSR7bGF0aXR1ZGV9Jmxvbj0ke2xvbmdpdHVkZX0mYXBwaWQ9ODVkMWYxMGIxZTI4ZmEwOGJjYjJjODY0ZmExMTYwNGYmdW5pdHM9bWV0cmljYFxyXG4gICAgICApO1xyXG4gICAgICBjb25zdCByZXM0ID0gYXdhaXQgcmVzMy5qc29uKCk7XHJcbiAgICAgIHNldFRlbXAocmVzNC5tYWluLnRlbXApO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsYXRpdHVkZSAhPT0gbnVsbCAmJiBsb25naXR1ZGUgIT09IG51bGwpIHtcclxuICAgICAgZ2V0Q3VycmVudFdlYXRoZXIoKTtcclxuICAgIH1cclxuICB9LCBbbGF0aXR1ZGUsIGxvbmdpdHVkZV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gYmctW3JnYig0MSw1Miw4MyldIGZvbnQtUG9wcGluc1wiPlxyXG4gICAgICA8SW5wdXRQYXJ0XHJcbiAgICAgICAgb25EYXRhRnJvbUNoaWxkPXtoYW5kbGVEYXRhRnJvbUNoaWxkfVxyXG4gICAgICAgIGN1cnJlbnRMb2NhdGlvbj17Z2V0Q3VycmVudExvY2F0aW9uRnJvbUNoaWxkfVxyXG4gICAgICAvPlxyXG4gICAgICA8V2VhdGhlckRpdlxyXG4gICAgICAgIGxvY2F0aW9uPXtsb2NhdGlvbn1cclxuICAgICAgICBsYXQ9e2xhdGl0dWRlfVxyXG4gICAgICAgIGxvbj17bG9uZ2l0dWRlfVxyXG4gICAgICAgIHRlbXA9e3RlbXB9XHJcbiAgICAgIC8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2VhdGhlcjtcclxuIl0sIm5hbWVzIjpbIklucHV0UGFydCIsIldlYXRoZXJEaXYiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiV2VhdGhlciIsImRhdGFGcm9tSW5wdXQiLCJzZXREYXRhRnJvbUlucHV0IiwibG9jYXRpb24iLCJzZXRMb2NhdGlvbiIsImxhdGl0dWRlIiwic2V0TGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJzZXRMb25naXR1ZGUiLCJ0ZW1wIiwic2V0VGVtcCIsImhhbmRsZURhdGFGcm9tQ2hpbGQiLCJkYXRhIiwiZ2V0Q3VycmVudExvY2F0aW9uRnJvbUNoaWxkIiwiZ2V0TG9jYXRpb24iLCJyZXMiLCJmZXRjaCIsInJlczIiLCJqc29uIiwibGVuZ3RoIiwibmFtZSIsImxhdCIsImxvbiIsImdldEN1cnJlbnRXZWF0aGVyIiwicmVzMyIsInJlczQiLCJtYWluIiwiZGl2IiwiY2xhc3NOYW1lIiwib25EYXRhRnJvbUNoaWxkIiwiY3VycmVudExvY2F0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Weather.js\n"));

/***/ })

});