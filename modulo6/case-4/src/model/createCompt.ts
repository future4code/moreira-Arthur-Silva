export enum Status {
    open = "OPEN",
    closed = "CLOSED"
}

export interface CreateCompt {
    id:string
    nameCompt:string,
    status:Status
}