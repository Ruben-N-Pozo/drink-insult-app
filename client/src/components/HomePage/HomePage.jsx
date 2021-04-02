import React from 'react'
import './HomePage.scss'
import {Link} from 'react-router-dom'

 function HomePage() {
    return (
        <div className="homeDiv">
            <h1>Sloshed Insults</h1>
            <h3>Tired of losing  arguments when you're slightly(extremely) inebriated?!?!?!</h3>
            <h3>We Got You Covered!</h3>
            <p>and we'll even give you a new drink idea~</p>
            <Link to="/drinks"><button>Get Your Insult</button></Link>
        </div>
    )
}
export default HomePage