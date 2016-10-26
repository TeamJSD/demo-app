/* eslint-disable */ 
import React, { Component } from 'react';
import Comment from './Comment';

const Post = (props) => {
    return (
      <div className="post">
        <img src={props.url}/>
        <div>Comments: </div>
        {props.comments.map((comment, i) => {
          return <Comment message={comment} key={i}/>
        })}
      </div>
    )
  }

export default Post