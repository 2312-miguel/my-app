import React from 'react'

export default function CompRadio (props){
    const className =
        !props.touched || props.valid
            ? "form-control"
            : "form-control control-error";
    return (
        <div className = 'form-group'>
            <label>{ props.label }</label>
            <div className =   { className  }>
                {props.options.map( option => {
                    return (
                        <div>
                            <input
                                type = {props.type}
                                name={ props.name }
                                value={option.value }
                                onChange={ props.onChange }
                                checked={
                                     props.defaultValue === option.value ? "checked" : ""
                                 }
                            />
                            <label>{props.displayValue }</label>
                        </div>
                    )
                 }) }
            </div>
        </div>
    )
 }

CompRadio.defaultProps = {
    type: 'radio',
    label: "",
    name: "radio",
    defaultValue: "",
    options: []
 };