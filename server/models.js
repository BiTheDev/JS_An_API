const goose = require("mongoose");


goose.connect("mongodb://localhost:27017/RFTaskApi", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db RFTaskApi"));


const TaskSchema = new goose.Schema({
    title : {
        type: String,
        required : true,
        minlength : 2
    },
    description : {
        type : String,
        default : ""
    },
    completed : {
        type : Boolean,
        default : false
    },
    
},{timestamps : true})

const Tasks = goose.model('People', TaskSchema);
module.exports = Tasks;