
const ideas = require("../models/idea.model");
// Search all idea 

exports.fetchAllIdeas = (req, res) => {
    res.status(200).send(ideas);
}

// Create new ideas

let idCount = 1;

exports.createIdea = (req, res) => {
    // Read the request body
    const idea = req.body;

    // need to generate the net idea id
    idea.id = ++idCount;

    // Save it in the list of existing idea
    ideas[idCount] = idea;
    
    // return the response
    res.status(201).send(ideas[idCount]);
}

// Update 

exports.updateIdea = (req, res) => {
    // I need to read the id passed in the path
    // http://127.0.0.1:8080/ideaApp/v1/ideas/1

    const ideaId = req.params.id;

    // If idea is present - modify else return error

    if(ideas[ideaId]) {
        ideas[ideaId] = req.body;
        res.status(200).send(ideas[ideaId]);
    } else {
        res.status(400).send({
            message: 'idea id was not correct'
        })
    }
}


// Delete

exports.deleteIdea = (req, res) => {
    // check ideas is is correct or not
    if(ideas[req.params.id]) {
        delete ideas[req.params.id]
        res.status(200).send({
            message: 'Idea was successfuly deleted'
        })
    } else {
        res.status(400).send({
            message: 'Wrond idea id'
        })
    }
}