import {MongoClient} from "mongodb";

export default class MongoDbConnector implements DbConnectorInterface {
    private _client: Promise<MongoClient>;
    private static instance: MongoDbConnector;

    private constructor() {
        this._client = this.connect();
    }

    public static getInstance(): MongoDbConnector {
        if (!this.instance) {
            this.instance = new MongoDbConnector();
        }

        return this.instance;
    }

    public async connect(): Promise<MongoClient> {
        const uri = process.env.MONGODB_URI;
        const mongoClient = new MongoClient(uri);
        return await mongoClient.connect();
    }

    public get client() {
        return this._client;
    }

    public set client(client) {
        this._client = client;
    }
}
