import {DocumentDefinition, FilterQuery} from "mongoose";
import Supplier, {ISupplierDatabase} from "./database";
import {$log} from "@tsed/logger";

$log.level = "debug";
$log.name = "SUPPLIER REPOSITORY";

export class SupplierRepository {
    static async findByCode(code: number) {
        const filter: FilterQuery<ISupplierDatabase> = {"code": code};
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

    static async deleteByCode(code: number) {
        const filter: FilterQuery<ISupplierDatabase> = {"code": code};
        let response;
        await Supplier.deleteOne(filter, (err: any) => {
            if (err) {
                $log.error(err)
                response = err;
            } else {
                $log.info(`Successfully deleted supplier with code ${code}`);
                response = "Successfully deleted supplier with code ${code}"
            }
        });
        return response;
    }

    static async findAll() {
        let response;
        await Supplier.find({}, {_id: 0, "__v": 0}, (err: any, suppliers: DocumentDefinition<ISupplierDatabase>[]) => {
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