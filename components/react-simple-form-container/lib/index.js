'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (_ref) {
  var _ref$fields = _ref.fields;
  var fields = _ref$fields === undefined ? [] : _ref$fields;
  var _ref$fieldGroups = _ref.fieldGroups;
  var fieldGroups = _ref$fieldGroups === undefined ? {} : _ref$fieldGroups;
  var getValues = _ref.getValues;
  var _ref$getErrors = _ref.getErrors;
  var getErrors = _ref$getErrors === undefined ? defaultReturnObj : _ref$getErrors;
  var _ref$formatError = _ref.formatError;
  var formatError = _ref$formatError === undefined ? defaultReturnObj : _ref$formatError;
  var _ref$toForm = _ref.toForm;
  var toForm = _ref$toForm === undefined ? {} : _ref$toForm;
  var _ref$fromForm = _ref.fromForm;
  var fromForm = _ref$fromForm === undefined ? {} : _ref$fromForm;

  return function (Component) {
    return _react2.default.createClass({
      getInitialState: function getInitialState() {
        return {
          values: (0, _lodash2.default)(getValues(this.props), fields) || {}
        };
      },
      componentWillReceiveProps: function componentWillReceiveProps(props) {
        var state = {
          values: (0, _lodash2.default)(getValues(props), fields) || {}
        };
        this.setState(state);
      },
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(_extends({}, this.state.values));
      },
      triggerChange: function triggerChange() {
        if (this.props.onChange) {
          this.props.onChange({
            currentTarget: {
              value: _extends({}, this.state.values)
            }
          });
        }
      },
      buildFieldProps: function buildFieldProps(errors) {
        var _this = this;

        return fields.reduce(function (obj, f) {
          obj[f] = {
            name: f,
            value: toForm[f] ? toForm[f](_this.state.values[f]) : _this.state.values[f],
            error: errors[f] ? formatError(f, errors[f]) : null,
            onChange: function onChange(e) {

              var target = e.currentTarget;
              var value = target.value;

              if (target.type === 'checkbox' || target.type === 'radio') {
                value = target.checked;
              }

              _this.setState(function (state) {
                return {
                  values: _extends({}, state.values, _defineProperty({}, f, fromForm[f] ? fromForm[f](value) : value))
                };
              }, function () {
                return _this.triggerChange();
              });
            }
          };

          if (typeof obj[f].value === 'boolean') {
            obj[f].checked = obj[f].value;
          }

          return obj;
        }, {});
      },
      buildFieldGroups: function buildFieldGroups(errors) {
        var _this2 = this;

        return Object.keys(fieldGroups).reduce(function (obj, fg) {
          var values = toForm[fg] ? toForm[fg](_this2.state.values[fg] || []) : _this2.state.values[fg] || [];

          obj[fg] = {
            fields: values.map(function (val, i) {
              return {
                value: val,
                onChange: function onChange(e) {
                  var target = e.currentTarget;
                  var value = target.value;

                  if (target.type === 'checkbox' || target.type === 'radio') {
                    value = target.checked;
                  }

                  var vals = [].concat(_toConsumableArray(_this2.state.values[fg] || []));
                  vals[i] = value;

                  _this2.setState(function (state) {
                    return {
                      values: _extends({}, state.values, _defineProperty({}, fg, vals))
                    };
                  });
                }
              };
            }),
            addOne: function addOne() {
              var toAdd = fieldGroups[fg].addOne();
              _this2.setState(function (state) {
                return {
                  values: _extends({}, state.values, _defineProperty({}, fg, [].concat(_toConsumableArray(state.values[fg] || []), [toAdd])))
                };
              });
            },
            removeOne: function removeOne(idx) {
              var vals = [].concat(_toConsumableArray(_this2.state.values[fg] || []));
              vals.splice(idx, 1);

              _this2.setState(function (state) {
                return {
                  values: _extends({}, state.values, _defineProperty({}, fg, vals))
                };
              });
            }
          };

          return obj;
        }, {});
      },
      render: function render() {
        var errors = getErrors(this.props) || [];
        var fieldProps = this.buildFieldProps(errors);
        var fieldGroupProps = this.buildFieldGroups(errors);
        var hasErrors = Object.keys(errors).length > 0;
        var errorMessage = this.props.errorMessage || hasErrors && 'Please correct the errors in the form';

        return _react2.default.createElement(Component, _extends({}, this.props, { fields: fieldProps, fieldGroups: fieldGroupProps, errorMessage: errorMessage, onSubmit: this.onSubmit, onChange: this.onChange }));
      }
    });
  };
};

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.pick');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var defaultReturnObj = function defaultReturnObj() {
  return {};
};