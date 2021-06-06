import React from 'react';
import Card from './Card/Card';
import './style.scss';
import './../../styles/common.scss';

const Cards = () => {
  return (
    <>
      <div className="cards">
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
};

export default Cards;
