import React, { Component } from 'react'
import MessageInput from './MessageInput'
import MessageList from './MessageList'
import Header from './Header'

import './Chat.css'

class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messages: [],
      waitingResponse: false,
    }
  }

  handleNewMessage = (text) => {
    this.setState({
      messages: [...this.state.messages, { me: true, author: 'Eu', body: text }],
      waitingResponse: true,
    })
    this.mockResponseMessage()
  }

  mockResponseMessage = () => {
    if (!this.state.waitingResponse) {
      setTimeout(() => {
        this.setState({
          messages: [...this.state.messages, { me: false, author: 'Outro', body: 'Resposta simulada.' }],
          waitingResponse: false,
        })
      }, 1000);
    }
  }

  render() {
    return (
      <div className="Chat">
        <Header title={this.props.title} count={this.state.messages.length} />
        <MessageList messages={this.state.messages} />
        <MessageInput onMessageSend={this.handleNewMessage} />
      </div>
    )
  }
}

export default Chat
