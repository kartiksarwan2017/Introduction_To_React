/* JAVASCRIPT  */
// const heading = document.createElement("h2");
//     heading.textContent = "Hello World";
//     heading.className = "header";
//     document.getElementById("root").append(heading);

// console.log("JavaScript element: ", heading);

/* REACT */

/* React with JS */

// const reactHeading = React.createElement("h1", {className : "head", id: "reactHead"}, "Hello React!");

// const reactHeading = React.createElement("h1", {className : "head", id: "reactHead", children: "Hello React!"});

// ReactDOM.createRoot(document.getElementById("root")).render(reactHeading);

// const reactButton = React.createElement("button", {className: "button", children: "Click Me!"});

// ReactDOM.createRoot(document.getElementById("root")).render(reactButton);


// const reactImg = React.createElement("img", {className: "KrihnaImg", src: "https://www.crafttrip.in/image/cache/catalog/radha-krishna/287-mayapur-temple-iskcon-krishna-painting--800x534w.jpg"});

// ReactDOM.createRoot(document.getElementById("root")).render(reactImg);

// console.log("React Heading", reactHeading);


/* React With JSX */

/* Writing Code in JSX */

const jsxHeading = (<h1>Hello JSX!</h1>);

ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);