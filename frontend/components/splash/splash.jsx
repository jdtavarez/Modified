import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
    <div className='splash'>
        <main className="webplayer-header">
            <div className='container'>
                <h3>MODIFIED FREE</h3>
                <h1>Listening is everything</h1>
                <h2>Millions of songs and podcasts. No credit card needed.</h2>
                <Link id="weblink" to="/web">GET MODIFIED FREE</Link>
            </div>
        </main>
        <footer>

        </footer>
    </div>
)