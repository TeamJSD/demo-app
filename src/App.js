/* eslint-disable */ 
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import data from './data';
import { Navbar } from 'react-bootstrap';
import axios from 'axios';

class App extends Component {
  constructor() {
  super();
    this.state = data;
  }

  componentDidMount() {
    //this is what the actual query should look like with no mutation
    // let posts = {"query": "{posts{url, comments}}"}
    //this is probably going to be what people send over
    // let posts = "{posts{url, comments}}"


    axios.post('http://localhost:3000/graphQL/Hyn9RL8lx', posts)
    .then((response) => {
      let data = response.data.data
      console.log(response, data, 'you got a response')
      this.setState({posts: data.posts})
      console.log(this.state, 'this is your state')
    }).catch((err) => console.log(err))
  }

  render() {

    let posts = this.state.posts.map((post, i) => {
      return <Post url={post.url} comments={post.comments} key={i}/>
    })

    return (
      
      <div className="App">
        <Navbar>
          <h3>My Favorite Lightbulbs</h3>
        </Navbar>
        {posts}
      </div>
    );
  }
}

export default App;
