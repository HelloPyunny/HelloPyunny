import styled from "styled-components";

const Container = styled.div`
  min-height: 100vh;
  background: #f5f8ff;
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 0 20px;
  box-sizing: border-box;
`;

const CardsRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  width: 100%;
  margin-bottom: 40px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

const Section = styled.section`
  flex: 1;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  padding: 32px 28px;
  box-sizing: border-box;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 18px;
  font-family: "Fira Mono", monospace;
  color: #222;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

const SkillItem = styled.div`
  background: #e3eaff;
  color: #222;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SkillLevel = styled.div`
  width: 60px;
  height: 6px;
  background: #d1d1d1;
  border-radius: 3px;
  overflow: hidden;
`;

const SkillLevelFill = styled.div`
  height: 100%;
  background: #4f8cff;
  width: ${props => props.level}%;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 24px 0 12px;
  color: #333;
`;

export default function Skills() {
  const technicalSkills = {
    "Programming Languages": [
      { name: "Python", level: 90 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "C", level: 65 },
      { name: "R", level: 60 },
    ],
    "Web Development": [
      { name: "React", level: 85 },
      { name: "Node.js", level: 80 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 75 },
      { name: "Flask", level: 75 },
      { name: "FastAPI", level: 75 },
    ],
    "Libraries": [
      { name: "OpenCV", level: 80 },
      { name: "scikit-learn", level: 80 },
      { name: "PyTorch", level: 70 },
      { name: "TensorFlow", level: 70 },
      { name: "Matlab", level: 75 },
      { name: "Pandas", level: 75 },
      { name: "NumPy", level: 75 },
      { name: "SciPy", level: 75 },
    ],
    "Database": [
      { name: "SQL", level: 75 },
      { name: "SQLite3", level: 70 },
    ],
    "DevOps & Tools": [
      { name: "Git", level: 85 },
      { name: "Linux", level: 75 },
      { name: "Docker", level: 70 },
      { name: "AWS", level: 60 },
    ],
  };

  const softSkills = {
    "Language": [
      { name: "Korean", level: 100 },
      { name: "English", level: 90 },
    ],
    "Communication": [
      { name: "Team Leadership", level: 95 },
      { name: "Presentation", level: 90 },
    ],
    "Problem Solving": [
      { name: "Critical Thinking", level: 90 },
      { name: "Algorithm Design", level: 85 },
      { name: "Debugging", level: 85 },
      { name: "Data Analysis", level: 80 },
      { name: "Data Visualization", level: 80 },
      { name: "Data Cleaning", level: 80 },
    ],
    "Project Management": [
      { name: "Agile Methodology", level: 80 },
      { name: "Time Management", level: 95 },
      { name: "Task Prioritization", level: 85 },
      { name: "Project Planning", level: 90 },
    ],
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Skills</Title>
        <CardsRow>
          <Section>
            <Title>Technical Skills</Title>
            {Object.entries(technicalSkills).map(([category, skills]) => (
              <div key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <SkillList>
                  {skills.map((skill, index) => (
                    <SkillItem key={index}>
                      {skill.name}
                      <SkillLevel>
                        <SkillLevelFill level={skill.level} />
                      </SkillLevel>
                    </SkillItem>
                  ))}
                </SkillList>
              </div>
            ))}
          </Section>

          <Section>
            <Title>Soft Skills</Title>
            {Object.entries(softSkills).map(([category, skills]) => (
              <div key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <SkillList>
                  {skills.map((skill, index) => (
                    <SkillItem key={index}>
                      {skill.name}
                      <SkillLevel>
                        <SkillLevelFill level={skill.level} />
                      </SkillLevel>
                    </SkillItem>
                  ))}
                </SkillList>
              </div>
            ))}
          </Section>
        </CardsRow>
      </ContentWrapper>
    </Container>
  );
} 