import {v4} from 'uuid'

export class GenerateID {
    newID(){
        return v4()
    }
}