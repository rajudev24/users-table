export interface UsersType {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
export interface TableDataType {
  id: number;
  email: string;
  name: string;
  avatar: string;
  options: string;
}

export interface TablePagination {
  current: number;
  pageSize: number;
}
