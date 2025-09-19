const express = require('express');
const cors= require('cors')

const app = express();

app.use(cors())
app.get('/Calculate', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    const c = parseFloat(req.query.c);

    const interest=(a+b+c)/100;
    const amount=a+interest

    res.json({
        interest,
        amount
    })
});

app.listen(3000,() =>{
    console.log("Server running at http://localhost:3000");
})