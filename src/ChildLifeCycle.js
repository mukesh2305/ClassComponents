import React, { Component } from 'react'

export class ChildLifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log("----------constructor  Child---------")
        // this show in the place of props
        this.state = {
            firstname: "test"
        }
        this.updateData = this.updateData.bind(this);
    }
    static getDerivedStateFromProps(state, props) { // 1
        // state show props value that pass from App components
        console.log("state", state, "props", props);
        console.log("................... getDerivedStateFromProps Child...........")
        return null;
    }

    componentDidMount() {
        // if we want to call api than we call inside the this is function because it run after render 
        console.log("................... componentDidMount Child...........")

    }
    updateData() {
        this.setState({
            firstname: "code improve"
        })
    }
    shouldComponentUpdate(nextProps, nextState) { // 2
        console.log(nextProps, nextState);
        console.log("................... shouldComponentUpdate Child...........")
        // if condition are not satisfied then return false
        // return true;
        return false;
    }
    getSnapshotBeforeUpdate(prevProps, prevState) { // 3
        console.log("................... getSnapshotBeforeUpdate Child...........")
        return true
    }
    componentDidUpdate() { // 4
        console.log("................... componentDidUpdate Child...........")

    }
    render() {
        console.log("----------render Child------------")
        return (
            <div>
                ChildLifeCycle
                <h1>{this.state.firstname}</h1>
                <button onClick={this.updateData}>Update</button>
            </div>
        )
    }
}

export default ChildLifeCycle
