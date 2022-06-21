import React, { Component } from 'react';
import { Header, Main, Footer } from  './components';

class App extends Component {
  constructor() {
    super()
  this.state = {
    personal: {},
    experience: {},
    education: {},
    experiences: [],
    educations: []
  }
  this.handleTextChange = this.handleTextChange.bind(this);
  }

  handleTextChange(e) {
    const prop = {...this.state[e.target.parentNode.className]};
    prop[e.target.name] = e.target.value;
    this.setState({
    [e.target.parentNode.className]: prop
  });
  }
  render() {
    const app = (<div className='app'>
      <Header />
      <Main onChange={this.handleTextChange} />
      <Footer />
    </div>);
    return app;
  }
}

export default App;