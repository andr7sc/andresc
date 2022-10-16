const mongoose = require('mongoose');

const getConnection = async () => {
    console.log('Iniciando Conexión BD')
    try {
        const url = 'mongodb+srv://andresC:Hg9qghdTJoDfqZbj@cluster0.vsw2jbt.mongodb.net/?retryWrites=true&w=majority';

        await mongoose.connect(url);

        console.log('conexión exitosa');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    getConnection
}