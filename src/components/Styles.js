import React from 'react';

class Styles extends React.Component {
    constructor(props){
        super(props);
        this.state = {classColor: "grayText"};
    }

    componentDidMount(){
        this._getDataAPI();
    }

    componentWillUnmount(){
        clearInterval(this._getDataAPI);
    }

    render(){
        return (
            <div className={this.state.classColor}>
                <h1>Estados, props y estilos</h1>
            </div>
        );
    }

    _getDataAPI() {
        //Simulate API
        console.log("Simulate API, wait 1 seconds...");
        setInterval(() => {
            const random = Math.round(Math.random()); //get 0 or 1
            //Data mock
            const data = [
                {
                    name: "Angélica",
                    color: "pinkText",
                },
                {
                    name: "Mauricio",
                    color: "blueText",
                },
            ];

            this.setState( () =>({
                classColor: data[random].color, //Change classColor state
            }));
        }, 1000);
    }
}

export default Styles;