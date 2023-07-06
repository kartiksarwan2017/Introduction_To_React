/* User Interface Using React */

const jsxElement = <>
                     <h1>About React</h1>
                     <p style={{fontSize: 20}}>React is a Javascript library for Building User Interfaces</p>

                     <h1>Features of React</h1>
                     <ul style={{fontSize: 20}}>

                       <li>React is a Declarative Language</li>
                       <p>React is a declarative language. It means that we just need to tell what to do? not how it needs to be done. In HTML as well we ask the interpreter to create h1 element by writing this code &lt;h1&gt;Hello&lt;/h1&gt;". Here we are not providing steps how h1 element needs to be created.</p>

                       <li>React is Composable</li>
                       <p>We can divide the Complex UI into small chunks. These small chunks can be implemented in the form of components. We can reuse the same component as required by rendering the component. We just need to create the component only once.</p>

                       <li>React uses Virtual DOM</li>
                       <p>React Uses Virtual DOM. Virtual DOM is the programming concept in which the virtual representation of the UI is stored in the memory and synced with the Real DOM. Virtual DOM is very quick/faster.</p>

                       <li>One-Way Data Binding</li>
                       <p>It means that React executes the code line by line. Components will be rendered based on which on is rendered first.</p>
                     </ul>                     
                   </>


ReactDOM.createRoot(document.getElementById('root')).render(jsxElement);                   