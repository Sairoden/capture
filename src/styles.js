import styled from "styled-components";
import { motion } from "framer-motion";

//  Styled Components
export const About = styled(motion.div)`
  align-items: center;
  color: #fff;
  display: flex;
  justify-content: space-between;
  min-height: 90vh;
  padding: 5rem 10rem;

  @media (max-width: 1300px) {
    display: block;
    padding: 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

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
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    height: 80vh;
    object-fit: cover;
    width: 100%;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
