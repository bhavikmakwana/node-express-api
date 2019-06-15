const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("This is employee api get ");
});

router.post('/',(req,res)=>{
    res.send("This is employee api post");
});

router.put('/:id',(req,res)=>{
    res.send("This is employee api put");
});

router.delete('/:id',(req,res)=>{
    res.send("This is employee api delete");
});


module.exports = router;