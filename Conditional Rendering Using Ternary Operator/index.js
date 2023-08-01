const App = () => {

    let LoggedIn = true;

    return (
        <>
        <h1>Hello {LoggedIn? "Alexa!": "User!"}</h1>
        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);