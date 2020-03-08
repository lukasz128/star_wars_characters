import React, {Component} from "react";
import CharacterCard from "./CharacterCard/CharacterCard";
import FetchError from "./shared/FetchError";
import LoadingSpinner from "./shared/LoadingSpinner";

class CharactersCards extends Component {
    render() {   
        if(this.props.error) {
            return(<FetchError />);
        }
        else if(this.props.loader) {
            return(<LoadingSpinner />);
        } 
        else {
            return (
                <>
                    {this.props.elements.map(el => <CharacterCard key={el.name} name={el.name} height={el.height} mass={el.mass} gender={el.gender} />)}
                </>  
            );  
        }
    }
}

export default CharactersCards;