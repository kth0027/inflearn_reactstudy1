const express = require('express')
const app = express()
const port = 8080


//mongodb 연결
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://kth0027:abcd1234@boilerplate.rb8vw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false,

}).then(() => console.log('MongoDB Connected...')).catch(
    err => console.log(err))


// mongoose.connect('mongodb+srv://kth0027:abcd1234@boilerplate.rb8vw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', function (에러, client) {
//     if (에러) return console.log(에러)
//     app.listen(8080, function () {
//         console.log('listening on 8080 MongoDB Connected...')
//     })
// })


app.get('/', (req, res) => {
    res.send('Hello World!~안녕하세요!!~!~!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

// 몽고 kth0027 // ps : mongodb+srv://kth0027:<password>@boilerplate.rb8vw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority