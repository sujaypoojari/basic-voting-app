import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    languages: [
      { name: "Go", votes: 0, color: "#008CBA" },
      { name: "Python", votes: 0, color: "#f44336" },
      { name: "Dart", votes: 0, color: "#e7e7e7" },
      { name: "Java", votes: 0, color: "#008CBA" },
    ],
  };

  vote(index) {
    let newLanguages = [...this.state.languages];
    newLanguages[index].votes++;
    this.setState({ languages: newLanguages });
  }

  render() {
    return (
      <>
        <h1>Vote Your Language</h1>
        <div className="languages">
          {this.state.languages.map((lang, i) => (
            <div key={i} className="language">
              <div className="voteCount">{lang.votes}</div>
              <div className="languageName">{lang.name}</div>
              <button onClick={this.vote.bind(this, i)}>Vote</button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
export default App;
