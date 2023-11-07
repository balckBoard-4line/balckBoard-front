import styled from "styled-components";

export const HeaderWrapper = styled.div`
  top: 0;
  width: 100%;
  max-width: 420px;
  padding-top: 15px;
  padding-bottom: 10px;

  padding: 0px 15px;
  margin-bottom: 10px;

  z-index: 1;
`;

export const HeaderContent = styled.div`
  width: 100%;

  font-size: 20px;
  border-bottom: 2px solid white;
  padding-top: 10px;
  padding-bottom: 10px;

  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderBtn = styled.img`
  width: 30px;
  cursor: pointer;
`;
