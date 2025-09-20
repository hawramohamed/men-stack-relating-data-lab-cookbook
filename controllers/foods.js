const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic 
router.get('/', async (req, res) => {
  try {
    res.render('foods/index.ejs');
  } catch (error){
    console.log(error);
    res.redirect('/');
  };
});

router.get('/new', (req, res) => {
    try{
        res.render('foods/new.ejs');
    } catch (error){
        console.log(error);
    };
});


module.exports = router;
