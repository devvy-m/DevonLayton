
import { Container } from "react-bootstrap";
import { Routes } from "./Routes";
import AppHeader from "./appHeader/AppHeader";
import Footer from "src/app/appFooter/Footer";
import "src/app/App.scss";

export function App() {
  return (
    <Container className="appContainer" fluid>
      <AppHeader />
      <Routes />
      <Footer />
    </Container>
  );
}

export default App;
