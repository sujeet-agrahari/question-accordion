import React, { useState } from "react";

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState();
  const onTitleClick = (index) => {
    setActiveIndex(index);
    console.log(activeIndex);
  };
  const renderedItems = items.map((item, index) => {
    const activeItem = index === activeIndex ? "active" : "";
    return (
      <React.Fragment key={item.question}>
        <div
          className={`title ${activeItem}`}
          onClick={() => onTitleClick(index)}
        >
          <i className="dropdown icon"></i>
          {item.question}
        </div>
        <div className={`content ${activeItem}`}>
          <p>{item.answer}</p>
        </div>
      </React.Fragment>
    );
  });
  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
