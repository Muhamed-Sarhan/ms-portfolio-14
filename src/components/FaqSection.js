import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "./useScroll";
import { scrollReveal } from "../animation";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Faq
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
    >
      <h2>
        My Work <span>Experience</span>
      </h2>
      <AnimateSharedLayout>
        <Toggle title="Sep  2015 - Aug  2019">
          <div className="answer">
            <p>Menofia University</p>
            <span>(Computer Science)</span>
            <p>Bachelor's degree from Faculity of Computers and Information</p>
          </div>
        </Toggle>
        <Toggle title="Jul  2015 - Nov  2015">
          <div className="answer">
            <p>Engineers Syndicate</p>
            <span>(CCNA)</span>
            <p>a CCNA full course from Engineers Syndicate in Tanta</p>
          </div>
        </Toggle>
        <Toggle title="Oct  2018 - Mar  2019">
          <div className="answer">
            <p>Route Academy</p>
            <span>(Full Stack Web Development Diploma)</span>
            <p>
              a Full Stack Web Development Diploma from Route Academy in Cairo .
              we studied there Html , Css , Bootstrap , Javascript , jQuery ,
              Angular , WordPress , Php and Laravel
            </p>
          </div>
        </Toggle>
        <Toggle title="Jan  2020 - Jul  2020">
          <div className="answer">
            <p>Internship in Inovation Inc</p>
            <span>(Front-End Web Developer)</span>
            <p>
              Worked in the development in a great Ecommerce website as a
              front-end web developer (angular).
              <br /> Worked closely with the back-end team to produce a
              consistent website.
              <br /> worked closely with my team through gitlab.
            </p>
          </div>
        </Toggle>
        <Toggle title="Oct  2020 - Jan  2021">
          <div className="answer">
            <p>ITI</p>
            <span>(Mahara Tech React Course)</span>
            <p>a full react course from Mahara Tech with ITI.</p>
          </div>
        </Toggle>
        <Toggle title="Dec  2020 - Jul  2021">
          <div className="answer">
            <p>Udacity Nanodegree</p>
            <span>(React Nanodegree)</span>
            <p>a full react Nanodegree course from Udacity.</p>
          </div>
        </Toggle>
        <Toggle title="Dec  2020 - Apr  2021">
          <div className="answer">
            <p>Travolic</p>
            <span>(Front-end React Web Developer)</span>
            <p>
              Worked with the front end team in a huge project in Travolic
              company as a React developer.
              <br /> Attended a lot of daily stand-up meetings to receive tasks
              and instruction for weekly goals.
            </p>
          </div>
        </Toggle>
        <Toggle title="Jul  2021 - Aug  2021">
          <div className="answer">
            <p>NasNav</p>
            <span>(Front-end React Web Developer)</span>
            <p>
              Worked with a team in a big Ecommerce website as a front-end web
              developer (react).
            </p>
          </div>
        </Toggle>
      </AnimateSharedLayout>
    </Faq>
  );
};

const Faq = styled(About)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 2rem 0rem 2rem;
    p {
      padding: 1rem 0rem;
    }
    span {
      font-size: 1.5rem;
    }
  }
`;

export default FaqSection;
