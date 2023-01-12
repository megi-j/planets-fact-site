import styled, { createGlobalStyle } from "styled-components";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Mercury from "./components/Mercury";
import Venus from "./components/Venus";
import Earth from "./components/Earth";
import Mars from "./components/Mars";
import Jupiter from "./components/Jupiter";
import Saturn from "./components/Saturn";
import Uranus from "./components/Uranus";
import Neptune from "./components/Neptune";
import bg from "./images/background-stars.svg";
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
  console.log(data);
  return (
    <Container>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Mercury />} />
          <Route path="/venus" element={<Venus />} />
          <Route path="/earth" element={<Earth />} />
          <Route path="/mars" element={<Mars />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/saturn" element={<Saturn />} />
          <Route path="/uranus" element={<Uranus />} />
          <Route path="/jupiter" element={<Jupiter />} />
          <Route path="/neptune" element={<Neptune />} />
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
