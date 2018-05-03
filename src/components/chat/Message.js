import React, { Component } from 'react'
import classNames from "classnames"
import './Message.css'

class Message extends Component {
  render() {
    const classes = classNames('Message', {
      log: !this.props.author,
      me: this.props.me
    })

    return (
      <li className={classes}>
        {this.props.author && (
          <span className="author">{this.props.author}:</span>
        )}
        {this.props.body}
      </li>
    )
  }
}

export default Message
