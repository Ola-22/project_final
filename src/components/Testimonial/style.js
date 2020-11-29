import styled from "styled-components";

export const slideMain = styled.div`
  background-color: #f8f8f8;
  border: none;
  background-image: url("https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/room-bg.jpg");
  padding: 80px 0 100px;
  overflow: hidden;
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 480px;
  z-index: 2;
  @media (min-width: 160px) and (max-width: 600px) {
    background-size: 100% 240px;
  }

  &:before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    position: relative;
    top: -132px;
  }
  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100px;
    border-radius: 30%;
    background: #f8f8f8;
    position: relative;
    bottom: 120px;
    z-index: 1;
    /* top: -20px; */
  }
`;
