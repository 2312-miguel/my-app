import React from 'react';

export default function Select(props) {
    const className = !props.touched || props.valid
        ? "form-control"
        : "form-control control-error";
        const option = props.options.map( option => {
            return (
                <>
                    <option value={option.value}>
                        {option.displayValue}
                    </option>
                </>
            ) 
        });
    return(
        <div>
        <label>{props.label} </label>
            <select  className = {className} {...props}>
                {option}
            </select>
        </div>
    )
}

Select.defaultProps = {
    label: "",
    name: "select",
    defaultValue: "",
    options: []
};