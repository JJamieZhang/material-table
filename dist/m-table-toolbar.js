"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@material-ui/core");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _classnames = _interopRequireDefault(require("classnames"));

var _filefy = require("filefy");

var _propTypes = _interopRequireDefault(require("prop-types"));

var React = _interopRequireWildcard(require("react"));

/* eslint-disable no-unused-vars */

/* eslint-enable no-unused-vars */
var MTableToolbar =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(MTableToolbar, _React$Component);

  function MTableToolbar(props) {
    var _this;

    (0, _classCallCheck2.default)(this, MTableToolbar);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(MTableToolbar).call(this, props));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), "exportCsv", function () {
      var columns = _this.props.columns.filter(function (columnDef) {
        return !columnDef.hidden && columnDef.field;
      });

      var data = _this.props.renderData.map(function (rowData) {
        return columns.map(function (columnDef) {
          return rowData[columnDef.field];
        });
      }); // eslint-disable-next-line no-unused-vars


      var builder = new _filefy.CsvBuilder((_this.props.title || 'data') + '.csv').setDelimeter(_this.props.exportDelimiter).setColumns(columns.map(function (columnDef) {
        return columnDef.title;
      })).addRows(data).exportFile();

      _this.setState({
        exportButtonAnchorEl: null
      });
    });
    _this.state = {
      columnsButtonAnchorEl: null,
      exportButtonAnchorEl: null
    };
    return _this;
  }

  (0, _createClass2.default)(MTableToolbar, [{
    key: "renderSearch",
    value: function renderSearch() {
      var _this2 = this;

      var localization = (0, _objectSpread2.default)({}, MTableToolbar.defaultProps.localization, this.props.localization);

      if (this.props.search) {
        return React.createElement(_core.TextField, {
          value: this.props.searchText,
          onChange: function onChange(event) {
            return _this2.props.onSearchChanged(event.target.value);
          },
          color: "inherit",
          InputProps: {
            startAdornment: React.createElement(_core.InputAdornment, {
              position: "start"
            }, React.createElement(_core.Tooltip, {
              title: localization.searchTooltip
            }, React.createElement(this.props.icons.Search, {
              color: "inherit"
            })))
          }
        });
      } else {
        return null;
      }
    }
  }, {
    key: "renderDefaultActions",
    value: function renderDefaultActions() {
      var _this3 = this;

      var localization = (0, _objectSpread2.default)({}, MTableToolbar.defaultProps.localization, this.props.localization);
      return React.createElement("div", null, this.renderSearch(), this.props.toggleFilter && React.createElement("span", null, React.createElement(_core.Tooltip, {
        title: localization.toggleFilter
      }, React.createElement(_core.IconButton, {
        color: "inherit",
        onClick: function onClick() {
          return _this3.props.onToggleFilter();
        },
        "aria-label": localization.toggleFilterAriaLabel
      }, React.createElement(this.props.icons.Filter, null)))), this.props.columnsButton && React.createElement("span", null, React.createElement(_core.Tooltip, {
        title: localization.showColumnsTitle
      }, React.createElement(_core.IconButton, {
        color: "inherit",
        onClick: function onClick(event) {
          return _this3.setState({
            columnsButtonAnchorEl: event.currentTarget
          });
        },
        "aria-label": localization.showColumnsAriaLabel
      }, React.createElement(this.props.icons.ViewColumn, null))), React.createElement(_core.Menu, {
        anchorEl: this.state.columnsButtonAnchorEl,
        open: Boolean(this.state.columnsButtonAnchorEl),
        onClose: function onClose() {
          return _this3.setState({
            columnsButtonAnchorEl: null
          });
        }
      }, this.props.columns.map(function (col, index) {
        return React.createElement(_core.MenuItem, {
          key: col.tableData.id,
          onClickCapture: function onClickCapture(event) {
            event.preventDefault();
            col.hidden = !col.hidden;

            _this3.props.onColumnsChanged((0, _toConsumableArray2.default)(_this3.props.columns));
          }
        }, React.createElement(_core.FormControlLabel, {
          label: col.title,
          control: React.createElement(_core.Checkbox, {
            checked: !col.hidden
          })
        }));
      }))), this.props.exportButton && React.createElement("span", null, React.createElement(_core.Tooltip, {
        title: localization.exportTitle
      }, React.createElement(_core.IconButton, {
        color: "inherit",
        onClick: function onClick(event) {
          return _this3.setState({
            exportButtonAnchorEl: event.currentTarget
          });
        },
        "aria-label": localization.exportAriaLabel
      }, React.createElement(this.props.icons.Export, null))), React.createElement(_core.Menu, {
        anchorEl: this.state.exportButtonAnchorEl,
        open: Boolean(this.state.exportButtonAnchorEl),
        onClose: function onClose() {
          return _this3.setState({
            exportButtonAnchorEl: null
          });
        }
      }, React.createElement(_core.MenuItem, {
        key: "export-csv",
        onClick: this.exportCsv
      }, localization.exportName))), React.createElement(this.props.components.Actions, {
        actions: this.props.actions && this.props.actions.filter(function (a) {
          return a.type === undefined || a.type === 'free';
        })
      }));
    }
  }, {
    key: "renderSelectedActions",
    value: function renderSelectedActions() {
      return React.createElement(React.Fragment, null, this.renderSearch(), React.createElement(this.props.components.Actions, {
        actions: this.props.actions.filter(function (a) {
          return a.type === 'selection';
        }),
        data: this.props.selectedRows
      }));
    }
  }, {
    key: "renderActions",
    value: function renderActions() {
      return React.createElement("div", null, this.props.selectedRows && this.props.selectedRows.length > 0 ? this.renderSelectedActions() : this.renderDefaultActions());
    }
  }, {
    key: "render",
    value: function render() {
      var classes = this.props.classes;
      var localization = (0, _objectSpread2.default)({}, MTableToolbar.defaultProps.localization, this.props.localization);
      var title = this.props.selectedRows && this.props.selectedRows.length > 0 ? localization.nRowsSelected.replace('{ 0 }', this.props.selectedRows.length) : this.props.title;
      return React.createElement(_core.Toolbar, {
        className: (0, _classnames.default)(classes.root, (0, _defineProperty2.default)({}, classes.highlight, this.props.selectedRows && this.props.selectedRows.length > 0))
      }, React.createElement("div", {
        className: classes.title
      }, React.createElement(_core.Typography, {
        variant: "h6"
      }, title)), React.createElement("div", {
        className: classes.spacer
      }), React.createElement("div", {
        className: classes.actions
      }, this.renderActions()));
    }
  }]);
  return MTableToolbar;
}(React.Component);

