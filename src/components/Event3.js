import React from 'react';

class Event3 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            focus : '',
            blur : '',
        };
    }

    handlerEvent(e){
        e.preventDefault();
        const { type, target: { nodeName } } = e;

        this.setState((state, props) => ({
            [type]: (
                <span>{state[type]} {type}: {nodeName}<br /></span>
            )
        })
        );
    }

    render(){
        return (
            <div>
                <input 
                    type = 'text'
                    placeholder = 'Ingresa una oracion'
                    onFocus = {this.handlerEvent.bind(this)}
                    onBlur={(e) => this.handlerEvent(e)}
                >
                </input>
                <p>Event onBlur {this.state.blur}</p>
                <p>Event onFocus {this.state.focus}</p>
            </div>
        );
    }

}

export default Event3;