import styled from "styled-components";

export const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0px 15px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const ButtonArea = styled.div`
  width: 100%;
  padding: 15px 0px;
  border-radius: 10px;
  font-size: 18px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;

  color: ${props =>
    props.$type == "black" ? "white" : props => props.theme.colors.main1};

  background-color: ${props =>
    props.$type == "black"
      ? props.theme.colors.main1
      : props.$type == "grey"
      ? props.theme.colors.grey1
      : "white"};

  border: 2px solid;
  border-color: ${props =>
    props.$type == "grey" ? props.theme.colors.grey1 : "white"};
`;
