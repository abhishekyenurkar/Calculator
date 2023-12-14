// APP.JSX FOR PROJECT 1 TODO APP VERSION1.



// import Addto from "./components1fortodoApp/Addto";
// import AppName from "./components1fortodoApp/AppName";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css"

// import ToDoItems from "./components1fortodoApp/ToDoItems";
// function App() {

//   const todoItems=[{
//     name:'Buy-Milk',
//     dueDate:"4/10/2023"},
//     {
//       name:'Go to Collage',
//       dueDate:"4/10/2023"
//     },
//     {
//       name:'Like this video',
//       dueDate:"Quick"
//     }
//   ]
//   return (
//     <>
//       <center className="to-container">
        
//        <AppName />
//         <Addto />
//         <ToDoItems todoItems={todoItems}/>
        

//       </center>
//     </>
//   );
// }

// export default App;











































// APP.JSX FOR PROJECT 2 BHARAT CLOCK
// import "./App.css";
// import ClockHeading from "./components2forBharatClockApp/ClockHeading";
// import ClockSlogan from "./components2forBharatClockApp/ClockSlogan";
// import CurrentTime from "./components2forBharatClockApp/CurrentTime";
// import "bootstrap/dist/css/bootstrap.min.css";
// function App() {
//   return (
//     <>
      
//       <center>
//       <ClockHeading/>
//       <ClockSlogan/>
//       <CurrentTime/>
//       </center>
//     </>
//   );
// }

// export default App;












































// // COMPONENTS FOR TRAVERSEMAP
// import { useState } from "react";
// import ErrorMessage from "./componentsTraverseMap/ErrorMessage";
// import FoodItems from "./componentsTraverseMap/FoodItems";
// import "bootstrap/dist/css/bootstrap.min.css";
// import './App.css'
// import styles from  "../src/componentsTraverseMap/App.module.css"
// import Container from "./componentsTraverseMap/Container";
// import FoodInput from "./componentsTraverseMap/FoodInput";
// function App() {
     
//     //let foodItems=["Dal","Green Vegitable","Salad","Milk","Roti","Ghee","Paneer",];

    
//     //let foodItems=[];


// const [foodItems,setFoodItems]=useState([])


//     const handleEvent=(e)=>{
//       if(e.key==='Enter'){
//         let newFoodItem = e.target.value;
//       e.target.value="";
//         let newItems=[...foodItems,newFoodItem];
// setFoodItems(newItems)
//       }
      
//     }


//   return (
//     <>
//     <Container>
      
//       <h1 className={styles['food-heading']}>Helthy Food</h1>
      
//       <ErrorMessage items={foodItems} />
//       <FoodInput handleKeyDown={handleEvent} />
      
//       <FoodItems    items={foodItems}/>
//     </Container>

//     <Container>
//       <p>Above Is The List Of Helthy Foods so Taste IT</p>
//     </Container>
//     </>
//   );
// }
// // 6:4:31
// export default App













// COMPONENTS CALCULATOR PROJECTS
import './App.css'
import { useState } from 'react';
import Display from './componentsCalculatorProject/Display';
import ButtonsContainer from './componentsCalculatorProject/ButtonsContainer';

function App() {

  const [calVal,setCalVal] = useState("");
  const onButtonClick=(buttonText)=>{
    if(buttonText === 'c'){

      setCalVal("");

    }else if(buttonText === '='){
          
      const result = eval(calVal)

      setCalVal(result);
    }else{
       
      const newDisplayValue = calVal + buttonText;

      setCalVal(newDisplayValue)
    }

    }

  return (
    <>
   <center>
    
   <div className="calculator">
   <h5> Calculator</h5>
    <Display displayValue={calVal}/>

    <ButtonsContainer onButtonClick={onButtonClick}/>
   </div>
   </center>
    </>
  )
}// 6:41;35

export default App





























// function App() {
//   return (
//     <div>App</div>
//   )
// }

// export default App








