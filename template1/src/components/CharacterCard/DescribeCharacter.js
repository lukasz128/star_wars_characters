import React, {Component} from "react";

class DescribeCharacter extends Component {
    render() {
        return(
            <>
                <p>Name: {this.props.name }</p>
                <p>Height: {this.props.height} </p>
                <p>Mass: {this.props.mass}</p>
                <p>Gender: {this.props.gender}</p>
            </>
        );
    }
}

export default DescribeCharacter;