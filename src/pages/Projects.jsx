import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
//import project1Image from "../assets/project1.png";

const Container = styled.div`
  min-height: 100vh;
  background: #f5f8ff;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 32px;
  font-family: 'Fira Mono', monospace;
  color: #222;
`;

const CardList = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Card = styled(motion.div)`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 32px 28px;
  cursor: pointer;
  transition: box-shadow 0.2s;
  filter: ${({ blurred }) => blurred ? 'blur(6px) brightness(1.0)' : 'none'};
  position: relative;
  &:hover {
    box-shadow: 0 6px 24px rgba(79,140,255,0.13);
  }
`;

const ProjectName = styled.h3`
  font-size: 1.3rem;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProjectPeriodAndRole = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 8px;
`;

const ProjectDesc = styled.p`
  font-size: 1rem;
  color: #333;
  white-space: pre-line;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const ModalContent = styled(motion.div)`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  padding: 40px 32px;
  max-width: 1200px;
  width: 90vw;
  position: relative;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ProjectImage = styled.img`
  width: 100%;
  max-height: 320px;
  object-fit: contain;
  border-radius: 12px;
  margin-bottom: 24px;
  background: #f5f8ff;
`;

const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 16px;
`;

const StackTag = styled.div`
  background: #e3eaff;
  color: #222;
  font-size: 0.8rem;
  padding: 4px 10px;
  border-radius: 8px;
  font-family: 'Fira Mono', monospace;
  font-weight: 500;
`;

const ComingSoonModal = styled(motion.div)`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ComingSoonContent = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  padding: 40px 32px;
  min-width: 320px;
  text-align: center;
  font-size: 1.3rem;
  font-family: 'Fira Mono', monospace;
`;

const projects = [
  {
    name: "Mad-K Website (Currently Working)",
    period: "2025.06 ~ Present",
    role: "Full Stack Developer",
    short: "A website for Mad-K, a Korean Soccer team in UW-Madison",
    detail: "I am currently working on the website for Mad-K, a Korean Soccer team in UW-Madison.",
    //image: project1Image,
    stacks: ["React", "TypeScript", "Styled-Components"],
  },
  {
    name: "Shop Splitter",
    period: "2025.05 ~ 2025.07",
    role: "Full Stack Developer",
    short: "A Progressive Web Application that splits the cost of a shopping trip through AI",
    detail: "ShoppingSplitter is a smart expense management Progressive Web Application designed for multiple users,"
     + "\nfeaturing receipt scanning with Tesseract.js and OpenAI, and an intuitive interface built with Material-UI.",
    //image: "/assets/project2.png",
    stacks: ["React", "TypeScript", "OpenAI API", "Data Visualization", "Workbox"],
  },
  {
    name: "Football AI Generator",
    period: "2025.01 ~ 2025.05",
    role: "Team Lead & Full Stack Developer",
    short: "A web application that generates the optimal football formations through Machine Learning",
    detail: "Detailed description",
    //image: "/assets/project3.png",
    stacks: ["React", "Python", "FastAPI", "scikit-learn", "Machine Learning", "SQLite3"],
  },
  {
    name: "MESLA",
    period: "2024.09 ~ 2024.12",
    role: "Team Lead & Software Developer",
    short: "An autonomous vehicle with a single camera based road detection",
    detail: "Detailed description",
    //image: "/assets/project4.png",
    stacks: ["Python", "OpenCV", "Computer Vision", "Raspberry Pi"],
  },
  {
    name: "EPL Predictor",
    period: "2024 MadHack (Hackathon)",
    role: "Frontend Developer",
    short: "A web application that predicts the outcome of the English Premier League",
    detail: "Detailed description",
    //image: "/assets/project5.png",
    stacks: ["TypeScript", "React", "Python", "FastAPI", "Web Scraping"],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <Container>
      <Title>Projects</Title>
      <CardList>
        {projects.map((p, i) => (
          <Card
            key={i}
            blurred={p.name.includes("Mad-K")}
            whileHover={{ scale: 1.03, boxShadow: "0 8px 32px rgba(79,140,255,0.18)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => {
              if (p.name.includes("Mad-K")) {
                setShowComingSoon(true);
              } else {
                setSelected(p);
              }
            }}
          >
            {p.name.includes("Mad-K") && (
              <span style={{
                position: 'absolute',
                top: 16,
                left: 16,
                fontSize: '1.5rem',
                zIndex: 2
              }}></span>
            )}
            <ProjectName>{p.name}</ProjectName>
            <ProjectPeriodAndRole>{p.role} | {p.period}</ProjectPeriodAndRole>
            <ProjectDesc>{p.short}</ProjectDesc>
            <StackList>
              {p.stacks && p.stacks.map((stack, idx) => (
                <StackTag key={idx}>{stack}</StackTag>
              ))}
            </StackList>
          </Card>
        ))}
      </CardList>

      <AnimatePresence>
        {selected && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <CloseBtn onClick={() => setSelected(null)}>&times;</CloseBtn>
              {selected.image && <ProjectImage src={selected.image} alt={selected.name} />}
              <ProjectName>{selected.name}</ProjectName>
              <ProjectPeriodAndRole>{selected.role} | {selected.period}</ProjectPeriodAndRole>
              <ProjectDesc>{selected.detail}</ProjectDesc>
              <StackList>
                {selected.stacks && selected.stacks.map((stack, idx) => (
                  <StackTag key={idx}>{stack}</StackTag>
                ))}
              </StackList>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showComingSoon && (
          <ComingSoonModal
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowComingSoon(false)}
          >
            <ComingSoonContent>
              Coming soon!
            </ComingSoonContent>
          </ComingSoonModal>
        )}
      </AnimatePresence>
    </Container>
  );
} 