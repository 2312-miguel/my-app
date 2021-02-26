import React from 'react'

const Input = (props) => {
    console.log(props.valid)
    const className = !props.touched || props.valid
        ? "form-control"
        : "form-control control-error";
    return (
        <> 
            <div className='form-group'>
                <label>{props.label}</label>
                <input className={className} {...props} />
            </div>
        </>
    )
    
}

Input.defaultProps = {
    type: "text",
    label: "",
    name: "input",
    placeholder: "",
    defaultValue: ""
};

export default Input; 