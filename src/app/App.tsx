import "./App.scss";
import { Container, Media, Image, ResponsiveEmbed, Row } from "react-bootstrap";
import { Routes } from "./Routes";
import AppHeader from "./appHeader/AppHeader";

// import logo from "src/app/media/AdobeStock_136909798.png";

function App() {
  return (
      <Container className={"appContainer"} fluid>
          <AppHeader />
          <Routes />
      </Container>
  );
}

export default App;
