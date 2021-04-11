import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };
  handleKeypress = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };
  render() {
    return (
      <div>
        <h1>이벤트연습</h1>
        <input
          type='text'
          name='username'
          placeholder='아무거나 입력'
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type='text'
          name='message'
          value={this.state.message}
          onChange={this.handleChange}
          onKeyPress={this.handleKeypress}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
