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
    props.$type == "white" ? props => props.theme.colors.main1 : "white"};
  background-color: ${props =>
    props.$type == "white" ? "white" : props => props.theme.colors.main1};

  border: 2px solid white;
`;
