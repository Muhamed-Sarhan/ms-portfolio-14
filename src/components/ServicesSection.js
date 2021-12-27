import React from "react";
//Import Icons
import html from "../img/html.svg";
import css from "../img/css31.svg";
import js from "../img/javascript.svg";
import react from "../img/react.svg";
import home2 from "../img/home3.jpg";
//Styles
import { About, Description, Image } from "../styles";
import styled from "styled-components";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

const ServicesSection = () => {
  const [element, controls] = useScroll();
  return (
    <Services
      variants={scrollReveal}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <Description>
        <h2>
          High <span>quality</span> skills
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img alt="icon" src={html} />
              <h3>Mark up Languages & CMS</h3>
            </div>
            <p>Html and WordPress</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={css} />
              <h3>Styles</h3>
            </div>
            <p>Css , Styled Component and Sass.</p>
          </Card>
          <Card>
            <div
              className="icon"
              style={{ fontSize: "0.8rem", fontWeight: "900" }}
            >
              <img alt="icon" src={js} />
              <h3>Programing Languages & Libraries</h3>
            </div>
            <p>JavaScript , Bootstrap and jQuery</p>
          </Card>
          <Card>
            <div className="icon">
              <img alt="icon" src={react} />
              <h3>FrameWorks</h3>
            </div>
            <p>React , Redux and Angular.</p>
          </Card>
        </Cards>
      </Description>
      <Image>
        <img alt="camera" src={home2} />
      </Image>
    </Services>
  );
};

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    margin: auto;
    text-align: center;
  }
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const Card = styled.div`
  width: 50%;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    h3 {
      background: white;
      color: black;
      padding: 1rem;
      width: 70%;
      margin-top: 1rem;
      text-align: center;
      @media (max-width: 700px) {
        padding: 0.5rem;
        width: 90%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export default ServicesSection;
