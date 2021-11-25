const mongoose = require('mongoose');
const db = 'mongodb+srv://lovemtp12:lovemtp12@cluster0.finfj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';


const connectDB = async () => {
    try {
        await mongoose.connect(db);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;