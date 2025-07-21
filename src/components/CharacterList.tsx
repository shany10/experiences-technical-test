import { useState } from 'react';
import { useCharacters } from '../hooks/useCharacters';
import { CharacterCard } from './CharacterCard';
import { StatusFilterComponent } from './StatusFilter';
import type { StatusFilter } from '../types/filter';

export const CharacterList = () => {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const { characters, loading, error, hasNextPage, loadMore } = useCharacters(statusFilter);

  if (loading && characters.length === 0) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Chargement des personnages...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Erreur</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Réessayer
        </button>
      </div>
    );
  }

  return (
    <div className="character-list-container">
      <StatusFilterComponent 
        currentFilter={statusFilter}
        onFilterChange={setStatusFilter}
      />
      
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      
      {hasNextPage && (
        <div className="load-more-container">
          <button 
            className="load-more-button"
            onClick={loadMore}
            disabled={loading}
          >
            {loading ? 'Chargement...' : 'Charger plus de personnages'}
          </button>
        </div>
      )}
      
      {!hasNextPage && characters.length > 0 && (
        <div className="end-message">
          <p>Vous avez vu tous les personnages ! ({characters.length} au total)</p>
        </div>
      )}
    </div>
  );
};
