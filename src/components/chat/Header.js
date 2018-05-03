import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="Chat__header">
        <div className="Chat__title">{this.props.title}</div>
        {this.props.count > 0 && (
          <div className="Chat__count">{this.props.count}</div>
        )}
      </div>
    )
  }
}

export default Header
