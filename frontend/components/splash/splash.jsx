import React from 'react'
import { Link } from 'react-router-dom'

 class Splash extends React.Component {
     constructor(props) {
         super(props)
     }

    render() {
        
        const message = this.props.currentUser ? (<Link id="weblink" to="/web">GO TO WEB PLAYER</Link>) : (<Link id="weblink" to="/signup">GET MODIFIED FREE</Link>)

        return (
        <div className='splash'>
            <main className="webplayer-header">
                <div className='container'>
                    <h3>MODIFIED FREE</h3>
                    <h1>Listening is everything</h1>
                    <h2>Millions of songs and podcasts. No credit card needed.</h2>
                    {message}
                </div>
            </main>
            <footer>

            </footer>
        </div>
        )
    }
}

export default Splash