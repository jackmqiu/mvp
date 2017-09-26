import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import User from './User';
import SignUp from './SignUp';
import $ from 'jquery';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    this.fetchUsers();
  }
  fetchUsers () {
    console.log('fetching users');
    $.ajax({
      method: 'GET',
      url: '/home',

      success: (data) => {
        console.log('success. data: ', data);
        this.setState({
          users: data[0]
        });
      }
    });
  }
  render () {
    if(this.state.users){
      return (
        <div className="container">
          <h1>Important People</h1>
          <div className="row text-center">
            {
              this.state.users.map((user) => {
                return <User user = {user}/>
              })
            }
          </div>
          <SignUp/>
        </div>
      )
    } else {
      return <h1>Loading...</h1>
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />, document.getElementById('app')
  );
});
