require('dotenv').config()

const express = require('express');
const axios = require('axios');
const parseString = require('xml2js').parseString;

const server = express();

const GOOREADS_HOST = "https://www.goodreads.com";

const returnError = (res) => {
  res.json({
    message: 'There was an error retrieving books!'
  });
}

server.get("/shelf/currently_reading", (req, res) => {
  axios.get(`${GOOREADS_HOST}/review/list/${process.env.GOODREADS_ID}?key=${process.env.GOODREADS_KEY}&shelf=currently-reading`)
    .then((response) => {
      parseString(response.data, (err, result) => {
        if (err) {
          returnError(res);

          return;
        }

        try {
          const books = result.GoodreadsResponse.books;

          res.json({ message: books });
        } catch {
          returnError(res);
        }
      });
    })
    .catch((error) => {
      returnError(res);
    });
});

server.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

const port = 4000;

server.listen(port, () => {
    console.log(`Server listening at ${port}`);
});