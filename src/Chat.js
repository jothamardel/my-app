import React from 'react';

import './Chat.css';

class Chat extends React.Component {
  constructor() {
    super();
    this.state = {
      chats: [],
      message: ""
    }
  }

  onInput = (event) => {
    this.setState({message: event.target.value})
  }

  submitMessage = (event) => {
    event.preventDefault();
    let newChat = this.state.chats
    newChat.push({
      name: "John",
      message: this.state.message
    })
    this.setState({ chats: newChat })
  }

  render() {
    return (
      <div>
        <h1>Chats</h1>
        <div className='chats'>
          {
            this.state.chats ? 
            this.state.chats.map((item, index) => {
              return (
                <div  key={index} className='message'>
                  <div>
                    <h4>{item.name}</h4>
                    <p>{item.message}</p>
                    </div>
                  </div>
              );
            }) : null
          }
        </div>
        <div className="form">
          <form onSubmit={this.submitMessage}>
            <input 
              type="text" 
              placeholder="type message"
              onChange={this.onInput }/>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    );
  }
}


export default Chat;