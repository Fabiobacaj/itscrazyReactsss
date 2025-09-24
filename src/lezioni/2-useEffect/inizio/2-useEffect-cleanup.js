import React,{useEffect, useState} from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  console.log('render')
  function dimensioneFinestra(){
    setSize(window.innerWidth)
  }
  useEffect(() => {
    console.log('settoevetlistener')
    window.addEventListener("resize",dimensioneFinestra)
    // return(()=>{
    //   console.log('removeeventlistener')
    //   window.removeEventListener("resize",dimensioneFinestra)
    // })
  },[]);

  return (
    <div className="container w-75 col-6 ofsset-3 bg-white shadow py-4" style={{textAlign:"center"}}>
      <h1>{size} </h1>
    </div>
  );
};

export default CleanUp;
