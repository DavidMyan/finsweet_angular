export const host = 'http://localhost:3000/'
export const environment = {
    category:{
        get:host + 'category',
        delete:host + 'category',
        post:host + 'category',
        edit:host + 'category',
    },
    usersInfo:{
        get:host + 'author',
        delete:host + 'author',
        post:host + 'author',
        edit:host + 'author',
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
    register:{
        get:host + 'register',
    },
    comments:{
        get:host + 'messages',
    },
    regRequest:{
        get:host + 'registrationRequest',
    },
    author:{
        get:host + 'users',
    },
}