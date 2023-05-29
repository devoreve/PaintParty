import {MongoClient} from "mongodb";
import {getConnector} from "../libs/database/connector";

export default class Model {
    readonly client: Promise<MongoClient>;

    public constructor() {
        const connectorName = process.env.DB_DRIVER;
        const connector = getConnector(connectorName);
        this.client = this.connectClient(connector);
    }

    async connectClient(connector: DbConnectorInterface): Promise<MongoClient> {
        return await connector.connect();
    }
}