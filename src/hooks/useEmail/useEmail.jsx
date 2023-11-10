import React, { useRef } from "react";

import emailjs from "@emailjs/browser";

const Ask = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm(
        "내 service_id",
        "내 template_id",
        form.current,
        "내API_PUBLIC_KEY"
      )
      .then(
        result => {
          alert("성공적으로 이메일이 전송되었습니다.");
          form.current.reset();
        },
        error => {
          console.log(error.text);
          alert("이메일이 전송이 실패되었습니다.");
        }
      );
  };

  return <></>;
};

export default Ask;
