const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSquema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    last_name: String,
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String, 
        required: true, 
        select: false,//quando buscar usuário não tras o passowrd
    },
    registration: {
        type: String,
        required: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    }
});

UserSquema.pre('save', async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
    
    next();
})
                                //nome da tabela
module.exports = mongoose.model('Users', UserSquema);
                                       //estrutura da tabela