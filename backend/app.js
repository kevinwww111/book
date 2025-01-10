const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bookRoutes = require('./routes/bookRoutes');
const config = require('./config');

const app = express();
app.use(cors());
app.use(express.json());
app.use(bookRoutes);

mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((error) => console.log(error));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});