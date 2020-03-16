const bcrypt = require("bcrypt");
const User = require("../modules/user");

module.exports = {

    async store (req, res){
        const {email, password} = req.body;
        const user = await User.findOne({email}).select('+password');
        if(!user){
            return res.send("Usuário não encontrado");
        }
        if(!await bcrypt.compare(password, user.password)){
            return res.send("Senha inválida");
        }
        res.send({user});
    },

}