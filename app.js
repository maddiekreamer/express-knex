const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on ${port}`))

app.get("/", (request, response) => {
    response.send('THE ROUTE WORKED!');
});