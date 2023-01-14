import styled from "styled-components";
import { Button } from "./Button";

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
      <PlanetMainInfo>
        <PlanetImageBox>
          {props.selectButton === "OVERVIEW" ? (
            <img src={Planet} alt={props.planetName} />
          ) : (
            ""
          )}
          {props.selectButton === "Internal Structure" ? (
            <img src={Internal} alt={props.planetName} />
          ) : (
            ""
          )}
          {props.selectButton === "Surface Geology" ? (
            <>
              <img src={Planet} />{" "}
              <img
                style={{
                  position: "absolute",
                  left: "22%",
                  top: "50%",
                }}
                src={Geology}
              />
            </>
          ) : (
            ""
          )}
        </PlanetImageBox>
        <PlanetInfoBox>
          <PlanetTitle>{props.planetName}</PlanetTitle>
          <PlanetText>{props.planetText}</PlanetText>
          <PlanetTextSource>
            Source : <a href={props.textSource}>Wikipedia</a>
          </PlanetTextSource>
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
const PlanetSection = styled.section`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
`;
const PlanetMainInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PlanetImageBox = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: center;
  aligh-items: center;
  position: relative;
`;
const PlanetAdditionalInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
`;
const PlanetBoxTitle = styled.h6`
  font-weight: 700;
  font-size: 11px;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.5);
  font-family: "League Spartan";
`;
const PlanetBoxText = styled.p`
  font-weight: 400;
  font-size: 40px;
  letter-spacing: -1.5px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: "Antonio";
`;
const PlanetInfoBox = styled.div`
  width: 400px;
  height: 100%;
`;
const PlanetTitle = styled.h1`
  font-weight: 400;
  font-size: 80px;
  font-family: "Antonio";
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 23px;
`;
const PlanetText = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 25px;
  color: #fff;
  margin-bottom: 23px;
  font-family: "League Spartan";
`;
const PlanetTextSource = styled.span`
  font-weight: 400;
  font-size: 14px;
  font-family: "League Spartan";
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 39px;
`;
const PlanetButtonBox = styled.div`
  width: 100%;
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
`;
const ButtonName = styled.p`
  margin-left: 28px;
  font-weight: 700;
  font-size: 12px;
  letter-spacing: 2.57143px;
  text-transform: uppercase;
  color: #ffffff;
  font-family: "League Spartan";
`;
