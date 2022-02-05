import React from "react"

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            greeting: ''
        }
    }

    componentDidMount() {
        const date = new Date();
        const hours = date.getHours();
        let greeting; 

        if (hours > 0 && hours < 11)  {
            greeting = 'Good Morning'
        } else if (hours < 18) {
            greeting = 'Good Afternoon'
        } else {
            greeting = 'Good Evening'
        } 
        this.setState({ greeting })
    }

    render() {
        return (
            <div className="home">
                <h1 className="home-header">{this.state.greeting}</h1>
            </div>
        )
    }
}