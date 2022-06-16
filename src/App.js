import React, { Component } from 'react';
import { Header, Main, Footer } from  './components';

class App extends Component {
  constructor() {
    super()
  }

  render() {
    const app = (<div className='app'>
      <Header />
      <Main />
      <Footer />
    </div>);
    return app;
  }
}

export default App;