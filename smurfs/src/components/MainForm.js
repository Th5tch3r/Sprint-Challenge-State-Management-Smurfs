import React from 'react';
import axios from 'axios';
import { runInThisContext } from 'vm';

export default class Mainform extends React.Component {
    constructor(){
        super();
        this.state={ name: "", age: "", height: ""}
    }

    changeHandler = (event) => {
        event.preventDefault();
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmit = (event) => {
        event.preventDefault();

        const newSmurf = {
            name: this.state.name,
            age: this.state.age,
            height: this.state.height,
        }

        console.log(newSmurf)

        axios
            .post('http://localhost:3333/smurfs', newSmurf)
            .then(res => {
                console.log(res.data)
            })
            .catch(err => {
                console.log("error in post", err)
            })
            window.location.reload()

    }

    render(){
        return(
            <div>
                <h1>Create a New Smurf!</h1>
                <form onSubmit={this.onSubmit}>
                    <input
                        className="name"
                        placeholder="Smurf's name"
                        type="text"
                        value={this.state.name}
                        name="name"
                        onChange={this.changeHandler}
                    />

                    <input
                        className="age"
                        placeholder="Smurf's age"
                        type="number"
                        value={this.state.age}
                        name="age"
                        onChange={this.changeHandler}
                    />

                    <input
                        className="height"
                        placeholder="Enter Smurfs height in cm"
                        type="text"
                        value={this.state.height}
                        name="height"
                        onChange={this.changeHandler}
                    />

                    <button type="submit" className="SubmitButton">Add Smurf!</button>

                </form>
            </div>
        )
    }
}