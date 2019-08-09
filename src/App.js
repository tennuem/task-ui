import React from 'react';
import List from './components/List';
import Form from './components/Form';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Form />
        <List />
      </div>
    );
  }
}
