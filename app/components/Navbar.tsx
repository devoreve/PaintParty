'use client';

import Link from "next/link";

export function Navbar(): JSX.Element {
    return (
        <nav className="navbar flex align-items-center justify-content-between pxy-1">
            <Link href="/" className="navbar-logo">Paint Party</Link>
            <ul className="navbar-menu">
                <li><Link href="/room">Liste des salles</Link></li>
                <li><a href="#">À propos</a></li>
            </ul>
        </nav>
    )
}