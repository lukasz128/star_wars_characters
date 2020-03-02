import React, {Component} from "react";
import "./CharactersCards.css";

class CharactersCards extends Component {
    render() {
        const test = this.props.elements.map(el => <p key={el.name}> {el.name}</p>);

        return (
            <div>
                {test}
            </div>  
        );
    }
}

export default CharactersCards;