import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="title">Room Chat</div>
        <div className="wrapper">
          <div className="room-chat">
            <div className="message left">Hello</div>
            <div className="message right">Hello</div>
          </div>
          <input className="input-chat" placeholder="Type a message" autoFocus={true}/>
        </div>
      </header>
    </div>
  );
}

export default App;
