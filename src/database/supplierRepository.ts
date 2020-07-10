import {DocumentDefinition, FilterQuery} from "mongoose";
import Supplier, {ISupplierDatabase} from "./database";
import {$log} from "@tsed/logger";

$log.level = "debug";
$log.name = "SUPPLIER REPOSITORY";

export class SupplierRepository {
    static async findByCode(code: number): Promise<ISupplierDatabase | null> {
        $log.name = "SUPPLIER REPOSITORY";
        const filter: FilterQuery<ISupplierDatabase> = {"code": code, "deleted": false};
        return Supplier.findOne(filter, {_id: 0, "__v": 0});
    }

    static async findByCodes(codes: Array<number>): Promise<ISupplierDatabase[]>{
        $log.name = "SUPPLIER REPOSITORY";
        return Supplier.find({"deleted": false, "code": { "$in" : codes}}, {_id: 0, "__v": 0});
    }

    static async deleteByCode(code: number){
        $log.name = "SUPPLIER REPOSITORY";
        const filter: FilterQuery<ISupplierDatabase> = {"code": code, "deleted": false};
        await Supplier.updateOne(filter, {"deleted": true});
    }

    static async findAll() : Promise<ISupplierDatabase[]> {
        $log.name = "SUPPLIER REPOSITORY";
        return Supplier.find({"deleted": false}, {_id: 0, "__v": 0});
    }
}