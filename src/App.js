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
      return ( <p className="nochats">Nenhum chat aberto.</p> )
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
      return { chats: [...prevState.chats, { title: `Chat ${prevState.chats.length+1}` }] };
    });
  }

  render() {
    return (
      <div className="app">
        <button onClick={this.addChat} className="btn addchat">Novo chat</button>
        {this.renderChats()}
      </div>
    )
  }
}

App.defaultProps = {
  chats: [],
}

export default App
