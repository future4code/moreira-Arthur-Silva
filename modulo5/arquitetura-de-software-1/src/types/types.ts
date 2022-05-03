export enum USER_ROLES {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
}
export type User = {
    id:string,
    name:string,
    email:string,
    password:string,
    role:USER_ROLES
}
export type PayLoad = {
    id:string,
    role:string
}
/* export type UserLogin = {
    email:string,
    password:string
} */