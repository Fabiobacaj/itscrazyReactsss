import React,{ useState } from "react";

const ShortRender = () => {
  const [parola,setParola] = useState('walore');
  const [toggle,setToggle] = useState(false);
  
  // // short circuit evaluation con || operator
  // const esempio = parola || 'sono un esempio';

  // //short circuit evalutaion with && operator
  // esempio2 = parola && 'ho uin valore';

  // //ternary operator esempio
  // const esempio3 = parola === 'Valore' ? 'sono vero' : 'sono falso';

  return (
    <div>
      <h2>{parola || 'Sono un Esempio se non inserito un valore'}</h2>     
       
     { toggle ? <h2 className="text-success"> Vero </h2> : <h5 className="text-danger">Falso</h5> }
     
     <button className="button" onClick={()=>setToggle(!toggle)}>Cambia</button>
    </div>
  );
};

export default ShortRender;
