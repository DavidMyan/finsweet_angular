export const host = 'http://localhost:3000/'
export const environment = {
    category:{
        get:host + 'category',
        delete:host + 'category',
        post:host + 'category',
        edit:host + 'category',
    },
    usersInfo:{
        get:host + 'usersInfo',
        delete:host + 'usersInfo',
        post:host + 'usersInfo',
        edit:host + 'usersInfo',
    },
    posts:{
        get:host + 'posts',
        delete:host + 'posts',
        post:host + 'posts',
        edit:host + 'posts',
    },
    loginReg:{
        get:host + 'login',
    },
}