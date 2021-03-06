import * as React from 'react';
import { IconProps } from '@material-ui/core/Icon';

export interface MaterialTableProps<TData = any> {
  actions?: (Action | ((rowData: TData) => Action))[];
  columns: Column[];
  components?: Components;
  icons?: Icons,
  data: TData[];
  title: string;
  options?: Options;
  localization?: Localization;
  onSelectionChange?: (data: any[]) => void;
  onChangeRowsPerPage?: (pageSize: number) => void;
  onChangePage?: (page: number) => void;
  onOrderChange?: (orderBy: string, orderDirection: "asc" | "desc") => void;
  onRowClick?: (event: React.MouseEvent<any>, rowData: TData) => void;
  onFilterChanged?: (filterData: { [field: string]: any }) => void;
}

export interface ServerPagingInfo {
  page: number;
  total: number;
  pageSize: number;
}

export interface Action {
  icon: string | React.ReactElement<any> | Element;
  type?: 'free' | 'row' | 'selection';
  tooltip?: string;
  onClick: (event: any, data: any) => void;
  iconProps?: IconProps;
  disabled?: boolean;
}

export interface Column {
  id?: string;
  cellStyle?: any | ((data: any) => any);
  hidden?: boolean;
  field?: string;
  filtering?: boolean;
  lookup?: object;
  render?: (data: any) => any;
  sorting?: boolean;
  sortingId?: string;
  defaultSort?: 'asc' | 'desc';
  title: string;
  type?: 'boolean' | 'numeric' | 'date' | 'datetime' | 'time' | 'currency';
  searchable?: boolean;
  currencySetting?: { locale?: string, currencyCode?: string, minimumFractionDigits?: number, maximumFractionDigits?: number };
  emptyValue?: any | ((data: any) => any);
  className?: string;
}

export interface Components {
  Actions?: React.ComponentType<any>;
  Body?: React.ComponentType<any>;
  Cell?: React.ComponentType<any>;
  Container?: React.ComponentType<any>;
  FilterRow?: React.ComponentType<any>;
  Header?: React.ComponentType<any>;
  Pagination?: React.ComponentType<any>;
  Row?: React.ComponentType<any>;
  Toolbar?: React.ComponentType<any>;
}

export interface Icons {
  Check: React.ReactElement<any>;
  Export: React.ReactElement<any>;
  Filter: React.ReactElement<any>;
  FirstPage: React.ReactElement<any>;
  LastPage: React.ReactElement<any>;
  NextPage: React.ReactElement<any>;
  PreviousPage: React.ReactElement<any>;
  Search: React.ReactElement<any>;
  ThirdStateCheck: React.ReactElement<any>;
  ViewColumn: React.ReactElement<any>;
}

export interface Options {
  actionsColumnIndex?: number;
  columnsButton?: boolean;
  emptyRowsWhenPaging?: boolean;
  exportButton?: boolean;
  exportDelimiter?: string;
  filtering?: boolean;
  paging?: boolean;
  pageSize?: number;
  pageSizeOptions?: number[];
  showEmptyDataSourceMessage?: boolean;
  search?: boolean;
  selection?: boolean;
  sorting?: boolean;
  toolbar?: boolean;
  hover?: boolean;
  altRows?: boolean;
  serverPaging?: ServerPagingInfo;
  cellBorder?: boolean;
  resizeColumn?: boolean;
  cellSmallPadding?: boolean;
}

export interface Localization {
  body?: {
    emptyDataSourceMessage?: string;
    filterRow?: {
      filterTooltip?: string;
    };
  };
  header?: {
    actions?: string;
  };
  pagination?: {
    firstTooltip?: string;
    previousTooltip?: string;
    nextTooltip?: string;
    lastTooltip?: string;
  };
  toolbar?: {
    nRowsSelected?: string;
    showColumnsTitle?: string;
    showColumnsAriaLabel?: string;
    exportTitle?: string;
    exportAriaLabel?: string;
    exportName?: string;
    searchTooltip?: string;
  };
}

declare const MaterialTable: React.ComponentType<MaterialTableProps>;
export default MaterialTable;

