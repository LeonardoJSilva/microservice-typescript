import * as dotenv from "dotenv";

dotenv.config();

export const MONGO_USERNAME = process.env.MONGO_USERNAME;
export const MONGO_PASSWORD = process.env.MONGO_PASSWORD;
export const MONGO_HOST = process.env.MONGO_HOST;
export const MONGO_PORT = process.env.MONGO_PORT;
export const MONGO_ARGUMENTS = process.env.MONGO_ARGUMENTS;
