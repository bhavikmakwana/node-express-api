const express  = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("This is root api get ");
});

router.post('/',(req,res)=>{
    console.log(req.body);
    res.send({
        "Method":"POST",
        "name":req.body.name,
        "age":req.body.age,
    });
});

router.put('/:id',(req,res)=>{
    res.send("This is root api put");
});

router.delete('/:id',(req,res)=>{
    res.send("This is root api delete");
});


module.exports = router;