import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };
    return (
        <li>
            <span className="player">
                {isEditing ? (
                    <input type="text" defaultValue={name} />
                ) : (
                    <span className="placer-name">{name}</span>
                )}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>Edit</button>
        </li>
    );
}
