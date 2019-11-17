import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { createConnection } from 'typeorm';
import passport from 'passport';
import config from './config/passport';

import login from './routes/login';
import announcement from './routes/announcement';
import order from './routes/order';
import category from './routes/category';
import product from './routes/product';


// Setting up port
const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); // For body parser
app.use(bodyParser.json());
app.use(cookieSession({
  name: 'mysession',
  keys: ['vueauthrandomkey'],
  maxAge: 24 * 60 * 60 * 1000, // 24 hours
}));
app.use(passport.initialize());
app.use(passport.session());
config();

// wire up all the routes
app.use(login(passport));
app.use(announcement);
app.use(order);
app.use(category);
app.use(product);

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (_req, res) => {
  res.send('hello world');
});

createConnection().then(() => {
  app.listen(PORT, () => console.log('Example app listening on port 3000!'));
});