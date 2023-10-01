import React, { useState } from "react";

export default function Akordeon(props) {
  const { title, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`akordeon ${isOpen ? "open" : ""}`}>
      <div className="akor-title" onClick={() => setIsOpen(!isOpen)}>
        <div className="title">{title}</div>
        <div className="arrow"> {`<`} </div>
      </div>
      {children}
    </div>
  );
}
