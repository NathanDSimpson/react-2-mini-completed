import React, { Component } from 'react';

export default class TextContainer extends Component {
    state = {
      text: '',
    };
  

  updateText = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  render() {
    return (
      <div className="textContainer">
        <textarea
          style={ {
            color: this.props.fontColor,
            fontFamily: this.props.fontFamily,
            fontSize: `${this.props.fontSize}px`
          } }
          onChange={this.updateText}
          value={this.state.text}
          placeholder="Start typing your thoughts here!"
          cols="90"
          rows="30"
        />
      </div>
    );
  }
}
