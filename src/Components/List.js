import React from 'react';
import { Gif } from './Gif';
import '../App.css';

const List = props => {
    const gifs = props.gifs.map(image => {
      return <Gif key={image.id} gif={image} />;
    });
  
    return <div className="list">{gifs}</div>;
  }

export { List };