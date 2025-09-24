import React,{useEffect,useState} from "react";

const useEffectBasi = () => {
  const [value, setValue] = useState(0);

  const aumenta = () => {
    setValue((oldValue)=> oldValue + 1)
  }

  useEffect(()=>{
   console.log('Eccomi sono useEffect');
   if(value >= 1){
   document.title = `New Messages(${value})`
  }else{
    document.title = `Nessun Messaggio`
  }
  return ()=>console.log('cleanup function');
  },[value])


  return (
    <div className="item">
      <h4> Value : <span>{value}</span></h4>
      <button className="button" onClick={aumenta}>Aumenta</button>
    </div>
  
  );
};

export default useEffectBasi;
