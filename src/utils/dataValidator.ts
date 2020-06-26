import {ISupplierDatabase} from "../database/database";

export const dataValidator = async (data: ISupplierDatabase) => {
    let listOfErrors: string[] = [];
    if (typeof data.name != "string") {
        listOfErrors.push("Name must be a string");
    }
    if (typeof data.code != "number") {
        listOfErrors.push("Code must be a number");
    }
    if (typeof data.cnpj != "string") {
        listOfErrors.push("CNPJ must be a string");
    }
    return listOfErrors.length ? listOfErrors : null
}