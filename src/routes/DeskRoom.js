import React, {useState} from "react";
import "./room1.css";
import ModalText from "../components/ModalText";
import ROOMBG from "../Asets/images/laptop.jpg";
import Que from "../components/Que";
import Books from "../components/Books";
function DeskRoom() {
  return (
    <>
      <div className="room1">
        <img src={ROOMBG} className="roombg" />
        <Que />
        <Books />
        <ModalText />
      </div>
    </>
  );
}

export default DeskRoom;
