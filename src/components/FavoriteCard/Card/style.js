import { Link } from "react-router-dom";
import styled from "styled-components";

export const FavoriteCard = styled.div`
  background-color: white;
  font-family: "Assistant";
  margin: 20px 0 0 20px;
  width: 370px;
  height: 550px;
  @media (min-width: 160px) and (max-width: 600px) {
    width: 425px;
    margin: 20px 0 0 0px;
  }
`;
export const CardImg = styled.img`
  @media (min-width: 160px) and (max-width: 600px) {
    width: 100%;
  }
`;
export const FavoriteBtn = styled.a`
  margin-left: 30px;
  margin-bottom: 20px;
`;
export const FavoriteTitle = styled.h3`
  color: #1f1f1f;
  font-size: 24px;
  font-weight: 700;
  margin-left: 30px;
  font-family: "Assistant";
  margin-top: 20px;
`;
export const FavoriteContent = styled.p`
  color: rgba(128, 139, 152);
  line-height: 27.2px;
  margin-left: 30px;
  font-weight: 400;
  font-family: "Assistant";
  width: 80%;
  font-size: 17px;
  margin-bottom: 50px;
`;
