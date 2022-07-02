// import 'bootstrap/dist/css/bootstrap.min.css'
// import './App.css';

// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
// import { onAuthStateChanged, signOut, sendEmailVerification } from "firebase/auth";

import { useState } from 'react'
// import Button from 'react-bootstrap/Button';
import Header from './components/Header';
// import LoginPage from './pages/LoginPage';
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";


// const firebaseConfig = {
//   apiKey: "AIzaSyCkDuktiys-wcMYQohGjruhfWsy4XNokj8",
//   authDomain: "canvas-quiz-taker.firebaseapp.com",
//   projectId: "canvas-quiz-taker",
//   storageBucket: "canvas-quiz-taker.appspot.com",
//   messagingSenderId: "551419984722",
//   appId: "1:551419984722:web:cf744337332038a3ff188b",
//   measurementId: "G-MBY5VVQFER"
// };

// const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);
// const auth = getAuth(app);
// const name = true;


// // logInButton.addEventListener("click", () => {logIn()});


// const emailInput = document.querySelector('#floatingInput');
// const passwordInput = document.querySelector('#floatingPassword');
// const loginBody = document.querySelector("#loginBody");
// const logInButton = document.querySelector('#log-in');
// const signUpButton = document.querySelector('#sign-up');





function App() {

  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "eat butts",
        day: "blah blah",
        reminder: true
    },
    {
        id: 2,
        text: "other",
        day: "blah blah",
        reminder: true
    }
      ])

    //Delete Task
      const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
      }
    // Toggle Reminder
      const toogleReminder = (id) => {
        setTasks(tasks.map((task) => task.id === id
        ? {...task, reminder: !task.reminder } : task))
      }
    // Add Task
      const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) +1;
        const newTask = { id, ...task};
        setTasks([...tasks, newTask]);
      }

  


  return (
    <div className="container">
      <Header 
        title="Task Tracker"
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
        />

      {showAddTask 
        && <AddTask onAdd={addTask} />}

      {tasks.length> 0 
        ? <Tasks tasks={tasks} 
                onDelete={deleteTask}
                onToggle={toogleReminder}/>
        : "No Tasks To Show"}
    </div>
  );
}

export default App;




// console.log("login",passwordInput);

// let dropDownItems;
// let globalSettigns;


// if (window.localStorage.getItem("settings") === null) {
//  globalSettigns = {
//     automation : {
//         autoSearch: false,
//         autoFillMatched : false,
//         autoFillAll : false,
//         autoSubmit : false
//     },
//     overlay : {
//         displayAnswers : false,
//         highlighState: false,
//         displaySource : false
//     },
//     dataCollection : {
//         collectForApp : false,
//         collectForWeb : false,
//         connectToCanvas : false
//     }

//   }
// }else{
//   globalSettigns = JSON.parse(window.localStorage.getItem('settings'));
// }


// onAuthStateChanged(auth, (user) => {
//   if (user) {
//       const uid = user.uid;

//       getVariables();
//       setSettingsFromLocal();

//     if(user.emailVerified===false){
//       console.log("sending verification");
//       sendEmailVerification(auth.currentUser);
//     }else{
//       console.log("user verified");
//     }
//     // ...
//   } else {
//       console.log("current state: logged out");
//     // User is signed out
//     // ...
//   }
// });

// function getVariables(){
//   dropDownItems = document.querySelectorAll(".settings-drops .dropdown-item");
//   logInButton = document.querySelector('#log-in');
//   signUpButton = document.querySelector('#sign-up');
//   if(logInButton){
//     logInButton.addEventListener("click", logIn);
//     signUpButton.addEventListener("click", signUp);
//   }
//   for(let i=0;i<dropDownItems.length;i++){
//       // console.log(dropDownItems[i].innerText)
//       dropDownItems[i].addEventListener(("click"),() => {
          
//           if(dropDownItems[i].classList.contains('active')){
//               console.log("called off from click");
//               setSettingOff(i)
              
//               // console.log(dropDownItems[i].innerText)
//           }else{
//               console.log("called on from click");
//               setSettingOn(i);
//               // console.log(dropDownItems[i].innerText)
              
//           }
  
          
//       })
//   }
// }

// function setSettingsFromLocal(){
//   for(let i=0;i<dropDownItems.length;i++){
//     for(let settingType in globalSettigns){
//       for(let setting in globalSettigns[settingType]){
//         if(dropDownItems.length>0){
//           if(globalSettigns[settingType][setting]===true){
//             setSettingOn(i);
//           }else{
//             setSettingOff(i)
//           }
//         }
//       }
//     }
//   }

      
// }

