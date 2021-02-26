import React from 'react';

class Jsx extends React.Component{

    constructor(props){
        super(props);
        this.state = { text : ''};  
    }

    formatName(user) {
        return user.firstName+' '+user.lastName  ;
    }

    user() {
        const user = {
            firstName : 'Miguel',
            lastName : 'Simijaca'
        } 
        const result = this.formatName(user);
        console.log(result);
         return result;
    }

    render(){
        const name = 'Miguel Simijaca';
        const element = <h2>Hello, {name}</h2>
        const user = this.user();
        const messages = ['React', 'Re: React', 'Re:Re: React'];
        return(
            <div>
                <h1>{element}</h1>
                <p>{user}</p>
                <p><Mailbox unreadMessages={messages} /></p>

            </div>
        )
    }
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    return (
        <div>
            <h1>Hello!</h1>
            {unreadMessages.length > 0 &&
                <h2>
                    You have {unreadMessages.length} unread messages.
        </h2>
            }
        </div>
    );
}



export default Jsx;