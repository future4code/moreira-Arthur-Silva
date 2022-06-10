export enum Status {
    open = "OPEN",
    closed = "CLOSED"
}

export interface CreateComptDTO {
    nameCompt:string,
    status:Status
}