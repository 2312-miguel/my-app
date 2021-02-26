import React from 'react';

class Clock extends React.Component {

    constructor(props){
        super(props);
        this.state = {date : new Date()};
    }

    componentDidMount(){
        this.timeID = setInterval(
            ()=>this.tick(),
            1000);
    }

    componentDidUpdate(prevProps,prevState){
        if(this.state.date !== prevState.date){
                
        }

        if(this.props.name !== prevProps){

        }
    }

    componentWillUnmount(){
        clearInterval(this.timeID);
    }

    tick(){
        this.setState({
            date : new Date()
        });
    }

    render(){
        return(
            <div>
                <h1>The Time :</h1>
                <p>Tiempo: {this.state.date.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;