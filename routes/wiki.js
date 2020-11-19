const express = require('express');
const router = express.Router();
const addPage = require('../views/addPage');
const {Page} = require('../models');

router.get('/',(req,res,next)=>{
  res.send('test text');
});

router.get('/add',(req,res,next)=>{
  res.send(addPage());
});

router.post('/', async (req,res,next)=>{
  const title = req.body.title;
  const content = req.body.content;

  try{
    const page = await Page.create({
      title: title,
      content: content
    });

    await page.save();
    res.redirect('/');
  } catch(error) { next(error); }
});

module.exports = router;
