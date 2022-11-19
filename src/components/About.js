import React from "react";
import Links from "./Links";

function About(props) {
  let p;
  if (props.bio) {
    p = <p>{props.bio}</p>;
  }
  // else{
  //   p = <p>Nothing to see here!</p>;
  // }
  return (
    <div id="about">
      <h2>About Me</h2>
      {p}
      <img src={props.src} alt={props.alt} />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}

export default About;
