import React from "react";
import { Link } from "react-router-dom"

const resumebutton = () => {

  const resumeUrl = 'Cao_James_Resume_Full_Stack_Web_Dev.pdf';

  const openResume = () => {
    window.open(resumeUrl, '_blank');
  };

  return (<>
    <Link onClick={openResume}>
      <div id="button_h" className="ac_btn btn resume-btn">
        <i className="fa-regular fa-circle-down"></i> Download Resume
        <div className="ring one"></div>
        <div className="ring two"></div>
        <div className="ring three"></div>
      </div>
    </Link>
  </>)
}

export default resumebutton;