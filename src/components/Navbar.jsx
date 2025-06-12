import { Link } from "react-router-dom";
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background: #f5f8ff;
  font-family: 'Fira Mono', monospace;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
`;

const Contact = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default function Navbar() {
  return (
    <Nav>
      <NavLinks>
        <Link to="/">Home</Link>
        <Link to="/education">Education</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/interests">Interests</Link>
        <Link to="/travel">Travel</Link>
        <Link to="/playground">Playground</Link>
      </NavLinks>
      <Contact>
        <a href="https://www.instagram.com/haeseung_pyun/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/hae-seung-pyun/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/HelloPyunny" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="mailto:pyunhs0121@gmail.com"><FaEnvelope /></a>
      </Contact>
    </Nav>
  );
}
