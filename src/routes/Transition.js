import React, {useRef} from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "./Home";
import DeskRoom from "./DeskRoom";
import HumanRoom from "./HumanRoom";
import Contact from "./Contact";
import Finish from "./Finish";
import "./app.css";

const Transition = () => {
  const location = useLocation();

  return (
    <TransitionGroup className="transition-group">
      <CSSTransition key={location.pathname} classNames="change" timeout={2000}>
        <Routes location={location}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/humanRoom" element={<HumanRoom />} />
          <Route exact path="/deskRoom" element={<DeskRoom />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/finish" element={<Finish />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default Transition;
