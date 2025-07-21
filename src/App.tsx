import { CharacterList } from './components/CharacterList';

export function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Rick and Morty - Personnages</h1>
        <p>Découvrez tous les personnages de l'univers Rick and Morty</p>
      </header>
      
      <main className="app-main">
        <CharacterList />
      </main>
    </div>
  );
}
