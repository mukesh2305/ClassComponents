import React, { Component } from "react";

class Mukesh extends Component {
    // constructor(props) {
    //     super(props);
    // }
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
        // this.showOutput = this.showOutput.bind(this);
    }


    showOutput = () => {

        // when we wnat to update single value 
        this.setState({
            counter: 1
        })


        // when we want to update multiple values 
        // this is right way to mutate state 
        this.setState((state, props) => ({
            counter: state.counter += 1
        }))
    }

    render() {
        return (
            <>
                <div>
                    {this.state.counter}
                </div>

                <button onClick={this.showOutput}>show</button>
            </>
        );
    }
}
export default Mukesh;