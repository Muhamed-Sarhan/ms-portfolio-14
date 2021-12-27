import styled from "styled-components";
import { motion } from "framer-motion";

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
    text-align: center;
    flex-direction: column-reverse;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 5;
  h2 {
    font-weight: lighter;
  }

  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;
export const Image = styled.div`
  height: 75vh;
  max-width: 30vw;
  z-index: 2;
  flex: 1;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    border: 5px solid #fff600;
  }
  @media (max-width: 700px) {
    height: 60vh;
    max-width: 100vw;
    margin-bottom: 2rem;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;

export const DecDetails = styled.div`
  margin: 2rem 0;
`;

export const BtnGroup = styled.div`
  width: 65%;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 700px) {
    width: 95%;
    margin: auto;
  }
`;
