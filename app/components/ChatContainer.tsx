'use client';

import {useState} from "react";
import {Color} from "../layout";
import {ChatMessage} from "./ChatMessage";

export function ChatContainer() {
    const [chatMessages, setChatMessages] = useState([]);
    const [message, setMessage] = useState('');

    const addChatMessage: Function = (e: SubmitEvent): void => {
        e.preventDefault();

        const id: string = crypto.randomUUID();

        setChatMessages([...chatMessages, {id: id, username: "Toto", color: Color.red, content: message}]);
        setMessage('');
    };

    return (
        <section className="chat-container panel pxy-1 mx-1 align-self-stretch">
            <ul className="chat-messages">
                {chatMessages.map(message => <ChatMessage key={message.id} username={message.username} color={message.color} content={message.content} /> )}
            </ul>
            <form className="flex justify-center mt-2" onSubmit={addChatMessage}>
                <label className="visually-hidden" htmlFor="chat-input">Saisissez votre message</label>
                <input id="chat-input" value={message} onChange={(e) => setMessage(e.currentTarget.value)} type="text" placeholder="Saisissez votre message..." />
                <button className="button button-primary mx-1" type="submit">Envoyer</button>
            </form>
        </section>
    );
}