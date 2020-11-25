import styled from "styled-components";

export const SKTHotel = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  padding-top: 80px;
  padding-bottom: 50px;
  margin-left: 8%;
  margin-right: 10%;
`;
export const LeftSkt = styled.div`
  position: relative;
  animation-name: example;
  animation-duration: 0.5s;
  width: 46%;
  @keyframes example {
    0% {
      right: 100%;
      top: 0px;
    }
    25% {
      right: 200px;
      top: 0px;
    }
    100% {
      right: 0px;
      top: 0px;
    }
  }
`;
export const RightSkt = styled.div`
  width: 40%;
  margin-right: 40px;
  position: relative;
  animation-name: right;
  animation-duration: 2s;
  @keyframes right {
    0% {
      left: 100%;
      top: 0px;
    }
    25% {
      left: 200px;
      top: 0px;
    }
    100% {
      left: 0px;
      top: 0px;
    }
  }
`;
