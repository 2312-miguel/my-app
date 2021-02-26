import React from 'react';

class Event4 extends React.Component{
    constructor(props){
        super(props)
        this.state = { action : ''};
    }

    handleEvent(e){
        this.setState( (state, props) => ({
            action: <span>{state.action} {e.type} : {e.target.nodeName}<br/></span>
        }));
    }

    render(){
        return(
            <div>
                <img
                    src = {this.props.img}
                    onMouseEnter = {this.handleEvent.bind(this)}
                    onMouseLeave = {this.handleEvent.bind(this)}
                    onClick = {(e) => this.handleEvent(e)}
                    onDoubleClick={(e) => this.handleEvent(e)}
                >
                </img>
                <div className = 'contenedor'>
                    {this.state.action}
                </div>
            </div>
        );
    }
}

export default Event4;