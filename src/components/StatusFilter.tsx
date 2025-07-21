import type { StatusFilter } from '../types/filter';

interface StatusFilterProps {
  currentFilter: StatusFilter;
  onFilterChange: (filter: StatusFilter) => void;
}

export const StatusFilterComponent = ({ currentFilter, onFilterChange }: StatusFilterProps) => {
  const filters: { value: StatusFilter; label: string; color: string }[] = [
    { value: 'all', label: 'Tous', color: '#6b7280' },
    { value: 'alive', label: 'Vivants', color: '#10b981' },
    { value: 'dead', label: 'Morts', color: '#ef4444' },
    { value: 'unknown', label: 'Inconnus', color: '#8b5cf6' }
  ];

  return (
    <div className="status-filter">
      <h3 className="filter-title">Filtrer par statut :</h3>
      <div className="filter-buttons">
        {filters.map((filter) => (
          <button
            key={filter.value}
            className={`filter-button ${currentFilter === filter.value ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.value)}
            style={{
              '--filter-color': filter.color,
            } as React.CSSProperties}
          >
            <span 
              className="filter-indicator" 
              style={{ backgroundColor: filter.color }}
            />
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
};
