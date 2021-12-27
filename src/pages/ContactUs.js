import React from "react";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";
import js from "../img/javascript1.svg";
import facebook from "../img/facebook.svg";
import linkedin from "../img/linkedin.svg";
import website from "../img/mylogo.png";
import github from "../img/github1.svg";
import instgram from "../img/instagram.svg";
import twitter from "../img/twitter.svg";
import whatsapp from "../img/whatsapp.svg";
import gmail from "../img/gmail.svg";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <div>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
          </Hide>
        </Title>

        <Hide>
          <Social
            variants={titleAnim}
            target="_blank"
            rel="noreferrer noopener"
            href="https://api.whatsapp.com/send?phone=201027345533"
          >
            <ImgBadge src={whatsapp} alt="w" />
            <h2>/Muhamed-Sarhan</h2>
          </Social>
        </Hide>
        <Hide>
          <Social
            variants={titleAnim}
            target="_blank"
            rel="noreferrer noopener"
            href="mailto:muhamedsarhan14@gmail.com"
          >
            <ImgBadge src={gmail} alt="g" />
            <h2>/Muhamed-Sarhan</h2>
          </Social>
        </Hide>
        <Hide>
          <Social
            variants={titleAnim}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.linkedin.com/in/muhamed-sarhan-ms14/"
          >
            <ImgBadge src={linkedin} alt="l" />
            <h2>/Muhamed-Sarhan</h2>
          </Social>
        </Hide>
        <Hide>
          <Social
            variants={titleAnim}
            target="_blank"
            rel="noreferrer noopener"
            href="https://ms14.netlify.app/"
          >
            <ImgBadge src={website} alt="g" />
            <h2>/Muhamed-Sarhan</h2>
          </Social>
        </Hide>
        <Hide>
          <Social
            variants={titleAnim}
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/Muhamed-Sarhan"
          >
            <ImgBadge src={github} alt="g" />
            <h2>/Muhamed-Sarhan</h2>
          </Social>
        </Hide>
        <Hide>
          <Social
            variants={titleAnim}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/muhamd.sarhan.14"
          >
            <ImgBadge src={facebook} alt="g" />
            <h2>/Muhamed-Sarhan</h2>
          </Social>
        </Hide>
        <Hide>
          <Social
            variants={titleAnim}
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.instagram.com/muhmd_sarhan_14/"
          >
            <ImgBadge src={instgram} alt="g" />
            <h2>/Muhamed-Sarhan</h2>
          </Social>
        </Hide>
        <Hide>
          <Social
            variants={titleAnim}
            target="_blank"
            rel="noreferrer noopener"
            href="https://twitter.com/muhmd_sarhan_14"
          >
            <ImgBadge src={twitter} alt="g" />
            <h2>/Muhamed-Sarhan</h2>
          </Social>
        </Hide>
      </div>
      <ContactImg>
        <img src={js} />
      </ContactImg>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 3rem 10rem;
  color: #353535;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    padding: 1rem;
    font-size: 1rem;
  }
  @media (max-width: 700px) {
    flex-direction: column;
    justify-content: center;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 1rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;
const ImgBadge = styled.img`
  width: 35px;
  margin-right: 25px;
`;
const Social = styled(motion.a)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #353535;
  h2 {
    margin: 2rem;
    font-size: 2.5rem;
    font-weight: 200;
    @media (max-width: 700px) {
      margin-top: 1rem;
      font-size: 1.5rem;
    }
  }
`;

const ContactImg = styled.div`
  img {
    width: 600px;
    @media (max-width: 700px) {
      width: 300px;
    }
  }
`;

export default ContactUs;
