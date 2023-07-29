
const ideaController = require("../controllers/idea.controller");

/**
 * Define route for the calls linke
 * 
 * GET 127.0.0.1:8080/ideaApp/v1/ideas
 */

module.exports = (app) => {
    app.get("/ideaApp/v1/ideas", ideaController.fetchAllIdeas);

    //Post call

    app.post("/ideaApp/v1/ideas", ideaController.createIdea);

    //Put Call

    app.put("/ideaApp/v1/ideas/:id", ideaController.updateIdea);

    //Delete Call

    app.delete("/ideaApp/v1/ideas/:id", ideaController.deleteIdea);
}