# Exercice 2

Réaliser une API Express de gestion de livres.
Les utilisateurs peuvent ajouter, mettre à jour, récupérer et supprimer des livres à l'aide des méthodes HTTP GET, POST, PUT et DELETE.

Aucun base de données n'est requise pour le moment.
1. Une route pour récupérer seulement les livres disponibles (GET /available)
2. Une route pour récupérer les livres dont le genre contient "policier" (On fera /genre avec ?query=policier) ...

Exemple de JSON de livre :

```
  {
    "id": 1,
    "titre": "Le Petit Prince",
    "auteur": "Antoine de Saint-Exupéry",
    "annee_publication": 1943,
    "genre": "Conte philosophique",
    "disponible": true
  },
```