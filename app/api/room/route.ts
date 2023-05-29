import {NextResponse} from 'next/server';
import RoomModel from "../../models/RoomModel";
import {ObjectId} from "bson";

export async function GET(request: Request) {
    const model = new RoomModel();
    const rooms = await model.findAllPublic();

    return NextResponse.json({"rooms": rooms});
}

export async function POST(request: Request) {
    const room = await request.json();
    const model = new RoomModel();
    const id: ObjectId = await model.create(room);

    return NextResponse.json({"roomId": id});
}