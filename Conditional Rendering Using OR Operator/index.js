function App() {

    let loggedIn = true;
    let firstName = "Alexa!";
    let lastName = "Diaz!";

    return (
        <>
         <h1>Hello {(loggedIn)? lastName || firstName : "User"}</h1>
         {loggedIn && <p>Welcome to the Portal!</p>}
        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />); 