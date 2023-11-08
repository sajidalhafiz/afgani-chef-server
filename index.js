const express = require('express')
const app = express()
const port = 5000;

const cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
    res.send('AfganiChef Server')
})

app.listen(port, () => {
    console.log(`AfganiChef Server is running from port: ${port}`)
})