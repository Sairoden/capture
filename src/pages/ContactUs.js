// Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim } from "../animation";
import styled from "styled-components";

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: "#fff" }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch</motion.h2>
        </Hide>
      </Title>
      <div>
        <Hide>
          <Social variants={titleAnim}>
            <Circle></Circle>
            <h2>Send us a message</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle></Circle>
            <h2>Send an email</h2>
          </Social>
        </Hide>

        <Hide>
          <Social variants={titleAnim}>
            <Circle></Circle>
            <h2>Social Media</h2>
          </Social>
        </Hide>
      </div>
    </ContactStyle>
  );
};

const ContactStyle = styled(motion.div)`
  color: #353535;
  min-height: 90vh;
  padding: 5rem 10rem;
`;

const Title = styled.div`
  color: #333;
  margin-bottom: 4rem;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  background: #353535;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
`;

const Social = styled(motion.div)`
  align-items: center;
  display: flex;

  h2 {
    margin: 2rem;
  }
`;

export default ContactUs;
