import styled from "styled-components";
import { MdLocationOn } from "react-icons/md";

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

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 18px;
  font-family: "Fira Mono", monospace;
  color: #222;
  text-align: center;
`;

const CountryList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 24px;
  margin-top: 20px;
`;

const CountryCard = styled.div`
  background: #fff;
  border-radius: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  transition: transform 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`;

const CountryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Flag = styled.img`
  width: 40px;
  height: 30px;
  object-fit: cover;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CountryName = styled.h4`
  font-size: 1.2rem;
  font-weight: 600;
  color: #222;
  margin: 0;
`;

const CitiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const CityTag = styled.div`
  background: #e3eaff;
  color: #4f8cff;
  padding: 4px 16px;
  border-radius: 20px;
  font-size: 0.8rem;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const Description = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.6;
  margin: 0;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto 40px;
`;

const ContinentSection = styled.div`
  margin-bottom: 40px;
`;

const ContinentTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 20px;
  font-family: "Fira Mono", monospace;
`;

export default function Travel() {
  const visitedCountries = [
    // Asia
    {
      name: "South Korea",
      flag: "https://flagcdn.com/w80/kr.png",
      cities: ["Everywhere"],
      continent: "Asia"
    },
    {
      name: "Japan",
      flag: "https://flagcdn.com/w80/jp.png",
      cities: ["Tokyo", "Osaka", "Kyoto", "Nara", "Nagasaki", "Sapporo", "Nagoya", "Fukuoka"],
      continent: "Asia"
    },
    {
      name: "China",
      flag: "https://flagcdn.com/w80/cn.png",
      cities: ["Beijing", "Shanghai", "Guilin"],
      continent: "Asia"
    },
    {
        name: "Thailand",
        flag: "https://flagcdn.com/w80/th.png",
        cities: ["Bangkok", "Phuket"],
        continent: "Asia"
    },
    {
        name: "Malaysia",
        flag: "https://flagcdn.com/w80/my.png",
        cities: ["Kuala Lumpur", "Penang", "Langkawi"],
        continent: "Asia"
    },
    {
        name: "Laos",
        flag: "https://flagcdn.com/w80/la.png",
        cities: ["Vientiane", "Luang Prabang"],
        continent: "Asia"
    },
    {
        name: "Taiwan",
        flag: "https://flagcdn.com/w80/tw.png",
        cities: ["Kaohsiung"],
        continent: "Asia"
    },
    {
        name: "Singapore",
        flag: "https://flagcdn.com/w80/sg.png",
        cities: ["Singapore"],
        continent: "Asia"
    },

    {
        name: "Indonesia",
        flag: "https://flagcdn.com/w80/id.png",
        cities: ["Bali", "Bintan"],
        continent: "Asia"
    },
    {
        name: "Palau",
        flag: "https://flagcdn.com/w80/pw.png",
        cities: ["Koror"],
        continent: "Asia"
    },
    {
        name: "Guam",
        flag: "https://flagcdn.com/w80/gu.png",
        cities: ["Guam"],
        continent: "Asia"
    },
    {
        name: "Saipan",
        flag: "https://flagcdn.com/w80/mp.png",
        cities: ["Saipan"],
        continent: "Asia"
    },
    // North America
    {
        name: "United States",
        flag: "https://flagcdn.com/w80/us.png",
        cities: ["Madison, WI", "Chicago, IL", "New York City, NY", "Buffalo, NY", "Los Angeles, CA", "San Diego, CA", "San Francisco, CA", "Santa Barbara, CA", "Monterey, CA", "Seattle, WA", "Las Vegas, NV", "Grand Canyon, AZ", "Sedona, AZ", "Miami, FL", "Orlando, FL", "Tampa, FL", "Hawaii, HI"],
        continent: "North America"
      },
    {
        name: "Canada",
        flag: "https://flagcdn.com/w80/ca.png",
        cities: ["Toronto", "Vancouver", "Montreal", "Quebec City", "Niagara Falls", "Banff", "Calgary"],
        continent: "North America"
    },
    // Europe
    {
        name: "United Kingdom",
        flag: "https://flagcdn.com/w80/gb.png",
        cities: ["London"],
        continent: "Europe"
    },
    {
        name: "France",
        flag: "https://flagcdn.com/w80/fr.png",
        cities: ["Paris"],
        continent: "Europe"
    },
    {
        name: "Netherlands",
        flag: "https://flagcdn.com/w80/nl.png",
        cities: ["Amsterdam", "Rotterdam"],
        continent: "Europe"
    },
    {
        name: "Switzerland",
        flag: "https://flagcdn.com/w80/ch.png",
        cities: ["Zurich", "Interlaken", "Grindelwald"],
        continent: "Europe"
    },
    {
      name: "Italy",
      flag: "https://flagcdn.com/w80/it.png",
      cities: ["Rome", "Venice", "Milan"],
      continent: "Europe"
    },

    {
      name: "Spain",
      flag: "https://flagcdn.com/w80/es.png",
      cities: ["Barcelona", "Madrid"],
      continent: "Europe"
    },
    {
        name: "Portugal",
        flag: "https://flagcdn.com/w80/pt.png",
        cities: ["Lisbon"],
        continent: "Europe"
    },
    // Oceania
    {
        name: "New Zealand",
        flag: "https://flagcdn.com/w80/nz.png",
        cities: ["Auckland", "Wellington", "Christchurch"],
        continent: "Oceania"
    },

  ];

  const countriesByContinent = visitedCountries.reduce((acc, country) => {
    if (!acc[country.continent]) {
      acc[country.continent] = [];
    }
    acc[country.continent].push(country);
    return acc;
  }, {});

  return (
    <Container>
      <ContentWrapper>
        <Title>Travel</Title>
        <Description>
          I love exploring new places and experiencing different cultures. Here are some of the countries and cities I've visited so far.
        </Description>
        {Object.entries(countriesByContinent).map(([continent, countries]) => (
          <ContinentSection key={continent}>
            <ContinentTitle>{continent}</ContinentTitle>
            <CountryList>
              {countries.map((country, index) => (
                <CountryCard key={index}>
                  <CountryHeader>
                    <Flag src={country.flag} alt={`${country.name} flag`} />
                    <CountryName>{country.name}</CountryName>
                  </CountryHeader>
                  <CitiesList>
                    {country.cities.map((city, cityIndex) => (
                      <CityTag key={cityIndex}>
                        <MdLocationOn />
                        {city}
                      </CityTag>
                    ))}
                  </CitiesList>
                </CountryCard>
              ))}
            </CountryList>
          </ContinentSection>
        ))}
      </ContentWrapper>
    </Container>
  );
} 