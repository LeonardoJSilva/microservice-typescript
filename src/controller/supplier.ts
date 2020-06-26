import {Request, Response} from "express";
import Supplier from "../database/database";
import {dataValidator} from "../utils/dataValidator";
import {SupplierRepository} from "../database/supplierRepository";
import {$log} from "@tsed/logger";

$log.level = "debug";
$log.name = "CONTROLLER";

export let allSuppliers = async (req: Request, res: Response) => {
    $log.info("Get all suppliers")
    const response = await SupplierRepository.findAll();
    res.send(response)
};

export let getSupplier = async (req: Request, res: Response) => {
    $log.info(`Get supplier with code ${Number(req.params.code)}`)
    const response = await SupplierRepository.findByCode(Number(req.params.code));
    res.send(response)
};

export let deleteSupplier = async (req: Request, res: Response) => {
    $log.info(`Delete supplier with code ${Number(req.params.code)}`)
    const response = await SupplierRepository.deleteByCode(Number(req.params.code));
    res.send(response)
};

export let addSupplier = async (req: Request, res: Response) => {
    $log.info(`Create supplier with code ${req.body.code}`);
    const result = await dataValidator(req.body);
    if (result != null) {
        return res.send(result);
    }
    const supplier = new Supplier(req.body);
    await supplier.save((err: any) => {
        if (err == null) {
            $log.info(`Successfully created supplier with code ${req.body.code}`);
            res.send({"name": supplier.name, "code": supplier.code, "cnpj": supplier.cnpj});
        } else if (err.name == "ValidationError") {
            $log.info(err.message);
            res.send(err.message);
        } else if (err.name == "MongoError") {
            $log.info("Code or cnpj already exists in database");
            res.send("Code or cnpj already exists in database");
        } else {
            $log.error(err)
            res.send(err);
        }
    });
};