# Created a REST API using Node.JS and Express integrated with GiHub API.

## Packages installed

-   node
-   express
-   node + typescript
-   swagger-ui-express
-   ts-dotenv
-   joi
-   cors
-   supertest
-   axios
-   eslint-config-prettier

## Installation

```bash
$ npm install
```

## Add .env

```bash
$ cp .example.env .env
```

Add values for keys PORT and GITHUB_ACCESS_KEY in .env

Start the server

```bash
$ npm start
```

## Testing

Testing REST API:

```bash
$ npm test
```

# API Documentation

```
GET /
```

Querying takes in the following parameters:
| Parameter | Purpose
| --------- | :--------------------------------
| `search` | what to search by (a MongoDB connection string in this case)
| `page` | Current page
| `sort` | what field to sort by.
| `per_page` | Items per page
| `order` | asc or desc

## Swagger Documentation

Visit `http://ec2-3-85-98-47.compute-1.amazonaws.com:3000/swagger`

## Postman collection

Postman collection file (postman_collection.json) is at root directory

## Deployment URL
http://ec2-3-85-98-47.compute-1.amazonaws.com:3000/?search=mongodb://localhost:27017


---

Author: @gdevanshu709