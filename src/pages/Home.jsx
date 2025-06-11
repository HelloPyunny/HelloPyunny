import styled from "styled-components";
import { FaInstagram, FaLinkedin, FaEnvelope, FaGithub } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';

const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f5f8ff;
`;

const PrintText = styled.div`
  font-family: 'Fira Mono', monospace;
  font-size: 3.5rem;
  margin-bottom: 5rem;
  color: #222;
  min-height: 4.2rem;
`;

const SubText = styled.p`
  font-family: 'Fira Mono', monospace;
  font-size: 1.3rem;
  margin-bottom: 5rem;
  color: #444;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 48px;
  flex-wrap: wrap;
  justify-content: center;
`;

const NavButton = styled.a`
  font-size: 1.3rem;
  font-weight: 600;
  color: #222;
  text-decoration: none;
  padding: 8px 18px;
  border-radius: 8px;
  transition: background 0.2s;
  &:hover {
    background: #e3eaff;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.1rem;
  margin-top: 5rem;
`;

const IconLink = styled.a`
  color: #222;
  font-size: 1.5rem;
  margin-left: 6px;
  &:hover {
    color: #4f8cff;
  }
`;

export default function Home() {
  return (
    <Container>
      <PrintText>
        <TypeAnimation
          sequence={[
            'print("Hello world")',
            2000,
            'print("Hello Pyunny")',
            2000,
          ]}
          wrapper="span"
          speed={0.05}
          style={{ display: 'inline-block' }}
          cursor={true}
        />
      </PrintText>
      <SubText>Welcome to my personal website</SubText>
      <NavLinks>
        <NavButton href="/education">Education</NavButton>
        <NavButton href="/interests">Interests</NavButton>
        <NavButton href="/projects">Projects</NavButton>
        <NavButton href="/experience">Experience</NavButton>
        <NavButton href="/skills">Skills</NavButton>
        <NavButton href="/playground">Playground</NavButton>
      </NavLinks>
      <SocialLinks>
        <IconLink href="https://www.instagram.com/haeseung_pyun/" target="_blank" rel="noopener noreferrer"><FaInstagram /></IconLink>
        <IconLink href="https://www.linkedin.com/in/hae-seung-pyun/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></IconLink>
        <IconLink href="https://github.com/HelloPyunny" target="_blank" rel="noopener noreferrer"><FaGithub /></IconLink>
        <IconLink href="mailto:pyunhs0121@gmail.com"><FaEnvelope /></IconLink>
      </SocialLinks>
    </Container>
  );
} 