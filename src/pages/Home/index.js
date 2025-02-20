import { Container } from "./styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Specials from "../../components/Specials";
import CustomersSay from "../../components/CustomersSay";
import About from "../../components/About";

const Home = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <Specials />
      <CustomersSay />
      <About />
      <Footer />
    </Container>
  );
};

export default Home;
