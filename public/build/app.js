(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var _components_home__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/home */ "./assets/js/components/home.js");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../scss/app.scss */ "./assets/scss/app.scss");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }














function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var App = /*#__PURE__*/function (_React$Component) {
  _inherits(App, _React$Component);

  var _super = _createSuper(App);

  function App() {
    _classCallCheck(this, App);

    return _super.apply(this, arguments);
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_16__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_17__.Route, {
        path: "/:id?",
        component: _components_home__WEBPACK_IMPORTED_MODULE_14__.default
      }));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_12__.Component);

react_dom__WEBPACK_IMPORTED_MODULE_13__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_12__.createElement(App, null), document.getElementById('root'));

/***/ }),

/***/ "./assets/js/components/home.js":
/*!**************************************!*\
  !*** ./assets/js/components/home.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.match.js */ "./node_modules/core-js/modules/es.string.match.js");
/* harmony import */ var core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_match_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.regexp.constructor.js */ "./node_modules/core-js/modules/es.regexp.constructor.js");
/* harmony import */ var core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }






















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var Home = /*#__PURE__*/function (_React$Component) {
  _inherits(Home, _React$Component);

  var _super = _createSuper(Home);

  function Home() {
    var _this;

    _classCallCheck(this, Home);

    _this = _super.call(this);
    _this.state = {
      fields: {
        name: '',
        surname: '',
        email: '',
        password: '',
        confirm_password: '',
        country: 'South-Africa',
        colour: '',
        birthday: '',
        cellphone: '',
        comments: ''
      },
      user_id: '',
      loading: false,
      actions: {
        actioned: false,
        status: 'light',
        msg: ''
      },
      errors: {}
    };
    _this.radioChange = _this.radioChange.bind(_assertThisInitialized(_this));
    _this.handleChange = _this.handleChange.bind(_assertThisInitialized(_this));
    _this.handleKeyUp = _this.handleKeyUp.bind(_assertThisInitialized(_this));
    _this.submitUserForm = _this.submitUserForm.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var params = this.props.match.params;

      if (params.id) {
        fetch("/api/user/".concat(params.id), {
          headers: new Headers({
            'Accept': 'application/json'
          })
        }).then(function (response) {
          return response.json();
        }).then(function (data) {
          _this2.setState({
            fields: data
          });

          _this2.setState({
            user_id: data.id
          });
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var timer = setTimeout(function () {
        document.querySelector('.toast').style.display = "none";
      }, 10000);
      this.state.actions.actioned === true ? timer : '';
    }
  }, {
    key: "radioChange",
    value: function radioChange(e) {
      var fields = this.state.fields;
      fields['colour'] = e.currentTarget.value;
      this.setState({
        fields: fields
      });
    }
  }, {
    key: "handleChange",
    value: function handleChange(e) {
      var fields = this.state.fields;
      fields[e.target.name] = e.target.value;
      this.setState({
        fields: fields
      });
    }
  }, {
    key: "handleKeyUp",
    value: function handleKeyUp(e) {
      var errors = this.state.errors;
      errors[e.target.name] = '';
      this.setState({
        errors: errors
      });
    }
  }, {
    key: "submitUserForm",
    value: function submitUserForm(e) {
      var _this3 = this;

      e.preventDefault();
      var params = this.props.match.params;

      if (this.validateForm()) {
        if (params.id) {
          this.setState({
            loading: true
          });
          fetch('/api/user/update', {
            method: 'post',
            headers: new Headers({
              'Accept': 'application/json'
            }),
            body: JSON.stringify({
              data: this.state.fields,
              id: this.state.user_id
            })
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            _this3.setState({
              loading: false,
              actions: data.actions
            });

            if (data.code != 0) {
              _this3.setState({
                errors: data.errors
              });
            }
          });
        } else {
          this.setState({
            loading: true
          });
          fetch('/api/user/create', {
            method: 'post',
            headers: new Headers({
              'Accept': 'application/json'
            }),
            body: JSON.stringify(this.state.fields)
          }).then(function (response) {
            return response.json();
          }).then(function (data) {
            console.log(data);

            _this3.setState({
              loading: false,
              actions: data.actions
            });

            if (data.code == 0) {
              // reset the forms
              var fields = {};
              fields["name"] = "";
              fields["surname"] = "";
              fields["email"] = "";
              fields["password"] = "";
              fields["confirm_password"] = "";
              fields["country"] = "";
              fields["colour"] = "";
              fields["birthday"] = "";
              fields["cellphone"] = "";
              fields["comments"] = "";

              _this3.setState({
                fields: fields
              });
            } else {
              _this3.setState({
                errors: data.errors
              });
            }
          });
        }
      }
    }
  }, {
    key: "validateForm",
    value: function validateForm() {
      var fields = this.state.fields;
      var errors = {};
      var formIsValid = true;

      if (!fields["name"]) {
        formIsValid = false;
        errors["name"] = "Please enter your name.";
      }

      if (typeof fields["name"] !== "undefined") {
        if (!fields["name"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["name"] = "Please enter alphabet characters only.";
        }
      }

      if (!fields["surname"]) {
        formIsValid = false;
        errors["surname"] = "Please enter your surname.";
      }

      if (typeof fields["surname"] !== "undefined") {
        if (!fields["surname"].match(/^[a-zA-Z ]*$/)) {
          formIsValid = false;
          errors["surname"] = "Please enter alphabet characters only.";
        }
      }

      if (!fields["email"]) {
        formIsValid = false;
        errors["email"] = "Please enter your email.";
      }

      if (typeof fields["email"] !== "undefined") {
        //regular expression for email validation
        var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if (!pattern.test(fields["email"])) {
          formIsValid = false;
          errors["email"] = "Please enter a valid email";
        }
      }

      if (!fields["password"]) {
        formIsValid = false;
        errors["password"] = "Please enter your password.";
      }

      if (typeof fields["password"] !== "undefined") {
        if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
          formIsValid = false;
          errors["password"] = "Please enter secure and strong password.";
        }
      }

      if (!fields["confirm_password"]) {
        formIsValid = false;
        errors["confirm_password"] = "Please confirm password.";
      }

      if (typeof fields["confirm_password"] !== "undefined") {
        if (fields["confirm_password"] != fields["password"]) {
          formIsValid = false;
          errors["confirm_password"] = "Both password don't match.";
        }
      }

      if (!fields["cellphone"] == "" && typeof fields["cellphone"] !== "undefined") {
        if (!fields["cellphone"].match(/^[0-9]{10}$/)) {
          formIsValid = false;
          errors["cellphone"] = "*Please enter valid cellphone no.";
        }
      }

      this.setState({
        errors: errors
      });
      return formIsValid;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state$fields$na, _this$state$errors$na, _this$state$fields$su, _this$state$errors$su, _this$state$fields$em, _this$state$errors$em, _this$state$fields$pa, _this$state$errors$pa, _this$state$fields$co, _this$state$errors$co, _this$state$fields$co2, _this$state$errors$co2, _this$state$errors$co3, _this$state$fields$bi, _this$state$errors$bi, _this$state$fields$ce, _this$state$errors$ce, _this$state$fields$co3, _this$state$errors$co4;

      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "container-fluid"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        "aria-live": "polite",
        "aria-atomic": "true",
        className: "position-relative"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "toast-container position-absolute top-0 end-0 p-3",
        id: "toastPlacement"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: 'toast bg-' + this.state.actions.status + (this.state.actions.actioned ? ' show' : ' hide'),
        role: "alert",
        "aria-live": "assertive",
        "aria-atomic": "true"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "d-flex text-light"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "toast-body"
      }, this.state.actions.msg), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("button", {
        type: "button",
        className: "btn-close me-2 m-auto",
        "data-bs-dismiss": "toast",
        "aria-label": "Close"
      }))))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "wrapper vh-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "row align-items-center h-100"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("form", {
        method: "post",
        name: "userRegistrationForm",
        className: "col-md-6 col-10 mx-auto shadow-lg p-4",
        onSubmit: this.submitUserForm
      }, this.state.loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "spinner-border text-primary",
        role: "status"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("span", {
        className: "sr-only"
      })) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "col-lg-6 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-floating"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        type: "text",
        className: "form-control",
        name: "name",
        placeholder: "name",
        value: (_this$state$fields$na = this.state.fields.name) !== null && _this$state$fields$na !== void 0 ? _this$state$fields$na : '',
        onKeyUp: this.handleKeyUp,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Name *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "text-danger"
      }, (_this$state$errors$na = this.state.errors.name) !== null && _this$state$errors$na !== void 0 ? _this$state$errors$na : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "col-lg-6 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-floating"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        type: "text",
        className: "form-control",
        name: "surname",
        placeholder: "surname",
        value: (_this$state$fields$su = this.state.fields.surname) !== null && _this$state$fields$su !== void 0 ? _this$state$fields$su : '',
        onKeyUp: this.handleKeyUp,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Surname *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "text-danger"
      }, (_this$state$errors$su = this.state.errors.surname) !== null && _this$state$errors$su !== void 0 ? _this$state$errors$su : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "col-md-12 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-floating"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        type: "email",
        className: "form-control",
        name: "email",
        placeholder: "email",
        value: (_this$state$fields$em = this.state.fields.email) !== null && _this$state$fields$em !== void 0 ? _this$state$fields$em : '',
        onKeyUp: this.handleKeyUp,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Email *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "text-danger"
      }, (_this$state$errors$em = this.state.errors.email) !== null && _this$state$errors$em !== void 0 ? _this$state$errors$em : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "col-lg-6 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-floating"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        type: "password",
        className: "form-control",
        name: "password",
        placeholder: "password",
        value: (_this$state$fields$pa = this.state.fields.password) !== null && _this$state$fields$pa !== void 0 ? _this$state$fields$pa : '',
        onKeyUp: this.handleKeyUp,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Password *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "text-danger"
      }, (_this$state$errors$pa = this.state.errors.password) !== null && _this$state$errors$pa !== void 0 ? _this$state$errors$pa : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "col-lg-6 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-floating"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        type: "password",
        className: "form-control",
        name: "confirm_password",
        placeholder: "confirm_password",
        value: (_this$state$fields$co = this.state.fields.confirm_password) !== null && _this$state$fields$co !== void 0 ? _this$state$fields$co : '',
        onKeyUp: this.handleKeyUp,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Confirm Password *")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "text-danger"
      }, (_this$state$errors$co = this.state.errors.confirm_password) !== null && _this$state$errors$co !== void 0 ? _this$state$errors$co : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-group mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-floating"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("select", {
        className: "form-control",
        name: "country",
        value: (_this$state$fields$co2 = this.state.fields.country) !== null && _this$state$fields$co2 !== void 0 ? _this$state$fields$co2 : '',
        onChange: this.handleChange.bind(this)
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: true
      }, "Select"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "South-Africa"
      }, "South-Africa"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "Nigeria"
      }, "Nigeria"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "USA"
      }, "USA"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "Zimbabwe"
      }, "Zimbabwe"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "Spain"
      }, "Spain"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "Italy"
      }, "Italy"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "Mexico"
      }, "Mexico"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "Canada"
      }, "Canada"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "Japan"
      }, "Japan"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("option", {
        value: "France"
      }, "France")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Select a country")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "text-danger"
      }, (_this$state$errors$co2 = this.state.errors.country) !== null && _this$state$errors$co2 !== void 0 ? _this$state$errors$co2 : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-group mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Favourite Colour")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-check form-check-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        className: "form-check-input",
        type: "radio",
        name: "flexRadioDefault",
        id: "flexRadioDefault1",
        value: "Red",
        checked: this.state.fields.colour === "Red",
        onChange: this.radioChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", {
        className: "form-check-label",
        htmlFor: "flexRadioDefault1"
      }, "Red")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-check form-check-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        className: "form-check-input",
        type: "radio",
        name: "flexRadioDefault",
        id: "flexRadioDefault2",
        value: "Blue",
        checked: this.state.fields.colour === "Blue",
        onChange: this.radioChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", {
        className: "form-check-label",
        htmlFor: "flexRadioDefault2"
      }, "Blue")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-check form-check-inline"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        className: "form-check-input",
        type: "radio",
        name: "flexRadioDefault",
        id: "flexRadioDefault3",
        value: "Green",
        checked: this.state.fields.colour === "Green",
        onChange: this.radioChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", {
        className: "form-check-label",
        htmlFor: "flexRadioDefault3"
      }, "Green")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "errorMsg"
      }, (_this$state$errors$co3 = this.state.errors.colour) !== null && _this$state$errors$co3 !== void 0 ? _this$state$errors$co3 : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "row"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "col-lg-6 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-floating"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        type: "date",
        className: "form-control",
        name: "birthday",
        plcaholder: "birthday",
        value: (_this$state$fields$bi = this.state.fields.birthday) !== null && _this$state$fields$bi !== void 0 ? _this$state$fields$bi : '',
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Birthday")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "text-danger"
      }, (_this$state$errors$bi = this.state.errors.birthday) !== null && _this$state$errors$bi !== void 0 ? _this$state$errors$bi : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "col-lg-6 mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-floating"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("input", {
        type: "text",
        className: "form-control",
        name: "cellphone",
        placeholder: "cellphone",
        value: (_this$state$fields$ce = this.state.fields.cellphone) !== null && _this$state$fields$ce !== void 0 ? _this$state$fields$ce : '',
        onKeyUp: this.handleKeyUp,
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Cellphone Number")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "text-danger"
      }, (_this$state$errors$ce = this.state.errors.cellphone) !== null && _this$state$errors$ce !== void 0 ? _this$state$errors$ce : ''))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-group mb-3"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "form-floating"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("textarea", {
        className: "form-control h-100px",
        name: "comments",
        placeholder: "comments",
        value: (_this$state$fields$co3 = this.state.fields.comments) !== null && _this$state$fields$co3 !== void 0 ? _this$state$fields$co3 : '',
        onChange: this.handleChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("label", null, "Comments")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("div", {
        className: "text-danger"
      }, (_this$state$errors$co4 = this.state.errors.comments) !== null && _this$state$errors$co4 !== void 0 ? _this$state$errors$co4 : '')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_20__.createElement("button", {
        className: 'btn ' + (this.state.user_id == '' ? 'btn-primary' : 'btn-success'),
        type: "submit"
      }, this.state.user_id == '' ? 'Submit form' : 'Update form')))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_20__.Component);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./assets/scss/app.scss":
