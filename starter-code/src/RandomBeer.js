import React, { Component } from 'react'
import axios from "axios"

export default class RandomBeer extends Component {
state ={
    allRandom: []
}
    componentDidMount(){
        axios.get("https://ih-beers-api2.herokuapp.com/beers/random",).then(allRandom=>{
          console.log(allRandom)
          this.setState(
              {allRandom:allRandom.data}
          )
        })
      }
    // showRandomBeer =()=>{
    //     return (
    //         // <li>
    //         //     {this.allRandom.name}
    //         //     {this.allRandom.image_url}
    //         //     {this.allRandom.description}
    //         // </li>
    //     )
    // }  
    render() {
        return (
            <div>
                 <li>
                    
                {this.state.allRandom.name}
                
                 <img src = {this.state.allRandom.image_url} alt="askldfnasdf"/>
                  {this.state.allRandom.description}
                 </li>
                Random
                
            </div>
        )
    }
}
