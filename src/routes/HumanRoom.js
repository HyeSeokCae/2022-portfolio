import React, {useState} from "react";
import Welcome from "../components/Welcome";
import MyInfo from "../components/MyInfo";
import "./human.css";
import GLASS from "../Asets/images/eyeglass.png";
import ME from "../Asets/images/me-re.png";
function HumanRoom() {
  const [showModal, setShowModal] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const InfoShow = () => {
    if (showModal == showModal) {
      setShowInfo((current) => !current);
      alert("이건 뭐지?");
    }
  };
  return (
    <div className="humanBack">
      <img src={GLASS} className="glass" />
      {!showInfo ? (
        <img src={ME} className="me" onClick={InfoShow} />
      ) : (
        <MyInfo />
      )}
      {showModal ? null : <Welcome />}
    </div>
  );
}

export default HumanRoom;
