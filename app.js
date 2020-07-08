require('dotenv');

const express = require('express');
const path = require('path');
const fs = require('fs');

const port = process.env.PORT || 3000;

const app = express();

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.use(express.static(path.resolve(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: false }));

app.disable('x-powered-by');

// app.use((req, res, next) => {
//   if (req.headers['x-forwarded-proto'] === 'http') { res.redirect(`https://${req.headers.host}${req.url}`); } else { next(); }
// });

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.render('index', {

  });
  
});
