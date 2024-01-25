import { isThisTypeNode } from "typescript";
import { Document } from "./Document";


export class Cpf implements Document {

    private value: string

    constructor(value: string){

        if (!Cpf.isValid(value)){
            throw new Error(`${Cpf} is not a valid CPF`)
        }
        this.value=value
    }

    static isValid(value: string): boolean{
        return value.length == 11
    }

    getDocument(): Document{
        return this
    }

    getValue(): string{
        return this.value
    }

}