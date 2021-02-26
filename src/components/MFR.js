import React from 'react';

class Input extends React.Component{

    handlerValue(e){
        const type = typeof this.props.callback;
        if(type === 'function'){
            this.props.callback(e.target.value);
        }
    }

    render(){
        return (
            <input onChange = {this.handlerValue.bind(this)} />
        )
    }

}

const Input2 = ({ callback }) => {
    const handlerValue = (e) => {
            callback(e.target.value);
    }
    
    return <input onChange={e => handlerValue(e)} />
}

function List(props){
    return <li>{props.especie}</li>
}

class MFR extends React.Component{
     
    constructor(props){
        super(props);
        this.state = {filter : ''};
    }

    handlerInput(value){
        this.setState( {filter : value});
    }

    render(){

        const list = this.props.animals
            .filter(item => item.especie.includes(this.state.filter))
            .map(item =>
                <List key={item.id} especie={item.especie} />
            );
            
        return(
            <div>
                <Input2 callback = {this.handlerInput.bind(this)} />
                <ul>
                    {list}
                </ul>
            </div>
        )
    }


}

export default MFR;