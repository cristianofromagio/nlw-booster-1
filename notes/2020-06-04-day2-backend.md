# Day 2 - Back-end


## Central ideia

Create API resources and connect to database through `knex` package.


## Key points

- APIs definitions
    + Routes, resources, identifiers
    + HTTP methods
        - GET, POST, PUT, DELETE
    + Request content
        - Request params (identifier defined on url)
        - Query params (key:value passed on url)
        - Request body (key:value passed as content)
    + CORS

- Test requests using `insomnia`
- Select `sqlite` as database of choice
- Separate functionalities in diferent files
    + Controllers for handling request data
- Database definitions
    + Migrations (defines and shares the database structure in an organized and manageable way)
        - `up` to create/edit something
        - `down` to remove/undo something
    + Seeds (defines initial values to populate a database on development environment)
    + Transaction (define the steps to an database action and can rollback all of them before finish if an error is thrown)
- Most used controller function names
    + `index`, `show`, `create`, `update`, `delete`  


## References

- Links, quotes and resources in general


## Annotations

- Added `ts-node` import path alias (`@app/`) using the `tsconfig-paths` lib
    + [https://github.com/dividab/tsconfig-paths](https://github.com/dividab/tsconfig-paths)
    + This prevents us from falling on double-dot-to-back hell
    + Maybe will break on deploy? Maybe... But I just want peace of mind while developing for now