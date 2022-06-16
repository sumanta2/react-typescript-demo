// import React from 'react';
// //import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Person from './components/Person';
//import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';

function App() {
 
  return (
    <div className="App">
     {/* <Status status="success" />
     <Heading>I am heading</Heading>
     <Oscar><Heading> Oscar goes to Leomardo Dicpario!</Heading></Oscar>
      <Greet name="Student's" isLoggedIn={false} />   messageCount set optional attribute so it does not generate error */}
      
      <Button handleClick={(event, id)=> { console.log("Button clicked"+event+id)}}></Button>
      <Input value='' handleChange={(event)=>{console.log(event)}} />

    </div>
  );
}

export default App;
