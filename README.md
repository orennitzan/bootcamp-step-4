# Risingstart bootcamp-step-3

## Requirements

### Original

1. Create one migration file per table (eg. 1-create-user.js, 2-create-repository.js 3-create-contribution.js) with the following skeleton:

   - up method has the logic for the migration, down is for reverting it.
   - The migrations are executed in transactions.
   - The files are executed in alphabetical orde.

2. Add a migrate-db script to the scripts in package.json and corresponding scripts/migrate-db.js file.

### Substitution

1. Using postgresql database and pg, fs, path, assert packages, create sql scripts and run them via packag.json script.

2. The process should run the scripts and assert the results against expected results to velidate the the process is valid.

3. Create script pre-commit that runs 3 actions:

   - pretty - prettifies the code.
   - lint - points code errors
   - tests

## Instalation and Execution

1. git clone <https://github.com/orennitzan/bootcamp-step-3.git>
2. Change directory to **bootcamp-step-3**
3. Run 'npm install'
4. Modify 'POSTGRES_CONFIG' in config.js file to your db parameters
5. Run 'npm run pre-commit' to exec pre-commit script
6. Run 'npm run db-create' to create db tables.

## Comments

1. Did not study migrations!!!