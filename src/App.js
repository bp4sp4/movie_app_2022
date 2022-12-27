import React from "react";

function Food({ name, picture }) {
  return (
  <div>
  <h1>I like {name}</h1>
  <img src={picture} />
  </div>
  );
}

const foodILike = [
  {
    name : 'kimchi',
    image : 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
  },
  {
    name : 'bosamg',
    image : 'https://i.ytimg.com/vi/R9XHCBRhztY/maxresdefault.jpg',
  },
];

function App() {
  
  return (
  <div>
    {foodILike.map(dish => (
    <Food name={dish.name} picture={dish.image} />))}
    </div>
  );
}

export default App;
