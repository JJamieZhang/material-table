"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _materialTable = _interopRequireDefault(require("./material-table"));

var App =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2.default)(App, _Component);

  function App() {
    (0, _classCallCheck2.default)(this, App);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(App).apply(this, arguments));
  }

  (0, _createClass2.default)(App, [{
    key: "render",
    value: function render() {
      return _react.default.createElement("div", {
        style: {
          maxWidth: '100%'
        }
      }, _react.default.createElement(_materialTable.default, {
        columns: [{
          title: 'Adı',
          field: 'name',
          className: 'test'
        }, {
          title: 'Soyadı',
          field: 'surname'
        }, {
          title: 'Doğum Yılı',
          field: 'birthYear',
          type: 'datetime'
        }, {
          title: 'Doğum Yeri',
          field: 'birthCity',
          lookup: {
            34: 'İstanbul',
            63: 'Şanlıurfa',
            1: 'Şanlıurfa',
            6: 'Şanlıurfa',
            7: 'Şanlıurfa',
            8: 'Şanlıurfa',
            9: 'Şanlıurfa'
          }
        }],
        data: [{
          name: 'Nick',
          surname: 'Hands',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Peter',
          surname: 'Jameskey',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }, {
          name: 'Joe',
          surname: 'Baran',
          birthYear: 1987,
          birthCity: 63
        }],
        title: "Demo Title",
        options: {
          columnsButton: true,
          emptyRowsWhenPaging: true,
          exportButton: true,
          pageSize: 5,
          pageSizeOptions: [5, 150, 200],
          filtering: true,
          altRows: true,
          search: false,
          hover: true,
          cellBorder: true,
          selection: true
        }
      }));
    }
  }]);
  return App;
}(_react.Component);

_reactDom.default.render(_react.default.createElement(App, null), document.getElementById('app'));

module.hot.accept();