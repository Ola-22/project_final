import styled from "styled-components";

export const MainLatest = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 20px 20px 0 40px;
  width: auto;
  height: auto;
  color: #3a3a3a;
  position: relative;
  &:hover {
    background-color: #d7a274;
    cursor: pointer;
    color: white;
    transition: 0.2s all ease;
  }
  @media (min-width: 160px) and (max-width: 600px) {
    width: 92.5%;
  }
  :not(:first-of-type) {
    @media (min-width: 160px) and (max-width: 600px) {
      margin-bottom: 20px;
    }
  }
`;
export const Date = styled.span`
  font-size: 16px;
  font-family: "Assistant", sans-serif;
  font-weight: normal;
  z-index: 40;
  z-index: 2;
  &:hover {
    color: white;
  }
`;
export const TitleNews = styled.h3`
  z-index: 40;
  font-size: 18px;
  margin-top: 10px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Assistant";
  /* border-bottom: 3px solid; */
  &:after {
    background-color: #d7a274;
    content: "";
    display: block;
    height: 3px;
    margin: 15px 0 20px;
    width: 50px;
    position: relative;
  }
  &:after:hover {
    background-color: white;
  }
`;
export const ContentNews = styled.p`
  line-height: 1.7em;
  /* color: #3a3a3a; */
  font-size: 16px;
  font-family: "Lato";
  margin-top: -20px;
  z-index: 40;
`;
