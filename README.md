# Cakraz Emlak CMS

CMS for real estate website.

## 📖 Create Postgresql Database

```shell
# launch psql
psql postgres # or psql -U postgres
```
```shell
# psql shell
CREATE DATABASE cakraz;
CREATE ROLE strapi WITH LOGIN PASSWORD 'strapi' CREATEDB;
GRANT ALL PRIVILEGES ON DATABASE strapi TO strapi;
```

## 🚀 Runserver
   
Start Strapi Backend
```bash
cd cakraz-emlak-cms
yarn install
yarn develop
```
*Your backend/cms is now running at `http://localhost:1337!`*
