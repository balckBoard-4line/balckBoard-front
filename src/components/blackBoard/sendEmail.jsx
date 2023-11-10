import React, { useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useLocation } from "react-router-dom";

function sendEmail() {
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
  };
  const form = useRef();
  useEffect(() => {
    form.submit();
    window.location.href = `/userBlackboard/${response.data.url}`;
  }, []);

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="title" value={data.title} />
      <input type="text" name="email" value={data.email} />
      <input type="text" name="graduateDate" value={data.graduateDate} />
      <input
        type="text"
        name="url"
        value={`https://congchugraduate.netlify.app/userBlackboard/${data.response.data.url}`}
      />
    </form>
  );
}

export default sendEmail;
