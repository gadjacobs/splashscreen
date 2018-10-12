import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactLoading from "react-loading";
import styled from "tachyons-components";

// Please ignore the lack of seperation of concerns. I was in a hurry, but I could refactor after you run the test.

const Section = styled("div")`
flex flex-wrap content-center justify-center w-100 h-100 bg-blue`;

const Title = styled("h1")`
f4 f3-ns white w-100 tc`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timePassed: false
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setTimePassed();
    }, 5000);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }
  render() {
    if (!this.state.timePassed) {
      return (
        <Section>
          <Title>
            This splash screen will disappear after five (5) seconds...
          </Title>
          <ReactLoading type="bars" color="#fff" />
        </Section>
      );
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <h1>DEALIN.IO</h1>
            <img src={logo} className="App-logo" alt="logo" />
            <p>Hello Mr. Issa, I hope you liked the splash screen?</p>
          </header>
        </div>
      );
    }
  }
}

export default App;
