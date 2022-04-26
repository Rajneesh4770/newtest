import {useState} from "react";

function Form(){
    const[name,setName]=useState("");
    const[tnc,setTnc]=useState(false);
    const[intrest,setIntrest]=useState("");
    function getFormData(e)
    {
      alert("Submit")
      e.preventDefault()
      console.log(name,tnc,intrest);
    
    }
  
    return(
      <div>
        <h1>||Log In Form||</h1>
        <h2>{name}</h2>
        <form className="container">
        
          <div>
          
          <input type="text" id="txt" className="container" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)} /><br /><br /> </div>
          <select className="container" onChange={(e)=>setTnc(e.target.value)}>
            <option >Your Qualification</option>
            <option> Graduate</option>
            <option> Master </option>
  
          </select><br /><br />
          <input type="checkbox" className="container1" onChange={(e)=>setIntrest(e.target.checked)} ></input><span>Accept The Term And Condition</span><br /><br />
          <button type="submit" className="container"  onClick={getFormData}>Submit</button>
        
         
          </form> 
  
  
       </div>
    );
  }
  export default Form;