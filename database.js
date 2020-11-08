const mongoose = require('mongoose');
const {
  mongo, env,
} = require('./config');

// set mongoose Promise to Bluebird
mongoose.Promise = Promise;

// Exit application on error
mongoose.connection.on('error', (err) => {
  // eslint-disable-next-line no-console
  console.error(`MongoDB connection error: ${err}`);
  // eslint-disable-next-line no-process-exit
  process.exit(-1);
});


exports.connect = () => {
    mongoose.connect(mongo.uri, {
      keepAlive: 1,
      useCreateIndex: true,
      useNewUrlParser: true,
      eMongoClient: true
    },function(err,connected){
      if(err){
        console.log(err)
      } if(!err) {
        console.log("Database Connected")
      }
    });
  
    return mongoose.connection;
  };