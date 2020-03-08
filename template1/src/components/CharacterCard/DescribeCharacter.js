import React, {Component} from "react";

class DescribeCharacter extends Component {
    render() {
        return(
            <>
                <h2 className="name">{this.props.name }</h2>
                <p>Height: {this.props.height} </p>
                <p>Mass: {this.props.mass}</p>
                <p>Gender: {this.props.gender}</p>
            </>
        );
    }
}

export default DescribeCharacter;