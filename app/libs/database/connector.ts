import MongoDbConnector from "./MongoDbConnector";

export enum DbConnector {
    mongo = "mongodb"
}

export function getConnector(driver: DbConnector): DbConnectorInterface {
    switch (driver) {
        case DbConnector.mongo:
            return MongoDbConnector.getInstance();
        default:
            throw new Error("This driver is not supported");
    }
}