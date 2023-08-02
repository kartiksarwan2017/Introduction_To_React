function App() {

    let isLoggedIn = true;
    let firstName = "Alexa";
    let lastName = "";

    return (
        <>
         {<h1>Hello {(isLoggedIn)? "Alexa!" : "User!"}</h1>}
         {(isLoggedIn) &&  <p>Welcome to the Portal!</p>}
        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);