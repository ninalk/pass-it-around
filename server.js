const express = require('express')
const favicon = require('serve-favicon')
const path = require('path')

const app = express()
const port = 3000

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/', (req, res) => {    
    res.send(`
        <p>99 little bugs in the code</p>
        <p>99 little bugs</p>
        <a href="/98">take one down, patch it around</a>
    `)
})

app.get('/:number_of_bugs', (req, res) => {
    let numOfBugs = req.params.number_of_bugs
    const max = Number.MAX_SAFE_INTEGER
    let randomNumOfBugs = Math.floor(Math.random() * (max - Number(numOfBugs)) + Number(numOfBugs))

    if (numOfBugs === '0') {
        res.send(`
            <p>0 little bugs in the code</p>
            <a href="/">Start Over</a>
        `) 
    } else {
        res.send(`
            <p>${numOfBugs} little bugs in the code</p>
            <p>${numOfBugs} little bugs</p>
            <a href="/${numOfBugs - 1}">take one down, patch it around</a>
            <p>${randomNumOfBugs} bugs in the code</p>
        `)      
    } 

})


app.listen(port, () => {
    console.log('listening on port 3000...')
})