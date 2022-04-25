import React, {useState, useRef} from "react";
import Tec from "../components/Tec";
import "./que.css";
function Que() {
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [newModal, setNewModal] = useState(false);

  const passwordInput = useRef();
  const closeBox = useRef();

  const onChange = (e) => {
    if (e.target.value.length == 7) {
      return false;
    }
    setPassword(e?.target.value);
  };

  const onSubmit = (e) => {
    const ok = 920918;
    e.preventDefault();
    if (e.target.password.value == ok) {
      alert("정답입니다. 다음 내용을 확인 후 창을 닫아주세요");
      e.target.password.value = "";
      setOpen(false);
      setNewModal(true);
    } else {
      alert("❌");
      e.target.password.value = "";
    }
  };

  const openQue = () => {
    setOpen((current) => !current);
  };

  const reset = () => {
    passwordInput.current.value = passwordInput.current.value;
    passwordInput.current.focus();
  };

  return (
    <>
      {!open ? (
        <div className="tecBlind" onClick={openQue}></div>
      ) : (
        <form className={"ques"} onSubmit={onSubmit} ref={closeBox}>
          <label htmlFor="password">
            <p>비밀번호를 입력하세요</p>
            <input
              type="number"
              id="password"
              value={password}
              onChange={onChange}
              ref={passwordInput}
            ></input>
          </label>
          <button type="submit" onClick={reset}>
            입력
          </button>
          <button onClick={openQue} className="close">
            ❌
          </button>
        </form>
      )}
      {!newModal ? null : <Tec />}
    </>
  );
}

export default Que;
