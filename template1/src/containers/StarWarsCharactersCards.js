import React, {Component} from "react";
import axios from "axios";
import CharactersCards from "../components/CharactersCards";

const API_URL = `https://swapi.co/api/people/`;

class StarWarsCharactersCards extends Component {
    constructor(props){
        super(props);

        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        axios.get(API_URL)
            .then(({data : { results }})=> {
                this.setState({characters: results});
            });
    }
    render() {
        return(
            <CharactersCards elements={this.state.characters} />
        );
    }
}

export default StarWarsCharactersCards;