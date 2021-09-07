const mongoose = require('mongoose');

const dbConn = async() => {
    await mongoose.connect(process.env.DB_CNN);
    console.log('DB online');
}


module.exports = {
    dbConn
}