/* eslint-disable no-unused-vars */
import { Checkbox, TableCell, TableRow, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import * as React from 'react';
import classnames from 'classnames';
/* eslint-enable no-unused-vars */


class MTableBodyRowClass extends React.Component {
  renderColumns() {
    const mapArr = this.props.columns.filter(columnDef => { return !columnDef.hidden })
      .map((columnDef) => {
        const value = this.props.getFieldValue(this.props.data, columnDef);
        return (
          <this.props.components.Cell
            icons={this.props.icons}
            columnDef={columnDef}
            value={value}
            key={columnDef.tableData.id}
            rowData={this.props.data} />
        );
      });
    return mapArr;
  }

  renderActions() {
    return (
      <TableCell style={{ paddingTop: 0, paddingBottom: 0 }} key="key-actions-column">
        <div style={{ display: 'flex' }}>
          <this.props.components.Actions data={this.props.data} actions={this.props.actions.filter(a => !a.isFreeAction && !this.props.options.selection)} />
        </div>
      </TableCell>
    );
  }
  renderSelectionColumn() {
    return (
      <TableCell padding="checkbox" key="key-selection-column">
        <Checkbox
          checked={this.props.data.tableData.checked === true}
          value={`${this.props.data.tableData.id}`}
          onChange={this.props.onRowSelected}
        />
      </TableCell>
    );
  }
  render() {
    const { options, classes } = this.props;
    const columns = this.renderColumns();
    if (options.selection) {
      columns.splice(0, 0, this.renderSelectionColumn());
    }
    if (this.props.actions &&
      this.props.actions.filter(a => !a.isFreeAction && !options.selection).length > 0) {
      if (options.actionsColumnIndex === -1) {
        columns.push(this.renderActions());
      } else if (options.actionsColumnIndex >= 0) {
        let endPos = 0;
        if (options.selection) {
          endPos = 1;
        }
        columns.splice(options.actionsColumnIndex + endPos, 0, this.renderActions());
      }
    }

    const className = classnames({
      [classes.altRows]: options.altRows !== false && this.props.index % 2 === 0,
      [classes.pointer]: this.props.onRowClick
    });

    return (
      <TableRow
        className={className}
        hover={options.hover}
        onClick={$ => this.props.onRowClick && this.props.onRowClick($, this.props.data)}
      >
        {columns}
      </TableRow>
    );
  }
}

MTableBodyRowClass.defaultProps = {
  actions: [],
  index: 0,
  data: {},
  options: {}
};

MTableBodyRowClass.propTypes = {
  classes: PropTypes.any,
  actions: PropTypes.array,
  icons: PropTypes.any.isRequired,
  index: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  options: PropTypes.object.isRequired,
  onRowSelected: PropTypes.func,
  getFieldValue: PropTypes.func.isRequired,
  columns: PropTypes.array,
  onRowClick: PropTypes.func,
};

export default withStyles(
  theme => ({
    altRows: {
      backgroundColor: '#f6f6f6'
    },
    pointer: {
      cursor: 'pointer'
    }
  }),
  { withTheme: true })(MTableBodyRowClass);