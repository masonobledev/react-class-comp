import React, { Component } from "react"

class Films extends Component {
    //State & Props
    constructor() {
        super()
        this.state = ({ 
            greeting: "Hello",
            fname: "Patrick",
            loaded: false
        })   
    }

    async componentDidMount() {
        let res = await fetch("https://ghibliapi.herokuapp.com/films")
        let json = await res.json()

        this.setState({
            loaded: true,
            results: json
        })
    }

    render() {
        return (
            <div>
                {!this.state.loaded 
                ? "Loading" 
                : this.state.results.map((film) => <li>{film.title}</li>)
                }
            </div>
        )
    }
}


// const Films = () => {
//     return (
//         <>
//         This is the films comp
//         </>
//     )
// }

export default Films