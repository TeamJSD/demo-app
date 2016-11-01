/* eslint-disable */ 
import React, { Component } from 'react';
import Comment from './Comment';

const Post = (props) => {
    return (
      <div className="post">
        <img src={props.url}/>
        <div className='comments'>Comments: </div>
        {props.comments}
      </div>
    )
  }

export default Post