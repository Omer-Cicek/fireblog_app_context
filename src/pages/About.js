// imports for styling
import coding from '../assets/coding.svg';
import { styled, Box } from '@mui/material';

const AboutStyledBox = styled(Box)`
  background-color: #e0d8b0;
  min-height: 93vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .aboutInfo {
    border: 5px solid white;
    border-radius: 15px;
    width: 80%;
    text-align: right;
    padding: 20px;
  }

  .italicName {
    font-family: 'Pacifico', cursive;
    color: white;
    font-size: 2.3rem;
  }
`;

//component
const About = () => {
  return (
    <AboutStyledBox>
      {/* image */}
      <img src={coding} alt="" />
      {/* title */}
      <h3>
        About Fullstack Web Developer
        <span className="italicName"> Omer Faruk</span>
      </h3>
      {/* about info */}
      <div className="aboutInfo">
        <h3>I'm Omer</h3>
        <h3>I'm currently learning Full-Stack Development Languages</h3>
        <h3>
          I've already known HTML, CSS, Javascript, ReactJS and some of their
          libraries.
        </h3>
        {/* linkedin info */}
        <h3>
          <span>Send message: </span>
          <a
            href="https://www.linkedin.com/in/omercicek97/"
            target={'_blank'}
            rel="noreferrer"
          >
            LinkedIn Account
          </a>
        </h3>
      </div>
    </AboutStyledBox>
  );
};

export default About;
