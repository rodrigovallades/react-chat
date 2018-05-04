import React, { Component } from 'react'
import classNames from "classnames"
import './Message.css'

class Message extends Component {
  render() {
    const classes = classNames('chat__message', {
      'chat__message--log': !this.props.author,
      'chat__message--me': this.props.me
    })

    return (
      <li className={classes}>
        {this.props.author && (
          <span className="chat__message--author">{this.props.author}:</span>
        )}
        {this.props.body}
      </li>
    )
  }
}

export default Message
