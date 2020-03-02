import React, {Component} from "react";
import DescribeCharacter from "./DescribeCharacter";

class CharactersCard extends Component {
    render() {
        return(
            <div key={this.props.name}>
                <DescribeCharacter name={this.props.name} height={this.props.height} mass={this.props.mass} gender={this.props.gender} />
            </div>
        );
    }
}

export default CharactersCard;