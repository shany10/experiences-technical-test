import type { Character } from '../types/character';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Alive':
        return '#55cc44';
      case 'Dead':
        return '#d63d2e';
      default:
        return '#9e9e9e';
    }
  };

  return (
    <div className="character-card">
      <div className="character-image">
        <img src={character.image} alt={character.name} loading="lazy" />
      </div>
      
      <div className="character-info">
        <h3 className="character-name">{character.name}</h3>
        
        <div className="character-status">
          <span 
            className="status-indicator" 
            style={{ backgroundColor: getStatusColor(character.status) }}
          ></span>
          <span>{character.status} - {character.species}</span>
        </div>
        
        <div className="character-detail">
          <span className="label">Dernière localisation connue :</span>
          <span className="value">{character.location.name}</span>
        </div>
        
        <div className="character-detail">
          <span className="label">Vu pour la première fois dans :</span>
          <span className="value">{character.origin.name}</span>
        </div>
        
        <div className="character-detail">
          <span className="label">Genre :</span>
          <span className="value">{character.gender}</span>
        </div>
        
        <div className="character-episodes">
          <span className="label">Épisodes :</span>
          <span className="value">{character.episode.length}</span>
        </div>
      </div>
    </div>
  );
};
