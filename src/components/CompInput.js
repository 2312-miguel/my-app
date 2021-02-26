import React from 'react';
import validate from '../helpers/validations';
import Input from './Input';
import '../assets/css/SCompInput.css';
import TextArea from './TextArea';
import Select from './Select';
import CompRadio from './CompRadio';

class CompInput extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            anyNumber: {
                name: "anyNumber",
                label: "anyNumber:",
                defaultValue: "",
                placeholder: "Your anyNumber...",
                valid: 0,
                touched: 0,
                validationRules: {
                    isRequired: true,
                    minLength: 5,
                    onlyNumbers: true
                }
            },
            textArea: {
                name: "textArea",
                label: "textArea:",
                defaultValue: "",
                placeholder: "Your textArea...",
                valid: 0,
                touched: 0,
                validationRules: {
                    isRequired: true
                }
            },
            select: {
                name: "select",
                label: "select:",
                defaultValue: "",
                placeholder: "Your select...",
                valid: 0,
                touched: 0,
                options : [
                    { value: "", displayValue: "Selected country..." },
                    { value: "MX", displayValue: "Mexico" },
                    { value: "US", displayValue: "Estados Unidos de America" },
                    { value: "CO", displayValue: "Colombia" }
                ],
                validationRules: {
                    isRequired: true,
                }
            },
            radio: {
                name: "radio",
                label: "radio:",
                defaultValue: "",
                valid: 0,
                touched: 0,
                options : [
                    { value: "W", displayValue: "Woman" },
                    { value: "M", displayValue: "Man" }
                ],
                validationRules: {
                    isRequired: true,
                }
            }
        }
    }

    handleChange(e){
        const {name, value} = e.target;
        const touched = 1;
        console.log(this.state[name].validationRules);
        const valid = validate(value, this.state[name].validationRules);

        this.setState({
            ...this.state,
            [name] : {
                ...this.state[name],
                value,
                valid,
                touched
            }
        });
    }

    render(){
        return(
            <div className = 'contenedor'>
                <form href = '#'>
                    <Input
                        valid={this.state.anyNumber.valid}
                        touched={this.state.anyNumber.touched}
                        name={this.state.anyNumber.name}
                        placeholder={this.state.anyNumber.placeholder}
                        label={this.state.anyNumber.label}
                        defaultValue={this.state.anyNumber.defaultValue}
                        onChange={this.handleChange.bind(this)}
                    />
                    <TextArea
                        valid={this.state.textArea.valid}
                        touched={this.state.textArea.touched}
                        name={this.state.textArea.name}
                        placeholder={this.state.textArea.placeholder}
                        label={this.state.textArea.label}
                        defaultValue={this.state.textArea.defaultValue}
                        onChange={this.handleChange.bind(this)}
                    />
                    <Select
                        valid={this.state.select.valid}
                        touched={this.state.select.touched}
                        name={this.state.select.name}
                        placeholder={this.state.select.placeholder}
                        label={this.state.select.label}
                        defaultValue={this.state.select.defaultValue}
                        options = {this.state.select.options}
                        onChange={this.handleChange.bind(this)}
                    />
                    <CompRadio
                        valid={this.state.radio.valid}
                        touched={this.state.radio.touched}
                        name={this.state.radio.name}
                        placeholder={this.state.radio.placeholder}
                        label={this.state.radio.label}
                        defaultValue={this.state.radio.defaultValue}
                        options={this.state.radio.options}
                        onChange={this.handleChange.bind(this)}
                    />
                </form>
            </div>
        )
    }
}




export default CompInput;