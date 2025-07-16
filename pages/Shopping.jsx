import { Link } from 'react-router-dom'

export default function Shopping() {
    return (
        <>
            <h1>This is the Cart</h1>
            <p>This will list out all the items</p>
            <ul>
                <li>
                    <Link to="/">Click this to go back to homepage</Link>
                </li>
            </ul>
        </>
    )
}