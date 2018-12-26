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

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */
var MTableHeader =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MTableHeader, _React$Component);

  function MTableHeader() {
    (0, _classCallCheck2.default)(this, MTableHeader);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MTableHeader).apply(this, arguments));
  }

  (0, _createClass2.default)(MTableHeader, [{
    key: "renderHeader",
    value: function renderHeader() {
      var _this = this;

      var mapArr = this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden;
      }).map(function (columnDef) {
        return React.createElement(_core.TableCell, {
          key: columnDef.tableData.id,
          align: ['numeric'].indexOf(columnDef.type) !== -1 ? "right" : "left"
        }, columnDef.sort !== false && columnDef.sorting !== false && _this.props.sorting ? React.createElement(_core.TableSortLabel, {
          active: _this.props.orderBy === columnDef.field,
          direction: _this.props.orderDirection || 'asc',
          onClick: function onClick() {
            var orderDirection = columnDef.field !== _this.props.orderBy ? 'asc' : _this.props.orderDirection === 'asc' ? 'desc' : 'asc';

            _this.props.onOrderChange(columnDef.field, orderDirection);
          }
        }, columnDef.title) : columnDef.title);
      });
      return mapArr;
    }
  }, {
    key: "renderActionsHeader",
    value: function renderActionsHeader() {
      var localization = (0, _objectSpread2.default)({}, MTableHeader.defaultProps.localization, this.props.localization);
      return React.createElement(_core.TableCell, {
        key: "key-actions-column"
      }, React.createElement(_core.TableSortLabel, null, localization.actions));
    }
  }, {
    key: "renderSelectionHeader",
    value: function renderSelectionHeader() {
      var _this2 = this;

      return React.createElement(_core.TableCell, {
        padding: "checkbox",
        key: "key-selection-column"
      }, React.createElement(_core.Checkbox, {
        indeterminate: this.props.selectedCount > 0 && this.props.selectedCount < this.props.dataCount,
        checked: this.props.selectedCount === this.props.dataCount,
        onChange: function onChange(event, checked) {
          return _this2.props.onAllSelected && _this2.props.onAllSelected(checked);
        }
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var headers = this.renderHeader();

      if (this.props.hasSelection) {
        headers.splice(0, 0, this.renderSelectionHeader());
      }

      if (this.props.showActionsColumn) {
        if (this.props.actionsHeaderIndex >= 0) {
          var endPos = 0;

          if (this.props.hasSelection) {
            endPos = 1;
          }

          headers.splice(this.props.actionsHeaderIndex + endPos, 0, this.renderActionsHeader());
        } else if (this.props.actionsHeaderIndex === -1) {
          headers.push(this.renderActionsHeader());
        }
      }

      return React.createElement(_core.TableHead, null, React.createElement(_core.TableRow, null, headers));
    }
  }]);
  return MTableHeader;
}(React.Component);

MTableHeader.defaultProps = {
  dataCount: 0,
  hasSelection: false,
  selectedCount: 0,
  sorting: true,
  localization: {
    actions: 'Actions'
  },
  orderBy: undefined,
  orderDirection: 'asc',
  actionsHeaderIndex: 0
};
MTableHeader.propTypes = {
  columns: _propTypes.default.array.isRequired,
  dataCount: _propTypes.default.number,
  hasSelection: _propTypes.default.bool,
  localization: _propTypes.default.object,
  selectedCount: _propTypes.default.number,
  sorting: _propTypes.default.bool,
  onAllSelected: _propTypes.default.func,
  onOrderChange: _propTypes.default.func,
  orderBy: _propTypes.default.string,
  orderDirection: _propTypes.default.string,
  actionsHeaderIndex: _propTypes.default.number,
  showActionsColumn: _propTypes.default.bool
};
var _default = MTableHeader;
exports.default = _default;