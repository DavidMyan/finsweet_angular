export interface CategoryCard{
    category: any;
    id:number;
    image:string;
    title:string;
    short_description:string;
}
export interface UsersCard{
    id:number;
    image:string;
    fullImage:string
    name:string;
    short_description:string;
    facebook:string;
    twiter:string;
    instagram:string;
    in:string;
}
export interface AllPosts{
    id: number;
    image:string;
    categoryImg:string;
    category: string;
    title: string;
    short_description:string;
    postUser?:string;
    postData?:string;
    postUserImg:string;
}
export interface Login{
    email:string | null,
    password:string | null,
    accessToken: string;
}
export interface Message{
    id:number
    fullname:string,
    email:string,
    related:string,
    message:string,
}
export interface Register{
    email:string,
    password:string,
}