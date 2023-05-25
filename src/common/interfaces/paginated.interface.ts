export interface PaginateInterface {
  total: number;
  perPage: number;
  page: number;
  data?: Array<any>;
}
