'use client';

import {ChangeEvent, useState} from "react";
import {useRouter} from "next/navigation";

export function RoomForm(): JSX.Element {
    const [username, setUsername] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);
    const router = useRouter();

    const onSelectVisibility: Function = (e: ChangeEvent) => setIsPrivate(Boolean(Number(e.currentTarget.value)));
    const onWriteUsername: Function = (e: ChangeEvent) => setUsername(e.currentTarget.value);

    const onSaveRoom: Function = async (e: SubmitEvent) => {
        e.preventDefault();

        const result = await fetch('api/room', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                isPrivate: isPrivate,
                createdAt: Date.now().toString()
            })
        }).then(response => response.json());

        router.push(`room/${result.roomId}`);
    };

    return (
        <form className="panel pxy-1 my-2" onSubmit={onSaveRoom}>
            <h2 className="text-center">Créer une salle</h2>
            <ul>
                <li className="flex my-2 justify-content-center align-items-center">
                    <label className="mx-1" htmlFor="username">Nom d'utilisateur</label>
                    <input value={username} onChange={onWriteUsername} className="mx-1" type="text" id="username" placeholder="Votre pseudo" />
                </li>
                <li className="flex my-2">
                    <label className="mx-1">
                        Publique <input type="radio" value="0" name="visibility" onChange={onSelectVisibility} checked={!isPrivate} />
                    </label>
                    <label className="mx-1">
                        Privée <input type="radio" value="1" name="visibility" onChange={onSelectVisibility} checked={isPrivate} />
                    </label>
                </li>
                <li className="flex my-3 justify-content-center">
                    <button className="button button-primary">Créer</button>
                </li>
            </ul>
        </form>
    );
}