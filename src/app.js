import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }

  render () {
    return (
      <div>
        <h1>Important People</h1>
        <Counter/>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />, document.getElementById('app')
  );
});
