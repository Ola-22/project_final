import styled from "styled-components";
export const CarouselCard = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #fff;
  z-index: 30;
  position: relative;
  width: 72%;
  height: 360px;
  margin-bottom: -40px;
  margin-left: 14%;
  border-radius: 5px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.24);
  transition: 500ms;
  @media (min-width: 160px) and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    height: 420px;
  }
`;
export const FontQuote = styled.div`
  color: #d7a274;
  font-size: 32px;
  margin-bottom: 35px;
  margin-top: 35px;
`;
export const Content = styled.div`
  color: #3f3f3f;
  font-family: "Assistant";
  font-size: 21px;
  font-style: normal;
  line-height: 32px;
  width: 75%;
  margin-left: 12%;
  @media (min-width: 160px) and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
  }
`;
export const AuthorMain = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 41%;
  margin-top: 35px;
  @media (min-width: 160px) and (max-width: 600px) {
    margin-left: 31%;
  }
`;
export const TestImg = styled.img`
  border-radius: 50%;
  max-width: 80px;
  height: auto;
`;
export const TestimonialUser = styled.h4`
  color: #343434;
  /* font-family: "Assistant"; */
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0px;
`;
export const Category = styled.div`
  color: #d7a274;
  margin-left: 20px;
  /* margin-top: -20px; */
`;
export const Author = styled.div`
  margin-top: 12px;
`;

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
