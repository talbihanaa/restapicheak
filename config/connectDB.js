const mongoose = require('mongoose');

const connectdb = async()=>{

    await mongoose.connect(process.env.URL)
    .then(() => {
        console.log("Connect to DB")

        
    })
    .catch((err) => console.log(err))
}

module.exports = connectdb;