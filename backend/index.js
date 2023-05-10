const express = require('express');
const server = express();
const port = process.env.PORT || 3000

const movies = require('./src/data/movie.json')


server.get('/filmes', (req, res) => {
    return res.json(movies)
});


server.listen(port, () => {
    console.log('Listening');
});