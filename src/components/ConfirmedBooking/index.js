import { Container, Top, Confirmation } from "./styles";
import { useNavigate } from "react-router-dom";
import Button from "../Button";

const ConfirmedBooking = ({ values }) => {
  const navigate = useNavigate();
  console.log(values);

  return (
    <Container>
      <Top>
        <h1>Thank you for your reservation!</h1>
        <h3 className="lead-txt">
          We look forward to seeing you at Little Lemon.
        </h3>
      </Top>
      <Confirmation>
        <h2>Confirmation Details</h2>
        <span>
          <strong>Occasion:</strong> {values.occasion}
        </span>
        <span>
          <strong>Guests:</strong> {values.guests}
        </span>
        <span>
          <strong>Date:</strong> {values.date}
        </span>
        <span>
          <strong>Time:</strong> {values.time}
        </span>
        <span>
          <strong>Special Requests:</strong> {values.notes}
        </span>
      </Confirmation>

      <Button
        aria-label="Go back to the home page"
        onClick={() => navigate("/")}
      >
        Back to Home
      </Button>
    </Container>
  );
};

export default ConfirmedBooking;
