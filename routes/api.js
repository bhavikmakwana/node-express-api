const express  = require('express');
const router = express.Router();
const Emp = require('../models/EmployeeModel');

router.get('/',(req,res)=>{
    res.send("This is root api get ");
});

router.post('/',(req,res)=>{
    console.log(req.body);
    //let emp = new Emp(req.body);
    //emp.save();
    Emp.create(req.body).then((emp)=>{
        console.log('While saving ');
        res.send(emp);
    });
    // res.send({
    //     "Method":"POST",
    //     "name":req.body.name,
    //     "age":req.body.age,
    // });
});

router.put('/:id',(req,res)=>{
    res.send("This is root api put");
});

router.delete('/:id',(req,res)=>{
    res.send("This is root api delete");
});


module.exports = router;