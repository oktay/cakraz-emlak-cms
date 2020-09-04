# Cakraz Emlak CMS

CMS for real estate website.

## 📖 Create Postgresql Database

    ```
    # launch psql
    psql postgres # or psql -U postgres
    ```
    
    ```
    # psql shell
    CREATE DATABASE cakraz;
    CREATE ROLE db_user WITH LOGIN PASSWORD 'password' CREATEDB;
    GRANT ALL PRIVILEGES ON DATABASE dbname TO db_user;
    ```

## 🚀 Runserver
   
   Start Strapi Backend
   ```bash
   cd cakraz-emlak-cms
   yarn develop
   ```
