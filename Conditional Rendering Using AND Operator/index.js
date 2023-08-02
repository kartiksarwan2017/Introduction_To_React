function App() {

    let isLoggedIn = false;

    return (
        <>
         {<h1>Hello {(isLoggedIn)? "Alexa!" : "User!"}</h1>}
         <p>{(isLoggedIn) && "Welcome to the Portal!"}</p>
        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);