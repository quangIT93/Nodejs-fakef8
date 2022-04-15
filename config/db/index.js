const mongoose = require('mongoose');

async function connect() {
    // báo lỗi dùng try catch
    try {
        await mongoose.connect('mongodb://localhost:27017/learn_f8_dev', {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
        });
        console.log('connect successfully')
    } catch (error) {
        console.log('connect failure')
    }
}

module.exports = { connect }