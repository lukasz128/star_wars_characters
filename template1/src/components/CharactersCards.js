import React, {Component} from "react";
import CharactersCard from "./CharactersCard/CharactersCard";

class CharactersCards extends Component {
    render() {
        const content = this.props.elements.map(el => <CharactersCard key={el.name} name={el.name} height={el.height} mass={el.mass} gender={el.gender} />);

        return (
            <div>
                {content}
            </div>  
        );
    }
}

export default CharactersCards;