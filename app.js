const express = require('express');
const morgan = require('morgan');
const app = express();
const layout = require('./views/layout')
const {db, User, Page} = require('./models');
const wikiRoute = require('./routes/wiki');
const usersRoute = require('./routes/users');

db.authenticate().then(() => {
  console.log('connected to the database');
})

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req,res,next) => {
  res.redirect('/wiki')
});

app.use('/wiki', wikiRoute);

app.use('/users', usersRoute);

app.use((req,res,next) => {
  res.status(404).send('Sorry, you have reached no page. Error 404');
});

async function seed(){
  await db.sync();
  const PORT = 3000;
  app.listen(PORT);
}

seed();


