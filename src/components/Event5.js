import React from 'react';
import Event4 from './Event4';

class Event5 extends React.Component{
    constructor(props){
        super(props)
        this.state = { imageStatus : ''}
    }

    handleImageLoaded(e){
        this.setState({ imageStatus: "loaded" });
    }

    handleImageErrored(e){
        this.setState({ imageStatus: "failed to load" });
    }    

    render(){
        return(
            <div>
                <div>
                    <p>{this.state.imageStatus}</p>
                </div>
                <img
                    src = {this.props.img}
                    onLoad = {this.handleImageLoaded.bind(this)}
                    onError={(e) => this.handleImageErrored(e)} 
                    />
                <div>
                    <p>{this.props.children}</p>
                </div>
            </div>
        )
    }
}

export default Event5;