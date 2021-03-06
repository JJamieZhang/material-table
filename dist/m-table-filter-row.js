"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _core = require("@material-ui/core");

var _pickers = require("@material-ui/pickers");

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

/* eslint-disable no-unused-vars */
var ITEM_HEIGHT = 48;
var ITEM_PADDING_TOP = 8;
var MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

var MTableFilterRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MTableFilterRow, _React$Component);

  function MTableFilterRow() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, MTableFilterRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MTableFilterRow)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderLookupFilter", function (columnDef) {
      return React.createElement(_core.FormControl, {
        fullWidth: true
      }, React.createElement(_core.Select, {
        multiple: true,
        value: columnDef.tableData.filterValue || [],
        onChange: function onChange(event) {
          _this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        },
        renderValue: function renderValue(selecteds) {
          return selecteds.map(function (selected) {
            return columnDef.lookup[selected];
          }).join(', ');
        },
        MenuProps: MenuProps
      }, Object.keys(columnDef.lookup).map(function (key) {
        var v = !!columnDef.tableData.filterValue && columnDef.tableData.filterValue.indexOf(key.toString()) > -1;
        return React.createElement(_core.MenuItem, {
          key: key,
          value: key
        }, React.createElement(_core.Checkbox, {
          checked: v
        }), React.createElement(_core.ListItemText, {
          primary: columnDef.lookup[key]
        }));
      })));
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderBooleanFilter", function (columnDef) {
      return React.createElement(_core.Checkbox, {
        indeterminate: columnDef.tableData.filterValue === undefined,
        checked: columnDef.tableData.filterValue === 'checked',
        onChange: function onChange() {
          var val;

          if (columnDef.tableData.filterValue === undefined) {
            val = 'checked';
          } else if (columnDef.tableData.filterValue === 'checked') {
            val = 'unchecked';
          }

          _this.props.onFilterChanged(columnDef.tableData.id, val);
        },
        style: {
          paddingTop: '4px',
          paddingBottom: '4px'
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderDefaultFilter", function (columnDef) {
      var localization = (0, _objectSpread2.default)({}, MTableFilterRow.defaultProps.localization, _this.props.localization);
      return React.createElement(_core.TextField, {
        fullWidth: true,
        style: columnDef.type === 'numeric' ? {
          float: 'right'
        } : {},
        type: columnDef.type === 'numeric' ? 'number' : 'text',
        value: columnDef.tableData.filterValue || '',
        onChange: function onChange(event) {
          _this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        }
      });
    });
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "renderDateTypeFilter", function (columnDef) {
      var dateInputElement = null;

      var onDateInputChange = function onDateInputChange(date) {
        return _this.props.onFilterChanged(columnDef.tableData.id, date);
      };

      var commonProps = {
        clearable: true,
        value: columnDef.tableData.filterValue || null,
        onChange: onDateInputChange
      };

      if (columnDef.type === 'date') {
        dateInputElement = React.createElement(_pickers.KeyboardDatePicker, (0, _extends2.default)({}, commonProps, {
          format: "MM/DD/YYYY",
          placeholder: "MM/DD/YYYY"
        }));
      } else if (columnDef.type === 'datetime') {
        dateInputElement = React.createElement(_pickers.KeyboardDatePicker, (0, _extends2.default)({}, commonProps, {
          format: "MM/DD/YYYY HH:mm",
          placeholder: "MM/DD/YYYY HH:MM"
        }));
      } else if (columnDef.type === 'time') {
        dateInputElement = React.createElement(_pickers.KeyboardTimePicker, (0, _extends2.default)({}, commonProps, {
          format: "HH:mm",
          placeholder: "HH:MM"
        }));
      }

      return React.createElement(_pickers.MuiPickersUtilsProvider, {
        utils: _moment.default
      }, dateInputElement);
    });
    return _this;
  }

  (0, _createClass2.default)(MTableFilterRow, [{
    key: "getComponentForColumn",
    value: function getComponentForColumn(columnDef) {
      if (columnDef.filtering === false) {
        return null;
      }

      if (columnDef.field) {
        if (columnDef.lookup) {
          return this.renderLookupFilter(columnDef);
        } else if (columnDef.type === 'boolean') {
          return this.renderBooleanFilter(columnDef);
        } else if (['date', 'datetime', 'time'].includes(columnDef.type)) {
          return this.renderDateTypeFilter(columnDef);
        } else {
          return this.renderDefaultFilter(columnDef);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var columns = this.props.columns.map(function (columnDef) {
        return React.createElement(_core.TableCell, {
          key: columnDef.tableData.id
        }, _this2.getComponentForColumn(columnDef));
      });

      if (this.props.selection) {
        columns.splice(0, 0, React.createElement(_core.TableCell, {
          key: "key-filterRow-selection",
          style: {
            padding: '0 12px'
          }
        }, !this.props.options.serverPaging && React.createElement(_core.Checkbox, {
          onChange: this.props.onFilterSelectionChanged
        })));
      }

      if (this.props.emptyCell && this.props.hasActions) {
        if (this.props.actionsColumnIndex === -1) {
          columns.push(React.createElement(_core.TableCell, {
            key: "key-filterRow-action"
          }));
        } else {
          var endPos = 0;

          if (this.props.selection) {
            endPos = 1;
          }

          columns.splice(this.props.actionsColumnIndex + endPos, 0, React.createElement(_core.TableCell, null));
        }
      }

      return React.createElement(_core.TableRow, {
        style: {
          height: 10
        }
      }, columns);
    }
  }]);
  return MTableFilterRow;
}(React.Component);

MTableFilterRow.defaultProps = {
  emptyCell: false,
  columns: [],
  selection: false,
  hasActions: false,
  localization: {
    filterTooltip: 'Filter'
  }
};
MTableFilterRow.propTypes = {
  emptyCell: _propTypes.default.bool,
  columns: _propTypes.default.array.isRequired,
  onFilterChanged: _propTypes.default.func.isRequired,
  selection: _propTypes.default.bool.isRequired,
  onFilterSelectionChanged: _propTypes.default.func.isRequired,
  actionsColumnIndex: _propTypes.default.number,
  hasActions: _propTypes.default.bool,
  localization: _propTypes.default.object,
  options: _propTypes.default.object.isRequired
};
var _default = MTableFilterRow;
exports.default = _default;