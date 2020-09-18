const express = require('express')

const app = express()

app.use(express.static(__dirname + '/html'))

app.listen(4432, ()=>{
    console.log('Server started on http://localhost:4432')
})

// app.get('/',(req, res)=>{
//     res.send("Hello to my server !!!")

// })



app.get('/calc/:op', (req, res)=>{
    let q1 = parseInt(req.query.q1);
    let q2 = parseInt(req.query.q2);
    let result = 0;
    console.log(req.query,req.params)
    switch (req.params.op) {
        case 'add': result = q1 + q2;break;
        case 'sub': result = q1 - q2;break;
        case 'mul': result = q1 * q2;break;
        case 'div': result = q1 / q2;break;
    }

    res.send(`
        <html>
            <body>
                <h1>
                    Result is : ${result}
                </h1>
            </body>
        </html>
    `)
})

// app.listen(3232, () => {
//     console.log('Server started on http://localhost:3232')
// })