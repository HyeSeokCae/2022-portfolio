import React, {useState} from "react";
import "./room.css";
import {Link} from "react-router-dom";
import IMG1 from "../Asets/images/computer.jpg";
import IMG2 from "../Asets/images/man.jpg";
import IMG3 from "../Asets/images/work-space.jpg";
import IMG4 from "../Asets/images/laptop.jpg";
function Rooms() {
  const [hover, setHover] = useState(false);
  const hoverOk = (e) => {
    e.currentTarget.lastChild.style.opacity = 1;
    e.target.style.opacity = 1;
    setHover(true);
  };
  const hoverNo = (e) => {
    e.currentTarget.lastChild.style.opacity = 0;
    e.target.style.opacity = 0.3;
    setHover(false);
  };

  return (
    <div className="rooms">
      <div className="room" onMouseOver={hoverOk} onMouseOut={hoverNo}>
        <img src={IMG4} />
        <Link to="/room1">보러가기</Link>
      </div>
      <div className="room" onMouseOver={hoverOk} onMouseOut={hoverNo}>
        <img src={IMG2} />
        <Link to="/room2">보러가기</Link>
      </div>
      <div className="room" onMouseOver={hoverOk} onMouseOut={hoverNo}>
        <img src={IMG3} />
        <Link to="/room3">보러가기</Link>
      </div>
    </div>
  );
}

export default Rooms;
