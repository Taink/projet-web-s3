# Projet de S3 en webserv
(On l'a appelé Velux)

Petite structure basique d'un site avec express, simplement une authentification via login/mdp

## Installation
```sh
# installation des dépendances
$ npm i

# ajout d'un fichier .sqlite pour stocker notre base de données
$ touch ./db/db.sqlite

# ajout du fichier .env (plus de détails un peu après)
$ cp .env.example .env

# on définit la variable DB_PATH à l'endroit où se situe notre fichier .sqlite
$ echo "DB_PATH=./db/db.sqlite" > .env
```

## Utilisation
```sh
# lance en mode "prod"
$ npm run start

# il est aussi possible de le lancer via nodemon
$ npm run watch

# les tests, si ils sont faits un jour
$ npm run test
```
