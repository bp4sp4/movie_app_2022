import React from "react";
import PropTypes from 'prop-types';

function Food({ name, picture, rating }) {
  return (
  <div>
  <h1>I like {name}</h1>
  <h4>{rating}/5.0</h4>
  <img src={picture} alt={name} />
  </div>
  );
}

const foodILike = [
  {
    id : 1,
    name : 'kimchi',
    image : 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
    rating : 5,
  },
  {
    id: 2,
    name : 'bosamg',
    image : 'https://i.ytimg.com/vi/R9XHCBRhztY/maxresdefault.jpg',
    rating : 4.5,
  },
];

function App() {
  
  return (
  <div>
    {foodILike.map(dish => (
    <Food key={dish.id} name={dish.name} picture={dish.image} 
    rating={dish.rating}/>))}
    </div>
    
  );
}

Food.prototype = {
  name : PropTypes.string.isRequire,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};

export default App;
