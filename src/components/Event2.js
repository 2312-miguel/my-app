import React from 'react';
import Eventos from './Eventos';

class Event2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            keypress: '',
            keydown: '',
            keyup: ''
        }
    }
    handlerEvent(e) {
        e.persist();

        this.setState((state, props) => (
            { [e.type]: <span>{state[e.type]} {e.type}: {e.which}<br /></span> }
        ));

        console.log(e.altKey);
        console.log(e.charCode);
        console.log(e.ctrlKey);
        console.log(e.key);
        console.log(e.keyCode);
        //console.log(e.locale);
        console.log(e.location);
        console.log(e.metaKey);
        console.log(e.repeat);
        console.log(e.shiftKey);
        console.log(e.which);
    }
    render() {
        return (
            <div>
                <input
                    type="text"
                    placeHolder="Press the keys..."
                    onKeyDown={this.handlerEvent.bind(this)}
                    onKeyPress={e => this.handlerEvent(e)}
                    onKeyUp={e => this.handlerEvent(e)}
                />
                <hr />
                <div className="container">
                    <h2>onkeypress</h2>
                    <text id="keypress" >{this.state.keypress}</text>
                </div>
                <div className="container">
                    <h2>onkeydown</h2>
                    <text id="keydown">{this.state.keydown}</text>
                </div>
                <div className="container">
                    <h2>onkeyup</h2>
                    <text id="keyup">{this.state.keyup}</text>
                </div>
            </div>

        );
    }


}

export default Event2;