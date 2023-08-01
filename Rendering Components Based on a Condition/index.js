function CarsPage() {

    const cars = [{
        imgURL: "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_gw/huracan/s/2022/11_30_sterrato/gate_hura_s_02_m.jpg",
        name: "Lamborgini",
        avg: "298 km/h",
        fuelType: "Petrol",
        mileage: "3.22 kmpl",
        speed: "221 mph"
    },
    {
        imgURL: "https://imgd.aeplcdn.com/0x0/n/cw/ec/44784/gla-exterior-right-front-three-quarter.jpeg?q=75",
        name: "Mercedes",
        avg: "100 kmph",
        fuelType: "Petrol",
        mileage: "12 kmpl",
        speed: "240 kmph"
    },
    {
        imgURL: "https://nexaprod2.azureedge.net/-/media/feature/nexaworldarticle/scross.png?modified=20200917135456",
        name: "S-cross",
        avg: "100 kmph",
        fuelType: "Petrol",
        mileage: "12 kmpl",
        speed: "240 kmph"
    },
    {
        imgURL: "https://cdn.ferrari.com/cms/network/media/img/resize/649d5effff73dc0024751a3e-ferrari-sf90-xx-stradale2023-rullo-2?width=530&height=597",
        name: "Ferrari",
        avg: "100 kmph",
        fuelType: "Petrol",
        mileage: "12 kmpl",
        speed: "240 kmph"
    }];

    return (
        <>
          <h1>CAR Details</h1>
         <table border="1">
            <thead>
               <tr>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>AVG</th>
                  <th>FUEL TYPE</th>
                  <th>MILEAGE</th>
                  <th>SPEED</th>
               </tr>
            </thead>
            <tbody>
                {
                    cars.map((car, index) => (
                        <tr key={index}>
                            <td>
                                <img src={car.imgURL} at="carImg" style={{width: 70, height: 70}} />
                            </td>
                            <td>{car.name}</td>
                            <td>{car.avg}</td>
                            <td>{car.fuelType}</td>
                            <td>{car.mileage}</td>
                            <td>{car.speed}</td>
                        </tr>
                    ))
                }
            </tbody>
         </table>
        </>
    )
}

function Student() {

    const student = [{
        name: "Krishna",
        age: 25,
        marks: 85
    }, 
    {
        name: "Kartik",
        age: 23,
        marks: 64
    },
    {
        name: "Ravi",
        age: 23,
        marks: 56
    }];
    return (
        <>
        <h1>Student Details</h1>
         <table border="1">
            <tr>
                <th>Student Name</th>
                <th>Age</th>
                <th>Marks</th>
            </tr>

            {
                student.map((student, index) => {
                    return (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td>{student.marks}</td>
                        </tr>
                    )
                })
            }
         </table>
        </>
    )
}

function App(){

    let showCars = false;

    if(showCars){
        return <CarsPage />
    }
    return (
        <>
         <Student />
        </>
    )
}


const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(<App />);