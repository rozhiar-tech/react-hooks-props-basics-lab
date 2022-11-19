import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";
import Links from "./Links";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";
console.log(user);

function App() {
  return (
    <div>
      <NavBar />
      <Home name="Liza" city="New York" color={'firebrick'} />
      <About src="https://i.imgur.com/mV8PQxj.gif" alt="Liza" bio="I made this" github="https://github.com/rozhiar-tech/react-hooks-props-basics-lab" linkedin="https://github.com/rozhiar-tech/react-hooks-props-basics-lab"/>
     
    </div>
  );
}

export default App;
