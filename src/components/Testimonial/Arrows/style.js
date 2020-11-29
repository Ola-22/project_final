import styled from "styled-components";

export const prevQuote = styled.div`
  background-color: #d7a274;
  /* right: 20vw; */
  left: 24%;
  /* padding: 10px; */
  text-align: center;
  color: white;
  font-size: 14px;
  padding: 7px 10px;
  line-height: 1;
  font-weight: 400;
  opacity: 1;
  top: 61%;
  z-index: 100;
  position: absolute;
  cursor: pointer;
  @media (min-width: 160px) and (max-width: 600px) {
    display: none;
  }
`;
export const nextQuote = styled.div`
  text-align: center;
  color: white;
  font-size: 14px;
  padding: 7px 10px;
  line-height: 1;
  font-weight: 400;
  opacity: 1;
  background-color: #d7a274;
  cursor: pointer;
  right: 25%;
  top: 61%;
  z-index: 10000;
  position: absolute;
  @media (min-width: 160px) and (max-width: 600px) {
    display: none;
  }
`;
