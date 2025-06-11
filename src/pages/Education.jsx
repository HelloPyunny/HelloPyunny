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
  display: flex;
  gap: 32px;
  width: 100%;
  margin-bottom: 40px;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    flex-direction: column;
    gap: 0;
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
`;

const Item = styled.div`
  margin-bottom: 18px;
`;

const ItemTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ItemSub = styled.div`
  font-size: 1rem;
  color: #666;
  margin-bottom: 2px;
`;

const ItemDesc = styled.p`
  font-size: 1rem;
  color: #333;
  margin-top: 0.5rem;
`;

const CourseworkSection = styled.section`
  width: 100%;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);
  padding: 32px 28px;
  box-sizing: border-box;
`;

const CourseworkContainer = styled.div`
  display: flex;
  gap: 40px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const CourseworkColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ColumnTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 12px;
`;

const CourseworkList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  list-style: none;
  padding: 0;
`;

const CourseworkItem = styled.li`
  background: #e3eaff;
  color: #222;
  border-radius: 8px;
  padding: 6px 14px;
  font-size: 1rem;
`;

export default function Education() {
  return (
    <Container>
      <ContentWrapper>
        <CardsRow>
          <Section>
            <Title>Education</Title>
            <Item>
              <ItemTitle>University of Wisconsin-Madison</ItemTitle>
              <ItemSub>2023.09 ~ 2026.05 (Expected) | Bachelor's Degree</ItemSub>
              <ItemDesc>B.S. in Computer Science, Certificate in Statistics</ItemDesc>
            </Item>
            <Item>
              <ItemTitle>University of Wisconsin-Oshkosh</ItemTitle>
              <ItemSub>2022.01 ~ 2023.05 | Transferred</ItemSub>
            </Item>
          </Section>

          <Section>
            <Title>Extracurricular Activities</Title>
            <Item>
              <ItemTitle>KUSA (Korean Undergraduate Student Association)</ItemTitle>
              <ItemSub>2025.01 ~ Present | Operation Board Member</ItemSub>
              <ItemDesc>Led the planning and executing large-scale cultural, social, and networking events, fostering a strong
              sense of community among Korean students.</ItemDesc>
            </Item>
            <Item>
              <ItemTitle>KCU (Korean Undergraduate Computer Science Union)</ItemTitle>
              <ItemSub>2024.09 ~ Present | Team Project Leader</ItemSub>
              <ItemDesc>Participated as a team leader of 4 students for two semesters and led the team to win the 2nd place in 2024 Fall semester.</ItemDesc>
            </Item>
          </Section>
        </CardsRow>

        <CourseworkSection>
          <Title>Relevant Coursework</Title>
          <CourseworkContainer>
            <CourseworkColumn>
              <ColumnTitle>Courses Taken</ColumnTitle>
              <CourseworkList>
                <CourseworkItem>CS 577 | Algorithms</CourseworkItem>
                <CourseworkItem>CS 540 | Artificial Intelligence</CourseworkItem>
                <CourseworkItem>STAT 451 | Statistical Methods in Machine Learning</CourseworkItem>
                <CourseworkItem>STAT 333 | Applied Regression Analysis</CourseworkItem>
                <CourseworkItem>MATH 340 | Linear Algebra</CourseworkItem>
                <CourseworkItem>MATH 234 | Multi-Variable Calculus</CourseworkItem>
                <CourseworkItem>MATH 240 | Discrete Math</CourseworkItem>
              </CourseworkList>
            </CourseworkColumn>

            <CourseworkColumn>
              <ColumnTitle>Intended Courses</ColumnTitle>
              <CourseworkList>
                <CourseworkItem>CS 532 | Matrix Methods in Machine Learning</CourseworkItem>
                <CourseworkItem>CS 539 | Neural Networks</CourseworkItem>
                <CourseworkItem>CS 544 | Big Data Systems</CourseworkItem>
                <CourseworkItem>CS 566 | Computer Vision</CourseworkItem>
                <CourseworkItem>CS 407 | Mobile Systems and Applications</CourseworkItem>
                <CourseworkItem>MATH 311 | Probability Theory</CourseworkItem>
              </CourseworkList>
            </CourseworkColumn>
          </CourseworkContainer>
        </CourseworkSection>
      </ContentWrapper>
    </Container>
  );
}