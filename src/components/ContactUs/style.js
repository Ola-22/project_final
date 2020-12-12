import styled from "styled-components";

export const ContactMain = styled.div`
  font-size: 16px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 30px;
`;
export const Layout = styled.div`
  width: 60%;
  margin-left: 7%;
  float: left;
`;
export const ContactTitle = styled.h1`
  font-size: 32px;
  color: #282828;
`;
export const SubmitVal = styled.input`
  padding: 14px 35px;
  border: none;
  font-size: 17px;
  cursor: pointer;
  background: #d7a274;
  color: rgb(255, 255, 255);
  margin-bottom: 40px;
  margin-left: ${(props) => (props.primary ? "48%" : "0")};
`;
export const ErrorVal = styled.div`
  color: #dc3232;
  font-size: 1em;
  font-weight: 400;
  margin-bottom: ${(props) => (props.primary ? "1%" : "3%")};
  margin-top: ${(props) => (props.primary ? "-20px" : "0")};
  margin-left: ${(props) => (props.primary ? "27.5%" : "0")};
  @media (max-width: 600px) {
    margin-left: ${(props) => (props.primary ? "2%" : "0")};
    margin-top: ${(props) => (props.primary ? "2px" : "0")};
  }
`;
