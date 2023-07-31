const App = () => {

    const cars = ["BMW", "lamborgini", "Mercedes", "Jaguar", "Audi"];

    return (
        <>
         {
            cars.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>{item}</li>
                    </ul>
                )
            })
         }
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);