/*!******************************!*\
  !*** ./assets/scss/app.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_core-js_modules_es_function_bind_js-node_modules_core-js_modules_es_func-f624ff"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Njc3MvYXBwLnNjc3MiXSwibmFtZXMiOlsiQXBwIiwiSG9tZSIsIlJlYWN0IiwiUmVhY3RET00iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3RhdGUiLCJmaWVsZHMiLCJuYW1lIiwic3VybmFtZSIsImVtYWlsIiwicGFzc3dvcmQiLCJjb25maXJtX3Bhc3N3b3JkIiwiY291bnRyeSIsImNvbG91ciIsImJpcnRoZGF5IiwiY2VsbHBob25lIiwiY29tbWVudHMiLCJ1c2VyX2lkIiwibG9hZGluZyIsImFjdGlvbnMiLCJhY3Rpb25lZCIsInN0YXR1cyIsIm1zZyIsImVycm9ycyIsInJhZGlvQ2hhbmdlIiwiYmluZCIsImhhbmRsZUNoYW5nZSIsImhhbmRsZUtleVVwIiwic3VibWl0VXNlckZvcm0iLCJwYXJhbXMiLCJwcm9wcyIsIm1hdGNoIiwiaWQiLCJmZXRjaCIsImhlYWRlcnMiLCJIZWFkZXJzIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJzZXRTdGF0ZSIsInRpbWVyIiwic2V0VGltZW91dCIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImRpc3BsYXkiLCJlIiwiY3VycmVudFRhcmdldCIsInZhbHVlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJ2YWxpZGF0ZUZvcm0iLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImNvZGUiLCJjb25zb2xlIiwibG9nIiwiZm9ybUlzVmFsaWQiLCJwYXR0ZXJuIiwiUmVnRXhwIiwidGVzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7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TCxDQUFXa0IsTUFBWCxDQUFrQlIsU0FBaEQseUVBQTZELEVBQTdELENBTEosQ0FSSixDQXBGSixlQW9HSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFLLGlCQUFTLEVBQUM7QUFBZixzQkFDSTtBQUFVLGlCQUFTLEVBQUMsc0JBQXBCO0FBQTJDLFlBQUksRUFBQyxVQUFoRDtBQUEyRCxtQkFBVyxFQUFDLFVBQXZFO0FBQWtGLGFBQUssNEJBQUUsS0FBS1YsS0FBTCxDQUFXQyxNQUFYLENBQWtCVSxRQUFwQiwyRUFBZ0MsRUFBdkg7QUFBMkgsZ0JBQVEsRUFBRSxLQUFLVTtBQUExSSxRQURKLGVBRUksNEVBRkosQ0FESixlQUtJO0FBQUssaUJBQVMsRUFBQztBQUFmLG1DQUE4QixLQUFLckIsS0FBTCxDQUFXa0IsTUFBWCxDQUFrQlAsUUFBaEQsMkVBQTRELEVBQTVELENBTEosQ0FwR0osZUEyR0k7QUFBUSxpQkFBUyxFQUFHLFVBQVUsS0FBS1gsS0FBTCxDQUFXWSxPQUFYLElBQXNCLEVBQXRCLEdBQTJCLGFBQTNCLEdBQTJDLGFBQXJELENBQXBCO0FBQTBGLFlBQUksRUFBQztBQUEvRixTQUNLLEtBQUtaLEtBQUwsQ0FBV1ksT0FBWCxJQUFzQixFQUF0QixHQUEyQixhQUEzQixHQUEyQyxhQURoRCxDQTNHSixDQURKLENBREosQ0FkSixDQURKO0FBb0lEOzs7O0VBdFdnQmhCLDZDOztBQXlXbkIsaUVBQWVELElBQWYsRTs7Ozs7Ozs7Ozs7O0FDM1dBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3RET00gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBIb21lIGZyb20gJy4vY29tcG9uZW50cy9ob21lJztcblxuaW1wb3J0ICcuLi9zY3NzL2FwcC5zY3NzJztcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8QnJvd3NlclJvdXRlcj5cbiAgICAgICAgICAgICAgICA8Um91dGUgcGF0aD1cIi86aWQ/XCIgY29tcG9uZW50PXtIb21lfSAvPlxuICAgICAgICAgICAgPC9Ccm93c2VyUm91dGVyPlxuICAgICAgICApXG4gICAgfVxufVxuXG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290JykpOyIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKTtcbiAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgIGZpZWxkczoge1xuICAgICAgICAgICAgbmFtZSA6ICcnLFxuICAgICAgICAgICAgc3VybmFtZTogJycsXG4gICAgICAgICAgICBlbWFpbDogJycsXG4gICAgICAgICAgICBwYXNzd29yZDogJycsXG4gICAgICAgICAgICBjb25maXJtX3Bhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIGNvdW50cnk6ICdTb3V0aC1BZnJpY2EnLFxuICAgICAgICAgICAgY29sb3VyOiAnJyxcbiAgICAgICAgICAgIGJpcnRoZGF5OiAnJyxcbiAgICAgICAgICAgIGNlbGxwaG9uZTogJycsXG4gICAgICAgICAgICBjb21tZW50czogJydcbiAgICAgICAgfSxcbiAgICAgICAgdXNlcl9pZDogJycsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBhY3Rpb25zOiB7XG4gICAgICAgICAgICBhY3Rpb25lZDogZmFsc2UsXG4gICAgICAgICAgICBzdGF0dXM6ICdsaWdodCcsXG4gICAgICAgICAgICBtc2c6ICcnLFxuICAgICAgICB9LFxuICAgICAgICBlcnJvcnM6IHt9XG4gICAgICB9XG4gICAgICB0aGlzLnJhZGlvQ2hhbmdlID0gdGhpcy5yYWRpb0NoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgdGhpcy5oYW5kbGVLZXlVcCA9IHRoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKTtcbiAgICAgIHRoaXMuc3VibWl0VXNlckZvcm0gPSB0aGlzLnN1Ym1pdFVzZXJGb3JtLmJpbmQodGhpcyk7XG5cbiAgICB9O1xuXG4gICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIGNvbnN0IHsgbWF0Y2g6IHsgcGFyYW1zIH0gfSA9IHRoaXMucHJvcHM7XG4gICAgICAgIGlmKHBhcmFtcy5pZCkge1xuICAgICAgICAgICAgZmV0Y2goYC9hcGkvdXNlci8ke3BhcmFtcy5pZH1gLCB7XG4gICAgICAgICAgICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnMgKHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJ30pLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmllbGRzOmRhdGF9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHt1c2VyX2lkOmRhdGEuaWR9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKCkge1xuICAgICAgICBjb25zdCB0aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvYXN0Jykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9LCAxMDAwMCk7XG5cbiAgICAgICAgdGhpcy5zdGF0ZS5hY3Rpb25zLmFjdGlvbmVkID09PSB0cnVlID8gdGltZXIgOiAnJztcbiAgICB9XG5cbiAgICByYWRpb0NoYW5nZShlKSB7XG4gICAgICAgIGxldCBmaWVsZHMgPSB0aGlzLnN0YXRlLmZpZWxkcztcbiAgICAgICAgZmllbGRzWydjb2xvdXInXSA9IGUuY3VycmVudFRhcmdldC52YWx1ZVxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBmaWVsZHNcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlQ2hhbmdlKGUpIHtcbiAgICAgIGxldCBmaWVsZHMgPSB0aGlzLnN0YXRlLmZpZWxkcztcbiAgICAgIGZpZWxkc1tlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGZpZWxkc1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlS2V5VXAoZSkge1xuICAgICAgICBsZXQgZXJyb3JzID0gdGhpcy5zdGF0ZS5lcnJvcnM7XG4gICAgICAgIGVycm9yc1tlLnRhcmdldC5uYW1lXSA9ICcnO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGVycm9yc1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzdWJtaXRVc2VyRm9ybShlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgeyBtYXRjaDogeyBwYXJhbXMgfSB9ID0gdGhpcy5wcm9wczsgICAgICAgIFxuICAgICAgICBpZiAodGhpcy52YWxpZGF0ZUZvcm0oKSkge1xuICAgICAgICAgICAgaWYocGFyYW1zLmlkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bG9hZGluZzp0cnVlfSlcbiAgICAgICAgICAgICAgICBmZXRjaCgnL2FwaS91c2VyL3VwZGF0ZScsIHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IG5ldyBIZWFkZXJzICh7ICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbid9KSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBkYXRhOiB0aGlzLnN0YXRlLmZpZWxkcywgaWQ6IHRoaXMuc3RhdGUudXNlcl9pZH0pLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nOmZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczpkYXRhLmFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczpkYXRhLmVycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2xvYWRpbmc6dHJ1ZX0pXG4gICAgICAgICAgICAgICAgZmV0Y2goJy9hcGkvdXNlci9jcmVhdGUnLCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiBuZXcgSGVhZGVycyAoeyAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nfSksXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHRoaXMuc3RhdGUuZmllbGRzKSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6ZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOmRhdGEuYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGUgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgdGhlIGZvcm1zXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRzID0ge307XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNbXCJuYW1lXCJdID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1tcInN1cm5hbWVcIl0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzW1wiZW1haWxcIl0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzW1wicGFzc3dvcmRcIl0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzW1wiY29uZmlybV9wYXNzd29yZFwiXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNbXCJjb3VudHJ5XCJdID0gXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkc1tcImNvbG91clwiXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNbXCJiaXJ0aGRheVwiXSA9IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHNbXCJjZWxscGhvbmVcIl0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzW1wiY29tbWVudHNcIl0gPSBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZmllbGRzOmZpZWxkc30pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JzOmRhdGEuZXJyb3JzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdmFsaWRhdGVGb3JtKCkge1xuXG4gICAgICAgIGxldCBmaWVsZHMgPSB0aGlzLnN0YXRlLmZpZWxkcztcbiAgICAgICAgbGV0IGVycm9ycyA9IHt9O1xuICAgICAgICBsZXQgZm9ybUlzVmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICghZmllbGRzW1wibmFtZVwiXSkge1xuICAgICAgICAgICAgZm9ybUlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9yc1tcIm5hbWVcIl0gPSBcIlBsZWFzZSBlbnRlciB5b3VyIG5hbWUuXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGZpZWxkc1tcIm5hbWVcIl0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICghZmllbGRzW1wibmFtZVwiXS5tYXRjaCgvXlthLXpBLVogXSokLykpIHtcbiAgICAgICAgICAgIGZvcm1Jc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBlcnJvcnNbXCJuYW1lXCJdID0gXCJQbGVhc2UgZW50ZXIgYWxwaGFiZXQgY2hhcmFjdGVycyBvbmx5LlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaWVsZHNbXCJzdXJuYW1lXCJdKSB7XG4gICAgICAgICAgICBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgZXJyb3JzW1wic3VybmFtZVwiXSA9IFwiUGxlYXNlIGVudGVyIHlvdXIgc3VybmFtZS5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZmllbGRzW1wic3VybmFtZVwiXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKCFmaWVsZHNbXCJzdXJuYW1lXCJdLm1hdGNoKC9eW2EtekEtWiBdKiQvKSkge1xuICAgICAgICAgICAgZm9ybUlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9yc1tcInN1cm5hbWVcIl0gPSBcIlBsZWFzZSBlbnRlciBhbHBoYWJldCBjaGFyYWN0ZXJzIG9ubHkuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWZpZWxkc1tcImVtYWlsXCJdKSB7XG4gICAgICAgICAgICBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgZXJyb3JzW1wiZW1haWxcIl0gPSBcIlBsZWFzZSBlbnRlciB5b3VyIGVtYWlsLlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBmaWVsZHNbXCJlbWFpbFwiXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgLy9yZWd1bGFyIGV4cHJlc3Npb24gZm9yIGVtYWlsIHZhbGlkYXRpb25cbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gbmV3IFJlZ0V4cCgvXigoXCJbXFx3LVxcc10rXCIpfChbXFx3LV0rKD86XFwuW1xcdy1dKykqKXwoXCJbXFx3LVxcc10rXCIpKFtcXHctXSsoPzpcXC5bXFx3LV0rKSopKShAKCg/OltcXHctXStcXC4pKlxcd1tcXHctXXswLDY2fSlcXC4oW2Etel17Miw2fSg/OlxcLlthLXpdezJ9KT8pJCl8KEBcXFs/KCgyNVswLTVdXFwufDJbMC00XVswLTldXFwufDFbMC05XXsyfVxcLnxbMC05XXsxLDJ9XFwuKSkoKDI1WzAtNV18MlswLTRdWzAtOV18MVswLTldezJ9fFswLTldezEsMn0pXFwuKXsyfSgyNVswLTVdfDJbMC00XVswLTldfDFbMC05XXsyfXxbMC05XXsxLDJ9KVxcXT8kKS9pKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybi50ZXN0KGZpZWxkc1tcImVtYWlsXCJdKSkge1xuICAgICAgICAgICAgZm9ybUlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9yc1tcImVtYWlsXCJdID0gXCJQbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaWVsZHNbXCJwYXNzd29yZFwiXSkge1xuICAgICAgICAgICAgZm9ybUlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGVycm9yc1tcInBhc3N3b3JkXCJdID0gXCJQbGVhc2UgZW50ZXIgeW91ciBwYXNzd29yZC5cIjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlb2YgZmllbGRzW1wicGFzc3dvcmRcIl0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmICghZmllbGRzW1wicGFzc3dvcmRcIl0ubWF0Y2goL14uKig/PS57OCx9KSg/PS4qXFxkKSg/PS4qW2Etel0pKD89LipbQS1aXSkoPz0uKltAIyQlJl0pLiokLykpIHtcbiAgICAgICAgICAgIGZvcm1Jc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBlcnJvcnNbXCJwYXNzd29yZFwiXSA9IFwiUGxlYXNlIGVudGVyIHNlY3VyZSBhbmQgc3Ryb25nIHBhc3N3b3JkLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFmaWVsZHNbXCJjb25maXJtX3Bhc3N3b3JkXCJdKSB7XG4gICAgICAgICAgICBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgZXJyb3JzW1wiY29uZmlybV9wYXNzd29yZFwiXSA9IFwiUGxlYXNlIGNvbmZpcm0gcGFzc3dvcmQuXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIGZpZWxkc1tcImNvbmZpcm1fcGFzc3dvcmRcIl0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIGlmIChmaWVsZHNbXCJjb25maXJtX3Bhc3N3b3JkXCJdICE9IGZpZWxkc1tcInBhc3N3b3JkXCJdKSB7XG4gICAgICAgICAgICBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgZXJyb3JzW1wiY29uZmlybV9wYXNzd29yZFwiXSA9IFwiQm90aCBwYXNzd29yZCBkb24ndCBtYXRjaC5cIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZmllbGRzW1wiY2VsbHBob25lXCJdID09IFwiXCIgJiYgdHlwZW9mIGZpZWxkc1tcImNlbGxwaG9uZVwiXSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgaWYgKCFmaWVsZHNbXCJjZWxscGhvbmVcIl0ubWF0Y2goL15bMC05XXsxMH0kLykpIHtcbiAgICAgICAgICAgIGZvcm1Jc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICBlcnJvcnNbXCJjZWxscGhvbmVcIl0gPSBcIipQbGVhc2UgZW50ZXIgdmFsaWQgY2VsbHBob25lIG5vLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBlcnJvcnM6IGVycm9yc1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZm9ybUlzVmFsaWQ7XG4gICAgfVxuXG4gICAgXG4gXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgICA8ZGl2IGFyaWEtbGl2ZT1cInBvbGl0ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiIGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2FzdC1jb250YWluZXIgcG9zaXRpb24tYWJzb2x1dGUgdG9wLTAgZW5kLTAgcC0zXCIgaWQ9XCJ0b2FzdFBsYWNlbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17ICd0b2FzdCBiZy0nICsgdGhpcy5zdGF0ZS5hY3Rpb25zLnN0YXR1cyArICh0aGlzLnN0YXRlLmFjdGlvbnMuYWN0aW9uZWQgPyAnIHNob3cnIDogJyBoaWRlJyl9IHJvbGU9XCJhbGVydFwiIGFyaWEtbGl2ZT1cImFzc2VydGl2ZVwiIGFyaWEtYXRvbWljPVwidHJ1ZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggdGV4dC1saWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9hc3QtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHRoaXMuc3RhdGUuYWN0aW9ucy5tc2cgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0bi1jbG9zZSBtZS0yIG0tYXV0b1wiIGRhdGEtYnMtZGlzbWlzcz1cInRvYXN0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+PC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cmFwcGVyIHZoLTEwMFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBoLTEwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJwb3N0XCIgbmFtZT1cInVzZXJSZWdpc3RyYXRpb25Gb3JtXCIgY2xhc3NOYW1lPVwiY29sLW1kLTYgY29sLTEwIG14LWF1dG8gc2hhZG93LWxnIHAtNFwiIG9uU3VibWl0PXt0aGlzLnN1Ym1pdFVzZXJGb3JtfT5cbiAgICAgICAgICAgICAgICAgICAgeyB0aGlzLnN0YXRlLmxvYWRpbmcgPyA8ZGl2IGNsYXNzTmFtZT1cInNwaW5uZXItYm9yZGVyIHRleHQtcHJpbWFyeVwiIHJvbGU9XCJzdGF0dXNcIj48c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+PC9zcGFuPjwvZGl2PiA6ICcnfVxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwibmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmZpZWxkcy5uYW1lID8/ICcnfSBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57dGhpcy5zdGF0ZS5lcnJvcnMubmFtZSA/PyAnJ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02IG1iLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIiBuYW1lPVwic3VybmFtZVwiIHBsYWNlaG9sZGVyPVwic3VybmFtZVwiIHZhbHVlPXt0aGlzLnN0YXRlLmZpZWxkcy5zdXJuYW1lID8/ICcnfSBvbktleVVwPXt0aGlzLmhhbmRsZUtleVVwfSBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+U3VybmFtZSAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57dGhpcy5zdGF0ZS5lcnJvcnMuc3VybmFtZSA/PyAnJ308L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwiZW1haWxcIiB2YWx1ZT17dGhpcy5zdGF0ZS5maWVsZHMuZW1haWwgPz8gJyd9IG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbCAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57dGhpcy5zdGF0ZS5lcnJvcnMuZW1haWwgPz8gJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5maWVsZHMucGFzc3dvcmQgPz8gJyd9IG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZCAqPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57dGhpcy5zdGF0ZS5lcnJvcnMucGFzc3dvcmQgPz8gJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJwYXNzd29yZFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjb25maXJtX3Bhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJjb25maXJtX3Bhc3N3b3JkXCIgdmFsdWU9e3RoaXMuc3RhdGUuZmllbGRzLmNvbmZpcm1fcGFzc3dvcmQgPz8gJyd9IG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXB9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5Db25maXJtIFBhc3N3b3JkICo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPnt0aGlzLnN0YXRlLmVycm9ycy5jb25maXJtX3Bhc3N3b3JkID8/ICcnfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJjb3VudHJ5XCIgdmFsdWU9e3RoaXMuc3RhdGUuZmllbGRzLmNvdW50cnkgPz8gJyd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU+U2VsZWN0PC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU291dGgtQWZyaWNhXCI+U291dGgtQWZyaWNhPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTmlnZXJpYVwiPk5pZ2VyaWE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJVU0FcIj5VU0E8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJaaW1iYWJ3ZVwiPlppbWJhYndlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiU3BhaW5cIj5TcGFpbjwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkl0YWx5XCI+SXRhbHk8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJNZXhpY29cIj5NZXhpY288L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJDYW5hZGFcIj5DYW5hZGE8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJKYXBhblwiPkphcGFuPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRnJhbmNlXCI+RnJhbmNlPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5TZWxlY3QgYSBjb3VudHJ5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e3RoaXMuc3RhdGUuZXJyb3JzLmNvdW50cnkgPz8gJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+PGxhYmVsPkZhdm91cml0ZSBDb2xvdXI8L2xhYmVsPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmbGV4UmFkaW9EZWZhdWx0XCIgaWQ9XCJmbGV4UmFkaW9EZWZhdWx0MVwiIHZhbHVlPVwiUmVkXCIgY2hlY2tlZD17dGhpcy5zdGF0ZS5maWVsZHMuY29sb3VyID09PSBcIlJlZFwifSBvbkNoYW5nZT17dGhpcy5yYWRpb0NoYW5nZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIiBodG1sRm9yPVwiZmxleFJhZGlvRGVmYXVsdDFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmbGV4UmFkaW9EZWZhdWx0XCIgaWQ9XCJmbGV4UmFkaW9EZWZhdWx0MlwiIHZhbHVlPVwiQmx1ZVwiIGNoZWNrZWQ9e3RoaXMuc3RhdGUuZmllbGRzLmNvbG91ciA9PT0gXCJCbHVlXCJ9IG9uQ2hhbmdlPXt0aGlzLnJhZGlvQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiIGh0bWxGb3I9XCJmbGV4UmFkaW9EZWZhdWx0MlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQmx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVjayBmb3JtLWNoZWNrLWlubGluZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmbGV4UmFkaW9EZWZhdWx0XCIgaWQ9XCJmbGV4UmFkaW9EZWZhdWx0M1wiIHZhbHVlPVwiR3JlZW5cIiBjaGVja2VkPXt0aGlzLnN0YXRlLmZpZWxkcy5jb2xvdXIgPT09IFwiR3JlZW5cIn0gb25DaGFuZ2U9e3RoaXMucmFkaW9DaGFuZ2V9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCIgaHRtbEZvcj1cImZsZXhSYWRpb0RlZmF1bHQzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmVlblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JNc2dcIj57dGhpcy5zdGF0ZS5lcnJvcnMuY29sb3VyID8/ICcnfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTYgbWItM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZmxvYXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIG5hbWU9XCJiaXJ0aGRheVwiIHBsY2Fob2xkZXI9XCJiaXJ0aGRheVwiIHZhbHVlPXt0aGlzLnN0YXRlLmZpZWxkcy5iaXJ0aGRheSA/PyAnJ30gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkJpcnRoZGF5PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj57dGhpcy5zdGF0ZS5lcnJvcnMuYmlydGhkYXkgPz8gJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNiBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1mbG9hdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT1cImNlbGxwaG9uZVwiIHBsYWNlaG9sZGVyPVwiY2VsbHBob25lXCIgdmFsdWU9e3RoaXMuc3RhdGUuZmllbGRzLmNlbGxwaG9uZSA/PyAnJ30gb25LZXlVcD17dGhpcy5oYW5kbGVLZXlVcH0gb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNlbGxwaG9uZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPnt0aGlzLnN0YXRlLmVycm9ycy5jZWxscGhvbmUgPz8gJyd9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWZsb2F0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgaC0xMDBweFwiIG5hbWU9XCJjb21tZW50c1wiIHBsYWNlaG9sZGVyPVwiY29tbWVudHNcIiB2YWx1ZT17dGhpcy5zdGF0ZS5maWVsZHMuY29tbWVudHMgPz8gJyd9IG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX0+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkNvbW1lbnRzPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+e3RoaXMuc3RhdGUuZXJyb3JzLmNvbW1lbnRzID8/ICcnfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17ICdidG4gJyArICh0aGlzLnN0YXRlLnVzZXJfaWQgPT0gJycgPyAnYnRuLXByaW1hcnknIDogJ2J0bi1zdWNjZXNzJykgfSB0eXBlPVwic3VibWl0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUudXNlcl9pZCA9PSAnJyA/ICdTdWJtaXQgZm9ybScgOiAnVXBkYXRlIGZvcm0nIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sInNvdXJjZVJvb3QiOiIifQ==