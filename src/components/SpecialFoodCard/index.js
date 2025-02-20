import { Container, Image, Header, Body, CallToAction } from "./styles";
import deliveryIcon from "../../assets/deliveryIcon.svg";

const SpecialFoodCard = ({ imageUrl, title, price, description, ...props }) => {
  return (
    <Container {...props}>
      <Image src={imageUrl} />
      <Header>
        <span className="title card-title">{title}</span>
        <span className="price highlight">$ {price}</span>
      </Header>
      <Body>{description}</Body>
      <CallToAction>
        <button className="highlight" aria-label="Order a delivery">
          Order a delivery
        </button>
        <img src={deliveryIcon} alt="Delivery" />
      </CallToAction>
    </Container>
  );
};

export default SpecialFoodCard;
