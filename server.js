const express = require('express')
const next = require('next')
const bodyParser = require('body-parser');
const react = require('react')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const male_coeffs = [-216.0475144, 16.2606339, -0.002388645, -0.00113732, 7.01863e-06, -1.291e-08];
const female_coeffs = [594.31747775582, -27.23842536447, 0.82112226871, -0.00930733913, 4.731582e-05, -9.054e-08];
const poundsToKg = 2.20462;

function computeWilksScore(gender, weight, lift_total) {
  x = weight;

  if (gender) {
    c = male_coeffs;
  } else {
    c = female_coeffs;
  }

  denominator = 0
  c.map((num, i) => {denominator += c[i] * Math.pow(x, i)})

  return (500 / denominator) * lift_total;
}

app.prepare()
  .then(() => {
    const server = express()

    server.use(bodyParser.urlencoded({ extended: true }));

    server.get('/', (req, res) => {
      return app.render(req, res, '/', req.query)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.post('/', function (req, res) {
      let gender = parseInt(req.body.gender)
      let unit = parseInt(req.body.unit)
      var weight = parseInt(req.body.weight);
      let squat = parseInt(req.body.squat);
      let bench = parseInt(req.body.bench);
      let deadlift = parseInt(req.body.deadlift);

      // get lift totals and convert to kg if units are pounds
      var lift_total = squat + bench + deadlift;
      if (unit) {
        lift_total /= poundsToKg;
        weight /= poundsToKg;
      }

      score = computeWilksScore(gender, weight, lift_total)
      console.log(score)

      // res.render('index', {score: computeWilksScore(gender, weight, lift_total), error: null})
      // app.render(req, res, '/', req.query)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
