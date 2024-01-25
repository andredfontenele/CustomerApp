
import { validate as validadeUuid, v4 as uuidV4} from 'uuid'

export class Uuid{
    private value: string

    constructor(value: string){
        if(!validadeUuid(value)){
            throw new Error(`${value} is not a valid uuid`)
        }
        this.value = value
    }

    static randomGenerator(): Uuid{
        return new Uuid(uuidV4())
    }
}