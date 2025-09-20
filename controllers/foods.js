const express = require('express');
const router = express.Router();

const User = require('../models/user.js');

// router logic 
//index
router.get('/', async (req, res) => {
  try {
    const currentUser = await User.findById(req.session.user._id);
    const pantryItems = currentUser.pantry;

    res.render('foods/index.ejs', {pantry: pantryItems});
  } catch (error){
    console.log(error);
    res.redirect('/');
  };
});

//form
router.get('/new', (req, res) => {
    try{
        res.render('foods/new.ejs');
    } catch (error){
        console.log(error);
    };
});

//post
router.post('/', async(req, res) =>{
    try{
        const currentUser = await User.findById(req.session.user._id);
        currentUser.pantry.push(req.body);
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/foods`);
    } catch (error){
        console.log(error);
        res.redirect('/');
    };
});



module.exports = router;
