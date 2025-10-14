const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Jittiphat Kaka Junthakee')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

//user manage API
app.get('/users', (req, res) => {
  res.send('GOTCHA BITCH')
})

app.post('/users', (req, res) => {
  res.send('Got a POST request')
})

app.put('/users', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/users', (req, res) => {
  res.send('Got a DELETE request at /user')
})

//product manage API
app.get('/product', (req, res) => {
  res.send('GOTCHA BITCH')
})

app.post('/product', (req, res) => {
  res.send('Got a POST request')
})

app.put('/product', (req, res) => {
  res.send('Got a PUT request at /user')
})

app.delete('/product', (req, res) => {
  res.send('Got a DELETE request at /user')
})
