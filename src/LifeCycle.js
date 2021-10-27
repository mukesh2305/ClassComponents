import React, { Component } from 'react'
import ChildLifeCycle from './ChildLifeCycle';

export class LifeCycle extends Component {
    constructor(props) {
        super(props);
        // console.log("----------constructor  ---------")
        // this show in the place of props
        this.state = {
            firstname: "test"
        }
    }
    static getDerivedStateFromProps(state, props) {
        // state show props value that pass from App components
        // console.log("state", state, "props", props);
        // console.log("................... getDerivedStateFromProps ...........")
        return null;
    }

    componentDidMount() {
        // if we want to call api than we call inside the this is function because it run after render 
        // console.log("................... componentDidMount ...........")

    }
    render() {
        // console.log("----------render ..------------")
        return (
            <div>
                <ChildLifeCycle name={this.state.firstname} />
                LifeCycle
            </div>
        )
    }
}

export default LifeCycle
