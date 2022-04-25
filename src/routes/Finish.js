import React from "react";
import {Link} from "react-router-dom";
import "./finish.css";
function Finish() {
  return (
    <div className="finish">
      <h1>끝</h1>
      <Link to="/">다시하기</Link>
    </div>
  );
}

export default Finish;
