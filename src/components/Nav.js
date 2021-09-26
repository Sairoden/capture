import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">1. About Us</Link>
        </li>
        <li>
          <Link to="/work">2. Our Work</Link>
        </li>
        <li>
          <Link to="/contact">3. Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.div`
  align-items: center;
  background: #282828;
  display: flex;
  justify-content: space-between;
  margin: auto;
  min-height: 10vh;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 999;

  a {
    color: #fff;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;

    li {
      padding-left: 10rem;
      position: relative;
    }
  }

  @media (max-width: 1300px) {
    flex-direction: column;
    padding: 2rem 1rem;

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100%;

      li {
        padding: 0rem;
      }
    }

    #logo {
      display: inline-block;
      margin: 2rem;
    }
  }

  #logo {
    font-family: "Lobster", cursive;
    font-size: 1.5rem;
    font-weight: lighter;
  }
`;

export default Nav;
