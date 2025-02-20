import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { Container, Content, Image } from "./styles";
import restaurant_food from "../../assets/restaurantfood.jpg";

const Banner = (props) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Content>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="lead-txt">
          Experience the flavors of the Mediterranean at Little Lemon. Book your
          table or order online for authentic dishes made with fresh
          ingredients.
        </p>
        <Button
          onClick={() => navigate("/bookings")}
          aria-label="Go to reservation table page."
        >
          Reserve a Table
        </Button>
      </Content>
      <Image>
        <img src={restaurant_food} alt="Restaurant Food" />
      </Image>
    </Container>
  );
};

export default Banner;
