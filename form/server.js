const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let serverInfo;

app.post('/submit', (req, res) => {
    const {name, surname, birthday, gender, city, adress, lenguage} = req.body;
    console.log(req.body)
    res.send(req.body)
    serverInfo = req.body
})
app.get('/submit', (req, res) => {
    res.json(serverInfo)
})

const host = '127.0.0.1';
const PORT = 3000;

app.listen(PORT, host, () => {
    console.log(`server ok on http://${host}:${PORT}`);
});