const auth = {
    setUserAuth: (userId, token) =>{
        localStorage.setItem("userId", userId);
        localStorage.setItem("token", 'Bearer ' + token);
    },
    getUserAuth: () =>{
        return {userId: localStorage.getItem("userId"), token: localStorage.getItem("token")}
    },
    removeUserAuth: () =>{
        localStorage.removeItem("userId");
        localStorage.removeItem("token");
    },
    validateUserAuth: async () =>{
       
    }
}

export default auth;