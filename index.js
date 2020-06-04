require('newrelic');

const express = require('express');
const compression = require('compression');
const axios = require('axios');
const app = express();
const PORT = 3100;


app.use(compression());
app.use('/games/:gameId', express.static(`${__dirname}/public`));
app.use(express.json());


// app.get('/carousel/:gameId', (req, res) => {
//   axios({
//     baseURL: `http://3.18.37.38:3003/carousel/${req.params.gameId}`
//   })
//     .then((data) => { res.status(200).send(data.data); })
//     .catch(() => { res.status(404).end(); });
// });

// app.get('/recommended', (req, res) => {
//   axios.get('/recommended', {
//     baseURL: 'http://3.18.37.38:3005',
//   })
//     .then((data) => { res.status(200).send(data.data); })
//     .catch(() => { res.status(404).end(); });
// });

// app.get('/reviews/:gameId', (req, res) => {
//   axios({
//     baseURL: `http://3.22.26.129/reviews/${req.params.gameId}`
//   })
//     .then((data) => { res.status(200).send(data.data); })
//     .catch(() => { res.status(404).end(); });
// });

app.get('/cartapi/:gameId', (req, res) => {
  axios({
    baseURL: `http://ec2-13-59-39-155.us-east-2.compute.amazonaws.com:3001/cartapi/${req.params.gameId}`
  })
    .then((data) => { res.status(200).send(data.data); })
    .catch(() => { res.status(404).end(); });
});

app.get('/api/games/:gameId', (req, res) => {
  axios({
    baseURL: `http://54.67.69.54:3004/api/games/${req.params.gameId}`
  })
    .then((data) => { res.status(200).send(data.data); })
    .catch(() => { res.status(404).end(); });
});

app.get('/reviews/:gameId', (req, res) => {
  axios({
    
    baseURL: `http://18.220.38.54:3002/reviews/${req.params.gameId}`
  })
    .then((data) => { res.status(200).send(data.data); })
    .catch(() => { res.status(404).end(); });
});

app.post('/addGame/:id', (req, res) => {
  const newGame = {'csgo': "silver4"};
  res.send(newGame);

});

app.listen(PORT, () => {
  console.log(`Listening at port:${PORT}`);
});