import { connection } from "../connection"

export const createTable = async ():Promise<void> => {
    try {
        await connection.schema.createTable('labecommerce_users', function (table) {
            table.string('id').primary();
            table.string('name').notNullable();
            table.string('email').notNullable().unique();
            table.string('password').notNullable();
        })
        console.log("criado")
    } catch (error:any) {
        console.log(error.message)
    }
}

createTable()