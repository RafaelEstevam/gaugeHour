const User = require("../modules/user");
const Message = require("../utils/messages");
const generateToken = require("../utils/generateToken");

module.exports = {

    //INDEX SHOW STORE UPDATE DESTROY
    async store (req, res){
        const {name, last_name, email, password, registration} = req.body;
        let user = await User.findOne({email})
        if(!user){
            user = await User.create({
                name,
                last_name,
                email,
                password,
                registration
            })
            user.password = undefined;
            return res.status(200).send({success: Message.success.user.resgistrationSuccess, userId: user._id, token: generateToken({id: user._id})});
        }else{
            return res.status(400).send({error: Message.error.user.alreadyExist});
        }
    },

    async index (req, res){
        const allDevs = await Dev.find();
        if(allDevs){
            return res.json(allDevs);
        }
    },

    async show (req, res){
        const _id = req.params.id;
        let user = await User.findOne({_id: _id});
        if(user){
            return res.json(user);
        }
    }
}