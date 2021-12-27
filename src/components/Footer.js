import React from "react";
import styled from "styled-components";
import mylogo from "../img/mylogo.png";
import { Link } from "react-router-dom";
import linkedin from "../img/linkedin.svg";
import website from "../img/mylogo.png";
import github from "../img/github.svg";
import whatsapp from "../img/whatsapp.svg";
import gmail from "../img/gmail.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLogo to="/">
        <img src={mylogo} alt="menu" />
      </FooterLogo>
      <CopyRigths>
        <p>
          &copy;{new Date().getFullYear()} |
          <span style={{ color: "rgb(255, 238, 0)" }}>MS14</span> , all rights
          reserved.
        </p>
      </CopyRigths>
      <FooterSocialMedia>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://api.whatsapp.com/send?phone=201027345533"
        >
          <img src={whatsapp} />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:muhamedsarhan14@gmail.com"
        >
          <img src={gmail} />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/muhamed-sarhan-ms14/"
        >
          <img src={linkedin} />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/Muhamed-Sarhan/"
        >
          <img src={github} />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://ms-portfolio-14.web.app/"
        >
          <img src={website} />
        </a>
      </FooterSocialMedia>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  width: 100%;
  color: white;
  position: relative;
  bottom: 0;
  min-height: 70px;
  padding: 0px 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #555;
  @media (max-width: 720px) {
    padding: 0px 10px;
    font-size: 0.7rem;
  }
`;
const FooterLogo = styled.a`
  img {
    width: 40px;
    @media (max-width: 720px) {
      width: 25px;
    }
  }
`;
const CopyRigths = styled.div`
  p {
    font-size: 1.2rem;
    font-weight: 500;
    @media (max-width: 720px) {
      font-size: 0.7rem;
    }
  }
`;
const FooterSocialMedia = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
  @media (max-width: 720px) {
    width: 35%;
  }
  img {
    width: 30px;
    @media (max-width: 720px) {
      width: 20px;
    }
  }
`;

export default Footer;
