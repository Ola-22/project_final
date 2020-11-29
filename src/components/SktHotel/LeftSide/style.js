import styled from "styled-components";

export const SktTitle = styled.h3`
  color: #222;
  font-family: "Assistant", Sans-serif;
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 2px;
  /* margin-bottom: -30px; */
`;

export const SktTitleTwo = styled.h2`
  @font-face {
    font-family: "Playfair";
    src: url("../../PlayfairDisplay-Italic-VariableFont_wght.ttf");
  }
  color: #222;
  font-family: "Playfair";
  font-size: 56px;
  font-weight: 700;
  /* margin-bottom: -10px; */
`;

export const SktContent = styled.p`
  @font-face {
    font-family: "Roboto";
    src: url("../../Roboto-BlackItalic.ttf");
  }
  color: rgba(122, 122, 122);
  font-size: 16px;
  font-weight: 400;
  font-family: "Roboto";
  width: 90%;
  line-height: 27.2px;
  &:last-of-type {
    margin-bottom: 50px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
