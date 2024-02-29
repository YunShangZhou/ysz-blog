import { paperProps } from './paper';

export interface paperAndTagProps {
  id: number;
  tag: string;
  paper: paperProps;
}

export interface paginationDataSourceProps {
  items: paperProps[];
  total: number;
}

export interface paginationDataSourceByTagProps {
  items: paperAndTagProps[];
  total: number;
}

export type booksDataSourceProps =
  | paginationDataSourceProps
  | paginationDataSourceByTagProps;

export interface queryItemProps {
  name: string;
  value: string | any;
}
