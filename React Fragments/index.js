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

// const jsxHeading = <h1 className="head">Hello JSX!</h1> <p id="para">This is created using JSX</p>;

// const num = 1 2;

// ReactDOM.createRoot(document.getElementById("root")).render(jsxHeading);


/* Wapping adjacent elements using a single div */
// const jsxElement = <div>
//                     <h1 className="head">Hello JSX!</h1>
//                     <p>This is created using JSX</p>
//                    </div>;

// ReactDOM.createRoot(document.getElementById('root')).render(jsxElement);                   


/* Wrapping adjacent elements using react fragments */
// const jsxElement = <React.Fragment>
//                       <h1 className="header">Hello JSX!</h1>
//                       <p>This is created using JSX</p>
//                    </React.Fragment>

// ReactDOM.createRoot(document.getElementById('root')).render(jsxElement);


// const jsxElement = <>
//                       <h1 className="header">Hello JSX!</h1>
//                       <p>This is created using JSX</p>
//                    </>

// ReactDOM.createRoot(document.getElementById('root')).render(jsxElement);

// const jsxHeading = (<h1 className="head">Hello JSX!</h1>);
// const jsxParagraph = (<p id="para">This is created using JSX</p>)

// ReactDOM.createRoot(document.getElementById("root")).render(
// <>
// {jsxHeading}
// {jsxParagraph}
// </>);
