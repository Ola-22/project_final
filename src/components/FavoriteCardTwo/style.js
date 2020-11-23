import styled from "styled-components";

export const FavoriteMain = styled.div`
  background-image: ${(props) =>
    props.primary
      ? "none"
      : " url(https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/room-bg.jpg)"};
  /* background-image: url("https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/room-bg.jpg"); */
  padding: 140px 0 150px;
  margin: 0;
  overflow: hidden;
  position: relative;
  border-radius: -50px 0 -50px;
  height: auto;
  margin: 0 auto;
  padding-bottom: 75px;
  min-width: 380px;
  /* 
  clip-path: polygon(
    0 0%,
    40% 8%,
    0% 4%,
    75% 3.3%,
    80% 3%,
    100% 0,
    100% 50%,
    100% 100%,
    91% 98%,
    11% 98%,
    0 100%,
    0 55%
  ); */
  /* clip-path: polygon(
    9% 2%,
    0 0,
    0 44%,
    0 100%,
    20% 98%,
    51% 98%,
    91% 98%,
    100% 100%,
    100% 0,
    100% 0,
    90% 2%,
    45% 2%
  ); */
  /* clip-path: polygon(
    10% 2%,
    0 0,
    0 43%,
    0 100%,
    8% 99%,
    1% 99%,
    93% 99%,
    100% 100%,
    100% 0,
    100% 0,
    80% 3%,
    75% 3%
  ); */
`;
export const FavoriteTitle = styled.h4`
  color: ${(props) => (props.primary ? "#d7a274" : "#fff !important")};
  font-family: "Assistant";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
`;
export const TitleRoom = styled.h2`
  @font-face {
    font-family: "Playfair";
    src: url("../../../../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf");
  }
  color: ${(props) => (props.primary ? "#222" : "#fff !important")};
  font-family: "Playfair";
  font-size: 42px;
  font-weight: 700;
  margin-top: -5px;
  text-align: center;
`;
export const RoomMain = styled.div`
  /* width: 30%; */
  display: flex;
  /* justify-content: flex-start; */
  margin-left: 7%;
  margin-right: 15%;
`;
