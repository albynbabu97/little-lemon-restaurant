import { HashLink } from "react-router-hash-link";
import {
  Container,
  Content,
  Copyright,
  Column,
  Image,
  ImageContainer,
  SocialMedia,
} from "./styles";
import logoWhite from "../../assets/logo-white.png";
import { Address } from "./styles";

import facebook from "../../assets/fb_white.svg";
import instagram from "../../assets/insta_white.svg";

const Footer = (props) => {
  return (
    <Container {...props}>
      <Content>
        <ImageContainer>
          <Image src={logoWhite} alt="Restaurant Food" />
        </ImageContainer>
        <Column>
          <h4>Little Lemon</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <HashLink to="/#menu">Menu</HashLink>
            </li>
            <li>
              <HashLink to="/bookings">Reservations</HashLink>
            </li>
            <li>
              <HashLink to="/#">Order Online</HashLink>
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Contact</h4>
          <ul>
            <li>
              <Address>
                Little Lemon <br />
                331 E Chicago <br />
                LaSalle Street Chicago,
                <br />
                Illinois 60602 <br />
                USA
              </Address>
            </li>
            <li>
              <a
                href="tel:+551199999999"
                target="_blank"
                rel="noreferrer"
                aria-label="Call Little Lemon"
              >
                +55 11 9999-9999
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@littlelemon.com"
                target="_blank"
                rel="noreferrer"
              >
                contact@littlelemon.com
              </a>
            </li>
          </ul>
        </Column>
        <Column>
          <h4>Social Media</h4>
          <SocialMedia>
            <li>
              <a
                href="https://www.facebook.com/littlelemon"
                target="_blank"
                rel="noreferrer"
              >
                <img src={facebook} alt="Facebook" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/littlelemon"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
          </SocialMedia>
        </Column>
      </Content>
      <Copyright>
        <span>Developed by Albyn Babu.</span>
        <p>© 2025 Little Lemon. All rights reserved.</p>
      </Copyright>
    </Container>
  );
};

export default Footer;
