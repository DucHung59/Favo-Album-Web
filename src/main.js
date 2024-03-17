const path = require('path')
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')

const route = require('./routes')
const db = require('./config/db')

//connect to database
db.connect();

const app = express()
const port = 4000

app.use(express.static(path.join(__dirname, 'public')))

app.use(
  express.urlencoded({
    extended: true,
  }),
)
app.use(express.json())
//XML HTTP Request, fetch, axios, ...
// app.use(morgan('combined'));

app.engine(
  'hbs',
  engine({
    extname: '.hbs',
  }),
)

app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource', 'views'))

// Routes init
route(app)

// 127.0.0.1 - localhost
app.listen(port, () => {
  console.log(`App listening on port http://localhost:${port}`)
})
