const express = require('express');
let faker = require('faker');
let cors = require('cors')
// Create Express app
const app = express()

app.use(cors());
// A sample route
app.get('/data', (req, res) =>
{
    let data = [];
    let status = ['online', 'offline', 'away', 'busy', 'do not disturb']
    let language = ['english', 'russian', 'spanish', 'turkish', 'latin', 'german', 'hindi']
    for (let i=0; i< req.query.number;i++){
        let temp = {
            name: faker.name.findName(),
            status: status[Math.floor(Math.random() * 5)],
            reviews: Math.floor(Math.random() * 100),
            language: language[Math.floor(Math.random() * 7)]
        }
        data.push(temp);
    }
    return res.send({data});
})

// Start the Express server
app.listen(3000, () => console.log('Server running on port 3000!'))