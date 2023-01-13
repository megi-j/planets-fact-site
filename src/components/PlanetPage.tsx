import styled from "styled-components";
import MercuryPlanet from "../assets/planet-mercury.svg";
import MercuryInternal from "../assets/planet-mercury-internal.svg";
import MercuryGeology from "../assets/geology-mercury.png";
import VenusPlanet from "../assets/planet-venus.svg";
import VenusInternal from "../assets/planet-venus-internal.svg";
import VenusGeology from "../assets/geology-venus.png";
import EarthPlanet from "../assets/planet-earth.svg";
import EarthInternal from "..//assets/planet-earth-internal.svg";
import EarthGeology from "..//assets/geology-earth.png";
import MarsPlanet from "../assets/planet-mars.svg";
import MarsInternal from "../assets/planet-mars-internal.svg";
import MarsGeology from "../assets/geology-mars.png";
import JupiterPlanet from "../assets/planet-jupiter.svg";
import JupiterInternal from "../assets/planet-jupiter-internal.svg";
import JupiterGeology from "../assets/geology-jupiter.png";
import SaturnPlanet from "../assets/planet-saturn.svg";
import SaturnInternal from "../assets/planet-saturn-internal.svg";
import SaturnGeology from "../assets/geology-saturn.png";
import UranusPlanet from "../assets/planet-uranus.svg";
import UranusInternal from "../assets/planet-uranus-internal.svg";
import UranusGeology from "../assets/geology-uranus.png";
import NeptunePlanet from "../assets/planet-neptune.svg";
import NeptuneInternal from "../assets/planet-neptune-internal.svg";
import NeptuneGeology from "../assets/geology-neptune.png";
import { Button } from "./Button";
export default function PlanetPage(props: any) {
  function planetPhoto() {
    if (props.planetName === "Mercury" && props.selectButton === "OVERVIEW") {
      return MercuryPlanet;
    } else if (
      props.planetName === "Mercury" &&
      props.selectButton === "Internal Structure"
    ) {
      return MercuryInternal;
    } else if (
      props.planetName === "Mercury" &&
      props.selectButton === "Surface Geology"
    ) {
      return MercuryGeology;
    }
    if (props.planetName === "Venus" && props.selectButton === "OVERVIEW") {
      return VenusPlanet;
    } else if (
      props.planetName === "Venus" &&
      props.selectButton === "Internal Structure"
    ) {
      return VenusInternal;
    } else if (
      props.planetName === "Venus" &&
      props.selectButton === "Surface Geology"
    ) {
      return VenusGeology;
    }
    if (props.planetName === "Earth" && props.selectButton === "OVERVIEW") {
      return EarthPlanet;
    } else if (
      props.planetName === "Earth" &&
      props.selectButton === "Internal Structure"
    ) {
      return EarthInternal;
    } else if (
      props.planetName === "Earth" &&
      props.selectButton === "Surface Geology"
    ) {
      return EarthGeology;
    }
    if (props.planetName === "Mars" && props.selectButton === "OVERVIEW") {
      return MarsPlanet;
    } else if (
      props.planetName === "Mars" &&
      props.selectButton === "Internal Structure"
    ) {
      return MarsInternal;
    } else if (
      props.planetName === "Mars" &&
      props.selectButton === "Surface Geology"
    ) {
      return MarsGeology;
    }
    if (props.planetName === "Jupiter" && props.selectButton === "OVERVIEW") {
      return JupiterPlanet;
    } else if (
      props.planetName === "Jupiter" &&
      props.selectButton === "Internal Structure"
    ) {
      return JupiterInternal;
    } else if (
      props.planetName === "Jupiter" &&
      props.selectButton === "Surface Geology"
    ) {
      return JupiterGeology;
    }
    if (props.planetName === "Saturn" && props.selectButton === "OVERVIEW") {
      return SaturnPlanet;
    } else if (
      props.planetName === "Saturn" &&
      props.selectButton === "Internal Structure"
    ) {
      return SaturnInternal;
    } else if (
      props.planetName === "Saturn" &&
      props.selectButton === "Surface Geology"
    ) {
      return SaturnGeology;
    }
    if (props.planetName === "Uranus" && props.selectButton === "OVERVIEW") {
      return UranusPlanet;
    } else if (
      props.planetName === "Uranus" &&
      props.selectButton === "Internal Structure"
    ) {
      return UranusInternal;
    } else if (
      props.planetName === "Uranus" &&
      props.selectButton === "Surface Geology"
    ) {
      return UranusGeology;
    }
    if (props.planetName === "Neptune" && props.selectButton === "OVERVIEW") {
      return NeptunePlanet;
    } else if (
      props.planetName === "Neptune" &&
      props.selectButton === "Internal Structure"
    ) {
      return NeptuneInternal;
    } else if (
      props.planetName === "Neptune" &&
      props.selectButton === "Surface Geology"
    ) {
      return NeptuneGeology;
    }
  }
  let array = [
    { number: "01", name: "OVERVIEW" },
    { number: "02", name: "Internal Structure" },
    { number: "03", name: "Surface Geology" },
  ];
  return (
    <PlanetSection>
      <PlanetMainInfo>
        <img src={planetPhoto()} alt={props.planetName} />
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
// const PlanetButton = styled.button<Props>`
//   width: 100%;
//   height: 48px;

//   border: 1px solid red;
//   margin-bottom: 16px;
//   color: #fff;
// `;
// background: ${(props) =>
//   props.chosenButton == item.number ? "#419EBB" : "none"};
