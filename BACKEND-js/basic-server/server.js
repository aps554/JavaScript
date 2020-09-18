const express = require('express')

const app = express()

app.get('/',(req, res)=>{
    res.send("Hello to my server !!!")

})

app.get('/calc/add', (req, res)=>{
    let q1 = parseInt(req.query.q1);
    let q2 = parseInt(req.query.q2);
    let result = q1 + q2;
    res.send("Sum of "+ q1 + "and "+ q2 + "is "+ result);
})

app.listen(3232, () => {
    console.log('Server started on http://localhost:3232')
})