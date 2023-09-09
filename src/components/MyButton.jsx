import { useState } from "react";

// let personName = "saja"

// function MyButton() {

//     return (
//       <div >
//         <h1>{personName}</h1>
//         <button onClick={handelClicked}> chang name!</button>
//       </div>
//     );
//   }

//   export default MyButton;
//   function handelClicked(){
//  personName = "safa";
//  console.log(personName)
//   }
/////////////////////////////////////
 
// function MyButton() {
//   function handelClicked() {
//     setValue("Ward")
//   }

//   const state = useState("anwar");
//   console.log(state);

//   const value = state[0];
//   console.log(value);

//   const setValue = state[1];
//   console.log(setValue);

//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={handelClicked}> chang name!</button>
//     </div>
//   );
// }
//////////////////////////
// function MyButton() {
//     function handelClicked() {
//       setName("Ward")
    
//     }
  
//     const [name,setName] = useState("Anwar");

//     return (
//       <div>
//         <h1>{name}</h1>
//         <button onClick={handelClicked}> chang name!</button>
//       </div>
//     );
//   }

function MyButton() {
    function handelClicked() {
        if (name=="Anwar"){
            setName("Ward")

        }
        else {
            setName("Anwar")

        }
    
    }
  
    const [name,setName] = useState("Anwar");

    return (
      <div>
        <h1>{name}</h1>
        <button onClick={handelClicked}> chang name!</button>
      </div>
    );
  }

export default MyButton;
