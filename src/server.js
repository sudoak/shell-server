require('dotenv').config();

const express = require('express');
const rateLimit = require("express-rate-limit");

const app = express();

const port = process.env.SERVER_PORT || 9999;
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 500
});

app.use(express.json());
app.use(limiter);

/** 
 * Routes
*/
app.use("/",)


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))