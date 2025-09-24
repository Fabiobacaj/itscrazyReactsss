import React, { useState } from "react";


const StateObject = () => {
  // const [name,setName] = useState('Dario');
  // const [age,setAge] = useState(24);  
  //   const [saluto,setSaluto] = useState('Ciao');
  const [person, setPerson] = useState(
    {
      name: 'Dario',
      age: 24,
      saluto: 'Ciao'
    }
  );

  const cambiaSaluto = () => {
    setPerson({ ...person, 
      saluto: 'Ciao mi chiamo', 
      age:person.age + 1 });
  }



  return <div className="item shadow">
    <div className="text-left">
      <h5>{person.name}</h5>
      <h5>{person.age}</h5>
      <h5>{person.saluto}</h5>
    </div>
    <button className="button" onClick={cambiaSaluto}>Saluta!</button>
  </div>;
};

export default StateObject;
