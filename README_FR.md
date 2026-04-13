# LibreChat Fork Définitif — L'Édition Définitive v0.8.4

Un fork de [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4) créé pour *geler* cette version, préservant sa fonctionnalité centrale tout en introduisant des améliorations minimales telles que les améliorations de Qualité de Vie et en assurant que tout soit local et autonome.

<p align="center">
  <img src="logo.svg" alt="Logo LibreChat Original" width="200"/>
</p>

Si vous souhaitez la version originale, **non modifiée** de LibreChat v0.8.4, consultez la branche [LibreChat-0.8.4-base](https://github.com/Smoffyy/LibreChat-Static/tree/librechat-0.8.4-base).

Ce projet est licencié sous la même Licence MIT que le LibreChat original. En téléchargeant, utilisant ou modifiant ce projet, vous acceptez les termes de la [licence originale](https://github.com/Smoffyy/LibreChat-Static/blob/librechat-0.8.4-base/LICENSE) de la version v0.8.4.

> **Ce n'est pas une refonte. C'est un fork de maintenance stable à long terme destiné à préserver le v0.8.4 exactement tel quel.**

---

### Crédits / Remerciements (Créateurs Originaux)

#### Créateur Original
- [Danny Avila](https://github.com/danny-avila) - Créateur Original, Fondateur et Mainteneur Principal

#### Contributeurs Centraux
- [David Avila](https://github.com/david-avila) – Contributif précoce / collaborateur
- [Berry (berry-13)](https://github.com/berry-13) – Collaborateur central et contributeur
- [Fuegovic](https://github.com/fuegovic) – Contributeur et collaborateur open-source
- [RubenT (rubentalstra)](https://github.com/rubentalstra) – Contributeur

#### Contributeurs Remarquables
- [nhtruong](https://github.com/nhtruong) – Contributeur
- [AmgadHasan](https://github.com/AmgadHasan) – Contributeur
- [austin-barrington](https://github.com/austin-barrington) – Contributeur
- [hofq](https://github.com/hofq) – Contributeur
- [mawburn](https://github.com/mawburn) – Contributeur
- [rba100](https://github.com/rba100) – Contributeur
- [sbruel](https://github.com/sbruel) – Contributeur
- [leblancfg](https://github.com/leblancfg) – Contributeur
- [pnancarrow](https://github.com/pnancarrow) – Contributeur
- [ruggishop](https://github.com/ruggishop) – Contributeur

#### Autres Contributeurs
- [jakubmieszczak](https://github.com/jakubmieszczak) – Contributeur
- [DenisPalnitsky](https://github.com/DenisPalnitsky) – Contributeur
- [nidasfly](https://github.com/nidasfly) – Contributeur
- [achhabra2](https://github.com/achhabra2) – Contributeur
- [arthurian](https://github.com/arthurian) – Contributeur
- [techwithanirudh](https://github.com/techwithanirudh) – Contributeur
- [bsu3338](https://github.com/bsu3338) – Contributeur
- [pxz2016](https://github.com/pxz2016) – Contributeur
- [eshack94](https://github.com/eshack94) – Contributeur
- [ventz](https://github.com/ventz) – Contributeur
- [derkoe](https://github.com/derkoe) – Contributeur
- [btribonde](https://github.com/btribonde) – Contributeur

#### Polices Personnalisées
- [Frank Grießhammer](https://fonts.google.com/?query=Frank+Grie%C3%9Fhammer) - Police open-source Source Serif 4.
- [The Open Sans Project Authors](https://github.com/googlefonts/opensans) - Police open-source Open Sans.
- [The B612 Project Authors](https://github.com/polarsys/b612) - Police open-source B612.

#### Contributeurs du Logiciel Libre
- [Contributeurs de LibreChat](https://github.com/danny-avila/LibreChat/graphs/contributors) – Plus de 300 contributeurs open-source qui ont aidé à construire et maintenir le projet

---

### Quel est l'Objectif ?

L'objectif du projet est de maintenir l'original [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4), tout en gardant tout le code original intact.

Spécifiquement, ce projet vise à :

- Garder l'**v0.8.4** original de LibreChat gelé dans le temps
- Modifications minimales du code et de la sensation globale du logiciel
- Archiver le v0.8.4 de LibreChat pour que quiconque puisse l'utiliser
- S'assurer que tout se compile **100% à partir des sources** — sans télécharger d'images préconstruites pendant l'exécution (runtime)
- Maintenir la Licence MIT originale

---

### Conception

Ce n'est **pas** destiné à être une refonte complète ou un changement radical.

L'intention est :
- Préserver le look et la fonctionnalité du **LibreChat original**
- Moderniser certains aspects
- Geler les paquets et versions
- Ajouter des améliorations optionnelles

Pensez-y comme ceci :
> LibreChat Original, forké pour la longévité et la durabilité.

---

## En quoi cela diffère du LibreChat Original ?

Il n'y a rien de différent du LibreChat Original, juste quelques changements qui sont des fonctionnalités de Qualité de Vie. Sinon, il s'agit strictement de la base [LibreChat v0.8.4](https://github.com/danny-avila/LibreChat/releases/tag/v0.8.4), destinée à être maintenue aussi longtemps que possible, sans se soucier des fonctionnalités qui cassent ou perdent l'accès.

### En ce qui concerne Docker
Le LibreChat original dépendait de Docker Hub pour télécharger plusieurs images préconstruites pendant l'exécution (runtime) chaque fois que vous exécutiez `docker compose up`. Cela signifie que votre configuration dépendait de ces images restant disponibles sur Docker Hub éternellement — si l'une d'elles était supprimée, déplacée ou modifiée, votre installation casserait.

Ce fork change cela en construisant **chaque service individuellement à partir des sources**, intégré directement dans ce dépôt. Rien n'est téléchargé pendant l'exécution (runtime).

### Ce que le LibreChat original téléchargeait

Lorsque vous exécutiez `docker compose up` dans le LibreChat original, Docker contacterait internet et téléchargerait :

- `registry.librechat.ai/danny-avila/librechat-rag-api-dev-lite:latest` — le service API RAG
- `mongo:8.0.20` — la base de données MongoDB
- `getmeili/meilisearch:v1.35.1` — le moteur de recherche
- `pgvector/pgvector:0.8.0-pg15-trixie` — la base de données vectorielle pour RAG

Cela signifiait que votre compilation n'était stable que tant que ces registres externes l'étaient.

### Ce que fait ce fork à la place

Chaque service a maintenant son propre Dockerfile intégré dans le dossier `docker/` de ce dépôt, et le code source du `rag_api` est intégré directement dans le dossier `rag_api/`. Lorsque vous exécutez `docker compose build`, Docker construit chaque image localement depuis ces sources — aucun registre externe n'est contacté pour aucun des services principaux.

La structure de dossiers pour les Dockerfiles ajoutés est :

```
docker/
  mongodb/
    Dockerfile        ← Installe MongoDB 8.0 depuis le dépôt officiel apt de MongoDB
  meilisearch/
    Dockerfile        ← Télécharge le binaire Meilisearch v1.35.1 depuis GitHub Releases
  vectordb/
    Dockerfile        ← Installe PostgreSQL 15 + pgvector depuis le dépôt officiel apt de PostgreSQL
    entrypoint.sh     ← Initialise la base de données, crée l'utilisateur et active l'extension vectorielle
rag_api/              ← Code source complet de danny-avila/rag_api, intégré directement
```

Chaque Dockerfile installe son service depuis le **dépôt officiel upstream** du paquet de ce logiciel plutôt que de dépendre d'une image préconstruite de Docker Hub. C'est nettement plus résilient — le dépôt apt officiel MongoDB, le dépôt apt officiel PostgreSQL et GitHub Releases sont beaucoup plus permanents qu'un tag spécifique de Docker Hub.

### Pourquoi cela importe

Si `mongo:8.0.20` disparaît de Docker Hub demain, le LibreChat original casse. Avec ce fork, MongoDB est installé depuis son propre dépôt apt de l'entreprise MongoDB Inc. à l'intérieur d'une image base standard `debian:bookworm-slim` — quelque chose qui restera disponible essentiellement éternellement. La même logique s'applique à chaque autre service.

La seule connexion internet qui se produit pendant la compilation est le téléchargement de paquets depuis les dépôts officiels et l'image base `debian:bookworm-slim`, qui est maintenue par Docker lui-même et est essentiellement permanente.

---

## Prérequis (Manière la plus facile d'installer)

- **[Git](https://git-scm.com/install/)**
- **[Docker](https://www.docker.com/products/docker-desktop/)**

---

## Installation NPM (Développement)

Si vous préférez utiliser NPM, ou si vous le développez activement, veuillez consulter le fichier [NPMInstallation.md](local-docs/NPMInstallation.md).

## Installation Docker

Pour la plupart des gens, l'utilisation de Docker Desktop est le moyen le plus simple pour mettre LibreChat en marche.

1. Clonez le dépôt
```
git clone https://github.com/Smoffyy/LibreChat-Definitive-Fork
cd LibreChat-Definitive-Fork
```

2. Créez le fichier d'environnement
```
copy .env.example .env
```
> Note : cette commande est pour Windows. Sur macOS/Linux utilisez `cp .env.example .env`

3. Montez librechat.yaml
```
copy docker-compose.override.yml.example docker-compose.override.yml
```

Assurez-vous que dans votre override Docker, cela ressemble à ceci :
```yaml
services:
  api:
    image: librechat
    build:
      context: .
      target: node
    volumes:
      - type: bind
        source: ./librechat.yaml
        target: /app/librechat.yaml
    depends_on:
      - mongodb
      - meilisearch
```

4. Construisez les images
```
docker compose build --no-cache
docker compose up -d
```

> Cela construira tous les services localement à partir des sources. La première compilation prend plusieurs minutes car elle compile LibreChat, installe les dépendances de l'API RAG et configure les bases de données. Les compilations ultérieures sont plus rapides grâce au cache des couches Docker.

5. Ouvrez LibreChat dans le navigateur

Allez sur `http://localhost:3080/` et commencez à discuter !

---

## Persistance des Données

Vos données persistent automatiquement entre les redémarrages. Voici où chaque service stocke ses données :

- **MongoDB** (historique de chat, utilisateurs) → dossier `./data-node/` dans la racine du dépôt
- **Meilisearch** (index de recherche) → dossier `./meili_data_v1.35.1/` dans la racine du dépôt
- **pgvector** (données vectorielles RAG) → volume Docker nommé `librechat_pgdata2`

Un simple `docker compose down` suivi de `docker compose up -d` conserve toutes les données intactes. Seul `docker compose down -v` (avec le drapeau `-v`) supprimera le volume nommé pgvector. Les dossiers de données MongoDB et Meilisearch sur le disque ne sont jamais touchés par Docker et survivent à tout.

---

## Anciens fichiers/configurations

Chaque fois que vous souhaitez voir les anciens fichiers exemples, cherchez les fichiers qui ont `_old` à la fin, tels que `librechat.example_old.yaml` ou `.env.example_old`.