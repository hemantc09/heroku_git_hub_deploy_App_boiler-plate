import React from 'react';
import Title from './Title';
import SendMessageForm from './SendMessageForm';
import MessageList from './MessageList';

const DUMMY_DATA = [
    {
      senderId: "hemantc09",
      text: "who'll win?"
    }
  ];

/** Replace these with your own API keys, username and roomId from Chatkit  */
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/dc95058e-35a0-40e2-838f-566660f03417/token";
const instanceLocator = "v1:us1:dc95058e-35a0-40e2-838f-566660f03417";
const roomId = 19390895;
const username = 'hemantc09';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            messages: []
        }
        this.sendMessage = this.sendMessage.bind(this)
        
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text,
            roomId, roomId
        })
    }

    componentDidMount(){
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: username,
            tokenProvider: new Chatkit.TokenProvider({
                url: testToken
            })
        })

        chatManager.connect().then(currentUser => {
            this.currentUser = currentUser
            currentUser.subscribeToRoom({
                roomId: roomId,
                hooks: {
                    onNewMessage: message => {
                        this.setState({
                            messages: [...this.state.messages, message]
                        })
                    }
                }
            })
        })

    }

    render() {
       
        return (
        <div className="app"> 
            <Title />
            <MessageList 
            roomId={this.state.roomId}
            messages={this.state.messages} />
            <SendMessageForm sendMessage= {this.sendMessage} />
        </div>
        ) 
    }


}



