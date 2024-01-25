import { isThisTypeNode } from "typescript";
import { Document } from "./Document";


export class Cnpj implements Document {

    private value: string
    constructor(value: string){

        if (!Cnpj.isValid(value)){
            throw new Error(`${Cnpj} is not a valid CNPJ`)
        }
        this.value=value
    }

    static isValid(value: string): boolean{
        return value.length == 14
    }

    getDocument(): Document{
        return this
    }

    getValue(): string{
        return this.value
    }

}