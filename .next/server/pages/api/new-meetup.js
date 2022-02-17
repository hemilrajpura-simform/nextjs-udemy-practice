"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method == 'POST') {\n        const data = req.body;\n        //  const { title, image, address, desc } = data;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect('mongodb+srv://hemilrajpura:hemilsoni@cluster0.vtlpg.mongodb.net/meetups?retryWrites=true&w=majority');\n        const db = client.db();\n        const meetupsColletion = db.collection('meetups');\n        const result = await meetupsColletion.insertOne(data);\n        console.log(result);\n        res.status(201).json({\n            message: 'Meetup Inserted'\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7ZUFFdEJDLE9BQU8sQ0FBQ0MsR0FBRyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztJQUM5QixFQUFFLEVBQUVELEdBQUcsQ0FBQ0UsTUFBTSxJQUFJLENBQU0sT0FBRSxDQUFDO1FBQ3ZCLEtBQUssQ0FBQ0MsSUFBSSxHQUFHSCxHQUFHLENBQUNJLElBQUk7UUFFdkIsRUFBaUQ7UUFFL0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDUCx3REFBbUIsQ0FBQyxDQUFxRztRQUM5SSxLQUFLLENBQUNTLEVBQUUsR0FBR0YsTUFBTSxDQUFDRSxFQUFFO1FBRXBCLEtBQUssQ0FBQ0MsZ0JBQWdCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLENBQVM7UUFDaEQsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDRixnQkFBZ0IsQ0FBQ0csU0FBUyxDQUFDUixJQUFJO1FBRXBEUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTTtRQUVsQlQsR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQ0M7WUFBQUEsT0FBTyxFQUFDLENBQWlCO1FBQUEsQ0FBQztJQUNwRCxDQUFDO0FBQ0wsQ0FBQztBQUNELGlFQUFlakIsT0FBTyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJztcblxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEsIHJlcykge1xuICAgIGlmIChyZXEubWV0aG9kID09ICdQT1NUJykge1xuICAgICAgICBjb25zdCBkYXRhID0gcmVxLmJvZHk7XG5cbiAgICAgIC8vICBjb25zdCB7IHRpdGxlLCBpbWFnZSwgYWRkcmVzcywgZGVzYyB9ID0gZGF0YTtcblxuICAgICAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KCdtb25nb2RiK3NydjovL2hlbWlscmFqcHVyYTpoZW1pbHNvbmlAY2x1c3RlcjAudnRscGcubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHknKTtcbiAgICAgICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcblxuICAgICAgICBjb25zdCBtZWV0dXBzQ29sbGV0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGV0aW9uLmluc2VydE9uZShkYXRhKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuXG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOidNZWV0dXAgSW5zZXJ0ZWQnfSk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjsiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGV0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJzdGF0dXMiLCJqc29uIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();