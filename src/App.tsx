import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import bg from "./assets/background-stars.svg";
import { useState } from "react";
import PlanetPage from "./components/PlanetPage";

let data = require("./data.json");
const GlobalStyles = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style-type: none;
      text-decoration: none;
  }
`;

function App() {
  const [info, setInfo] = useState(data);
  const [clickedPlanet, setClickedPlanet] = useState("Mercury");
  const [selectedButton, setSelectedButton] = useState("OVERVIEW");
  function handleClick(planetName: string) {
    setClickedPlanet(planetName);
  }
  console.log(info);

  function clickButton(name: any) {
    setSelectedButton(name);
  }
  function chooseText(item: any) {
    if (selectedButton === "OVERVIEW") {
      return item.overview.content;
    } else if (selectedButton === "Internal Structure") {
      return item.structure.content;
    } else if (selectedButton === "Surface Geology") {
      return item.geology.content;
    }
  }
  function chooseSource(item: any) {
    if (selectedButton === "OVERVIEW") {
      return item.overview.source;
    } else if (selectedButton === "Internal Structure") {
      return item.structure.source;
    } else if (selectedButton === "Surface Geology") {
      return item.geology.source;
    }
  }
  return (
    <Container>
      <GlobalStyles />
      <Routes>
        <Route
          path="/"
          element={<Header info={info} handleClick={handleClick} />}
        >
          {info.map((item: any) => {
            return (
              <Route
                path={item.name === "Mercury" ? "/" : item.name}
                element={
                  <PlanetPage
                    planetName={item.name}
                    planetText={chooseText(item)}
                    textSource={chooseSource(item)}
                    clickButton={clickButton}
                    selectButton={selectedButton}
                    rotationTime={item.rotation}
                    revolutionTime={item.revolution}
                    radius={item.radius}
                    averageTemp={item.temperature}
                  />
                }
              />
            );
          })}
        </Route>
      </Routes>
    </Container>
  );
}

const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  border: 2px solid black;
  background-color: #070724;
  background-image: url(${bg});
`;
export default App;
