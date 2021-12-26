const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/reto-desarrollo'

const DB_CONNECTION = async () => {
    try {
        await mongoose.connect(url);
        console.log("La base de datos se ha conectado satisfactoriamente")
    }
    catch(error){
        console.log(error)
    }
}

export default DB_CONNECTION