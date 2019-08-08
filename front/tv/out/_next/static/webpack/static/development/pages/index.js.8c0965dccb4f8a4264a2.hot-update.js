webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_apollo_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-apollo-hooks */ "./node_modules/react-apollo-hooks/es/index.js");

var _jsxFileName = "/Users/garyjennings/Desktop/WEBDEV/starbucks-app-clone/front/tv/pages/index.js";

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    z-index: 0;\n    background: #e5f3ef;\n    height: 600px;\n    width: 600px;\n    border-radius: 300px;\n    position: absolute;\n    top: -200px;\n    left: 400px;\n    background-image: url(", ");\n    background-size: cover;\n    opacity: 0.1;\n    @media (max-width: 800px) {\n        display: none;\n    }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    max-width: 800px;\n    width: 90%;\n    position: relative;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    z-index: -2;\n    padding: 40px 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    min-height: 100vh;\n    background: linear-gradient(#018861, #006546);\n    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    height: 200px;\n    flex: 0 0 360px;\n    margin: 5px;\n    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);\n\n    transition: 0.2s;\n    &:hover {\n        transform: scale(1.02);\n    }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: flex;\n    margin-top: 40px;\n    a {\n        color: white;\n        text-align: center;\n        display: inline-block;\n    }\n\n    p {\n        margin-top: 10px;\n    }\n\n    @media (max-width: 800px) {\n        flex-direction: column;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: white;\n    line-height: 1.6;\n    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;\n\n    a {\n        background: black;\n        padding: 5px 25px;\n        border-radius: 5px;\n        color: white;\n        font-size: 14px;\n        transition: 0.1s;\n        &:hover {\n            background: #016841;\n        }\n    }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    color: white;\n    font-size: 35px;\n    font-weight: 900;\n\n    letter-spacing: -1;\n    line-height: 0.9;\n    margin-bottom: 40px;\n\n    font-family: -apple-system, BlinkMacSystemFont, 'Heebo', sans-serif;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    query allProducts {\n        allFeaturedProducts {\n            id\n            name\n            price {\n                tall\n                grande\n                venti\n            }\n            imgUrl\n            type\n            description\n        }\n\n        allFeaturedTweets {\n            about\n            hashtags\n            content\n        }\n\n        allGeneralTweets {\n            hashtags\n            content\n        }\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var PREFETCH = graphql_tag__WEBPACK_IMPORTED_MODULE_4___default()(_templateObject());
var S = {};
S.Title = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].h1(_templateObject2());
S.Text = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].p(_templateObject3());
S.TvOptionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
S.TvOption = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img(_templateObject5());
S.Screen = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject6());
S.Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject7());
var LOGO_URL = 'https://www.starbucks.ca/static/images/global/logo.svg';
S.BigGreenCircle = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject8(), LOGO_URL);
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var x = Object(react_apollo_hooks__WEBPACK_IMPORTED_MODULE_5__["useQuery"])(PREFETCH);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.Screen, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.BigGreenCircle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.Wrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Starbucks TV Screens"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, "Hello! This is an example project demonstrating how to use", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "React JS"), ", ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, "GraphQL"), ", and the", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Serverless Framework"), " together to build multiple apps for a single client. This page is a list of TV screens a coffee shop like starbucks might want at the front of their stores. They are sized for a 16:9 ratio. The first screen is for highlighted products, and the second is a coffee menu."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Eventually this project will have seperate frontend clients for store owners, customers, baristas, and shipping. They will all connect to one GraphQL BFF (backend for frontends), which will talk to serverless microservices."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.Text, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, "Click on the tv screens below to see them. All the code is on", ' ', react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "https://github.com/dodgeblaster/starbucks-app-clone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "Github"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.TvOptionContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/highlighted",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.TvOption, {
    src: "/static/highlighted.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, "Highlighted TV"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/coffee",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(S.TvOption, {
    src: "/static/coffee-menu.png",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, "Coffee Menu TV"))))));
});

/***/ })

})
//# sourceMappingURL=index.js.8c0965dccb4f8a4264a2.hot-update.js.map