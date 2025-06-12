import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
//import project1Image from "../assets/project1.png";

const Container = styled.div`
  min-height: 100vh;
  background: #f5f8ff;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 32px;
  font-family: 'Fira Mono', monospace;
  color: #222;
  text-align: center;
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

const ProjectDesc = styled.div`
  font-size: 1rem;
  color: #333;
  white-space: pre-line;
  line-height: 1.6;

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-top: 8px;
  }

  li {
    margin-bottom: 4px;
  }

  strong {
    font-weight: 600;
    color: #222;
  }
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

const ProjectLink = styled.a`
  display: inline-block;
  margin-top: 16px;
  color: #4f8cff;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const projects = [
  {
    name: "Mad-K Website (Currently Working)",
    periodOrPersonal: "2025.06 ~ Present",
    role: "Full Stack Developer",
    short: "A website for Mad-K, a Korean Soccer team in UW-Madison",
    detail: "I am currently working on the website for Mad-K, a Korean Soccer team in UW-Madison.",
    //link: "/projects/mad-k",
    //image: project1Image,
    stacks: ["React", "TypeScript", "Styled-Components"],
  },
  {
    name: "Shop Splitter",
    periodOrPersonal: "Personal Project",
    role: "Full Stack Developer",
    short: "A Progressive Web Application that splits the cost of a shopping trip through AI",
    detail: "ShoppingSplitter is a smart expense management Progressive Web Application designed for multiple users.\n\n" +
            "<strong>Key Features:</strong>\n" +
            "<ul>" +
            "<li>Receipt scanning with Tesseract.js and OpenAI API</li>" +
            "<li>Intuitive interface built with Material-UI</li>" +
            "<li>Real-time cost splitting calculations</li>" +
            "<li>Auto category classification with OpenAI API</li>" +
            "<li>Real-time Exchange Rate API (KRW to USD) with a mini calculator</li>" +
            "<li>Language Support (English, Korean)</li>" +
            "<li>Data Visualization with Chart.js</li>" +
            "</ul>",
    link: "https://shop-splitter.vercel.app/",
    //image: "/assets/project2.png",
    stacks: ["React", "TypeScript", "Material-UI", "OCR","OpenAI API", "Data Visualization", "Workbox"],
  },
  {
    name: "Football AI Generator (KCU 25SP Project)",
    periodOrPersonal: "2025.01 ~ 2025.05",
    role: "Team Lead & Full Stack Developer",
    short: "A web application that generates the optimal football formations through Machine Learning",
    detail: "<strong>Project Overview:</strong>\n" +
            "An innovative web application that leverages machine learning to generate optimal football formations.\n\n" +
            "<strong>Key Features:</strong>\n" +
            "<ul>" +
            "<li>ML-based formation optimization with scikit-learn</li>" +
            "<li>Generates user's own stats based in FC25 data</li>" +
            "<li>Generates optimal formation with any selected 11 players</li>" +
            "<li>This projects has it's own optimal formation algorithm</li>" +
            "</ul>",
    link: "https://github.com/HelloPyunny/Football-AI-Generator",
    //image: "/assets/project3.png",
    stacks: ["React", "Python", "FastAPI", "scikit-learn", "Machine Learning", "SQLite3", "Algorithm"],
  },
  {
    name: "MESLA (KCU 24FA Project 2nd Place)",
    periodOrPersonal: "2024.09 ~ 2024.12",
    role: "2nd Place | Team Lead & Software Developer",
    short: "An autonomous vehicle with a single camera based road detection",
    detail: "<strong>Project Overview:</strong>\n" +
            "An autonomous vehicle system utilizing computer vision for road detection with a single camera setup.\n\n" +
            "<strong>Key Features:</strong>\n" +
            "<ul>" +
            "<li>Real-time road detection using OpenCV with a single camera calculating pixel values</li>" +
            "<li>Raspberry Pi-based control system</li>" +
            "<li>Integrated curvature computation algorithm with motor control system to enable real-time wheel steering based on calculated values.</li>" +
            "</ul>",
    link: "hthttps://www.youtube.com/shorts/aSJCM3PXX10",
    //image: "/assets/project4.png",
    stacks: ["Python", "OpenCV", "Computer Vision", "Raspberry Pi"],
  },
  {
    name: "EPL Predictor",
    periodOrPersonal: "Personal Project",
    role: "Frontend Developer",
    short: "A web application that predicts the outcome of the English Premier League",
    detail: "<strong>Project Overview:</strong>\n" +
            "English Premier League Analyst: Fast and accurate EPL predictions with a simple but intuitive UI.\n\n" +
            "<strong>Key Features:</strong>\n" +
            "<ul>" +
            "<li>Predict upcoming matches</li>" +
            "<li>Compare your own matchups</li>" +
            "<li>Real-time data analysis</li>" +
            "</ul>",
    link: "https://devpost.com/software/english-premier-league-analyst",
    //image: "/assets/project5.png",
    stacks: ["node.js", "Tailwind CSS", "Python", "Prisma", "Web Scraping"],
  },
  {
    name: "Keyboard Writer",
    periodOrPersonal: "Personal Project",
    role: "Full Stack Developer",
    short: "A desktop launcher app that automatically types your input text into any document, simulating human typing.",
    detail: "<strong>Project Overview:</strong>\n" +
            "Keyboard Writer is a simple yet powerful desktop tool that simulates human typing by automatically entering your text into any document window. It features a user-friendly GUI launcher for easy control of typing speed and text input." 
            + "\n(Easily bypasses detection tools that flag copy-pasted content by typing manually like a human)\n\n" +
            "<strong>Key Features:</strong>\n" +
            "<ul>" +
            "<li>Launcher-style GUI for easy use</li>" +
            "<li>Customizable typing speed (min/max delay)</li>" +
            "<li>Simulates real keyboard input using pyautogui</li>" +
            "<li>Supports multi-line text input</li>" +
            "<li>macOS ready (with Accessibility permission guidance)</li>" +
            "</ul>",
    link: "https://github.com/HelloPyunny/keyboardWriter",
    // image: "/assets/keyboardwriter.png",
    stacks: ["Python", "tkinter", "pyautogui", "shell"]
  }
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
            <ProjectPeriodAndRole>{p.role} | {p.periodOrPersonal}</ProjectPeriodAndRole>
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
              <ProjectPeriodAndRole>{selected.role} | {selected.periodOrPersonal}</ProjectPeriodAndRole>
              <ProjectDesc dangerouslySetInnerHTML={{ __html: selected.detail }} />
              <StackList>
                {selected.stacks && selected.stacks.map((stack, idx) => (
                  <StackTag key={idx}>{stack}</StackTag>
                ))}
              </StackList>
              {selected.link && (
                <ProjectLink href={selected.link} target="_blank" rel="noopener noreferrer">
                  Project Link →
                </ProjectLink>
              )}
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
              <strong>🔒 Coming soon!</strong>
            </ComingSoonContent>
          </ComingSoonModal>
        )}
      </AnimatePresence>
    </Container>
  );
} 