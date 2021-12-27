import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { ProjectState } from "../projectState";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import link from "../img/link.svg";
import flash from "../img/flash.svg";

const MovieDetail = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects, setProjects] = useState(ProjectState);
  const [project, setProject] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentProject = projects.filter(
      (stateProject) => stateProject.url === url
    );
    setProject(currentProject[0]);
    console.log(setProjects);
  }, [projects, url]);

  return (
    <>
      {project && (
        <Details
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
          <HeadLine>
            <a target="_blank" rel="noreferrer noopener" href={project.link}>
              <h2>{project.title}</h2>
            </a>
            <a target="_blank" rel="noreferrer noopener" href={project.link}>
              <ImgLayer>
                <img src={project.mainImg} alt="project" />
                <Layer>
                  <img src={link} />
                </Layer>
              </ImgLayer>
            </a>
          </HeadLine>
          <Awards>
            <AwardStyle>
              <h3>About this Project</h3>
              <div className="line"></div>
              <p>{project.about}</p>
            </AwardStyle>
            <AwardStyle>
              <h3>Project Tools</h3>
              <div className="line"></div>
              <div className="imgTools">
                {project.imgs.map((i) => (
                  <img src={i} />
                ))}
              </div>
            </AwardStyle>
            <AwardStyle>
              <h3>Project Goals</h3>
              <div className="line"></div>
              <div className="goalsPoints">
                {project.goals.map((g) => (
                  <span className="oneGoal">
                    <img src={flash} />
                    {g}
                  </span>
                ))}
              </div>
            </AwardStyle>
          </Awards>
          <a target="_blank" rel="noreferrer noopener" href={project.link}>
            <ImageDisplay>
              <ImgLayer>
                <img src={project.secondaryImg} alt="project" />
                <Layer>
                  <img className="linkImg" src={link} />
                </Layer>
              </ImgLayer>
            </ImageDisplay>
          </a>
        </Details>
      )}
    </>
  );
};

const Details = styled(motion.div)`
  color: white;
`;
const HeadLine = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  a {
    text-decoration: none;
    color: #fff;
  }
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
    font-size: 3rem;
    &:hover {
      color: #fff600;
      cursor: pointer;
    }
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
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
  img {
    width: 50px;
    height: 50px;
  }
`;

const ImgLayer = styled.div`
  overflow: hidden;
  position: relative;
  &:hover ${Layer} {
    opacity: 1;
    cursor: pointer;
  }
  &:focus ${Layer} {
    opacity: 1;
  }
`;
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`;
const AwardStyle = styled.div`
  padding: 5rem;
  @media (max-width: 720px) {
    padding: 5rem 2rem;
  }
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #fff600;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
  .imgTools {
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;
  }
  img {
    width: 50px;
    height: 50px;
    margin: 10px 20px;
    @media (max-width: 720px) {
      width: 40px;
      height: 40px;
    }
  }
  .goalsPoints {
    margin-top: 2rem;
  }
  .oneGoal {
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #fff;
    img {
      width: 25px;
      height: 25px;
    }
  }
`;
const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  .linkImg {
    width: 50px;
    height: 50px;
  }
`;

export default MovieDetail;
