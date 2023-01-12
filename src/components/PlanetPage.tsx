import styled from "styled-components";
import Mercury from "../assets/planet-mercury.svg";
import Venus from "../assets/planet-venus.svg";
import Earth from "../assets/planet-earth.svg";
import Mars from "../assets/planet-mars.svg";
import Jupiter from "../assets/planet-jupiter.svg";
import Saturn from "../assets/planet-saturn.svg";
import Uranus from "../assets/planet-uranus.svg";
import Neptune from "../assets/planet-neptune.svg";

export default function PlanetPage(props: any) {
  function planetPhoto() {
    if (props.planetName === "Mercury") {
      return Mercury;
    } else if (props.planetName === "Venus") {
      return Venus;
    } else if (props.planetName === "Earth") {
      return Earth;
    } else if (props.planetName === "Mars") {
      return Mars;
    } else if (props.planetName === "Jupiter") {
      return Jupiter;
    } else if (props.planetName === "Saturn") {
      return Saturn;
    } else if (props.planetName === "Uranus") {
      return Uranus;
    } else if (props.planetName === "Neptune") {
      return Neptune;
    }
  }
  let array = [
    { number: "01", name: "OVERVIEW", jsonName: "overview" },
    { number: "02", name: "Internal Structure", jsonName: "structure" },
    { number: "03", name: "Surface Geology", jsonName: "geology" },
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
                <button
                  style={{
                    width: "100%",
                    height: "48px",
                    marginTop: "16px",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                    letterSpacing: "2.57143px",
                    textTransform: "uppercase",
                    fontSize: "12px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    background:
                      props.selectButton === item.name ? "#419EBB" : "none",
                  }}
                  onClick={() => props.clickButton(item.name)}
                >
                  <p style={{ marginLeft: 28 }}>{item.number}</p>
                  <p style={{ marginLeft: 28 }}>{item.name}</p>
                </button>
              );
            })}
          </PlanetButtonBox>
        </PlanetInfoBox>
      </PlanetMainInfo>
      <PlanetAdditionalInfo></PlanetAdditionalInfo>
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
`;
const PlanetInfoBox = styled.div`
  width: 400px;
  height: 100%;
`;
const PlanetTitle = styled.h1`
  font-weight: 400;
  font-size: 80px;
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
`;
const PlanetTextSource = styled.span`
  font-weight: 400;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 39px;
`;
const PlanetButtonBox = styled.div`
  width: 100%;
`;
interface Props {
  chosenButton?: any;
}
// const PlanetButton = styled.button<Props>`
//   width: 100%;
//   height: 48px;

//   border: 1px solid red;
//   margin-bottom: 16px;
//   color: #fff;
// `;
// background: ${(props) =>
//   props.chosenButton == item.number ? "#419EBB" : "none"};
