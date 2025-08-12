export interface PaginatedResult<T> {
    items: T[];
    totalCount: number;
    pageSize: number;
    pageNumber: number;
}