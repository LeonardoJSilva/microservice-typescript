import {MONGO_ARGUMENTS, MONGO_HOST, MONGO_PASSWORD, MONGO_PORT, MONGO_USERNAME} from './settings';
import {$log} from "@tsed/logger";
import mongoose = require("mongoose");


$log.level = "debug";
$log.name = "DATABASE";

const uri = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_ARGUMENTS}`;
$log.info(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/${MONGO_ARGUMENTS}`)

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}, (err: any) => {
    if (err) {
        $log.error(err.message);
    } else {
        $log.info("Successfully Connected!");
    }
});

export interface ISupplierDatabase extends mongoose.Document {
    name: any;
    code: any;
    cnpj: any;
}

export const SupplierSchema = new mongoose.Schema({
    name: {type: String, required: true},
    code: {type: Number, required: true, unique: true},
    cnpj: {type: String, required: true, unique: true, maxlength: 14, minlength: 14}
}, {strict: true})

const Supplier = mongoose.model<ISupplierDatabase>('Supplier', SupplierSchema)
export default Supplier;