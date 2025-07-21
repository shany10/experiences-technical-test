export type StatusFilter = 'all' | 'alive' | 'dead' | 'unknown';

export interface FilterOptions {
  status: StatusFilter;
}
