const User = require("../modules/user");

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
            return res.json(user);
        }else{
            res.send("Usuário já cadastrado");
        }
    },

    async index (req, res){
        const allDevs = await Dev.find();
        if(allDevs){
            return res.json(allDevs);
        }
    },

    async show (req, res){
        const {github_user} = req.params;
        let oneDev = await Dev.findOne({github_user});
        if(oneDev){
            return res.json(oneDev);
        }
    }
}