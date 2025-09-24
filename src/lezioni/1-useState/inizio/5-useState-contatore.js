import React,{useState} from "react";

const CounterComponent = () => {
  const [contatore,setContatore] = useState(0);

  const reset =()=>{
    setContatore(0)
  }
  const Aumenta =()=>{
    // setContatore(contatore + 1)
    setTimeout(() => {
      setContatore((oldValue)=>{
        return oldValue + 1
      } )
  },2000)
}
  const Diminuisci =()=>{
    setContatore(contatore - 1)
    if(contatore <= 0){
      setContatore(0)
      window.alert('il contatore non può essere negativo')
    }
  }
  
  return (
    <div className="bg-white shadow rounded py-5 w-75 col-6 offset-1">
      <h3>{contatore}</h3>
     <div className="d-flex justify-content-between">
      <button className="button my-2" onClick={Diminuisci}>Diminuisci</button>
      <button className="button my-2" onClick={Aumenta} >Aumenta</button>
     </div>
      <button className="button reset-button my-2" onClick={reset}>Resetta</button>
    </div>
  );
};

export default CounterComponent;
