"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var React = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */
var MTableActions =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MTableActions, _React$Component);

  function MTableActions() {
    (0, _classCallCheck2.default)(this, MTableActions);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MTableActions).apply(this, arguments));
  }

  (0, _createClass2.default)(MTableActions, [{
    key: "renderButton",
    value: function renderButton(action, index) {
      var _this = this;

      if (typeof action === 'function') {
        action = action(this.props.data);

        if (!action) {
          return null;
        }
      }

      var button = React.createElement(_core.IconButton, {
        key: action.icon + '' + index,
        color: "inherit",
        disabled: action.disabled,
        onClick: function onClick(event) {
          return action.onClick && action.onClick(event, _this.props.data);
        }
      }, typeof action.icon === "string" ? React.createElement(_core.Icon, action.iconProps, action.icon) : React.createElement(action.icon, action.iconProps));

      if (action.tooltip && !action.disabled) {
        return React.createElement(_core.Tooltip, {
          title: action.tooltip,
          key: action.tooltip + '' + index
        }, button);
      } else {
        return button;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.actions) {
        return this.props.actions.map(function (action, index) {
          return _this2.renderButton(action, index);
        });
      }

      return null;
    }
  }]);
  return MTableActions;
}(React.Component);

MTableActions.defaultProps = {
  actions: [],
  data: {}
};
MTableActions.propTypes = {
  actions: _propTypes.default.array.isRequired,
  data: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.arrayOf(_propTypes.default.object)])
};
var _default = MTableActions;
exports.default = _default;