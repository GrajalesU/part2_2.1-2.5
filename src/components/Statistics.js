import React from "react";

const Statistics = ({ parts }) => {
  const total = parts.reduce((total, element) => {
    return total + element.exercises;
  }, 0);

  return (
    <div>
      <p>total of {total} exercises</p>
    </div>
  );
};

export default Statistics;
