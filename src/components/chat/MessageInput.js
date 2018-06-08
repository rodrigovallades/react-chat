import React, { Component } from 'react'
import './MessageInput.css'

class MessageInput extends Component {

  componentDidMount = () => {
    this.input.focus()
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    if (!this.input.value) { return null }
    this.props.onMessageSend(this.input.value)
    this.input.value = ""
  }

  setRef = node => {
    this.input = node
  }

  render() {
    return (
      <form className="chat__input" onSubmit={this.handleFormSubmit.bind(this)}>
        <div className="input-container">
          <input
            type="text"
            ref={this.setRef}
            placeholder="Escreva sua mensagem"
          />
        </div>
        <div className="button-container">
          <button type="submit">Enviar</button>
        </div>
      </form>
    )
  }
}

export default MessageInput
