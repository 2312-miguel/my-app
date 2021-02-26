import React from 'react';

class CiclosDeVida  extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            estado : 'Primer render',
            visible : false
        };
    }
    
    componentDidMount(){
        this.intervalo = setInterval(() => {
            this.setState({estado : 'Segundo render'});
        }, 3000);
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (this.state.estado !== prevState.estado) {
            this.intervalo2 = setInterval(() => {
                this.setState({estado : "Tercer render"});
            }, 2000);
        }
    }
    
    componentWillUnmount(){
        clearInterval(this.intervalo, this.intervalo2);
    }

    render(){
        return(
            <div>
                <p>Hola {this.state.estado}</p>
                <p>Hola {this.props.name}</p>
            </div>
        );
    }

}

CiclosDeVida.defaultProps  = {
    name : 'Miguel'
}

export default CiclosDeVida;