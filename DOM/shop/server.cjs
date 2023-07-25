const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/submit', (req, res) => {
    const {name, city, pay, amount, novaPoshta, comment, product} = req.body;
    console.log(req.body)
    res.send(`<h1>Замовлення прйнято! </h1> <br>
    Покупець: ${name} <br>
    місто: ${city} <br>
    відділення Нової Пошти ${novaPoshta} <br>
    Оплата: ${pay} <br>
    Продукт: ${product} <br>
    Кількість товару: ${amount} <br>
    Коментар: ${comment}`)
})
const host = '127.0.0.1';
const port = 3000;

app.listen(port, host, () => {
    console.log(`server ok on http://${host}:${port}`);
});