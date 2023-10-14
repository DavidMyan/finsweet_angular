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
    category: string;
    title: string;
    short_description:string;
    postUser?:string;
    postData?:string;
}