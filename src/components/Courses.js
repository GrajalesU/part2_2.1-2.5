import React from "react";
import Course from "./Course";

const Courses = ({ courses }) => {
  console.log({ courses });
  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Courses;
