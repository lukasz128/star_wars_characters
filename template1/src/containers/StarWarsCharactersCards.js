import React, {Component} from "react";
import axios from "axios";
import CharactersCards from "../components/CharactersCards";

const API_URL = `https://swapi.co/api/people/`;

class StarWarsCharactersCards extends Component {
    constructor(props){
        super(props);

        this.state = {
            characters: [],
            error: null,
            loader: true
        }
    }

    componentDidMount() {
        axios.get(API_URL)
            .then(({data : { results }})=> {
                this.setState({characters: results, loader: false});
            }).catch( err => {
                this.setState({error : err});
            });
    }
    render() {
        return(
            <CharactersCards elements={this.state.characters} loader={this.state.loader} error={this.state.error} />
        );
    }
}

export default StarWarsCharactersCards;