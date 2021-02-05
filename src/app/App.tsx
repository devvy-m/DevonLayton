import "./App.scss";
import { Container } from "react-bootstrap";
import { Routes } from "./Routes";
import AppHeader from "./appHeader/AppHeader";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Container className={"appContainer"}>
        <Routes />
      </Container>
    </div>
  );
}

export default App;
