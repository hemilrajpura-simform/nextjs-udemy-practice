"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n/* const DUMMY_MEETUPS = [\n    {\n        id: 'm1',\n        title: 'A First Meetup',\n        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',\n        address: 'Some Address 5, 13254 Some City',\n        description: 'This is a first meetup!'\n    },\n    {\n        id: 'm2',\n        title: 'A Second Meetup',\n        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/800px-Stadtbild_M%C3%BCnchen.jpg?20130611211153',\n        address: 'Some Address 5, 13254 Some City',\n        description: 'This is a Second meetup!'\n    },\n]; */ function HomePage(props) {\n    /*const [loadedMeetups, setLoadedMetups] = useState([]);\n\n    useEffect(() => {\n        //fetch data\n\n\n        setLoadedMetups(DUMMY_MEETUPS);\n    }, []); */ return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            meetups: props.meetups\n        }, void 0, false, {\n            fileName: \"/home/hemilrajpura/React Training - Dec 2021/Course 9 -React Course/Next JS Projects/01-onwards-to-a-bigger-project-starting-project/pages/index.js\",\n            lineNumber: 38,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/hemilrajpura/React Training - Dec 2021/Course 9 -React Course/Next JS Projects/01-onwards-to-a-bigger-project-starting-project/pages/index.js\",\n        lineNumber: 36,\n        columnNumber: 9\n    }, this));\n}\n_c = HomePage;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ0k7QUFDN0I7QUFFM0IsRUFlSTs7Ozs7Ozs7Ozs7Ozs7O0dBQUEsWUFFSUssUUFBUSxDQUFDQyxLQUFLLEVBQUUsQ0FBQztJQUV0QixFQU9VOzs7Ozs7O1lBQUEsR0FHVixNQUFNLDZFQUNETiwyQ0FBUTs4RkFFUkcsc0VBQVU7WUFBQ0ksT0FBTyxFQUFzQkQsS0FBSyxDQUFDQyxPQUFPOzs7Ozs7Ozs7OztBQUc5RCxDQUFDO0tBbEJRRixRQUFROztBQTJEakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBNZWV0VXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5cbiAvKiBjb25zdCBEVU1NWV9NRUVUVVBTID0gW1xuICAgIHtcbiAgICAgICAgaWQ6ICdtMScsXG4gICAgICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxuICAgICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy84MDBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZz8yMDEzMDYxMTIxMTE1MycsXG4gICAgICAgIGFkZHJlc3M6ICdTb21lIEFkZHJlc3MgNSwgMTMyNTQgU29tZSBDaXR5JyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgZmlyc3QgbWVldHVwISdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICdtMicsXG4gICAgICAgIHRpdGxlOiAnQSBTZWNvbmQgTWVldHVwJyxcbiAgICAgICAgaW1hZ2U6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvODAwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGc/MjAxMzA2MTEyMTExNTMnLFxuICAgICAgICBhZGRyZXNzOiAnU29tZSBBZGRyZXNzIDUsIDEzMjU0IFNvbWUgQ2l0eScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIFNlY29uZCBtZWV0dXAhJ1xuICAgIH0sXG5dOyAqL1xuXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xuXG4gICAgLypjb25zdCBbbG9hZGVkTWVldHVwcywgc2V0TG9hZGVkTWV0dXBzXSA9IHVzZVN0YXRlKFtdKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIC8vZmV0Y2ggZGF0YVxuXG5cbiAgICAgICAgc2V0TG9hZGVkTWV0dXBzKERVTU1ZX01FRVRVUFMpO1xuICAgIH0sIFtdKTsgKi9cblxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgXG4gICAgICAgIDxNZWV0VXBMaXN0IG1lZXR1cHM9ey8qIGxvYWRlZE1lZXR1cHMgKi8gcHJvcHMubWVldHVwc30gLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xufVxuXG4vKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KXtcbiAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcbiAgICBjb25zdCByZXMgPSBjb250ZXh0LnJlcztcblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6e1xuICAgICAgICAgICAgbWVldHVwczpEVU1NWV9NRUVUVVBTXG4gICAgICAgIH1cbiAgICB9O1xufVxuKi9cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCgnbW9uZ29kYitzcnY6Ly9oZW1pbHJhanB1cmE6aGVtaWxzb25pQGNsdXN0ZXIwLnZ0bHBnLm1vbmdvZGIubmV0L21lZXR1cHM/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5Jyk7XG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZXRpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XG4gICAgY29uc3QgbWVldHVwcyAgPSBhd2FpdCBtZWV0dXBzQ29sbGV0aW9uLmZpbmQoKS50b0FycmF5KCk7XG4gICAgY2xpZW50LmNsb3NlKCk7XG5cbiAgICAvL2ZldGNoKCcuL2FwaS9tZWV0dXBzLmpzJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKChtZWV0dXApPT4oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTptZWV0dXAudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOm1lZXR1cC5pbWFnZSxcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzczptZWV0dXAuYWRkcmVzcyxcbiAgICAgICAgICAgICAgICAgICAgLy9kZXNjcmlwdGlvbjptZWV0dXAuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICkpXG4gICAgICAgIH0sXG4gICAgICAgIHJldmFsaWRhdGU6IDFcbiAgICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTsiXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIk1lZXRVcExpc3QiLCJIZWFkIiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});