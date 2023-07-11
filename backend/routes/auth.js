const express = require('express');
const router = express.Router();

router.get('/',(req, res) =>{
    const obj = {
        name : 'Aslam',
        age: 36
    }
    res.json(obj)
})

module.exports = router;