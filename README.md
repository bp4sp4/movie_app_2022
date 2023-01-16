# Movie App 2022.12 ~2023.01
# React Study 
React JS Fundamentals Course 2020

test

<h1>23.01/05</h1>
<h4>클론코딩 영화평점 웹서비스 140p  </h4>
<h4>6초후에 로딩화면 바꾸기 </h4>

```java
import React from "react";

class App extends React.Component{

 state = {
    isLoding : true,
    movies: [],
    };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoding : false});
    }, 6000);
  }

  render() {
    const { isLoding } = this.state;
    return <div>{isLoding ? 'Loading...' : 'We are ready'}</div>;
  }
}


export default App;

```

<h4>영화 앱 만들기 워밍업 로딩상태 표시 </h4>

```java
import React from "react";

class App extends React.Component{

 state = {
    isLoding : true,
    };

  render() {
    const { isLoding } = this.state;
    return <div>{isLoding ? 'Loading...' : 'We are ready'}</div>;
  }
}


export default App;
```


<h4>component의 일생</h4>

```java
(..생략)
componentDidMount() {
  console.log('component renderd');
}
componentDidUpdate(){
  console.log('component update');
}
componentWillUnmount(){
  console.log('goodbye, cruel world');
}
  render() {
    console.log("i'm rendering");
    return (
(...생략)
```

<h1>23.01/01</h1>

<h4>클론코딩 영화평점 웹서비스 128p  </h4>
<h4> state로 숫자 증감 기능만들기</h4>

```java

import React from "react";

class App extends React.Component{
  state = {
    count : 0,
  };
add = () => {
  this.setState( current => ({
    count : current.count + 1,
  }))
};

Minus = () => {
  this.setState(current => ({
  count : current.count -1,
}))
};

  render() {
    return (
     < div>
     <h1>The number is : {this.state.count}</h1>
     <button onClick={this.add}>Add</button>
     <button onClick={this.Minus}>Minus</button>
    </div>
    );
  }
}
export default App;

```

<h4>prop-types 경고 해결하기</h4>

```java

Food.prototype = {
  name : PropTypes.string.isRequire,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number,
};

```


<h4>prop-types 설치</h4>

```java
npm install prop-types
```
<h4>rating(점수)추가</h4>

```java

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

```

<h4>map()함수로 만든 컴포턴트에 key props추가 </h4>

```java
(생략...)
const foodILike = [
  {
    id : 1,
    name : 'kimchi',
    image : 'https://img.hankyung.com/photo/202108/99.27186019.1.jpg',
  },
  {
    id: 2,
    name : 'bosamg',
    image : 'https://i.ytimg.com/vi/R9XHCBRhztY/maxresdefault.jpg',
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
(생략...)
```
<hr>
<h1>22.12/28</h1>

<h4>클론코딩 영화평점 웹서비스 90p</h4>

<h4>기본 Component 만들기</h4>

```java
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

```java

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

```java

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

