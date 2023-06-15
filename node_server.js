const express = require('express');
const fs = require('fs')

const hostname = '127.0.0.1';
const port = 3015;

const app = express()


app.use(express.static('public'));

app.get("/button", async (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('loading_comparison.html').pipe(res)
})

app.get("/img", async (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('capture_comparison.html').pipe(res)
})

app.get("/largeimg", async (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('large_comparison.html').pipe(res)
})

app.get("/medimg", async (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('1080_comparison.html').pipe(res)
})

app.get("/pngimg", async (req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
  fs.createReadStream('1080png_comparison.html').pipe(res)
})

app.listen(port)
console.log(`Server running at http://${hostname}:${port}/`);
