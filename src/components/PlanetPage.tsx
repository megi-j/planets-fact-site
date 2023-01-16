import styled from "styled-components";
import { Button } from "./Button";
import { MobileButton } from "./MobileButton";
export default function PlanetPage(props: any) {
  let Internal = require(`../assets/planet-${props.planetName.toLowerCase()}-internal.svg`);
  let Geology = require(`../assets/geology-${props.planetName.toLowerCase()}.png`);
  let Planet = require(`../assets/planet-${props.planetName.toLowerCase()}.svg`);

  let array = [
    { number: "01", name: "OVERVIEW" },
    { number: "02", name: "Internal Structure" },
    { number: "03", name: "Surface Geology" },
  ];

  return (
    <PlanetSection>
      <PlanetHeader>
        {array.map((item) => {
          return (
            <MobileButton
              onClick={() => props.clickButton(item.name)}
              selectButton={props.selectButton}
              name={item.name}
            >
              {item.name}
            </MobileButton>
          );
        })}
      </PlanetHeader>
      <PlanetMainInfo>
        <PlanetImageBox>
          {props.selectButton === "OVERVIEW" ? (
            <PlanetImg src={Planet} alt={props.planetName} />
          ) : (
            ""
          )}
          {props.selectButton === "Internal Structure" ? (
            <PlanetImg src={Internal} alt={props.planetName} />
          ) : (
            ""
          )}
          {props.selectButton === "Surface Geology" ? (
            <>
              <PlanetImg src={Planet} /> <GeologyImg src={Geology} />
            </>
          ) : (
            ""
          )}
        </PlanetImageBox>
        <PlanetInfoBox>
          <PlanetTextBox>
            <PlanetTitle>{props.planetName}</PlanetTitle>
            <PlanetText>{props.planetText}</PlanetText>
            <PlanetTextSource>
              Source : <a href={props.textSource}>Wikipedia</a>
            </PlanetTextSource>
          </PlanetTextBox>
          <PlanetButtonBox>
            {array.map((item) => {
              return (
                <Button
                  onClick={() => props.clickButton(item.name)}
                  selectButton={props.selectButton}
                  name={item.name}
                >
                  <ButtonNumber>{item.number}</ButtonNumber>
                  <ButtonName>{item.name}</ButtonName>
                </Button>
              );
            })}
          </PlanetButtonBox>
        </PlanetInfoBox>
      </PlanetMainInfo>
      <PlanetAdditionalInfo>
        <PlanetBox>
          <PlanetBoxTitle>ROTATION TIME</PlanetBoxTitle>
          <PlanetBoxText>{props.rotationTime}</PlanetBoxText>
        </PlanetBox>
        <PlanetBox>
          <PlanetBoxTitle>REVOLUTION TIME</PlanetBoxTitle>
          <PlanetBoxText>{props.revolutionTime}</PlanetBoxText>
        </PlanetBox>
        <PlanetBox>
          <PlanetBoxTitle>radius</PlanetBoxTitle>
          <PlanetBoxText>{props.radius}</PlanetBoxText>
        </PlanetBox>
        <PlanetBox>
          <PlanetBoxTitle>AVERAGE TEMP.</PlanetBoxTitle>
          <PlanetBoxText>{props.averageTemp}</PlanetBoxText>
        </PlanetBox>
      </PlanetAdditionalInfo>
    </PlanetSection>
  );
}
const PlanetHeader = styled.header`
  display: none;
  @media (max-width: 375px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 47px;
    margin: 0 auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    margin-bottom: 64px;
  }
`;
const GeologyImg = styled.img`
  position: absolute;
  left: 22%;
  top: 50%;
  @media (max-width: 768px) {
    width: 158px;
    height: 165px;
  }
`;
const PlanetImg = styled.img`
  @media (max-width: 768px) {
    width: 100%;
  }
`;
const PlanetSection = styled.section`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 126px auto;
  @media (max-width: 768px) {
    width: 100%;
  }
  @media (max-width: 375px) {
    margin: 0;
  }
`;
const PlanetMainInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 350px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 0;
  }
`;
const PlanetImageBox = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  aligh-items: center;
  position: relative;
  @media (max-width: 768px) {
    width: 184px;
    height: 184px;
    margin-bottom: 115px;
  }
`;
const PlanetAdditionalInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    margin-top: 27px;
    justify-content: space-evenly;
  }
  @media (max-width: 375px) {
    flex-direction: column;
  }
`;
const PlanetBox = styled.div`
  width: 255px;
  height: 128px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  padding-left: 23px;
  @media (max-width: 768px) {
    width: 164px;
    height: 88px;
  }
  @media (max-width: 375px) {
    width: 90%;
    height: 48px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding-right: 23px;
    margin-bottom: 8px;
  }
`;
const PlanetBoxTitle = styled.h6`
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  font-family: "League Spartan";
  @media (max-width: 768px) {
    font-size: 8px;
    letter-spacing: 0.727273px;
  }
`;
const PlanetBoxText = styled.p`
  font-weight: 400;
  font-size: 40px;
  letter-spacing: -1.5px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: "Antonio";
  @media (max-width: 768px) {
    font-size: 24px;
    letter-spacing: -0.9px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
    letter-spacing: -0.75px;
  }
`;
const PlanetInfoBox = styled.div`
  width: 400px;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
  }
  @media (max-width: 375px) {
    padding: 0 24px;
  }
`;
const PlanetTitle = styled.h1`
  font-weight: 400;
  font-size: 80px;
  font-family: "Antonio";
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 23px;
  @media (max-width: 768px) {
    font-size: 48px;
  }
  @media (max-width: 375px) {
    font-size: 40px;
  }
`;
const PlanetText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #fff;
  margin-bottom: 23px;
  font-family: "League Spartan";
  @media (max-width: 768px) {
    font-size: 11px;
    line-height: 22px;
  }
`;
const PlanetTextSource = styled.span`
  font-weight: 400;
  font-size: 14px;
  font-family: "League Spartan";
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 39px;
`;
const PlanetTextBox = styled.div`
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 375px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const PlanetButtonBox = styled.div`
  width: 100%;
  @media (max-width: 768px) {
    width: 40%;
  }
  @media (max-width: 375px) {
    display: none;
  }
`;
interface Props {
  chosenButton?: any;
}
const ButtonNumber = styled.p`
  margin-left: 28px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 2.57143px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  font-family: "League Spartan";
  @media (max-width: 768px) {
    font-size: 9px;
    letter-spacing: 1.92857px;
  }
`;
const ButtonName = styled.p`
  margin-left: 28px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 2.57143px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: "League Spartan";
  @media (max-width: 768px) {
    font-size: 9px;
    letter-spacing: 1.92857px;
  }
`;
