'use client';

import Link from "next/link";

export function Room({room}): JSX.Element {
    return (
        <li className="panel flex align-items-center justify-content-between my-1 pxy-1">
            <article>
                <header>
                    Créée par {room.username} le {new Date(Number(room.createdAt)).toLocaleString('fr-FR')}
                </header>
                <p>Nombre de joueurs : 5</p>
            </article>
            <nav>
                <Link className="button button-primary" href={`room/${room._id}`}>Rejoindre</Link>
            </nav>
        </li>
    );
}