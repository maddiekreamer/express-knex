const express = require("express");
const queries = require('./queries');
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response, next) => {
    queries.listAll().then(result => response.json({result}))
});

app.get("/:id", (request, response, next) => {
    queries.individualStudent(request.params.id).then(result => response.json({result}))
})

app.post("/", (request, response, next) => {
    queries.create(request.body)
        .then(response.status(201))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})