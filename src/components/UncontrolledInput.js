import React from 'react';

class UncontrolledInput extends React.Component{

    constructor(props){
        super(props)
        this.state = {ref : ''};
    }

    submitForm(e){
        e.preventDefault();

        for (let ref in this.refs) {
            console.log(ref, '=>', this.refs[ref].value);
        }

    }

    render(){
        return (
            <div className = 'container'>
                <form onSubmit = {this.submitForm.bind(this)}>
                    <label>Name</label>
                    <input type = 'text' ref = "name" name = "name"/>
                    <br />
                    <label>LastName</label>
                    <input type = 'text' ref = "lastName" name = "lastName"/>
                    <div>
                        <button type = 'submit'  value = 'submit'>Submit</button>
                    </div>
                </form>
            </div>
        )
    }

}

export default UncontrolledInput;