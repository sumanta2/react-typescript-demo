import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
// import Person from './components/Person';
//import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';

function App() {
  // const personName={
  //   first:"Teaching",
  //   last:"skills"
  // }
  // const nameList=
  // [
  //   {
  //     first:'Burce',
  //     last:'Wayne'
  //   },
  //   {
  //     first:'Clark',
  //     last:'Kent'
  //   },
  //   {
  //     first:'Princess',
  //     last:'Diana'
  //   }
  // ]
  return (
    <div className="App">
     {/* <Greet name="Student's" messageCount={20} isLoggedIn={false} /> */}
     {/* <Person name={personName}/> */}
     {/* <PersonList names={nameList}/> */}
     <Status status="success" />
     <Heading>I am heading</Heading>
     <Oscar><Heading> Oscar goes to Leomardo Dicpario!</Heading></Oscar>
      <Greet name="Student's" isLoggedIn={false} />  {/*  messageCount set optional attribute so it does not generate error */}

    </div>
  );
}

export default App;
