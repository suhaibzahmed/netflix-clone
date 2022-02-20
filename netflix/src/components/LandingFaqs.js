import React, { useState } from "react";
import "./LandingFaqs.css";
import { FiPlus, FiMinus } from "react-icons/fi";

const LandingFaqs = ({ question, answer }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div className="faq-div" onClick={() => setIsActive(!isActive)}>
        <div className="question-div">
          <p className="question">{question}</p>
        </div>
        <div className="icon-div">
          {isActive ? (
            <FiMinus className="faq-icon" />
          ) : (
            <FiPlus className="faq-icon" />
          )}
        </div>
      </div>
      {isActive ? <div className="answer-div">{answer}</div> : ""}
    </>
  );
};

export default LandingFaqs;
