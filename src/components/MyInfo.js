import React from "react";
import {Link} from "react-router-dom";
import "./my.css";
import MYIMG from "../Asets/images/me-re.png";
function MyInfo() {
  return (
    <>
      <div className="info">
        <div className="info-img">
          <div className="imgBox">
            <img src={MYIMG} />
          </div>
        </div>
        <div className="info-text">
          <ul>
            <li>올해 29살이 되었다</li>
            <li>MBTI는 ENTP이다</li>
            <li>슬하에 1남(강아지)가 있다</li>
            <li>모든 일에 재미를 추구한다</li>
            <li>가끔은 지나칠정도로 독창적이다</li>
            <li>새로운것에 대한 도전과 배움을 선호한다</li>
            <li>흥미가 생기면 열정적이다</li>
            <li>현재 그가 흥미를 느끼는것은 코딩하는것이다</li>
          </ul>
        </div>
      </div>
      <Link to="/deskroom" className="nextRoom">
        <button>다음방으로</button>
      </Link>
    </>
  );
}

export default MyInfo;
