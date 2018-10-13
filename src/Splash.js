import React from 'react';
import ReactLoading from "react-loading";
import styled from "tachyons-components";

const Section = styled("div")`
flex flex-wrap content-center justify-center w-100 h-100 bg-blue`;

const Title = styled("h1")`
f4 f3-ns white w-100 tc`;

const Splash = () => {
    return (
        <Section>
          <Title>
            This splash screen will disappear after three (3) seconds...
          </Title>
          <ReactLoading type="bars" color="#fff" />
        </Section>
    );
}

export default Splash;