

const express = require("express");
const exphbs = require('express-handlebars');

const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
///////////////////////////////////////

// import routes from controller
const router = require("./controllers/burgers_controllers")
app.use(router);



// connect to local host PORT
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});