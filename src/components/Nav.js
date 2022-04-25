import React, {useState} from "react";

function Nav() {
  const body = document.querySelector("body");
  const dbClcik = () => {
    console.log("dbClick");
  };

  return <div>{body.addEventListener("dblclick", dbClcik)}11</div>;
}

export default Nav;
