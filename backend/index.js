const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const route = require('./routes');

const PORT = 8000;
dotenv.config();
const app = express();

mongoose.connect(process.env.MONGODB_URL, () => {
    console.log("CONNECTED TO MONGO DB");
  });

app.use(cors());
app.use(cookieParser());
app.use(express.json());

route(app);

app.listen(PORT, () => {
    console.log(`App is listening port http://localhost:${PORT}`);
  });
  