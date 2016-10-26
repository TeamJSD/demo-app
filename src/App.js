/* eslint-disable */ 
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import logo from './logo.svg';
import './App.css';
import Post from './Post'
import data from './data';
import { Navbar } from 'react-bootstrap';

class App extends Component {
  constructor() {
  super();
    // this.state = {
    //   posts: [
    //     {
    //       url: 'foo.jpg',
    //       comments: [
    //         'cool pic!',
    //         'yay!'
    //       ]
    //     },
    //     {
    //       url: 'foo2.jpg',
    //       comments: [
    //         'boring pic!',
    //         'boo!!'
    //       ]
    //     }
    //   ]
    // }
    this.state = data;
  }
  render() {
    return (
      
      <div className="App">
        <Navbar>
          <h3>My Favorite Lightbulbs</h3>
        </Navbar>
        {this.state.posts.map((post, i) => {
          return <Post url={post.url} comments={post.comments} key={i}/> 
        })}
      </div>
    );
  }
}

export default App;
