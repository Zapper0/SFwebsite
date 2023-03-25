// default express app with handlebars
const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');

app.use(express.static('src'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('handlebars', handlebars.engine({ defaultLayout: false }));
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/sobre', (req, res) => {
    res.render('sobre');
}
);

app.use((req, res) => {
    res.status(404);
    res.render('404');
}
);


app.listen(4000, () => {
    console.log('Servidor rodando na porta 4000');
});