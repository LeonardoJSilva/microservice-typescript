import {DocumentDefinition, FilterQuery} from "mongoose";
import Supplier, {ISupplierDatabase} from "./database";
import {$log} from "@tsed/logger";

$log.level = "debug";
$log.name = "SUPPLIER REPOSITORY";

export class SupplierRepository {
    static async findByCode(code: number) {
        $log.name = "SUPPLIER REPOSITORY";
        const filter: FilterQuery<ISupplierDatabase> = {"code": code, "deleted": false};
        let response;
        await Supplier.findOne(filter, (err: any, supplier: DocumentDefinition<ISupplierDatabase>) => {
            if (err) {
                response = err;
            } else if (supplier == null) {
                $log.info("Supplier not found")
                response = "Supplier not found";
            } else {
                $log.info({"name": supplier.name, "code": supplier.code, "cnpj": supplier.cnpj})
                response = {"name": supplier.name, "code": supplier.code, "cnpj": supplier.cnpj};
            }
        });
        return response;
    }

    static async findByCodes(codes: Array<number>): Promise<ISupplierDatabase[]>{
        $log.name = "SUPPLIER REPOSITORY";
        let response: ISupplierDatabase[];
        response = await Supplier.find({"deleted": false, "code": { "$in" : codes}}, {_id: 0, "__v": 0});
        return response;

    }

    static async deleteByCode(code: number) {
        $log.name = "SUPPLIER REPOSITORY";
        const filter: FilterQuery<ISupplierDatabase> = {"code": code, "deleted": false};
        let response;
        await Supplier.updateOne(filter, {"deleted": true}, (err: any) => {
            if (err) {
                $log.error(err)
                response = err;
            } else {
                $log.info(`Successfully deleted supplier with code ${code}`);
                response = `Successfully deleted supplier with code ${code}`
            }
        });
        return response;
    }

    static async findAll() {
        $log.name = "SUPPLIER REPOSITORY";
        let response;
        await Supplier.find({"deleted": false}, {_id: 0, "__v": 0}, (err: any, suppliers: DocumentDefinition<ISupplierDatabase>[]) => {
            if (err) {
                $log.error(err)
                response = err;
            } else {
                response = suppliers;
            }
        });
        return response;
    }
}