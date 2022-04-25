import React, {useRef, useState} from "react";
import emailjs from "@emailjs/browser";
import {Link} from "react-router-dom";
import "./contact.css";
const Contact = () => {
  const form = useRef();
  const [toSend, setToSend] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5fsobc7",
        "template_0ca7158",
        form.current,
        "neKlqsPs-b4RkV12V"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Ok");
        },
        (error) => {
          console.log(error.text);
          alert("error");
        }
      );
  };
  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value});
  };

  return (
    <div className="contactForm">
      <div className="contactText">
        <h2>
          <mark>부족한점</mark>이 너무나 많겠지만 <br />
          <mark>개선</mark>되었으면 하는 부분을 보내주시면 <br />
          참고하겠습니다.
        </h2>
        <h3>다시한번 끝까지 봐주셔서 감사합니다.</h3>
      </div>
      <form ref={form} onSubmit={sendEmail} className="form">
        <div className="inputBox">
          <label htmlFor="user_name">이름</label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            placeholder="이름을 작성해주세요"
            maxLength={5}
            onChange={handleChange}
          />
          <label htmlFor="user_phone">연락처</label>
          <input
            type="phone"
            id="user_phone"
            name="user_phone"
            placeholder="연락처를 작성해주세요"
            maxLength={11}
            onChange={handleChange}
          />
          <label htmlFor="user_email">이메일</label>
          <input
            type="email"
            id="user_email"
            name="user_email"
            placeholder="이메일을 작성해주세요"
            required
            onChange={handleChange}
          />
        </div>
        <div className="messageBox">
          <label htmlFor="message">내용</label>
          <textarea
            id="message"
            name="message"
            placeholder="내용을 입력하세요"
            maxLength={300}
            onChange={handleChange}
          />
        </div>
        <div className="buttonBox">
          <input type="submit" className="submit" value="보내기" />
          <Link to="/finish">
            <button className="stepNext">건너뛰기</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Contact;
