import React, {useState} from "react";
import "./wel.css";
function Welcome() {
  const [modal, setModal] = useState(false);
  const CloseModal = (e) => {
    setModal((current) => !current);
  };
  return (
    <>
      {modal ? null : (
        <div className="welBox">
          <p>아무것도 없는거 같다...</p>
          <p>주위를 둘러보자...</p>
          <button onClick={CloseModal}>찾으러가기</button>
        </div>
      )}
    </>
  );
}

export default Welcome;
