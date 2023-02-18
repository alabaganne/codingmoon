require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 8000;

async function main() {
	mongoose.set('strictQuery', false);
  await mongoose.connect('mongodb+srv://alabaganne:ala50101959@cluster0.xga5n.mongodb.net/codingmoon?retryWrites=true&w=majority');
	console.log('Connected to MongoDB');
}
main().catch(err => console.log(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(require('./middlewares/auth'));

app.use('/api/auth', require('./routes/auth'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
