import styled from "styled-components";

export const MainRes = styled.div`
  padding: 50px 0 0;
  /* text-align: center; */
`;

export const SuccessDiv = styled.div`
  padding: 0.4em 1em;
  border: 2px solid #46b450;
  width: 46%;
  display: flex;
  margin-left: 28%;
`;

export const ErrorDiv = styled.div`
  border: 2px solid #ffb900;
  margin-left: ${(props) => (props.primary ? "0" : "27.8%")};
  padding: 0.2em 1em;
  width: ${(props) => (props.primary ? "85%" : "48%")};
  @media (max-width: 600px) {
    width: ${(props) => (props.primary ? "85%" : "95%")};
    margin-left: ${(props) => (props.primary ? "0" : "2%")};
  }
`;
export const SuccessMsg = styled.div`
  border: 2px solid #46b450;
  margin-left: ${(props) => (props.primary ? "0" : "27.8%")};
  padding: 0.2em 1em;
  width: ${(props) => (props.primary ? "85%" : "48%")};
  @media (max-width: 600px) {
    width: ${(props) => (props.primary ? "85%" : "95%")};
    margin-left: ${(props) => (props.primary ? "0" : "2%")};
  }
`;
