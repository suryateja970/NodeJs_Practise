const mongoose = require('mongoose');

const connectDB = async() => {
    const conn = await mongoose.connect(process.env.DB_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true

    })
    console.log("mongo conncted succesfully".bold.underline);

}
module.exports = connectDB