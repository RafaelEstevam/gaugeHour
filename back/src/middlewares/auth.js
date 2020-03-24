const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');
const Messages = require('../utils/messages');

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader){
        return res.status(401).send({error: Messages.error.auth.middleware.tokenNotFound})
    }

    const parts = authHeader.split(' ');
    if(parts.length < 2 || parts.length > 2){
        return res.status(401).send({error: Messages.error.auth.middleware.tokenError})
    }

    const [ scheme, token ] = parts;
    if(!/^Bearer$/i.test(scheme)){
        return res.status(401).send({error: Messages.error.auth.middleware.tokenNotPattern})
    }

    jwt.verify(token, authConfig.secret, (err, decoded) =>{
        if(err){
            return res.status(401).send({error: Messages.error.auth.middleware.tokenNotAllow})
        }
        req.userId = decoded.id;
        return next();
    })
    
}