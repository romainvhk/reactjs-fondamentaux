import React from 'react';
import './Card.css';

export default function Card(props) {
    const {title, description, image} = props;

  return (
    <div className='article'>
        <h1 className="article__title">{title}</h1>
        <img className='article__photo' src={image}/>
        <p className="article__description">{description}</p>
    </div>
  );
};
