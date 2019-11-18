import React, { Component } from 'react';

import './App.css';
import axios from 'axios';
import {Switch,Link,Route} from 'react-router-dom'
import Beers from "./Beers"
import RandomBeer from "./RandomBeer"
import NewBeer from "./NewBeer"
class App extends Component {
  // state ={
  //   Beers :Beers
  // }

componentDidMount(){

  axios.get("https://ih-beers-api2.herokuapp.com/beers",).then(allTheBeers=>{
    console.log(allTheBeers)
  })
}

getTheBeers =()=>{

  axios.get("https://ih-beers-api2.herokuapp.com/beers",).then(allTheBeers=>{
    console.log(allTheBeers)
  })
}
getRandomBeer=()=>{
  axios.get("https://ih-beers-api2.herokuapp.com/beers/random",).then(allRandom=>{
    console.log(allRandom)
  })
}
  


  render() {
    return (
      <div >
        <nav>
        <Link to="/beers">Beers</Link>
        <Link to="/random-beer">rando</Link>
        <Link to="/new-beer">new</Link>
        </nav>
        {this.getRandomBeer()}
        <Switch>
          <Route path= "/beers" component={Beers} />
          <Route path= "/random-beer" component={RandomBeer} />
          <Route path= "/new-beer" component={NewBeer} />
        </Switch>
      </div>
    );
  }
}

export default App;
