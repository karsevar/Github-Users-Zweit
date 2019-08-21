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

  addNewUser = (user) => {
    this.addNewUserInfo(user)
  }

  addNewUserInfo = (user) => {
    axios
      .get(`https://api.github.com/users/${user}`)
      .then(results => {
        this.setState({userData: [...this.state.userData, results.data]})
      })
  }

  findUsers = () => {
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
            console.log(followersAuto)

            for (let i=0; i < 10; i++) {
              axios.get(`https://api.github.com/users/${followersAuto[i]}`)
                .then(result => {
                  // console.log('data from followers', result.data)

                  // Inputs all of the information of the followers into this.state.
                  this.setState({userData: [...this.state.userData, result.data]})
                })
                .catch(error => {
                  console.log('server error', error);
                })
              }
          })
      })
      .catch(err => console.log('did not work', err))
  }
  
  componentDidMount() {
    this.findUsers();
  }
  
  render() {
    // console.log('In render', this.state);
    return (
      <div className="App">
        <SearchForm addNewUser={this.addNewUser} />
        <UserList userData={this.state.userData} />
      </div>
    );
  }
}

export default App;
