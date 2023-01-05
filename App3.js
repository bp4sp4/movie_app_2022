import React from "react";

class App extends React.Component{
  constructor(props) {
    super(props);
    console.log('hello');
  }
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

     < div>
     <h1>The number is : {this.state.count}</h1>
     <button onClick={this.add}>Add</button>
     <button onClick={this.Minus}>Minus</button>
    </div>
    );
  }
}

export default App;
