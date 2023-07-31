function App() {
  let students = [
    {
      name: "Alexa",
      age: 10,
      marks: 35,
    },
    {
      name: "Kartik",
      age: 23,
      marks: 40,
    },
    {
      name: "Krishna",
      age: 27,
      marks: 100,
    },
  ];

  return (
    <>
      <h1>Students Details</h1>
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>AGE</th>
            <th>MARKS</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

const rootElement = ReactDOM.createRoot(document.getElementById("root"));
rootElement.render(<App />);
