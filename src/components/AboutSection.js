import React from "react";
import home1 from "../img/portfolio.png";
import phone from "../img/phone.svg";
import pdf from "../img/download.svg";
import resume from "../img/Muhamed-Sarhan-Cv.pdf";
import {
  About,
  Description,
  Image,
  Hide,
  DecDetails,
  BtnGroup,
} from "../styles";
//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Hello .. I am</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>Muhamed Sarhan</span>
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h4 variants={titleAnim}>
              ( a front-end react web developer )
            </motion.h4>
          </Hide>
        </motion.div>
        <DecDetails>
          <motion.p variants={fade}>
            <strong>I am </strong>a passionate Front-End Web Developer having an
            experience of building Web applications with JavaScript , Reactjs ,
            and some other cool libraries and frameworks.
          </motion.p>
          <motion.p variants={fade}>
            <strong>I love </strong>exploring new technologies and being a
            practitioner .Also I am eager to learn and I have the passion to
            face new challenges . I am a committed team player , self motivated
            and have the ability to communicate with all levels.
          </motion.p>
        </DecDetails>
        <BtnGroup>
          <motion.button variants={fade}>
            <a
              href="https://api.whatsapp.com/send?phone=201027345533"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={phone} width={20} style={{ marginRight: "10px" }} />
              Contact Me
            </a>
          </motion.button>
          <motion.button variants={fade}>
            <a href={resume} download>
              <img src={pdf} width={20} style={{ marginRight: "10px" }} />
              My Resume
            </a>
          </motion.button>
        </BtnGroup>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="muhamed sarhan" />
      </Image>
      <Wave />
    </About>
  );
};

//Styled Components

export default AboutSection;
