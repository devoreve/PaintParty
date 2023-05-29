import Model from "./Model";
import {ObjectId} from "bson";

export default class RoomModel extends Model {
    async findAll(): Promise<Array<Object>> {
        const client = await this.client;
        return await client.db().collection('room').find().toArray();
    }

    async findAllPublic(): Promise<Array<Object>> {
        const client = await this.client;
        return await client.db().collection('room').find({isPrivate: false}).sort({createdAt: -1}).toArray();
    }

    async create(room: Object): Promise<ObjectId> {
        const client = await this.client;
        const results = await client.db().collection('room').insertOne(room);
        return results.insertedId;
    }
}