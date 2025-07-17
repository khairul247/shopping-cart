import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
    <div className='home-container'>
        <div className='home-content'>
            <h1>khairulaming</h1>
            <ul>
                <li>
                    <Link to="shopping">Click this to go shopping</Link>
                </li>
            </ul>
        </div>
        <img src="../src/assets/khairulaming.webp" alt="Khairul Aming dengan produk dendeng" className='circle-image'/>
    </div>
    )
}