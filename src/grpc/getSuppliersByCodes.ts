import {SuppliersByCodesRequest, SuppliersByCodesResponse} from '../../protos/suppliers_pb';
import {SupplierRepository} from "../database/supplierRepository";
import {$log} from "@tsed/logger";

export const getSuppliersByCodes = async (getRequest: SuppliersByCodesRequest): Promise<SuppliersByCodesResponse> => {
    $log.name = "gRPC Server Suppliers";

    const requestCode = await getRequest.getCodesList();
    const suppliers = await SupplierRepository.findByCodes(requestCode);

    suppliers.length ? $log.info(`Supplier with code ${requestCode[0]} founded`) : $log.info(`Supplier with code ${requestCode[0]} not founded`)

    return new SuppliersByCodesResponse().setCodesList(suppliers.map(x => x.code));
}