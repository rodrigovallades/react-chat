import React, { Component } from 'react'
import Chat from './components/chat/Chat'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      chats: [],
    }
  }

  renderChats = () => {
    if (!this.state.chats.length) {
      return ( <p className="nochats">Esta aplicação em React 16 simula vários chatbots abertos. A ideia é mostrar um código moderno e componentizado, utilizando módulos, CSS custom (sem boilerplate), SCSS, BEM, mobile-first e demais técnicas e boas práticas atuais.</p> )
    }
    let chats = this.state.chats.map((chat, i) => {
      return (
        <Chat key={i} title={chat.title} />
      )
    })
    return ( <div className='chats'>{chats}</div> )
  }

  addChat = () => {
    this.setState((prevState, props) => {
      return { chats: [...prevState.chats, { title: `Chat ${prevState.chats.length+1}` }] }
    });
  }

  render() {
    return (
      <div className="app">
        {this.renderChats()}
        <button onClick={this.addChat} className="btn addchat">Novo chat</button>
      </div>
    )
  }
}

App.defaultProps = {
  chats: [],
}

export default App
