import React from "react";
import Part from "./Part";
import Statistics from "./Statistics";

const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((element) => (
        <Part key={element.id} {...element} />
      ))}

      <Statistics parts={parts} />
    </div>
  );
};

export default Content;
