import React, { Component } from 'react';
import { Header, Main, Footer } from  './components';
import uniqid from 'uniqid';

class App extends Component {
  constructor() {
    super()
  this.state = {
    personal: {},
    experience: {
      id: uniqid(),
    },
    education: {
      id: uniqid(),
    },
    experiences: [],
    educations: []
  }
  this.handleTextChange = this.handleTextChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  this.deleteHandler = this.deleteHandler.bind(this);
  }
  deleteHandler(containerName, id) {
    this.setState({
      [containerName]: this.state[containerName].filter((element)=> element.id !== id )
    })
  }
  handleTextChange(e) {
    const prop = {...this.state[e.target.parentNode.className]};
    prop[e.target.name] = e.target.value;
    this.setState({
    [e.target.parentNode.className]: prop
  });
  }
  handleSubmit(e) {
    e.preventDefault();
    const prop = e.target.parentNode.className;
    this.setState({
      [`${prop}s`]: this.state[`${prop}s`].concat(this.state[prop]),
      [prop]: {
        id: uniqid(),
      }
    })
    e.target.parentNode.reset();
  }
  render() {
    const {personal, experiences, educations} = this.state;
    const app = (<div className='app'>
      <Header />
      <Main onChange={this.handleTextChange}
      handleSubmit={this.handleSubmit}
      personal={personal}
      experiences={experiences}
      educations={educations}
      deleteHandler={this.deleteHandler}/>
      <Footer />
    </div>);
    return app;
  }
}

export default App;