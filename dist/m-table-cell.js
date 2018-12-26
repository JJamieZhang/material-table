"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var React = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */
var MTableCell =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MTableCell, _React$Component);

  function MTableCell() {
    (0, _classCallCheck2.default)(this, MTableCell);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MTableCell).apply(this, arguments));
  }

  (0, _createClass2.default)(MTableCell, [{
    key: "getRenderValue",
    value: function getRenderValue() {
      if (this.props.columnDef.emptyValue !== undefined && (this.props.value === undefined || this.props.value === null)) {
        return this.getEmptyValue(this.props.columnDef.emptyValue);
      }

      if (this.props.columnDef.render) {
        return this.props.columnDef.render(this.props.rowData);
      } else if (this.props.columnDef.type === 'boolean') {
        var style = {
          textAlign: 'center',
          width: '48px'
        };

        if (this.props.value) {
          return React.createElement(this.props.icons.Check, {
            style: style
          });
        } else {
          return React.createElement(this.props.icons.ThirdStateCheck, {
            style: style
          });
        }
      } else if (this.props.columnDef.type === 'date') {
        if (this.props.value instanceof Date) {
          return this.props.value.toLocaleDateString();
        } else {
          return this.props.value;
        }
      } else if (this.props.columnDef.type === 'time') {
        if (this.props.value instanceof Date) {
          return this.props.value.toLocaleTimeString();
        } else {
          return this.props.value;
        }
      } else if (this.props.columnDef.type === 'dateTime') {
        if (this.props.value instanceof Date) {
          return this.props.value.toLocaleString();
        } else {
          return this.props.value;
        }
      } else if (this.props.columnDef.type === 'currency') {
        return this.getCurrencyValue(this.props.columnDef.currencySetting, this.props.value);
      }

      return this.props.value;
    }
  }, {
    key: "getEmptyValue",
    value: function getEmptyValue(emptyValue) {
      if (typeof emptyValue === 'function') {
        return this.props.columnDef.emptyValue(this.props.rowData);
      } else {
        return emptyValue;
      }
    }
  }, {
    key: "getCurrencyValue",
    value: function getCurrencyValue(currencySetting, value) {
      if (currencySetting !== undefined) {
        return new Intl.NumberFormat(currencySetting.locale !== undefined ? currencySetting.locale : 'en-US', {
          style: 'currency',
          currency: currencySetting.currencyCode !== undefined ? currencySetting.currencyCode : 'USD',
          minimumFractionDigits: currencySetting.minimumFractionDigits !== undefined ? currencySetting.minimumFractionDigits : 2,
          maximumFractionDigits: currencySetting.maximumFractionDigits !== undefined ? currencySetting.maximumFractionDigits : 2
        }).format(value !== undefined ? value : 0);
      } else {
        return new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(value !== undefined ? value : 0);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var cellStyle = {};

      if (typeof this.props.columnDef.cellStyle === 'function') {
        cellStyle = (0, _objectSpread2.default)({}, cellStyle, this.props.columnDef.cellStyle(this.props.value));
      } else {
        cellStyle = (0, _objectSpread2.default)({}, cellStyle, this.props.columnDef.cellStyle);
      }

      return React.createElement(_core.TableCell, {
        style: cellStyle,
        align: ['numeric'].indexOf(this.props.columnDef.type) !== -1 ? "right" : "left"
      }, this.getRenderValue());
    }
  }]);
  return MTableCell;
}(React.Component);

exports.default = MTableCell;
MTableCell.defaultProps = {
  columnDef: {},
  value: ''
};
MTableCell.propTypes = {
  columnDef: _propTypes.default.object.isRequired,
  value: _propTypes.default.any.isRequired,
  rowData: _propTypes.default.object
};