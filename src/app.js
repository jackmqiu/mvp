import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './Counter';
import User from './User';

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
    $.ajax({
      type: 'GET',
      url: '/users',
      data: data,
      success: (data) => {
        this.setState({
          users: data.users
        });
      }
    });
  }
  render () {
    return (
      <div className="container">
        <h1>Important People</h1>
         <div class="row text-center" style="display:flex; flex-wrap: wrap;">
          {
            if(this.users){
              this.users.map((user) => {
                return <User user = {user}/>
              })
            } else {
              <h1>Loading...</h1>
            }
          }
         </div>
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <App />, document.getElementById('app')
  );
});
