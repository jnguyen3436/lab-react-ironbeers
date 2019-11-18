import React, { Component } from 'react'
import axios from 'axios'
import {Link} from "react-router-dom"

export default class Beers extends Component {

    state = {allTheBeers:[]}

        
        getAllBeers =()=>{
        axios.get("https://ih-beers-api2.herokuapp.com/beers",).then(allTheBeers=>{
          console.log(allTheBeers)
          this.setState({allTheBeers:allTheBeers.data})
        })
    }
      showTheBeers=()=>{
        return this.state.allTheBeers.map(eachBeer=>{
            return(
                <Link to={eachBeer._id}>
                <li>
                <h4>{eachBeer.name}</h4>
                <img src={eachBeer.image_url} width="200px" alt={eachBeer.name}/>
                <p>{eachBeer.description}</p>
                </li>
                </Link>
            )
        })

      }

    render() {
        return (
            <div>
                {this.getAllBeers()}
                Beers
                {this.showTheBeers()}
            </div>
        )
    }
}
