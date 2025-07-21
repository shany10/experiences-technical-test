import { useState, useEffect } from 'react';
import type { ApiResponse, Character } from '../types/character';
import type { StatusFilter } from '../types/filter';

interface UseCharactersResult {
  characters: Character[];
  loading: boolean;
  error: string | null;
  hasNextPage: boolean;
  loadMore: () => void;
}

export const useCharacters = (statusFilter: StatusFilter = 'all'): UseCharactersResult => {
  const buildApiUrl = (page: number = 1, status: StatusFilter = 'all'): string => {
    const baseUrl = 'https://rickandmortyapi.com/api/character';
    const params = new URLSearchParams();
    
    if (page > 1) {
      params.append('page', page.toString());
    }
    
    if (status !== 'all') {
      params.append('status', status);
    }
    
    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
  };

  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchCharacters = async (url: string, append: boolean = false) => {
    try {
      if (!append) {
        setLoading(true);
      } else {
        setIsLoadingMore(true);
      }
      
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Erreur HTTP: ${response.status}`);
      }
      
      const data: ApiResponse = await response.json();
      
      if (append) {
        setCharacters(prev => [...prev, ...data.results]);
      } else {
        setCharacters(data.results);
      }
      
      setNextPage(data.info.next);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue');
      console.error('Erreur lors de la récupération des personnages:', err);
    } finally {
      setLoading(false);
      setIsLoadingMore(false);
    }
  };

  const loadMore = () => {
    if (nextPage && !isLoadingMore) {
      fetchCharacters(nextPage, true);
    }
  };

  useEffect(() => {
    setCharacters([]);
    setNextPage(null);
    fetchCharacters(buildApiUrl(1, statusFilter));
  }, [statusFilter]);

  return {
    characters,
    loading: loading || isLoadingMore,
    error,
    hasNextPage: !!nextPage,
    loadMore
  };
};
