import React, {Component} from "react";
import DescribeCharacter from "./DescribeCharacter";
import "./CharacterCard.css";

class CharacterCard extends Component {
    render() {
        return(
            <div className="character-box" key={this.props.name}>
                <DescribeCharacter name={this.props.name} height={this.props.height} mass={this.props.mass} gender={this.props.gender} />
            </div>
        );
    }
}

export default CharacterCard;