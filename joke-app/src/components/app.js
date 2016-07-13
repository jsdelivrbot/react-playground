import React, { Component } from 'react';

import JokeHeader from '../containers/joke_header'
import JokesList from '../containers/jokes_list'
import NavBar from '../components/navbar'

export default class App extends Component {
  render() {
    return (
      <div>
        <JokeHeader />
        <JokesList />
      </div>
    );
  }
}
