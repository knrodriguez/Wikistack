const express = require('express');
const router = express.Router();
const {addPage, wikiPage, main} = require('../views');
const {Page, User} = require('../models');

router.get('/',async (req,res,next)=>{
  try{
    const allPages = await Page.findAll();
    res.send(main(allPages));
  } catch(error) {next(error);}
});

router.get('/add',(req,res,next)=>{
  try{
    res.send(addPage());
  } catch(error) {next(error);}
});

router.post('/', async (req,res,next)=>{

  try{
    const [author, created] = await User.findOrCreate({
      where: {
        name: req.body.name,
        email: req.body.email
      }
    });

    const page = await Page.create(req.body);
    console.log(author);
    await page.setAuthor(author);

    res.redirect(`/wiki/${page.slug}`);
  } catch(error) { next(error); }
});

router.get('/:slug', async (req,res,next) => {
  try{
    const page = await Page.findOne({
      where: {
        slug: req.params.slug
      }
    });
    const author = await User.findOne({
      where: {
        id: page.authorId
      }
    });
    res.send(wikiPage(page, author));
  } catch(error){
    next(error);
  }
});

module.exports = router;
