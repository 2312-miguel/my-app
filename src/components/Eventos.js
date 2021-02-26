import React from 'react';
import Styles from './Styles';

class Eventos extends React.Component {
    constructor(props){
        super(props);
        this.state = { isToggleOn : true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(state => ({
            isToggleOn :  !state.isToggleOn
        }))
    }

    render(){
        return(
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'ON' : 'OFF' }
                </button>
                <div>
                    
                </div>
            </div>

        )
    }
}

export default Eventos;