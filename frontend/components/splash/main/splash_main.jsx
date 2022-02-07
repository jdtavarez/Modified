import React from 'react'
import { Link } from 'react-router-dom'

 class SplashMain extends React.Component {
     constructor(props) {
         super(props)
     }

     componentDidMount() {
         if (this.props.currentUser) {
             
             this.props.fetchSearchContents();
         }
     }

    render() {
        let h3;
        let h1;
        let h2;
        let message;
        if (this.props.currentUser) {
            h3 = <h3></h3>
            h1 = <h1>Jump back in</h1>
            h2 = <h2>Pick up your music where you left off.</h2>
            message = <Link id="weblink" to="/web">GO TO WEB PLAYER</Link>
        } else {
            h3 = <h3>MODIFIED FREE</h3>
            h1 = <h1>Listening is everything</h1>
            h2 = <h2>Millions of songs and podcasts. No credit card needed.</h2>
            message = <Link id="weblink" to="/signup">GET MODIFIED FREE</Link>
        }

        return (
        <div className='splash'>
            <main className="webplayer-header">
                <div className='container'>
                    {h3}
                    {h1}
                    {h2}
                    {message}
                </div>
            </main>
        </div>
        )
    }
}

export default SplashMain