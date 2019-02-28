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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */
var MTableGroupRow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MTableGroupRow, _React$Component);

  function MTableGroupRow() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, MTableGroupRow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MTableGroupRow)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "rotateIconStyle", function (isOpen) {
      return {
        transform: isOpen ? 'rotate(90deg)' : 'none'
      };
    });
    return _this;
  }

  (0, _createClass2.default)(MTableGroupRow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var colSpan = this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden;
      }).length;
      var groupedColumn = this.props.groups[this.props.level];
      var detail;

      if (groupedColumn.tableData.isGroupExpanded[this.props.value]) {
        if (this.props.groups.length > this.props.level + 1) {
          // Is there another group
          var keys = Object.keys(this.props.data);
          detail = keys.map(function (key) {
            return React.createElement(_this2.props.components.GroupRow, {
              columns: _this2.props.columns,
              components: _this2.props.components,
              data: _this2.props.data[key],
              groups: _this2.props.groups,
              getFieldValue: _this2.props.getFieldValue,
              icons: _this2.props.icons,
              level: _this2.props.level + 1,
              onGroupExpandChanged: _this2.props.onGroupExpandChanged,
              options: _this2.props.options,
              value: key
            });
          });
        } else {
          detail = this.props.data.map(function (rowData) {
            return React.createElement(_this2.props.components.Row, {
              columns: _this2.props.columns,
              components: _this2.props.components,
              data: rowData,
              getFieldValue: _this2.props.getFieldValue,
              options: _this2.props.options
            });
          });
        }
      }

      var freeCells = [];

      for (var i = 0; i < this.props.level; i++) {
        freeCells.push(React.createElement(_core.TableCell, {
          padding: "checkbox"
        }));
      }

      return React.createElement(React.Fragment, null, React.createElement(_core.TableRow, null, freeCells, React.createElement(_core.TableCell, {
        colSpan: colSpan,
        padding: "none"
      }, React.createElement(_core.IconButton, {
        style: (0, _objectSpread2.default)({
          transition: 'all ease 200ms'
        }, this.rotateIconStyle(groupedColumn.tableData.isGroupExpanded[this.props.value])),
        onClick: function onClick(event) {
          _this2.props.onGroupExpandChanged(groupedColumn, _this2.props.value);
        }
      }, React.createElement(this.props.icons.DetailPanel, null)), React.createElement("b", null, groupedColumn.title + ": "), this.props.value)), detail);
    }
  }]);
  return MTableGroupRow;
}(React.Component);

exports.default = MTableGroupRow;
MTableGroupRow.defaultProps = {};
MTableGroupRow.propTypes = {};