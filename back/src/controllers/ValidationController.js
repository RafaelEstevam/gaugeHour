
module.exports = {
    async show (req, res){
        await res.send({ok: true, userId: req.userId});
    }
}