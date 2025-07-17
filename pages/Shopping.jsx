import { Link } from 'react-router-dom'
import './Shopping.css'

export default function Shopping() {
    return (
        <div className="shopping-container">
            <h1>This is the Shopping</h1>
            <p>This will list out all the items</p>
            <ul>
                <li>
                    <Link to="/">Click this to go back to homepage</Link>
                </li>
            </ul>
        </div>
    )
}