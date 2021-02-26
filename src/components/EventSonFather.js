import React from 'react';

function EventSonFather() {
    return(
        <div>
            {/* Component */}
            <Acordion />
        </div>
    )
}

class Input extends React.Component{
    
    handlerInput(e){
        const type = typeof this.props.callbackOnChange;

        if(type === "function"){
            this.props.callbackOnChange(e.target.value)
        }
    }

    render(){
        return (
            <div>
                <input onChange = {this.handlerInput.bind(this)}>
                </input>
            </div>
        )
    }
}

class Acordion extends React.Component{
    constructor(props){
        super(props);
        this.state = { inputValue : ''};
    }

    handleInputOnChange(text){
        this.setState({inputValue : text})
    }

    render(){
        return(
            <div>
                <Input callbackOnChange={this.handleInputOnChange.bind(this)}/>
                <div>
                    Valor: {this.state.inputValue}
                </div>
            </div>
        )
    }
}

export default EventSonFather;