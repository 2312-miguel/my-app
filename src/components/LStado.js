import React from 'react'

export default class LStado extends React.Component {
    constructor(props){
        super(props)
        this.state = { name  : 'Miguel' }
    }
    render(){
        return (
            <div> Hello World {this.state.name}</div>
        )
    }
}