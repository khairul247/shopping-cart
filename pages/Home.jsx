import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <h1>khairulaming</h1>
            <ul>
                <li>
                    <Link to="shopping">Click this to go shopping</Link>
                </li>
            </ul>
        </>
    )
}