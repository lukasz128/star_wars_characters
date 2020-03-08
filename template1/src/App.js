import React, {Component} from "react";
import StarWarsCharactersCards from "./containers/StarWarsCharactersCards";
import "./App.css";

class App extends Component {
    render() {
        return(
            <div className="container">
                <StarWarsCharactersCards />
            </div>
        );
    }
}



export default App;