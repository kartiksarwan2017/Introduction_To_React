function sum() {
    let a = 10+5;
    return "sum" + a;
}

const header = <h2>JSX Expression</h2>


function App(){
    var name = "Alexa";
    var age = 10;
    let demo = null;
    let undef;
    const bool = true;

    return (
        <>
         <h1>Javascript inside JSX</h1>
         {header}
         <p>String: {name}</p>
         <p>Number: {age}.</p>
         <p>Null Value: {demo}</p>
         <p>Undefined Value: {undef}</p>
         <p>Boolean Value: {bool}</p>
         <p>Calling a function: {sum()}</p>
        </>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);