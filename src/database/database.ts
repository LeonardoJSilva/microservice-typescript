import {MONGO_ARGUMENTS, MONGO_DATABASE, MONGO_HOST, MONGO_PASSWORD, MONGO_PORT, MONGO_USERNAME} from './settings';
import {$log} from "@tsed/logger";
import mongoose = require("mongoose");

$log.level = "debug";
$log.name = "DATABASE";

const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_ARGUMENTS}`;
$log.info(uri)

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, dbName: MONGO_DATABASE}, (err: any) => {
    $log.name = "DATABASE";
    if (err) {
        $log.error(err.message);
    } else {
        $log.info("Successfully Connected!");
    }
});


export interface ISupplierDatabase extends mongoose.Document {
    name: string;
    code: number;
    cnpj: string;
    deleted: boolean;
}

export const SupplierSchema = new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: Number, required: true, unique: true},
    cnpj: {type: String, required: true, unique: true, maxlength: 14, minlength: 14},
    deleted: {type: Boolean, required: true, default: false}
}, {strict: true})

const Supplier = mongoose.model<ISupplierDatabase>('Supplier', SupplierSchema, 'suppliers')
export default Supplier;