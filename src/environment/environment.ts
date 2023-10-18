export const host = 'http://localhost:3000/'
export const environment = {
    category:{
        get:host + 'category',
    },
    usersInfo:{
        get:host + 'usersInfo',
        delete:host + 'usersInfo',
    },
    posts:{
        get:host + 'posts',
    },
    loginReg:{
        get:host + 'login',
    },
}