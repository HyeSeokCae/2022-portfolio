import React, {useState} from "react";
import {Link} from "react-router-dom";
import CAR from "../Asets/images/car.jpg";
import PETS from "../Asets/images/pets.jpg";
import MARVEL from "../Asets/images/marvel.jpg";
import "./tec.css";
function Tec() {
  const [openTec, setOpenTec] = useState(false);
  const OpenTec = () => {
    setOpenTec(!openTec);
  };
  return (
    <>
      {openTec ? null : (
        <div className="works">
          <div className="TecImgBox">
            <a href="https://gofn92.github.io/GroupTask1/" target="_blank">
              <span>보러가기</span>
              <img src={CAR} />
            </a>
          </div>
          <div className="TecImgBox">
            <a href="https://gofn92.github.io/GroupTask2/" target="_blank">
              <span>보러가기</span>
              <img src={PETS} />
            </a>
          </div>
          <div className="TecImgBox">
            <a href="https://hyeseokcae.github.io/movie-web/" target="_blank">
              <span>보러가기</span>
              <img src={MARVEL} />
            </a>
          </div>
          <div className="btnBox">
            <Link to="/contact">
              <button className="next">다음방으로</button>
            </Link>
            <button onClick={OpenTec} className="back">
              돌아가기
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Tec;
