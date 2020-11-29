import styled from "styled-components";
export const NewsMain = styled.div`
  background-color: #f8f8f8;
  line-height: 1.7em;
  margin-top: -22px;
  height: 800px;
  margin-bottom: 5%;
  width: auto;

  @media (min-width: 160px) and (max-width: 600px) {
    height: auto;
  }
`;

export const MainPost = styled.div`
  display: flex;
  margin-left: 10%;
  width: 82.2%;
  flex-direction: row;
  @media (min-width: 160px) and (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    margin-left: 20px;
  }
`;
export const ImgPost = styled.img`
  width: auto;
  height: 300px;

  &:last-of-type {
    @media (min-width: 160px) and (max-width: 600px) {
      margin-top: 20px;
    }
  }
  @media (min-width: 160px) and (max-width: 600px) {
    width: 92.5%;
    flex-direction: column;
    margin-left: 0px;
  }
`;
