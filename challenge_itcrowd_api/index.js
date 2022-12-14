const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const productRoute = require('./routes/product');
const cartRoute = require('./routes/cart');
const orderRoute = require('./routes/order');
const cors = require('cors');

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('BD conect success!'))
  .catch(err => {
    console.log(err);
  });

// cors
app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);
app.use('/api/orders', orderRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log('BD server is live!');
});
