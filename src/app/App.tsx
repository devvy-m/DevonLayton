import "./App.scss";
import { Container } from "react-bootstrap";
import { Routes } from "./Routes";
import AppHeader from "./appHeader/AppHeader";
import Footer from "./appHeader/components/Footer";

function App() {
  return (
    <div className="App">
      <Container className={"appContainer"}>
        <AppHeader />
        <Routes /> 
      </Container>
      <Footer />

    </div>
  );
}

export default App;
