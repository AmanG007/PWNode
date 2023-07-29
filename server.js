const express = require("express");

const app = express();

// JSON convert

app.use(express.json());

// middleware
app.use(myMiddleWare);



function myMiddleWare (req, res, next) {
    console.log("Inside the middle ware I created");
    next(); // exit the middleware and go to the next || it will pass the constrol to next step.
}

/**
 * Stich the routes to the server
 */

require("./routes/idea.routes")(app);


//Starting server 

app.listen(8080, () => {
    console.log("server runing...");
}) 