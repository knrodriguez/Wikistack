const express = require('express');
const router = express.Router();
const {userList, userPages} = require('../views');
const {User, Page} = require('../models');

router.get('/', async (req,res,next) => {
  try{
    const users = await User.findAll();
    res.send(userList(users));
  } catch (error) {next(error);}
})

router.get('/:userId', async (req,res,next) => {
  try{
    const author = await User.findByPk(req.params.userId);
    const pages = await Page.findAll({
      where: {
        authorId: req.params.userId
      }
    })
    res.send(userPages(author, pages));
  } catch (error) {next(error);}
})

module.exports = router;
