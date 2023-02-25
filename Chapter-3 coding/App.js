// Coding Assignment:
// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)
// Create the same element using JSX
// Create a functional component of the same with JSX
// Pass attributes into the tag in JSX
// Composition of Component(Add a component inside another)
// {TitleComponent}
// vs
// {<TitleComponent/>}
// vs
// {<TitleComponent></TitleComponent>}
// in JSX

import React from "react";
import ReactDOM from "react-dom/client";
//!root element
const root = ReactDOM.createRoot(document.getElementById("root"));

//? Without using JSX
// const head1 = React.createElement(
//   "h1",
//   { id: "heading1", key: "head1" },
//   "Hello Heading1"
// );
// const head2 = React.createElement(
//   "h2",
//   { id: "heading2", key: "head2" },
//   "Hello Heading2"
// );
// const head3 = React.createElement(
//   "h3",
//   { id: "heading3", key: "head3" },
//   "Hello Heading3"
// );
// const container = React.createElement("div", { id: "container" }, [
//   head1,
//   head2,
//   head3,
// ]);

//? Using JSX
// const container = (
//   <div>
//     <h1>Hello Heading1</h1>
//     <h2>Hello Heading2</h2>
//     <h3>Hello Heading3</h3>
//   </div>
// );
//? Using JSX
// const container = (
//   <div>
//     <h1>Hello Heading1</h1>
//     <h2>Hello Heading2</h2>
//     <h3>Hello Heading3</h3>
//   </div>
// );

//? Functional Component
// const Container = () => (
//   <div>
//     <h1>Hello Heading1</h1>
//     <h2>Hello Heading2</h2>
//     <h3>Hello Heading3</h3>
//   </div>
// );

//? Pass attribute to functional component
// const Container = () => (
//   <div
//     className="container"
//     style={{ backgroundColor: "black", padding: "3rem" }}
//   >
//     <h1 style={{ color: "yellow" }}>Hello Heading1</h1>
//     <h2 style={{ color: "yellow" }}>Hello Heading2</h2>
//     <h3 style={{ color: "yellow" }}>Hello Heading3</h3>
//   </div>
// );
//?Composition of Component(Add a component inside another)
// const OtherComponent = () => <h1>Other Component</h1>;
// const Container = () => (
//   <div
//     className="container"
//     style={{ backgroundColor: "red", padding: "3rem" }}
//   >
//     {OtherComponent()} //Can call like function call
//     <OtherComponent /> //Can use like self closing tag
//     <h1 style={{ color: "yellow" }}>Hello Heading1</h1>
//     <h2 style={{ color: "yellow" }}>Hello Heading2</h2>
//     <h3 style={{ color: "yellow" }}>Hello Heading3</h3>
//   </div>
// );

//?{TitleComponent}vs{<TitleComponent/>}vs{<TitleComponent></TitleComponent>}in JSX

// {TitleComponent} is a kind of function expression ex:
// const TitleComponent = <h1>Hello React</h1>; //can use this inside JSX using {}
//{<TitleComponent/>} is an functional componanet
// const TitleComponent = () => <h1>Hello React</h1>;
// {<TitleComponent></TitleComponent>}
//This speicify that TitleComponent have their child elements also
//<TitleComponent><h1>Hello React</h1></TitleComponent>
//!render

// Create a Header Component from scratch using Functional Components with JSX
// Add a Logo on left
// Add a search bar in middle
// Add User icon on right
// Add CSS to make it look nice

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <IoLogoDesignernews size={80} />
    </div>
    <div className="search">
      <input type={"search"} placeholder="Search anything..."></input>
    </div>
    <div className="user">
      <FaUserAlt size={50} style={{ color: "blueviolet" }} />
    </div>
  </div>
);

//!render
root.render(<Header />);
