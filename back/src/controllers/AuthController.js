const bcrypt = require("bcrypt");
const User = require("../modules/user");
const Message = require("../utils/messages");
const generateToken = require("../utils/generateToken");
// const jwt = require("jsonwebtoken");
// const authConfig = require("../config/auth.json");

module.exports = {
    async store (req, res){
        const {email, password} = req.body;
        const user = await User.findOne({email}).select('+password');
        if(!user){
            return res.status(400).send({error: Message.error.auth.userNotFound});
        }
        if(!await bcrypt.compare(password, user.password)){
            return res.status(400).send({error: Message.error.auth.invalidPassword});
        }

        user.password = undefined;

        res.send({user, token: generateToken({id: user._id})});
    },

}