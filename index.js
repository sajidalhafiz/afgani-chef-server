const express = require('express')
const app = express()
const port = 5000;

const cors = require('cors')
app.use(cors())

const chefData = require('./data/afganiChef.json')

app.get('/', (req, res) => {
    res.send('AfganiChef Server')
})

app.get('/chefData', (req, res) => {
    res.send(chefData)
})

app.listen(port, () => {
    console.log(`AfganiChef Server is running from port: ${port}`)
})