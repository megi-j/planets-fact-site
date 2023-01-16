import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import bg from "./assets/background-stars.svg";
import { useEffect, useState } from "react";
import PlanetPage from "./components/PlanetPage";
import { Helmet } from "react-helmet";
import { dataType } from "./types";

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
  const [clickedPlanet, setClickedPlanet] = useState<string>("Mercury");
  const [selectedButton, setSelectedButton] = useState<string>("OVERVIEW");
  const [isBurgerClicked, setIsBurgerClicked] = useState<boolean>(false);
  const colors = [
    "#419EBB",
    "#EDA249",
    "#6D2ED5",
    "#D14C32",
    "#D83A34",
    "#CD5120",
    "#1EC1A2",
    "#2D68F0",
  ];
  useEffect(() => {
    info.map((item: dataType, index: number) => {
      item.color = colors[index];
      return item;
    });
  }, []);
  function handleClick(planetName: string) {
    setClickedPlanet(planetName);
  }
  console.log(info);

  function clickButton(name: string) {
    setSelectedButton(name);
  }
  function chooseText(item: dataType) {
    if (selectedButton === "OVERVIEW") {
      return item.overview.content;
    } else if (selectedButton === "Internal Structure") {
      return item.structure.content;
    } else if (selectedButton === "Surface Geology") {
      return item.geology.content;
    }
  }
  function chooseSource(item: dataType) {
    if (selectedButton === "OVERVIEW") {
      return item.overview.source;
    } else if (selectedButton === "Internal Structure") {
      return item.structure.source;
    } else if (selectedButton === "Surface Geology") {
      return item.geology.source;
    }
  }
  function burgerClicked() {
    setIsBurgerClicked(!isBurgerClicked);
  }
  return (
    <Container>
      <GlobalStyles />
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Antonio&family=League+Spartan:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Routes>
        <Route
          path="/"
          element={
            <Header
              info={info}
              handleClick={handleClick}
              burgerClicked={burgerClicked}
              // clickedPlanet={clickedPlanet}
            />
          }
        >
          {info.map((item: dataType) => {
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
                    isBurgerClicked={isBurgerClicked}
                    info={info}
                    handleClick={handleClick}
                    burgerClicked={burgerClicked}
                    key={item.name}
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
  // height: 100vh;
  margin: 0 auto;
  border: 2px solid black;
  background-color: #070724;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
`;
export default App;
