import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Images
import movie from "../img/movie-app1.jpg";
import watch from "../img/watch3.jpg";
import friends from "../img/friends3.jpg";
import quiz from "../img/quiz12.jpg";
import toDo from "../img/to-do8.jpg";
import gallary from "../img/gallery2.jpg";
import travolic from "../img/travolic1.jpg";
import qatar from "../img/qatar.jpg";
import portfolio from "../img/portfolio3.jpg";
import covid from "../img/covid1.jpg";
import breakingBad from "../img/breaking-bad.jpg";
import link from "../img/link.svg";
import about from "../img/about1.svg";
//Animations
import { motion } from "framer-motion";
import {
  sliderContainer,
  slider,
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
} from "../animation";
import { useScroll } from "../components/useScroll";
import ScrollTop from "../components/ScrollTop";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  const [element3, controls3] = useScroll();
  const [element4, controls4] = useScroll();
  const [element5, controls5] = useScroll();
  const [element6, controls6] = useScroll();
  const [element7, controls7] = useScroll();
  const [element8, controls8] = useScroll();
  const [element9, controls9] = useScroll();
  const [element10, controls10] = useScroll();
  return (
    <Work
      style={{ background: "#fff" }}
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Project>
        <motion.h2 variants={fade}>MS14 ENTERTAINMENT</motion.h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <motion.img variants={photoAnim} src={movie} alt="athlete" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://ms14-entertainment.web.app/"
              >
                <img src={link} />
              </a>
              <Link to="/work/ms14-entertainment">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element}
        variants={fade}
        animate={controls}
        initial="hidden"
      >
        <h2>Watches E-commerce Store</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={watch} alt="watches" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://ms14-e-commerce.web.app/"
              >
                <img src={link} />
              </a>
              <Link to="/work/watches-store">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element2}
        variants={fade}
        animate={controls2}
        initial="hidden"
      >
        <h2>Friends Store</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={friends} alt="friends" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://friends-store-14.web.app/"
              >
                <img src={link} />
              </a>
              <Link to="/work/friends-store">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element3}
        variants={fade}
        animate={controls3}
        initial="hidden"
      >
        <h2>Quiz App</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={quiz} alt="quiz" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://ms14-quiz-app.web.app/"
              >
                <img src={link} />
              </a>
              <Link to="/work/quiz-app">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element4}
        variants={fade}
        animate={controls4}
        initial="hidden"
      >
        <h2>To-Do List App</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={toDo} alt="to-do" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://ms14-to-do-app.web.app/"
              >
                <img src={link} />
              </a>
              <Link to="/work/to-do-app">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element5}
        variants={fade}
        animate={controls5}
        initial="hidden"
      >
        <h2>MS14 Gallery</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={gallary} alt="gallery" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://ms-14-gallery.web.app/"
              >
                <img src={link} />
              </a>
              <Link to="/work/gallery-app">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element6}
        variants={fade}
        animate={controls6}
        initial="hidden"
      >
        <h2>Covid-19 App</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={covid} alt="covid" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://covid-19-e1d6d.web.app/"
              >
                <img src={link} />
              </a>
              <Link to="/work/covid-19-app">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element7}
        variants={fade}
        animate={controls7}
        initial="hidden"
      >
        <h2>Breaking-Bad App</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={breakingBad} alt="breaking-bad" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://breaking-bad-ms14-app.herokuapp.com/"
              >
                <img src={link} />
              </a>
              <Link to="/work/breaking-bad-app">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element8}
        variants={fade}
        animate={controls8}
        initial="hidden"
      >
        <h2>Travolic</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={travolic} alt="travolic" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://travolic.com/"
              >
                <img src={link} />
              </a>
              <Link to="/work/travolic-app">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element9}
        variants={fade}
        animate={controls9}
        initial="hidden"
      >
        <h2>Fifa World Cup Qatar 2022</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={qatar} alt="goodtimes" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://who-will-win-2022.netlify.app/"
              >
                <img src={link} />
              </a>
              <Link to="/work/fifa-world-cup-app">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <Project
        ref={element10}
        variants={fade}
        animate={controls10}
        initial="hidden"
      >
        <h2>MS14 Old Portfolio</h2>
        <motion.div variants={lineAnim} className="line"></motion.div>

        <Hide>
          <img src={portfolio} alt="goodtimes" />
          <Layer>
            <ImgContainer>
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://ms14.netlify.app/"
              >
                <img src={link} />
              </a>
              <Link to="/work/ms14-old-portfolio">
                <img src={about} style={{ marginLeft: "20px" }} />
              </Link>
            </ImgContainer>
          </Layer>
        </Hide>
      </Project>

      <ScrollTop />
    </Work>
  );
};

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }

  h2 {
    padding: 1rem 0rem;
  }
`;
const Project = styled(motion.div)`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #ffe600;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
  a {
    position: relative;
  }
`;

const Layer = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  overflow: hidden;
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    @media (max-width: 720px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const Hide = styled.div`
  overflow: hidden;
  position: relative;
  &:hover ${Layer} {
    opacity: 1;
  }
  &:focus ${Layer} {
    opacity: 1;
  }
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
const Frame4 = styled(Frame1)`
  background: #8effa0;
`;

export default OurWork;
