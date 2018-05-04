import React, { Component } from 'react'
import './Header.css'

class Header extends Component {
  render() {
    return (
      <div className="chat__header">
        <div className="chat__title">{this.props.title}</div>
        {this.props.count > 0 && (
          <div className="chat__count">{this.props.count}</div>
        )}
      </div>
    )
  }
}

export default Header
