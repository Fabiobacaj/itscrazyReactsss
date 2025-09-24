import React, {useState,useEffect} from "react";
import axios from "axios"

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isError,setisError] = useState(false);
  const [user,setUser] = useState('default user');


  const getData = async()=>{
    setisError(false)
    setisLoading(true);
    try {
      const response = await axios.get(url);
      setUser(response.data);
    } catch (error) {
      console.log(error);
      setisError(true)  
    }
    setisLoading(false)
  };

  useEffect(()=>{
    getData();
  },[]) 

   if(isLoading){
    return <LoadingComponent/>
  }

  if(isError){
    return  <ErrorComponent/>
  }

  return (
    <article className="card d-flex align-items-center p-5 shadow mt-5">
      <img
       src={user.avatar_url}
       alt={user.name}
       style={{ width: "150px", height: "50%"  }}
       className="rounded-circle my-4"
       >
       </img>
      <h3>{user.login}</h3>
    </article>
  );
};

const LoadingComponent = () =>{
  return(
    <div>Loading</div>
  )
}
const ErrorComponent = () =>{
  return(
    <div>Sorry there is an Error</div>
  )
}
export default ConditionalCompining;
