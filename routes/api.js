const express  = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send("This is root api get ");
});

router.post('/',(req,res)=>{
    res.send("This is root api post");
});

router.put('/:id',(req,res)=>{
    res.send("This is root api put");
});

router.delete('/:id',(req,res)=>{
    res.send("This is root api delete");
});


module.exports = router;