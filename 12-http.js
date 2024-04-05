const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('This is our homepage')
    }
    else if (req.url === '/about') {
        res.end('Here is our short history')
    }
    else {
        res.end(`
        <h1>Oops!</h1>
        <p>We seem to not find the page you are looking for!</p>
        <a href="/">Back home</a>
    `)
    }
})

server.listen(5050)