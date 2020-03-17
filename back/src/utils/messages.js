module.exports = {
    error: {
        user:{
            alreadyExist: "Usuário já cadastrado",
        },
        auth:{
            invalidPassword: "Senha inválida",
            userNotFound: "Usuário não encontrado",
            middleware: {
                tokenNotFound: "Token não informado",
                tokenError: "Token errado",
                tokenNotPattern : "Token fora do padrão",
                tokenNotAllow: "Token inválido"
            }
        },
    },
    success:{
        user:{
            resgistrationSuccess: "Usuário cadastrado com sucesso"
        },
        auth:{
            loginSuccess: "Login feito com sucesso"
        }
    }
}