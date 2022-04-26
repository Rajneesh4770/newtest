import logo from './logo.svg';
// import React from 'react';
import { useState} from 'react';
import './App.css';
import './component/Form.css'


import Form from './component/Form';
function App(){
  return(
    <div>
      
      <Form/>
    </div>
  )
  }



// import Student from './User';
// import User from './User';


  
//   function App1(){
  
//   const [data,setData]=useState("Raj")
//   function updateData()
//   {
//     setData("Rajneesh");
//     alert("data upadated");
//   }
  

//   return ( 
    
//     <div> 
//       <h1>{data}</h1>
//     <button onClick={updateData}>updateData</button>
//     </div>


  
//   );
// }

// export default App1; 

// class App extends React.Component
// {
//   constructor()
// {
// super();
// this.state={
//   data:0
// }}
// app1()
// {
//   this.setState({data:this.state.data+1})
// }
// render()
// {
//   return(
//     <div>
//       <h1>{this.state.data}</h1>
//       <button onClick={()=>this.app1()}>updateData</button>
//     </div>
//   );
// }}
// export default App;

                                    //new program of props


  // function App(){
  //   return(
  //     <div>
  //       <h1>props in react:</h1>
  //       <Student name={"Rajneesh"} email="rajneesh@gmail.com" />
  //       <Student name ={"Rahul"} email="rahul@gamil.com" />
  //     </div>
  //   )
  // }                                  
  // export default App;


                      //inputs value
              
// function App(){
//   const [data,setData]=useState(null)
//   function getData(val)
//   {
//     setData(val.target.value)
//   }
//   return(
//     <div>
//       <h1>{data}</h1>
//       <input type="text" onChange={getData} />
//     </div>
//   );
// }
export default App;


                    //create a form in react


