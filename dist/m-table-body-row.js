"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

var _classnames2 = _interopRequireDefault(require("classnames"));

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */
var MTableBodyRowClass =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MTableBodyRowClass, _React$Component);

  function MTableBodyRowClass() {
    (0, _classCallCheck2.default)(this, MTableBodyRowClass);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MTableBodyRowClass).apply(this, arguments));
  }

  (0, _createClass2.default)(MTableBodyRowClass, [{
    key: "renderColumns",
    value: function renderColumns() {
      var _this = this;

      var mapArr = this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden;
      }).map(function (columnDef) {
        var value = _this.props.getFieldValue(_this.props.data, columnDef);

        return React.createElement(_this.props.components.Cell, {
          icons: _this.props.icons,
          columnDef: columnDef,
          value: value,
          key: columnDef.tableData.id,
          rowData: _this.props.data,
          options: _this.props.options
        });
      });
      return mapArr;
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      return React.createElement(_core.TableCell, {
        style: {
          paddingTop: 0,
          paddingBottom: 0
        },
        key: "key-actions-column"
      }, React.createElement("div", {
        style: {
          display: 'flex'
        }
      }, React.createElement(this.props.components.Actions, {
        data: this.props.data,
        actions: this.props.actions.filter(function (a) {
          return a.type === 'row';
        })
      })));
    }
  }, {
    key: "renderSelectionColumn",
    value: function renderSelectionColumn() {
      return React.createElement(_core.TableCell, {
        padding: "checkbox",
        key: "key-selection-column"
      }, React.createElement(_core.Checkbox, {
        checked: this.props.data.tableData.checked === true,
        value: "".concat(this.props.data.tableData.id),
        onChange: this.props.onRowSelected
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _classnames,
          _this2 = this;

      var _this$props = this.props,
          options = _this$props.options,
          classes = _this$props.classes;
      var columns = this.renderColumns();

      if (options.selection) {
        columns.splice(0, 0, this.renderSelectionColumn());
      }

      if (this.props.actions && this.props.actions.filter(function (a) {
        return a.type === 'row';
      }).length > 0) {
        if (options.actionsColumnIndex === -1) {
          columns.push(this.renderActions());
        } else if (options.actionsColumnIndex >= 0) {
          var endPos = 0;

          if (options.selection) {
            endPos = 1;
          }

          columns.splice(options.actionsColumnIndex + endPos, 0, this.renderActions());
        }
      }

      var className = (0, _classnames2.default)((_classnames = {}, (0, _defineProperty2.default)(_classnames, classes.altRows, options.altRows !== false && this.props.index % 2 === 0), (0, _defineProperty2.default)(_classnames, classes.pointer, this.props.onRowClick), _classnames));
      return React.createElement(_core.TableRow, {
        className: className,
        hover: options.hover,
        onClick: function onClick($) {
          return _this2.props.onRowClick && _this2.props.onRowClick($, _this2.props.data);
        }
      }, columns);
    }
  }]);
  return MTableBodyRowClass;
}(React.Component);

MTableBodyRowClass.defaultProps = {
  actions: [],
  index: 0,
  data: {},
  options: {}
};
MTableBodyRowClass.propTypes = {
  classes: _propTypes.default.any,
  actions: _propTypes.default.array,
  icons: _propTypes.default.any.isRequired,
  index: _propTypes.default.number.isRequired,
  data: _propTypes.default.object.isRequired,
  options: _propTypes.default.object.isRequired,
  onRowSelected: _propTypes.default.func,
  getFieldValue: _propTypes.default.func.isRequired,
  columns: _propTypes.default.array,
  onRowClick: _propTypes.default.func
};

var _default = (0, _core.withStyles)(function (theme) {
  return {
    altRows: {
      backgroundColor: '#f6f6f6'
    },
    pointer: {
      cursor: 'pointer'
    }
  };
}, {
  withTheme: true
})(MTableBodyRowClass);

exports.default = _default;