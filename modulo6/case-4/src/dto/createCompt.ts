export enum Status {
    open = "OPEN",
    closed = "CLOSED"
}

export interface CreateComptDTO {
    nameOfCompetition:string,
    status:Status
}