MTableToolbar.defaultProps = {
  actions: [],
  columns: [],
  columnsButton: false,
  localization: {
    nRowsSelected: '{ 0 } row(s) selected',
    showColumnsTitle: 'Show Columns',
    showColumnsAriaLabel: 'Show Columns',
    exportTitle: 'Export',
    exportAriaLabel: 'Export',
    exportName: 'Export as CSV',
    searchTooltip: 'Search',
    toggleFilter: 'Toggle Filter',
    toggleFilterAriaLabel: 'Toggle Filter'
  },
  search: true,
  searchText: '',
  selectedRows: [],
  title: 'No Title!'
};
MTableToolbar.propTypes = {
  actions: _propTypes.default.array,
  columns: _propTypes.default.array,
  columnsButton: _propTypes.default.bool,
  localization: _propTypes.default.object.isRequired,
  onColumnsChanged: _propTypes.default.func.isRequired,
  onSearchChanged: _propTypes.default.func.isRequired,
  search: _propTypes.default.bool.isRequired,
  searchText: _propTypes.default.string.isRequired,
  selectedRows: _propTypes.default.array,
  title: _propTypes.default.string.isRequired,
  renderData: _propTypes.default.array,
  exportButton: _propTypes.default.bool,
  exportDelimiter: _propTypes.default.string,
  classes: _propTypes.default.object,
  toggleFilter: _propTypes.default.bool.isRequired,
  onToggleFilter: _propTypes.default.func.isRequired
};

var styles = function styles(theme) {
  return {
    root: {
      paddingRight: theme.spacing(1)
    },
    highlight: theme.palette.type === 'light' ? {
      color: theme.palette.secondary.main,
      backgroundColor: (0, _colorManipulator.lighten)(theme.palette.secondary.light, 0.85)
    } : {
      color: theme.palette.text.primary,
      backgroundColor: theme.palette.secondary.dark
    },
    spacer: {
      flex: '1 1 10%'
    },
    actions: {
      color: theme.palette.text.secondary
    },
    title: {
      flex: '0 0 auto'
    }
  };
};

var _default = (0, _core.withStyles)(styles)(MTableToolbar);

exports.default = _default;