# Node MongoDB CRUD
> Capivara's JSON CRUD with Node.js + MongoDB Stack

## Instructions to run
```javascript
// .env
URI=url-to-your-atlas-mongo-db-cluster
DB_NAME=name-of-your-schema
```
```shell
npm install && npm start
```

## Endpoints
```javascript
// GET index
/capivara

// GET show
/capivara/:id

// POST create w/body
/capivara
{
    "nome": string,
    "pelagem": string,
    "nativa": boolean
}

// PUT update w/body
/capivara/:id
{
    "nome": string,
    "pelagem": string,
    "nativa": boolean
}

// DELETE delete
/capivara/:id
```