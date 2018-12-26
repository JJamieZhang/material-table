import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MaterialTable from './material-table';

class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: '100%' }}>
        <MaterialTable
          columns={[
            { title: 'Adı', field: 'name', filtering: false, render: (rowData) => <div>{rowData.name}</div> },
            { title: 'Soyadı', field: 'surname', filtering: false },
            { title: 'Doğum Yılı', field: 'birthYear', type: 'numeric' },
            { title: 'Doğum Yeri', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' }, filtering: false }
          ]}
          data={[
            { name: 'Nick', surname: 'Hands', birthYear: 1987, birthCity: 63 },
            { name: 'Peter', surname: 'Jameskey', birthYear: 1987, birthCity: 63 },
            { name: 'Joe', surname: 'Baran', birthYear: 1987, birthCity: 63 },
          ]}
          title="Demo Title"
          options={{
            emptyRowsWhenPaging: false,
            exportButton: true,
            pageSize: 100,
            pageSizeOptions: [100, 150, 200],
            filtering: true,
            altRows: '#f2f2f2',
            hover: true,
          }}
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
