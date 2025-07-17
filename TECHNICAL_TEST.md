# 🧪 Test Technique - Intern Fullstack Engineer (Front-End)

## 🎯 Objectif

Créer une interface React permettant d'afficher une liste de personnages issus d'une API publique. L'objectif est d'évaluer :

- ta capacité à structurer un petit projet React/TypeScript
- ton organisation du code
- ta gestion de l'asynchrone
- et un peu de style/UX (optionnel)

---

## 🚀 Enoncé

Développe une petite application qui :

1. **Récupère une liste de personnages depuis l'API Rick & Morty**
   - Documentation de l'API : https://rickandmortyapi.com/
2. **Affiche la liste des personnages sous forme de cartes** :
   - nom du personnage
   - image
   - espèce (species)
   - statut (status) : Alive / Dead / Unknown
3. **Filtre la liste par statut** (Alive / Dead / Unknown)
4. _(Optionnel)_ : Permet de rechercher un personnage par nom avec un champ de recherche

---

## 📦 Contraintes techniques

- React + TypeScript obligatoire
- Utilisation de `fetch` ou `axios` (au choix)
- CSS libre
- Pas besoin de router, ni de gestion d'état complexe (pas de Redux)
- (Bonus) Un test unitaire simple

---

## ✨ Suggestions d'amélioration attendues

- **Loader et gestion d'erreur** :
  - Afficher un indicateur de chargement pendant la récupération des données
  - Afficher un message d'erreur en cas d'échec du chargement
- **Accessibilité** :
  - S'assurer que la liste est navigable au clavier
  - Ajouter des attributs `alt` pertinents sur les images
  - Utiliser des labels pour les champs de recherche/filtre
- **Test unitaire simple** :
  - Ajouter un test sur un composant ou une fonction (ex : le filtre par statut ou la présence d'un nom dans la liste)

---
