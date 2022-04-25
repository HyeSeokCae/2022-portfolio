import React, {useState} from "react";
import "./modal.css";
import POST_IMG from "../Asets/images/post.png";

function ModalText() {
  const [modal, setModal] = useState(false);
  const ModalHandler = () => {
    setModal((current) => !current);
  };
  return (
    <div className="pass">
      {!modal ? (
        <img src={POST_IMG} onClick={ModalHandler} />
      ) : (
        <div className="modalClose">
          <p>이름 : 채혜석</p>
          <p>비밀번호 : 920918</p>
          <p>이메일 : gofn92@gmail.com</p>
          <p>...</p>
          <button onClick={ModalHandler} className="close">
            ❌
          </button>
        </div>
      )}
    </div>
  );
}

export default ModalText;
