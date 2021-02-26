import React from 'react';

class ControllerInput extends React.Component{
    constructor(props){
        super(props)
        this.state = { form : {
            firstName : {
                value : '',
                type : ''
            },
            lastName : {
                value : '',
                type : ''
            }
        } };
    }

    HandlerInput(e){

        const {value, name, type} = e.target;

        this.setState({
            form : {
                ...this.state.form,
                [name] : {
                        ...this.state.form[name],
                        type,
                        value
                }
            }}
        );
    }

    submitFormHandler(e){
        e.preventDefault();
        console.log(this.state);

    }

    render(){
        return(
            <div className = 'contenedor'>
                <form onSubmit = {this.submitFormHandler.bind(this)}>
                    <label>firstName</label>
                    <input type='text' name='firsName' onChange={this.HandlerInput.bind(this)} />
                    <label>lastName</label>
                    <input type='text' name='lastName' onChange={this.HandlerInput.bind(this)} />
                    <button type = 'submit' value = 'submit'>Submit</button>
                </form>

            </div>
        )
    }
}

export default ControllerInput;