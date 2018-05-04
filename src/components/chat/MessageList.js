import React, { Component } from 'react'
import Message from './Message'
import './MessageList.css'

class MessageList extends Component {
  componentDidUpdate = () => {
    this.node.scrollTop = this.node.scrollHeight
  }

  setRef = node => {
    this.node = node
  }

  renderMessages = () => {
    if (!this.props.messages.length) {
      return ( <Message body='Sem mensagens' /> )
    }
    return this.props.messages.map((message, i) => {
      return (
        <Message key={i} {...message} />
      )
    })
  }

  render() {
    return (
      <ul className="chat__messages" ref={this.setRef}>
        {this.renderMessages()}
      </ul>
    )
  }
}

MessageList.defaultProps = {
  messages: [],
}

export default MessageList
