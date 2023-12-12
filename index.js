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

app.get('/chefData/:id', (req, res) => {
    const chefId = req.params.id;
    const targetChef = chefData.find(chef => chef.id === chefId)
    const selectedChef = targetChef ? targetChef : {}
    res.send(selectedChef)
})

app.listen(port, () => {
    console.log(`AfganiChef Server is running from port: ${port}`)
})


// <a href="https://ibb.co/JnYVVFV"><img src="https://i.ibb.co/sjTnnJn/chef-1.webp" alt="chef-1" border="0"></a>
// <a href="https://ibb.co/jZ3DPqm"><img src="https://i.ibb.co/KzVWpBd/chef-2.jpg" alt="chef-2" border="0"></a>
// <a href="https://ibb.co/fvzNx8z"><img src="https://i.ibb.co/FVLYDsL/chef-3.jpg" alt="chef-3" border="0"></a>
// <a href="https://ibb.co/1ndmwdz"><img src="https://i.ibb.co/xsf7RfF/chef-4.webp" alt="chef-4" border="0"></a>
// <a href="https://ibb.co/pbgDn1m"><img src="https://i.ibb.co/NtXh7F4/chef-6.jpg" alt="chef-6" border="0"></a>
// <a href="https://ibb.co/zXmJD57"><img src="https://i.ibb.co/v3cYRBQ/chef-7.jpg" alt="chef-7" border="0"></a>
// <a href="https://ibb.co/ngRXCk2"><img src="https://i.ibb.co/j6HCR4K/chef-8.jpg" alt="chef-8" border="0"></a>
// <a href="https://ibb.co/QY7BqMs"><img src="https://i.ibb.co/sspSDqL/chef-9.jpg" alt="chef-9" border="0"></a>
// <a href="https://ibb.co/xHtLcqP"><img src="https://i.ibb.co/X8rLdxN/chef-10.jpg" alt="chef-10" border="0"></a>
// <a href="https://ibb.co/rMfjLS7"><img src="https://i.ibb.co/5vx0zyM/chef-11.jpg" alt="chef-11" border="0"></a>
// <a href="https://ibb.co/M6jkC3Z"><img src="https://i.ibb.co/PQbG6fF/chef-12.jpg" alt="chef-12" border="0"></a>
// <a href="https://ibb.co/cFZK74N"><img src="https://i.ibb.co/gTfbBkD/chef-13.jpg" alt="chef-13" border="0"></a>
// <a href="https://ibb.co/bXTQ1P3"><img src="https://i.ibb.co/gJNmy37/chef-14.jpg" alt="chef-14" border="0"></a>
// <a href="https://ibb.co/2FYntDP"><img src="https://i.ibb.co/8m4K5W2/chef-15.jpg" alt="chef-15" border="0"></a>