# Movie App 2020
# React Study 
React JS Fundamentals Course 2020

<h1>12/28</h1>

<h4>클론코딩 영화평점 웹서비스 90p / 공부시간 : 1시간20분 </h4>

<h4>기본 Component 만들기</h4>
```c
function Potato() {
    return <h1>I like poaato</h1>
}

function App() {
  return (
    <div>
        <h1>Hello</h1>
        <potato />
    <div>
    );
}

export default App;
```
<br>
<h4>props 사용한 Component 만들기</h4>
```c

function Food(props) {
    { fav } = props;
    return <h1>I like {fav} </h1>
}

function App() {
  return (
    <div>
        <h1>Hello</h1>
        <Food fav="kimchi />
        <Food fav="samgiopsal />
        <Food fav="chukumi />
    <div>
    );
}

export default App;
```
<br>
<h4>map 사용한 Component 만들기</h4>

```c
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
```

