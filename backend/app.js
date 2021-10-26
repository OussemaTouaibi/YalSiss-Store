const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload')
const path = require('path')


const errorMiddleware = require('./middlewares/errors')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());

//Setting up config file
if(process.env.NODE_ENV !== PRODUCTION) require('dotenv').dotenv.config({ path: 'backend/config/config.env' })




// Import all routes
const products = require('./routes/product')
const auth = require('./routes/auth');
const order = require('./routes/order');
const category = require('./routes/category')
const sub = require('./routes/sub')




app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', order)
app.use('/api/v1', category)
app.use('/api/v1', sub)


if(process.env.NODE_ENV === 'PRODUCTION') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, '../frontend/build/index.html'))
    })
}


// Middleware to handle errors
app.use(errorMiddleware);

module.exports = app