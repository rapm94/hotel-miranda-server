const mongoose = require('mongoose');

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
            });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
        throw new Error( `MongoDB connection error: ${error}` );
    }
}