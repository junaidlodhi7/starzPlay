require('dotenv').config();
1
var password = encodeURIComponent('')

if (process.env.NODE_ENV === 'development') {
    config = {
        env: process.env.NODE_ENV,
        port: 3000,
        socketPort: 3002,
        socketUrl: 'localhost',
        mongo: { uri: 'mongodb://juni:abc123456@ds053937.mlab.com:53937/syspark' },

    };
}
else if (process.env.NODE_ENV === 'production') {
    config = {

        mongo: { uri: 'mongodb://localhost:27017/production-express-boilerplate' },

    };
}


module.exports = config;