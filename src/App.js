import React, { createContext, useContext, useState } from 'react';


let userContext = createContext();

function App() {
  let [user, setUser] = useState('John Doe');

  return (
    <>
    <userContext.Provider value={user}>
      <h1>Component 1</h1>
      <Comp1/>
    </userContext.Provider>

    </>
  );
}

function Comp1() {

  return (
    <>
    <h2>Component 2</h2>
    <Comp2 />
    </>
  );
}

function Comp2() {
  let user = useContext(userContext);
  return (
    <>
    <h3>Component x3</h3>
    <p>The value is {user}</p>        
    </>
  );
}

export default App;
