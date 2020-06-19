import React, { Component } from 'react';
import './App.css';
import Main from '../../components/Main/Index';

class App extends Component {
      render() {
        return (
          <div className="App">
              <div position="static" >
                  <div >
                      <div variant="title" color="inherit" style={{flex:1}} align="center">
                          TV Series
                      </div>
                  </div>
              </div>
              <Main/>
          </div>
        );
      }
}

export default App;
