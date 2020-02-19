const express = require ('express');
const app = express();
const mongoose = require ('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute)

app.get('/', (req, res) => {
res.send('We are on Home');
})



mongoose.connect('mongodb+srv://joec:that1guy2@cluster0-tlgse.mongodb.net/parcial2?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('Conectado a la BD') );

app.listen(port = process.env.PORT || 80);