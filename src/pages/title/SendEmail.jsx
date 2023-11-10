import emailjs from "@emailjs/browser";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Input from "../../components/common/input/Input";

import * as S from "./style";

function SendEmail() {
  const location = useLocation();
  const data = { ...location.state };

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jq3trkm",
        "template_pmpc56j",
        form.current,
        "nXJOAXErytPFc_Sug"
      )
      .then(
        result => {
          alert("성공적으로 이메일이 전송되었습니다.");
        },
        error => {
          console.log(error.text);
          alert("이메일이 전송이 실패되었습니다.");
        }
      );
    window.location.href = `/userBlackboard/${data.url}`;
  };
  const form = useRef();

  const [email, setEamil] = useState("");
  const getEmail = email => {
    setEamil(email);
  };
  return (
    <S.SendEmailPageWrapper ref={form} onSubmit={sendEmail}>
      <S.HideInput>
        <input type="text" name="title" value={data.title} />
        <input type="text" name="graduateDate" value={data.graduateDate} />
        <input
          type="text"
          name="url"
          value={`https://congchugraduate.netlify.app/userBlackboard/${data.url}`}
        />
        <input type="text" name="email" value={email} />
      </S.HideInput>

      <S.SendEmailTitle>칠판 생성에 성공하셨습니다!</S.SendEmailTitle>
      <S.SendEmailTitle>
        칠판 주소를 받아보실 이메일을 적어주세요!
      </S.SendEmailTitle>

      <Input
        title={""}
        maxcount={999999999}
        font="Pretendard"
        placeholder={"example@example.com"}
        getValue={getEmail}
        showInputCount={false}
      />
      <S.SendEmailButtonWrapper>
        <S.SendEmailButtonArea>여기로 주소를 받을래요!</S.SendEmailButtonArea>
      </S.SendEmailButtonWrapper>
    </S.SendEmailPageWrapper>
  );
}

export default SendEmail;
