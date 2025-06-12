import styled from "styled-components";

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

export default function Playground() {
  return (
    <Container>
      <ContentWrapper>
        <Title>Playground <br /><br /><br /><br /><br /><br />Coming Soon</Title>
      </ContentWrapper>
    </Container>
  );
} 