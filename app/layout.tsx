import {Navbar} from "./components/Navbar";
import {Footer} from "./components/Footer";
import "./assets/css/app.css";
import localFont from "next/font/local";

export enum Color {
    black = 'black-color',
    red = 'red-color',
    orange = 'orange-color',
    yellow = 'yellow-color',
    green = 'green-color',
    blue = 'blue-color',
    purple = 'purple-color'
}

export default function RootLayout({children}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className="flex column">
            <Navbar />
            <main className="mxy-1">
                {children}
            </main>
            <Footer />
        </body>
        </html>
    );
}