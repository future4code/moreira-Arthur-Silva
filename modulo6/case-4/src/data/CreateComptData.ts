import { CreateCompt } from "../model/createCompt";
import { BaseDataBase } from "./BaseDataBase";

export class CreateComptData extends BaseDataBase {
    private TABLE_NAME = "Competition"

    async createCompt(input:CreateCompt){
        await this.connection()
            .insert(input)
            .into(this.TABLE_NAME)
    }
}