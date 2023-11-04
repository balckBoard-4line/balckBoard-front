import { keyframes, css } from "styled-components";

export const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const colors = {
  main1: "#345342",
  font1: "#AEBAB3",
  black: "#000000",
  white: "#FFFFFF",
  grey1: "#486455",
  pink: "#FF9595",
  yellow: "#FCF083",
  blue: "88D0F9"
};

export const theme = {
  colors
};
export default colors;
