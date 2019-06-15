const mongoose = require('mongoose'); 
const Scheema = mongoose.Schema;
//create EmployeeModel schema 
const employeeSchema  = new Scheema({
    name:{
        type : String,
        required: [true,'Name field is required '],
    },
    age:{
        type : String,
        
    },
    available:{
        type : Boolean,
        default :false
    }
});
const empModel = mongoose.model('Employee',employeeSchema);
module.exports = empModel;