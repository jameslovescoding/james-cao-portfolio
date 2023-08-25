import React from "react";
import { Link } from "react-router-dom";


const BackButton = () => {

  const buttonPadding = {
    marginBottom: '20px',
  }

  return (<>
    <div style={buttonPadding}>
      <Link to="/" className="ac_btn btn"><i className="fa-solid fa-arrow-left"></i>{" Back"} </Link>
    </div>
  </>)
}

export default BackButton;