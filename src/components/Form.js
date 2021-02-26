import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value : 'grapefruit' };
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }

    render() {

        console.log(this.state);
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={(e) =>this.handleChange(e)}>
                        {this.props.frutas.map((fruta, i) => {
                            return <option key = {i} value={fruta.fruta}>{fruta.fruta}</option>
                        })}
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form;