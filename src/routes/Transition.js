import React from "react";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {Routes, Route, useLocation} from "react-router-dom";
import Home from "../routes/Home";
import DeskRoom from "../routes/DeskRoom";
import HumanRoom from "../routesHumanRoom";
import Contact from "../routesContact";
import Finish from "../routesFinish";
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
