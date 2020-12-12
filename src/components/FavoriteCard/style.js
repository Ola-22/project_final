import styled from "styled-components";

export const FavoriteMain = styled.div`
  background-image: ${(props) =>
    props.primary
      ? "none"
      : " url(https://sktperfectdemo.com/themepack/hotel/wp-content/uploads/2019/09/room-bg.jpg)"};
  padding: ${(props) => (props.primary ? "-40px" : "140px 0 150px")};
  margin: 0;
  /* overflow: hidden; */
  position: relative;
  border-radius: -50px 0 -50px;
  height: auto;
  margin: 0 auto;
  padding-bottom: ${(props) => (props.primary ? "-70px" : "75px")};
  min-width: 380px;

  &:before {
    /* content: ${(props) => (props.primary ? "none" : "")}; */
    content: "";
    display: inline-block;
    width: 100%;
    height: 100px;
    border-radius: 50%;
    background: #fff;
    position: relative;
    top: -193px;
    display: ${(props) => (props.primary ? "none" : "")};
  }
  &:after {
    content: "";
    display: inline-block;
    width: 100%;
    height: 100px;
    border-radius: 30%;
    background: #fff;
    position: relative;
    bottom: -108px;
  }
  @media (min-width: 160px) and (max-width: 600px) {
    &:after {
      content: "";
      display: none;
      width: 100%;
      height: 100px;
      border-radius: 30%;
      background: #fff;
      position: relative;
      bottom: -108px;
    }
  }
`;
export const FavoriteTitle = styled.h4`
  color: ${(props) => (props.primary ? "#d7a274" : "#fff")};
  font-family: "Assistant";
  font-size: 16px;
  font-weight: 600;
  text-align: center;
  margin-top: ${(props) => (props.titleFav ? "-120px" : "20px")};
`;
export const TitleRoom = styled.h2`
  /* @font-face {
    font-family: "Playfair";
    src: url("../../../../assets/fonts/PlayfairDisplay-Italic-VariableFont_wght.ttf");
  } */
  color: ${(props) => (props.primary ? "#222" : "#fff !important")};
  font-family: "Playfair";
  font-size: 42px;
  font-weight: 700;
  margin-top: -5px;
  text-align: center;
`;
export const RoomMain = styled.div`
  display: flex;
  margin-left: 7%;
  margin-right: 15%;
  @media (min-width: 160px) and (max-width: 600px) {
    flex-direction: column;
  }
`;
