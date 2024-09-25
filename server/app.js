if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const port = process.env.PORT || 3000;

const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/index');

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Todo list app"
  })
})
// app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
