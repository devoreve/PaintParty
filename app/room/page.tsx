'use client';

import {Room} from "../components/Room";
import {useEffect, useState} from "react";

export default function Page(): JSX.Element {
    const [rooms, setRooms] = useState([]);
    const roomItems = rooms.map(room => (<Room key={room._id} room={room} />));

    useEffect(() => {
        fetch('api/room').then(response => response.json()).then(response => {
            setRooms(response.rooms);
        });
    }, []);

    return (
        <div className="flex column justify-content-center align-items-center">
            <h1>Rejoindre une salle</h1>

            <ul className="flex column list-no-style mt-1">
                {roomItems}
            </ul>
        </div>
    );
}