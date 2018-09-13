const express = require("express");
const queries = require('./queries');
const cors = require("cors")
const app = express();
const port = process.env.PORT || 3000;

app.use(cors())

app.get("/", (request, response, next) => {
    queries.listAll().then(result => response.json({
        result
    }))
});

app.get("/:id", (request, response, next) => {
    queries.individualStudent(request.params.id).then(result => response.json({
        result
    }))
})

app.post("/", (request, response, next) => {
    queries.create(request.body).then(result => response.json({
        result
    }))
})

app.delete("/:id", (request, response, next) => {
    queries.deleteStudent(request.params.id).then(result => response.json({
        result
    }))
})

app.listen(port, () => {
    console.log(`listening on ${port}`)
})