# MS-USER

Micro service pour gérer les utilisateurs d'un établissement scolaire

## Dépendences

- NodeJS
- TypeScript
- NestJS

## Installation

### BDD avec Docker

La config de la BDD se trouve dans le fichier `docker-compose.yml` à la racine du projet.

> NB : n'oubliez pas de modifier le fichier `.env` à la racine du projet pour y mettre vos variables d'environnement. Basez-vous sur le fichier `.env.example` pour modifier le fichier `.env`.
Elle fait appel à une image Mongo, donc le fichier de config est `initdb.js` à la racine du projet.

Elle créé une collection `userdb` dans une BDD `user` et insère un document exemple. :

```json
{
  "firstname": "Gerard",
  "lastname": "Lamotte",
  "birthday": "2015-12-12T03:20:51.995Z",
  "mail": "lamotte@mail.com"
}
```

Vous pouvez modifier ce document exemple à votre guise.

### NestJS

Installation des packages NPM

```bash
npm install
```

## Lancement

Lancez d'abord la BDD avec Docker

```bash
docker-compose up -d
```

Puis lancez le serveur NestJS

```bash
npm start
```

## API

### GET /api

Affiche la documentation api de MS-user via swagger
