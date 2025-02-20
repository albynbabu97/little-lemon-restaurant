import { Container, Rating, Customer, Testimonial } from "./styles";

const CustomersSayCard = ({
  rating,
  customerImg,
  customerName,
  testimonial,
  ...props
}) => {
  const stars = {
    1: "★☆☆☆☆",
    2: "★★☆☆☆",
    3: "★★★☆☆",
    4: "★★★★☆",
    5: "★★★★★",
  };

  return (
    <Container {...props}>
      <Rating>{stars[rating]}</Rating>
      <Customer>
        <img src={customerImg} alt={customerName} />
        <span className="highlight">{customerName}</span>
      </Customer>
      <Testimonial className="highlight">{testimonial}</Testimonial>
    </Container>
  );
};

export default CustomersSayCard;
