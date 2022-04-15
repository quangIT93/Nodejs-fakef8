const express = require('express')
const path = require('path');
const morgan = require('morgan')
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const route = require('./routes/index.route');


const db = require('./config/db')

// connect to db
db.connect();

const app = express()
const port = 3000

// lien ket thu muc public lay ra anh img
app.use(express.static(path.join(__dirname, 'public')))

app.use(methodOverride('_method'))

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.json());

//http logger
app.use(morgan('combined'))


// Template engine default
// app.engine('handlebars', engine());

// change name handlebars => hbs
app.engine('.hbs', engine({
    extname: '.hbs',
    // tạo ra hàm sum giúp việc tính tổng cho view
    helpers: {
        sum: (a, b) => a + b
    }
}));
app.set('view engine', '.hbs');
app.set('views', 'src/resources/views');

route(app)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})