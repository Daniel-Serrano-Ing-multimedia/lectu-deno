import { config } from './index.ts'
export const BASE_URI = `https://data.mongodb-api.com/app/${APP_ID}/endpoint/data/beta/action`;
const { DATA_API_KEY, APP_ID } = config();
const DATA_SOURCE = "Cluster0";
const DATABASE = "lectu";

export const DbConfig = {
  headers: {
    "Content-Type": "application/json",
    "api-key": DATA_API_KEY,
    "Access-Control-Request-Headers":'*'
  },
  body: ''
};