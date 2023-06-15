require('dotenv').config({ path: './config.env' });

const mongoose = require('mongoose');
mongoose
  .connect(process.env.DB_URI)
  .then(console.log('Database connected successfully.'));

const app = require('./app');

const port = process.env.PORT || 5001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
