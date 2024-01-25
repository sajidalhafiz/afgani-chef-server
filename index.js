const express = require('express')
const app = express()
const port = 5000;

const cors = require('cors')
app.use(cors(
    {
        origin: 'https://afgani-chef.web.app',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
      }
))

const chefData = require('./data/afganiChef.json')

app.get('/', (req, res) => {
    res.send('AfganiChef Server')
})

app.get('/chefData', (req, res) => {
    res.send(chefData)
})

app.get('/chefData/:id', (req, res) => {
    const chefId = req.params.id;
    const targetChef = chefData.find(chef => chef.id === chefId)
    const selectedChef = targetChef ? targetChef : {}
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`AfganiChef Server is running from port: ${port}`)
})
