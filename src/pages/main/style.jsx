import { styled } from "styled-components";

export const MainWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
`;

export const TitleWrapper = styled.div`
  padding-top: 20px;
  background-color: ${props => props.theme.colors.main1};
`;

export const LogoWrapper = styled.img`
  width: 100%;
  padding-top: 40px;
  padding-bottom: 80px;
`;

export const ContentWhiteWrapper = styled.div`
  padding: 80px 0;
  font-family: "Pretendard";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: white;
`;

export const ContentGreyList = styled.div`
  padding: 40px 0;
  font-family: "Pretendard";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f6f6f6;
`;

export const ContentGreyWrapper = styled.div`
  padding: 20px 0;
  font-family: "Pretendard-Regular", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f6f6f6;
`;

export const ContentStep = styled.div`
  font-size: 10px;
  margin-bottom: 5px;
  font-weight: 700;
  color: ${props => props.theme.colors.grey1};
`;
export const ContentTitle = styled.div`
  font-size: 14px;
  padding-bottom: 15px;
  font-weight: 700;
  color: #000000;
`;
export const ContentContent = styled.div`
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #626262;
  line-height: 1.2;
`;
export const ContentImg = styled.img`
  width: 100%;
  padding: 0px 15px;
`;

export const FooterWrapper = styled.div`
  padding: 40px 15px;
  display: flex;
  flex-direction: column;
  font-family: "Pretendard-Regular", sans-serif;
`;

export const FooterTitle = styled.div`
  font-size: 14px;
  padding-bottom: 10px;
  color: #000000;
  font-weight: 700;
`;
export const FooterContent = styled.div`
  font-size: 12px;
  padding-bottom: 10px;
  color: #626262;
  line-height: 1.2;
`;

export const FooterIconList = styled.div`
  display: flex;
  margin-top: 10px;
`;
export const FooterIcon = styled.img`
  width: 24px;
  margin-right: 10px;
`;
