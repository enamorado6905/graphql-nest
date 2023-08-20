export interface PaginateInterface<T> {
  total?: number;
  per_page?: number;
  page?: number;
  nodes: T[];
}
