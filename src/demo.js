import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from './material-table';

class App extends Component {
  render() {
    return (
      <div style={ { maxWidth: '100%' } }>
        <MaterialTable
          columns={ [
            { title: 'Adı', field: 'name', className: 'test' },
            { title: 'Soyadı', field: 'surname', },
            { title: 'Doğum Yılı', field: 'birthYear', type: 'datetime' },
            {
              title: 'Doğum Yeri', field: 'birthCity', lookup: {
                34: 'İstanbul',
                63: 'Şanlıurfa',
                1: 'Şanlıurfa',
                6: 'Şanlıurfa',
                7: 'Şanlıurfa',
                8: 'Şanlıurfa',
                9: 'Şanlıurfa',
              }
            }
          ] }
          data={ [
            { name: 'Nick', surname: 'Hands', birthYear: 1987, birthCity: 63 },
            { name: 'Peter', surname: 'Jameskey', birthYear: 1987, birthCity: 63 },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            {
              name: 'Joe',
              surname: 'Baran',
              birthYear: 1987,
              birthCity: 63
            },
            { name: 'Joe', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          ] }
          title="Demo Title"
          options={ {
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
            selection: true,
          } }
        />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
