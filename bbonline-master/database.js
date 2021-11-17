const mongoose = require('mongoose');

// Connect to mongo
mongoose
  .connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB has been successfully connected.'))
  .catch((err) => console.error(err));