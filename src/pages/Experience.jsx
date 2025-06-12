import styled from "styled-components";
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import uwoLogo from "../assets/uwo.png";
import uwmadisonLogo from "../assets/uwmadisonLogo.png";
import sailLogo from "../assets/SailLogo.png";
import rokaLogo from "../assets/rokaLogo.svg";

const Container = styled.div`
  min-height: 100vh;
  background: #f5f8ff;
  padding: 48px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentWrapper = styled.div`  
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
  box-sizing: border-box; 
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 32px;
  font-family: 'Fira Mono', monospace;
  color: #222;
  text-align: center;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Card = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  padding: 32px 28px;
  display: flex;
  gap: 24px;
  align-items: flex-start;
  position: relative;
`;

const Logo = styled.div`
  width: 64px;
  height: 64px;
  border-radius: 16px;
  background: #e3eaff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  flex-shrink: 0;
`;

const LogoImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: contain;   
  border-radius: 12px;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
`;

const Info = styled.div`
  flex: 1;
`;

const Position = styled.div`
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const Company = styled.div`
  font-size: 1.1rem;
  color: #4f8cff;
  font-weight: 600;
  margin-bottom: 2px;
`;

const Period = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2px;
`;

const Location = styled.div`
  font-size: 1rem;
  color: #888;
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 8px;
`;

const Desc = styled.div`
  font-size: 1rem;
  color: #333;
  margin-bottom: 24px;
`;

const Skills = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const SkillTag = styled.div`
  background: #e3eaff;
  color: #222;
  font-size: 0.9rem;
  padding: 4px 12px;
  border-radius: 8px;
  font-family: 'Fira Mono', monospace;
  font-weight: 500;
`;

const experiences = [
  {
    logo: sailLogo,
    position: "Incoming Intern",
    company: "Wisconsin Summer of AI Laboratory (SAIL)",
    period: "2025.06 ~ 2025.08",
    location: "Madison, WI",
    //desc: "<ul>" + 
            //"<li>...</li>" +
            //"<li>...</li>" +
          //"</ul>",
    skills: ["AI"]
  },
  {
    logo: uwoLogo,
    position: "Math Tutor",
    company: "University of Wisconsin-Oshkosh",
    period: "2022.09 ~ 2023.05",
    location: "Oshkosh, WI",
    desc: "<ul>" + 
            "<li>Tutored students in math.</li>" +
            "<li>Helped students understand and solve math problems.</li>" +
            "</ul>",
    skills: ["Math","Tutoring", "Leadership", "Communication", "Teamwork", "Problem Solving", "Time Management"]
  },
  {
    logo: uwoLogo,
    position: "Accounting Tutor",
    company: "University of Wisconsin-Oshkosh",
    period: "2023.01 ~ 2023.05",
    location: "Oshkosh, WI",
    desc: "<ul>" + 
            "<li>Tutored students in accounting.</li>" +
            "<li>Helped students understand and solve accounting problems.</li>" +
            "</ul>",
    skills: ["Accounting","Tutoring", "Leadership", "Communication", "Teamwork", "Problem Solving", "Time Management"]
  },

  {
    logo: rokaLogo,
    position: "Sergeant Squad Leader, South Sea Coast Guard",
    company: "Republic of Korea Army",
    period: "2020.04 ~ 2021.10",
    location: "Yeosu, South Korea",
    desc: "<ul>" + 
            "<li>Served as a Sergeant Squad Leader in the South Sea Coast Guard.</li>" +
            "<li>Successfully commanded and managed the squad after completing the 10 days of leadership training.</li>" +
            "</ul>",
    skills: ["Leadership", "Communication", "Teamwork", "Problem Solving", "Time Management", "Adaptability"]
  },
];

export default function Experience() {
  return (
    <Container>
      <ContentWrapper>
        <Title>Professional Experience</Title>
        <CardList>
          {experiences.map((exp, idx) => (
            <Card key={idx}>
              <LogoImg src={exp.logo} alt={exp.company} />
              <Info>
                <Position>{exp.position}</Position>
                <Company>{exp.company}</Company>
                <Period>{exp.period}</Period>
                <Location><FaMapMarkerAlt style={{marginRight: 4}} />{exp.location}</Location>
                <Desc dangerouslySetInnerHTML={{ __html: exp.desc }} />
                <Skills>
                  {exp.skills.map((skill, i) => (
                    <SkillTag key={i}>{skill}</SkillTag>
                  ))}
                </Skills>
              </Info>
            </Card>
          ))}
        </CardList>
      </ContentWrapper>
    </Container>
  );
}