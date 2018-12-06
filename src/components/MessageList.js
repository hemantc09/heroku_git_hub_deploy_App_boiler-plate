import React from 'react';


class MessageList extends React.Component {
  
    render(){
  // var i =0;
        return (

            // <h1>From the MessagesList</h1>
            <ul className="message-list">
            

               {this.props.messages.map((message, index) => {
                       return (
                           <li key={message.id} className="message">
                                <div>
                                    {message.senderId}
                                </div>
                                <div>
                                    {message.text}
                                </div>
                           </li>
                       )
                })}
            </ul>
           
        )
    }
}

  
  export default MessageList;