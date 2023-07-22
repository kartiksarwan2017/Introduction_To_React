// const App = () => {
//     return (
//        <>
//           <h1>Hello World!</h1>
//        </>
//     )
// }


// function App() {
//     return (
//       <>
//         <h1>Let's Learn JSX!</h1>
//       </>
//     );
// }


const App = () => {

   var name = "Alexa";
   var age = 20;
   let demo = null;
   var a;
   var choice = true;

   return (
      <> 
         <h1>Hello {name}!</h1>
         <p>Your age is {age}.</p>
         <p>Null Value: {demo}</p>
         <p>A Value: {a}</p>
         <p>Choice Value: {choice}</p>
      </>
   )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);