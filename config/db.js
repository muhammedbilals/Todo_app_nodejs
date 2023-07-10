const mongoose = require('mongoose');
const connection = mongoose.createConnection('mongodb://127.0.0.1:27017/TodoApp').on('open', () => {
    console.log('MongoDB connected')
}).on('error', (error) => {
    console.log('MongoDB connection error:',error)
});

module.exports = connection;