/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  TableHead, TableRow, TableCell,
  TableSortLabel, Checkbox, withStyles, RootRef
} from '@material-ui/core';
/* eslint-enable no-unused-vars */

class MTableHeader extends React.Component {
  renderHeader() {
    const mapArr = this.props.columns.filter(columnDef => { return !columnDef.hidden })
      .map((columnDef) => (
        <TableCell
          key={ columnDef.tableData.id }
          align={ ['numeric'].indexOf(columnDef.type) !== -1 ? "right" : "left" }
          className={ columnDef.className }
        >
          { (columnDef.sort !== false && columnDef.sorting !== false && this.props.sorting)
            ? <TableSortLabel
              active={ this.props.orderBy === columnDef.field }
              direction={ this.props.orderDirection || 'asc' }
              onClick={ () => {
                const orderDirection = columnDef.field !== this.props.orderBy ? 'asc' : this.props.orderDirection === 'asc' ? 'desc' : 'asc';
                this.props.onOrderChange(columnDef.field, orderDirection);
              } }
            >
              { columnDef.title }
            </TableSortLabel>
            : columnDef.title
          }
        </TableCell >
      ));
    return mapArr;
  }

  renderActionsHeader() {
    const localization = { ...MTableHeader.defaultProps.localization, ...this.props.localization };
    return (
      <TableCell key="key-actions-column">
        <TableSortLabel>{ localization.actions }</TableSortLabel>
      </TableCell>
    );
  }
  renderSelectionHeader() {
    return (
      <TableCell padding="checkbox" key="key-selection-column">
        <Checkbox
          indeterminate={ this.props.selectedCount > 0 && this.props.selectedCount < this.props.dataCount }
          checked={ this.props.selectedCount === this.props.dataCount }
          onChange={ (event, checked) => this.props.onAllSelected && this.props.onAllSelected(checked) }
        />
      </TableCell>
    );
  }
  render() {
    const headers = this.renderHeader();
    if (this.props.hasSelection) {
      headers.splice(0, 0, this.renderSelectionHeader());
    }

    if (this.props.showActionsColumn) {
      if (this.props.actionsHeaderIndex >= 0) {
        let endPos = 0;
        if (this.props.hasSelection) {
          endPos = 1;
        }
        headers.splice(this.props.actionsHeaderIndex + endPos, 0, this.renderActionsHeader());
      } else if (this.props.actionsHeaderIndex === -1) {
        headers.push(this.renderActionsHeader());
      }
    }

    return (
      <TableHead>
        <TableRow>
          { headers }
        </TableRow>
      </TableHead>
    );
  }
}

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
  columns: PropTypes.array.isRequired,
  dataCount: PropTypes.number,
  hasSelection: PropTypes.bool,
  localization: PropTypes.object,
  selectedCount: PropTypes.number,
  sorting: PropTypes.bool,
  onAllSelected: PropTypes.func,
  onOrderChange: PropTypes.func,
  orderBy: PropTypes.string,
  orderDirection: PropTypes.string,
  actionsHeaderIndex: PropTypes.number,
  showActionsColumn: PropTypes.bool,
};

export default MTableHeader;
