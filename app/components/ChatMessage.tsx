export function ChatMessage({color, username, content}): JSX.Element {
    return (
        <li className={`chat-message ${color}`}>
            <header className="message-header">
                <img
                    src="https://img.favpng.com/0/0/17/final-fantasy-fables-chocobo-tales-final-fantasy-fables-chocobo-s-dungeon-final-fantasy-ix-final-fantasy-vii-png-favpng-1Q2FPBCqWF6rGib72MRPXKpqj.jpg"
                    alt="Avatar utilisateur 1" className="avatar" />
                <div className="message-author">{username}</div>
            </header>
            <div className="message-body">
                {content}
            </div>
        </li>
    );
}