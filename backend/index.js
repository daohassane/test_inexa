const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
const port = 3000

let estates = [
    {
        id: 1,
        title: "Villa 2pces Abatta",
        description: `The Villa is located five minutes from the centre of Torrevieja, in the Urbanization Los Balcones, one of the most prestigious and the most authentic Mallorca, with views to the salt lakes, emphasizing its clean air, its pinadas quiet urbanization.
            "found Within 1 km you will find the new 4-star hotel with Spa, a modern hospital, school, supermarket. There are bars, restaurants, shopping malls, pharmacy, bus stop.
            "Buy a Villa in the urbanization is a good investment of your money in Spanish property.
            "the Villa is built with modern technologies: heated floors, fireplace in living room, kitchen with appliances, a gym, a large garage, games – these and other details provide the comfort for the whole family.
            "designed Pool with Jacuzzi. And nearby there is a sauna and a summer kitchen with bar and BBQ is the perfect place to relax with family and friends!`,
        price: "200000",
        city: "Abidjan - Abatta",
        author: "Albert Benoît",
        dateCreation: "2021-10-15",
        rooms: 3,
        garage: true,
        swimmerpool: false
    }
]

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.get('/api/estates', (req, res) => {
    res.json(estates)
})

app.post('/api/estates', (req, res) => {
    const estate = req.body;
    estate.id = (new Date()).getTime();
    estates.push(estate)
    res.json()
})

app.put('/api/estates', (req, res) => {
    const estate = req.body;
    const result = [];
    for (let item of estates) {
        if (estate && estate.id === item.id) {
            result.push(estate);
        } else {
            result.push(item);
        }
    }
    estates = result;
    res.json()
})

app.get('/api/estates/:id', (req, res) => {
    const result = estates.filter(item => item.id === +req.params.id);
    res.json(result[0])
})

app.delete('/api/estates/:id', (req, res) => {
    estates = estates.filter(item => item.id !== +req.params.id)
    res.json()
})

app.post('/api/login', (req, res) => {
    const datas = req.body;
    const result = { token: `${(new Date()).getTime()}` };
    if (datas && datas.login === 'admin' && datas.password === '1234') {
        res.json(result);
    } else {
        throw new Error('Login mot de passe inccorecte');
    }
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
