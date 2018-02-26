import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          This is the third test!!! This should create a conflict

          a;slkdjf;aklsdjf;aklsdjf;alksdjf;laksjdf;kajsd;fkjas;dkljf;askdjf;kajsd;fkjas;dkfj;laksjdf;lkjasd;lkfj;alskdjf;lkajsd;lfkja;lsdkjf;laksdjf;kajsd;fkja;sdkjf;laskdjfasdkljf;alksdjf;lkajsd;lkfja;lskdjf;lkasjd;flkja;sldkfj;alksdjf;kajsd;kfj;laskdjf;lkajsd;kfj;laskjdf;kajsd;lfkj;aksdjf;lkajsd;lfkja;sdkjf;lkasjd;lfkja;sldkjf;laksjdf;lkjasl;dkfj;laskdjf;kasjd;fkjas;dkfj;askdjf;lkajsd;lkfj;alskdjf;kasjd;lfkjas;ldkjf;laskdjf;lkajsd;fkja;sldkjf;lkasjd;lfkjas;ldkfj;laskjd;flkj
        </p>
      </div>
    );
  }
}

export default App;
