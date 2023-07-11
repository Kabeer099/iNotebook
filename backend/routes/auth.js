const express = require('express');
const User = require('../models/User');
const router = express.Router();
// Create a User using: Post "/api/auth/". Doesn't require Auth
router.get('/',(req, res) =>{
    console.log(req.body);
    const user = User(req.body);
    user.save();
    res.send('donee');
})

module.exports = router;