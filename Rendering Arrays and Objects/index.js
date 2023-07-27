function App() {

    let arr = [1, 2, 3, 4, 5, 6];
    const obj = {
        name: "Krishna",
        age: 10
    }

    let cars = ["BMW", "Lamborgini", "Mercedes", "Audi", "Jaguar"];

    return(
        <>

        <h1>Arrays and Objects</h1>
        <h2>{arr}</h2>

        {/* <h2>{obj}</h2> */}
        <h2>{obj.name}</h2>
        <h2>{obj.age}</h2>

        <h2>Displaying array elements line by line</h2>
          
        {/* {
            arr.map((item, index) => {
                return (
                    <>
                     <div key={index}>
                        <h2>{item}</h2>
                     </div>
                    </>
                )
            })
        } */}

        {
            arr.map((num) => <h2>{num}</h2>)
        }

        <h2>Displaying Cars unordered list</h2>
        {
            cars.map((item, index) => <ul key={index}><li>{item}</li></ul>)
        }


        </>
    )
}

const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);