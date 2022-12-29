const userRoute = require('../routes/userRoute');
const authRoute = require('../routes/authRoute');

function route(app) {
    app.use('/user', userRoute);
    app.use('/auth', authRoute);
}

module.exports = route;