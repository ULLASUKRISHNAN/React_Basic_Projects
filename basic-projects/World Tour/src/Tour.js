import React, { useState } from 'react';

const Tour = (props) => {
  const { image, name, info, price } = props;
  return (
    <article className='single-tour'>
      <img src={image} alt={`Pic of ${name}`} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>$ {price}</h4>
        </div>
        <p>{info}</p>
        <button className='delete-btn'></button>
      </footer>
    </article>
  );
};

export default Tour;
