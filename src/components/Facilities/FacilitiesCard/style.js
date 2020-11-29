import styled from "styled-components";

export const CardMain = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: row;
  width: 500px;
  height: 140px;
  line-height: 1.7em;
  @media (min-width: 160px) and (max-width: 600px) {
    flex-direction: column;
    padding: 40px 0 0 0;
    width: 400px;
    height: 180px;
    margin: 0;
  }
  &:not(:first-of-type) {
    margin-left: 20px;
    @media (min-width: 160px) and (max-width: 600px) {
      margin-left: 0;
    }
  }
  &:hover {
    box-shadow: 5px 5px 15px 10px whitesmoke;
    transition: 0.3s;
  }
`;

export const CardTitle = styled.h3`
  display: block;
  color: #222;
  font-family: "Assistant", Sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin-top: 5px;
  margin-left: 15px;
`;
export const CardContent = styled.p`
  @font-face {
    font-family: "Lato";
    src: url("../../../../../assets/fonts/Lato-Regular.ttf");
  }
  display: block;
  margin-left: 15px;
  color: #7d7c7c;
  font-family: "Lato", sans-serif;
  font-size: 15px;
  font-weight: 400;
  /* margin-top: -20px; */
  margin-right: 10px;
`;
