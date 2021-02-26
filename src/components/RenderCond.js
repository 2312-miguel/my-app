import React from 'react';

class RenderCond extends React.Component{

    constructor(props){
        super(props);
        this.state = {name : ''};
    }

    render(){

        const list = (
            <ul>
                {this.props.animals.map( animal => {
                    return <li key={animal.id.toString()}>{animal.especie}</li>
                })}
            </ul>
        );
        
        return(
            <div>
                    {list}
            </div>
        );
    }
}

export default RenderCond;