const app = require('express')()

app.get('/', (req, res) => {
    res.send('Hey fool, get distributed because I might mess up your whole system if I fail!')
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})
