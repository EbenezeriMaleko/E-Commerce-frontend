const mongoose = require('mongoose');

const dbConnect = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Database connected successfully');
    } catch (err) {
        console.error('Database connection error:', err);
    }
};

module.exports = dbConnect;