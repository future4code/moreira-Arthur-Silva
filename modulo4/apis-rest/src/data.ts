export enum UserEnum {
    ADMIN = "ADMIN",
    NORMAL = "NORMAL"
 }
export type TypeUsers = {
    id:number,
    name:string,
    email:string,
    type:UserEnum,
    age:number
}




export let users:TypeUsers[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: UserEnum.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: UserEnum.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: UserEnum.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: UserEnum.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: UserEnum.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: UserEnum.ADMIN,
        age: 60
    }
]