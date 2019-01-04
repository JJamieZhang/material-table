/* eslint-disable no-unused-vars */
import * as React from 'react';
import PropTypes from 'prop-types';
import {
  TableCell, TableRow, TextField,
  FormControl, Select,
  MenuItem, Checkbox, ListItemText,
} from '@material-ui/core';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, TimePicker, DatePicker, DateTimePicker } from 'material-ui-pickers';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

class MTableFilterRow extends React.Component {
  renderLookupFilter = (columnDef) => (
    <FormControl fullWidth>
      <Select
        multiple
        value={ columnDef.tableData.filterValue || [] }
        onChange={ event => {
          this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        } }
        renderValue={ selecteds => selecteds.map(selected => columnDef.lookup[selected]).join(', ') }
        MenuProps={ MenuProps }
      >
        {
          Object.keys(columnDef.lookup).map(key => {
            const v = !!columnDef.tableData.filterValue && columnDef.tableData.filterValue.indexOf(key.toString()) > -1;
            return (
              <MenuItem key={ key } value={ key }>
                <Checkbox checked={ v } />
                <ListItemText primary={ columnDef.lookup[key] } />
              </MenuItem>
            );
          })
        }
      </Select>
    </FormControl>
  )

  renderBooleanFilter = (columnDef) => (
    <Checkbox
      indeterminate={ columnDef.tableData.filterValue === undefined }
      checked={ columnDef.tableData.filterValue === 'checked' }
      onChange={ () => {
        let val;
        if (columnDef.tableData.filterValue === undefined) {
          val = 'checked';
        } else if (columnDef.tableData.filterValue === 'checked') {
          val = 'unchecked';
        }

        this.props.onFilterChanged(columnDef.tableData.id, val);
      } }
      style={ {
        paddingTop: '4px',
        paddingBottom: '4px'
      } }
    />
  )

  renderDefaultFilter = (columnDef) => {
    const localization = { ...MTableFilterRow.defaultProps.localization, ...this.props.localization };
    return (
      <TextField
        fullWidth
        style={ columnDef.type === 'numeric' ? { float: 'right' } : {} }
        type={ columnDef.type === 'numeric' ? 'number' : 'text' }
        value={ columnDef.tableData.filterValue || '' }
        onChange={ (event) => {
          this.props.onFilterChanged(columnDef.tableData.id, event.target.value);
        } }
      />
    );
  }

  renderDateTypeFilter = (columnDef) => {
    let dateInputElement = null;
    const onDateInputChange = date => this.props.onFilterChanged(columnDef.tableData.id, date);

    const commonProps = {
      keyboard: true,
      clearable: true,
      value: columnDef.tableData.filterValue || null,
      onChange: onDateInputChange,
    };

    if (columnDef.type === 'date') {
      dateInputElement = (
        <DatePicker
          { ...commonProps }
          format="MM/dd/yyyy"
          placeholder="MM/DD/YYYY"
          mask={ value => value
            ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/]
            : []
          }
        />
      );
    } else if (columnDef.type === 'datetime') {
      dateInputElement = (
        <DateTimePicker
          { ...commonProps }
          format="MM/dd/yyyy HH:mm"
          placeholder="MM/DD/YYYY HH:MM"
          mask={ value => value
            ? [/\d/, /\d/, '/', /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, ':', /\d/, /\d/]
            : []
          }
        />
      );
    } else if (columnDef.type === 'time') {
      dateInputElement = (
        <TimePicker
          { ...commonProps }
          format="HH:mm"
          placeholder="HH:MM"
          mask={ value => value
            ? [/\d/, /\d/, ':', /\d/, /\d/]
            : []
          }
        />
      );
    }

    return (
      <MuiPickersUtilsProvider utils={ MomentUtils }>
        { dateInputElement }
      </MuiPickersUtilsProvider>
    );
  }

  getComponentForColumn(columnDef) {
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

  render() {
    const columns = this.props.columns.map(columnDef => (
      <TableCell key={ columnDef.tableData.id }>
        { this.getComponentForColumn(columnDef) }
      </TableCell>
    ));

    if (this.props.selection) {
      columns.splice(0, 0, (
        <TableCell key="key-filterRow-selection" style={ { padding: '0 12px' } }>
          {
            !this.props.options.serverPaging
            && <Checkbox onChange={ this.props.onFilterSelectionChanged } />
          }
        </TableCell>)
      );
    }
    if (this.props.emptyCell && this.props.hasActions) {
      if (this.props.actionsColumnIndex === -1) {
        columns.push(< TableCell key="key-filterRow-action" />);
      } else {
        let endPos = 0;
        if (this.props.selection) {
          endPos = 1;
        }
        columns.splice(this.props.actionsColumnIndex + endPos, 0, <TableCell />);
      }
    }

    return (
      <TableRow style={ { height: 10 } }>
        { columns }
      </TableRow>
    );
  }
}

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
  emptyCell: PropTypes.bool,
  columns: PropTypes.array.isRequired,
  onFilterChanged: PropTypes.func.isRequired,
  selection: PropTypes.bool.isRequired,
  onFilterSelectionChanged: PropTypes.func.isRequired,
  actionsColumnIndex: PropTypes.number,
  hasActions: PropTypes.bool,
  localization: PropTypes.object,
  options: PropTypes.object.isRequired,
};

export default MTableFilterRow;
