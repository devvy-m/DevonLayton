import "./App.scss";
import { Container } from "react-bootstrap";
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
