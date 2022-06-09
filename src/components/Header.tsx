import "./Header.style.scss"

// *** Components

import User from "./User"


export default function Header() {
    return (
        <div className="header">
            <p>Just take your time!</p>
            <User />
        </div>
    )
}