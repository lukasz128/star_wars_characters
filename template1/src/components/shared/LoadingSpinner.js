import React, {Component} from "react";
import "./LoadingSpinner.css";

class LoadingSpinner extends Component {
    render() {
        return (
            <div className="loader-box">
                <span className="loader"></span>
                <span className="loader"></span>
                <span className="loader"></span>
            </div>
        );
    }
}

export default LoadingSpinner;