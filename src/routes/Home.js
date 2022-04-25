import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./home.css";
import Loading from "../components/Loading";
import IMG from "../Asets/images/bg.jpg";

function Home() {
  const [loading, setLoading] = useState(false);
  const AlertText = () => {
    if (loading == false) {
      setLoading(false);
    }
  };
  return (
    <div className="wrap">
      {loading ? (
        <Loading />
      ) : (
        <>
          <img src={IMG} />

          <div className="textBox">
            <h1>채혜석의 포트폴리오 시작합니다</h1>
            <span>Tips</span>
            <ul>
              <li>마우스로 주변을 살펴보세요</li>
              <li>힌트같은게 어딘가엔 있습니다</li>
              <li>마우스 커서의 변화를 주시하십시오</li>
              <li>왼쪽부터 오른쪽으로...</li>
              <p className="emoji">↓</p>
            </ul>
            <Link to="/humanRoom" onClick={AlertText}>
              <p className="start">시작하기</p>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Home;
