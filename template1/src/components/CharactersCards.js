import React, {Component} from "react";
import CharacterCard from "./CharacterCard/CharacterCard";

class CharactersCards extends Component {
    render() {
        const content = this.props.elements.map(el => <CharacterCard key={el.name} name={el.name} height={el.height} mass={el.mass} gender={el.gender} />);

        return (
            <div className="container">
                {content}
            </div>  
        );
    }
}

export default CharactersCards;