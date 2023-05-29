import {RoomForm} from "./components/RoomForm";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex column justify-content-center align-items-center">
            <h1 className="text-center">Paint Party !</h1>
            <p className="intro-text my-1 text-center">Dessinez, devinez et amusez-vous ! Laissez libre cours à votre imagination et
                défiez vos amis dans ce jeu de dessin en ligne !</p>
            <p className="my-1">Pour commencer à jouer, créez une nouvelle salle ou <Link
                title="Aller à la liste des salles publiques" href="/room">rejoignez-en une</Link> :)</p>
            <RoomForm />
        </div>
    );
}