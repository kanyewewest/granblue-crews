export interface Pagination {
  page?: number;
  pageCount: number;
}

export type Paginated<T> = { result: T[] } & Pagination;
