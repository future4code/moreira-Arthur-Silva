import {v4} from 'uuid'

export class IdGenerator {
    GenerateId(){
        return v4()
    }
}
