import React, {useState} from "react";
import {data} from "../../../data"

const ArrayState = () => {
  const[people,setPeople]= useState(data);

  const removeItem = (id) => {
    // let newPeople = people.filter(el =>el.id !== id);
    setPeople(people => {

      return people.filter((el) => el.id !== id)
    }
    );
   

  }
  return (
    <>
    {
      people.map( el => {
        const {id,name}= el;
        return(
          <div key={id} className="item shadow">
            <h5>{name}</h5>  
            <button type="button" className="button delete-button" onClick={()=>removeItem(id)}>Clear</button>

          </div>
        )
      })
    }
    </>
  );
};

export default ArrayState;
