function App() {
    
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



ReactDOM.createRoot(document.getElementById('root')).render(<App />);