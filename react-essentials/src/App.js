import logo from './logo.svg';
import './App.css';
import React from 'react';


function Header(props){
  return(
    <header>
      <h1>Hello {props.name}</h1>
    </header>
  )
}
const meals = [
  "tacos",
  "pizza",
  "icecream"
];
class MainComponent extends React.Component{
  render() {
    return (
      <div>
        <h2>Favorite Meals are :</h2>
        <ul>
          {this.props.meals.map((dish) => <li> {dish}</li>)}
        </ul>
      </div>
    );
  }  
}
class CurrentTime extends React.Component{
  constructor(props){
    super(props);
    this.state = {currentTime : new Date().toLocaleTimeString()}
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }
  componentWillUnmount() {
    clearInterval(this.intervalID);
  }
  tick() {
    this.setState({
      currentTime: new Date().toLocaleTimeString()
    });
  }
  render() {
    return (
      <h2>time is {this.state.currentTime}</h2>
    );
  }  
}


function App() {
  return (
    <div className="App">
      <Header name="Edgar"/>
      <MainComponent meals={meals}/>
      <CurrentTime />
    </div>
  );
}

export default App;
