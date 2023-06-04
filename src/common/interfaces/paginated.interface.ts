export interface PaginateInterface<T> {
  total: number;
  perPage: number;
  page: number;
  nodes: T[];
}
