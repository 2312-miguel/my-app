import React from 'react';

export default function TextArea(props){
    const className = !props.touched || props.valid
        ? "form-control"
        : "form-control control-error";
    return (
        <>
            <div className='form-group'>
                <label>{props.label}</label>
                <textarea className={className} {...props} />
            </div>
        </>
    )
}

TextArea.defaultProps = {
    type: "textarea",
    label: "",
    name: "textarea",
    placeholder: "",
    defaultValue: ""
};