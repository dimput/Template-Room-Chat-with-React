import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="title">Room Chat</div>
          <div className="wrapper">
            <div className="room-chat">
              <div className="message left">Hello</div>
              <div className="message right">Hello</div>
            </div>
            <form>
              <input className="input-chat" placeholder="Type a message" autoFocus={true} />
            </form>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
