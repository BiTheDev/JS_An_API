const Tasks = require("./models.js");
module.exports = {
    allTasks : (req,res) => Tasks.find({})
                        .then(data => console.log("root success")||res.json(data))
                        .catch(errs => console.log("root error")||res.json(errs)),
    getTask : (req,res) => Tasks.find({_id : req.params.id})
                            .then(data => console.log("getTask success")||res.json(data))
                            .catch(errs => console.log("getTask error")||res.json(errs)),
    createTask : (req,res) => Tasks.create(req.body)
                                .then(data => console.log("createTask success")||res.json(data))
                                .catch(errs => console.log("createTask error")||res.json(errs)),
    updateTask : (req,res) => Tasks.update({_id: req.params.id},{$set : req.body})
                                .then(data => console.log("updateTask success")||res.json(data))
                                .catch(errs => console.log("updateTask error")||res.json(errs)),
    removeTask : (req,res) => Tasks.remove({_id : req.params.id})
                                .then(data => console.log("removeTask success")||res.json(data))
                                .catch(errs => console.log("removeTask error")||res.json(errs))
                                
}