// function setSettingOn(i){
//   if(dropDownItems[i].classList.contains('active')===false){
//     dropDownItems[i].classList.add("active");
//     let checkMark = document.createElement("i");
//     checkMark.classList.add("bi");
//     checkMark.classList.add("bi-check-square");
//     dropDownItems[i].appendChild(checkMark);

//     //automation settings
//     if(dropDownItems[i].innerText==="Auto Search Questions"){
//         globalSettigns.automation.autoSearch=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
//     if(dropDownItems[i].innerText==="Auto fill Matched Questions"){
//         globalSettigns.automation.autoFillMatched=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
//     if(dropDownItems[i].innerText==="Auto fill all questions"){
//         globalSettigns.automation.autoFillAll=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
//     if(dropDownItems[i].innerText==="Auto submit quiz when filled"){
//         globalSettigns.automation.autoSubmit=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
//      //overlay settings
//     if(dropDownItems[i].innerText==="Display Answers next to questions"){
//         globalSettigns.overlay.displayAnswers=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
//     if(dropDownItems[i].innerText==="Highlight question state"){
//         globalSettigns.overlay.highlighState=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
    
//     if(dropDownItems[i].innerText==="Display Answer Source link"){
//         globalSettigns.overlay.displaySource=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
//     //dataCollection settings
//     if(dropDownItems[i].innerText==="Collect Data for App"){
//         globalSettigns.dataCollection.collectForApp=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
//     if(dropDownItems[i].innerText==="Collect Data for Website"){
//         globalSettigns.dataCollection.collectForWeb=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
//     if(dropDownItems[i].innerText==="Auto-Connect to Canvas Api"){
//         globalSettigns.dataCollection.connectToCanvas=true;
//         let JsonSettings = JSON.stringify(globalSettigns);
//         window.localStorage.setItem("settings",JsonSettings);
//     }
//     console.log("set settign to on localStorage",globalSettigns);
//   }
    

// }

// function setSettingOff(i){
//   if(dropDownItems[i].classList.contains('active')){
//     dropDownItems[i].classList.remove("active");
//       let checkMark = dropDownItems[i].querySelector('.bi.bi-check-square');
//       dropDownItems[i].removeChild(checkMark);
//         //automation settings
//       if(dropDownItems[i].innerText==="Auto Search Questions"){
//           globalSettigns.automation.autoSearch=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
//       if(dropDownItems[i].innerText==="Auto fill Matched Questions"){
//           globalSettigns.automation.autoFillMatched=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
//       if(dropDownItems[i].innerText==="Auto fill all questions"){
//           globalSettigns.automation.autoFillAll=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
//       if(dropDownItems[i].innerText==="Auto submit quiz when filled"){
//           globalSettigns.automation.autoSubmit=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
//       //overlay settings
//       if(dropDownItems[i].innerText==="Display Answers next to questions"){
//           globalSettigns.overlay.displayAnswers=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
//       if(dropDownItems[i].innerText==="Highlight question state"){
//           globalSettigns.overlay.highlighState=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
      
//       if(dropDownItems[i].innerText==="Display Answer Source link"){
//           globalSettigns.overlay.displaySource=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
//       //dataCollection settings
//       if(dropDownItems[i].innerText==="Collect Data for App"){
//           globalSettigns.dataCollection.collectForApp=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
//       if(dropDownItems[i].innerText==="Collect Data for Website"){
//           globalSettigns.dataCollection.collectForWeb=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
//       if(dropDownItems[i].innerText==="Auto-Connect to Canvas Api"){
//           globalSettigns.dataCollection.connectToCanvas=false;
//           let JsonSettings = JSON.stringify(globalSettigns);
//           window.localStorage.setItem("settings",JsonSettings);
//       }
//       console.log("set setting off",globalSettigns);
//   }
      
// }

// function logIn(){
//   let email = emailInput.value;
//   let password = passwordInput.value;

//   // console.log(emailInput.value);
//   // console.log(passwordInput.value);
//   signInWithEmailAndPassword(auth, email, password)
// .then((userCredential) => {
//   // Signed in 
//   const user = userCredential.user;
//   console.log("stuff",user);
//   // ...
// })
// .catch((error) => {
//   if(error.message==="Firebase: Error (auth/user-not-found)."){
//       console.log("user not found");
//       let errorMessage =document.createElement('div');
//       errorMessage.innerText="user not found";
//       emailInput.value = '';
//       // emailInput.placeholder.style.color = "red";
//       emailInput.classList.add('redPlaceHolder');
//       emailInput.placeholder = "user not found!";
      
//   }
  

//   // console.log(errorMessage);
//   // ..
// });
// }

// function signUp(){
//   let email = emailInput.value;
//   let password = passwordInput.value;
//   createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     if(user.emailVerified===false){
//       sendEmailVerification(auth.currentUser);
//     }else{
//       console.log("log in success");
//     }
//     console.log(user);
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // ..
//   });

// }



