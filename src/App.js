import React, {Component} from 'react';
import axios from 'axios';

import UserList from './components/UserList';
import SearchForm from './components/SearchForm';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      searchUser: 'tetondan'
    }
  }
  
  componentDidMount() {
    axios
      .get(`https://api.github.com/users/${this.state.searchUser}`)
      .then(results => { 
        // console.log('main user info', results.data)

        // First gets the data from the main account of the api call
        this.setState({userData: [results.data]})

        axios.get(results.data.followers_url)
          .then(results => {
            // console.log('followers data', results.data)
            
            // Finds the usernames of all of the followers.
            const followersAuto = results.data.map(follower => follower.login)

            followersAuto.forEach(follower => {
              axios.get(`https://api.github.com/users/${follower}`)
                .then(result => {
                  // console.log('data from followers', result.data)

                  // Inputs all of the information of the followers into this.state.
                  this.setState({userData: [...this.state.userData, result.data]})
                })
                .catch(error => {
                  console.log('server error', error);
                })
            })
          })
      })
      .catch(err => console.log('did not work', err))
  }
  
  render() {
    // console.log('In render', this.state);
    return (
      <div className="App">
        {/* <SearchForm /> */}
        <UserList userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
