import React, { Component } from "react";
import "./App.css";
import { Carousel } from "antd";
import "antd/es/carousel/style/index.css";
import Splash from "./Splash";
import Card from "./Card";

function onChange(a, b, c) {
  console.log(a, b, c);
}

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
    }, 3000);
  }

  setTimePassed() {
    this.setState({ timePassed: true });
  }

  render() {
    if (!this.state.timePassed) {
      return <Splash />;
    } else {
      return (
        <div className="">
          <header class="tc ph4">
            <h1 style={{marginTop: 0}} class="f1 f2-m f1-l fw8 white mv3">Welcome to Dealin.</h1>
            <h2 class="f5 f4-m f3-l fw2 white-70 mt0 lh-copy">
              This is a simple Splash Screen and Onboarding demo.
            </h2>
          </header>
          <Carousel afterChange={onChange}>
            <Card
              name="Issa Salad"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas at lectus id vestibulum. Proin condimentum auctor orci, a viverra."
              imageUrl="https://icon-icons.com/icons2/550/PNG/512/business-color_business-contact-86_icon-icons.com_53469.png"
            />

            <Card
              name="Jane Doe"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas at lectus id vestibulum. Proin condimentum auctor orci, a viverra."
              imageUrl="https://bilingolinos-kita.eu/wp-content/uploads/2015/01/user-310807_640.png"
            />

            <Card
              name="Gad Jacobs"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas at lectus id vestibulum. Proin condimentum auctor orci, a viverra."
              imageUrl="https://icon-icons.com/icons2/550/PNG/512/business-color_business-contact-86_icon-icons.com_53469.png"
            />

            <Card
              name="John Doe"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc egestas at lectus id vestibulum. Proin condimentum auctor orci, a viverra."
              imageUrl="https://png.icons8.com/office/1600/collaborator-male.png"
            />
          </Carousel>
        </div>
      );
    }
  }
}

export default App;
