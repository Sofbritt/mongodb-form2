const express = require('express');

const cors=require('cors')
const app = express();
app.use(express.urlencoded())
app.use(cors())





app.get('/', (req, res) => {
     res.sendFile(__dirname + '/form.html')
})

app.post('/submit', (req, res) => {
   res.json(req.body)
 console.log(req.body)
})

app.listen(4000, (err) => {
    if (err) {
        console.log(err)
    }

    console.log('Server is Listening  Port 4000')
})