import styled from "styled-components";

export const HeaderWrapper = styled.div`
  top: 0;
  width: 100%;
  max-width: 420px;
  padding-top: 20px;
  padding-bottom: 15px;

  padding: 0px 15px;
  margin-bottom: 20px;

  z-index: 2;
`;

export const HeaderContent = styled.div`
  width: 100%;

  font-size: 24px;
  border-bottom: 2px solid white;
  padding-top: 20px;
  padding-bottom: 15px;

  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBtn = styled.img`
  width: 36px;
  cursor: pointer;
`;
