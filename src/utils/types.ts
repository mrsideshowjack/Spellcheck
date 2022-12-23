export interface SearchResult {
    id: string;
    description?: string;
    query: string;
    url: string;
    isNavigation?: boolean;
    isHistory?: boolean;
  }