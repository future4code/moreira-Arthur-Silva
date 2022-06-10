export enum Status {
    open = "OPEN",
    closed = "CLOSED"
}

export interface CreateCompt {
    id:string
    nameOfCompetition:string,
    status:Status
}