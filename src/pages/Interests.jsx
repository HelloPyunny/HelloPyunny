import styled from "styled-components";
import { FaLaptopCode, FaRobot, FaMobileAlt, FaCamera, FaUser, FaBrain, FaCode, FaBitcoin, FaChartLine } from "react-icons/fa";
import { MdSportsTennis, MdSportsSoccer, MdFitnessCenter, MdRestaurant, MdTravelExplore, MdPhotoCamera, MdRestaurantMenu, MdPool } from "react-icons/md";

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

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: bold;
  margin: 24px 0 12px;
  color: #333;
`;

const InterestList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
`;

const InterestCard = styled.div`
  background: #f8f9ff;
  border-radius: 12px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #e3eaff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  color: #4f8cff;
`;

const InterestName = styled.span`
  font-size: 1rem;
  color: #333;
  text-align: center;
  font-weight: 500;
`;

export default function Interests() {
  const interests = {
    "Technology": [
      { name: "Artificial Intelligence", icon: <FaBrain /> },
      { name: "Machine Learning", icon: <FaBrain /> },
      { name: "Robotics", icon: <FaRobot /> },
      { name: "Computer Vision", icon: <FaCamera /> },
      { name: "Human-Computer Interaction", icon: <FaUser /> },
      { name: "Software Engineering", icon: <FaCode /> },
      { name: "Web Development", icon: <FaLaptopCode /> },
      { name: "Mobile Apps", icon: <FaMobileAlt /> },
      { name: "Blockchain", icon: <FaBitcoin /> },
      { name: "Data Science", icon: <FaChartLine /> },
    ],
  };

  const hobbies = {
    "Sports": [
      { name: "Soccer", icon: <MdSportsSoccer /> },
      { name: "Tennis", icon: <MdSportsTennis /> },
      { name: "Workout", icon: <MdFitnessCenter /> },
      { name: "Swimming", icon: <MdPool /> },
    ],
    "Culinary": [
      { name: "Cooking", icon: <MdRestaurant /> },
      { name: "Korean Food", icon: <MdRestaurantMenu /> },
      { name: "Italian Food", icon: <MdRestaurantMenu /> },
      { name: "Food Exploration", icon: <MdRestaurantMenu /> },
    ],
    "Personal Development": [
      { name: "Photography", icon: <MdPhotoCamera /> },
      {name: "Traveling", icon: <MdTravelExplore />},
    ],
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Interests & Hobbies</Title>
        <CardsRow>
          <Section>
            <Title>Technical Interests</Title>
            {Object.entries(interests).map(([category, items]) => (
              <div key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <InterestList>
                  {items.map((item, index) => (
                    <InterestCard key={index}>
                      <IconWrapper>
                        {item.icon}
                      </IconWrapper>
                      <InterestName>{item.name}</InterestName>
                    </InterestCard>
                  ))}
                </InterestList>
              </div>
            ))}
          </Section>

          <Section>
            <Title>Interests & Hobbies</Title>
            {Object.entries(hobbies).map(([category, items]) => (
              <div key={category}>
                <CategoryTitle>{category}</CategoryTitle>
                <InterestList>
                  {items.map((item, index) => (
                    <InterestCard key={index}>
                      <IconWrapper>
                        {item.icon}
                      </IconWrapper>
                      <InterestName>{item.name}</InterestName>
                    </InterestCard>
                  ))}
                </InterestList>
              </div>
            ))}
          </Section>
        </CardsRow>
      </ContentWrapper>
    </Container>
  );
} 