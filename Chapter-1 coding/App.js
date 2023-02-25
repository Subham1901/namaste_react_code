//!nested element
const heading = React.createElement(
  "h1",
  { id: "heading", key: "react18" },
  "Hello React@18"
);
//!container
const container = React.createElement("div", { id: "container" }, [heading]);
//!root elemet
const root = ReactDOM.createRoot(document.getElementById("root"));
//!render function
root.render(container);
