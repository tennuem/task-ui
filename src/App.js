import React from 'react';
import Form from './components/task/Form';
import List from './components/task/List';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Task list</h1>
        <Form />
        <List />
      </div>
    );
  }
}
