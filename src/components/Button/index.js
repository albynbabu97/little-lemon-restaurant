import { Container } from "./styles";

const Button = (props) => {
  return <Container {...props}>{props.children}</Container>;
};

export default Button;
