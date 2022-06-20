// import React from 'react';
// //import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet';
// import Person from './components/Person';
import PersonList from './components/PersonList';
// import Status from './components/Status';
// import Heading from './components/Heading';
// import Oscar from './components/Oscar';
// import Button from './components/Button';
// import Input from './components/Input';
// import Container from './components/Container';
// import Loggedin from './components/State/Loggedin';
// //import Counter from './components/State/Counter';
// import { ThemeContextProvider } from './components/context/ThemeContext';
// import Box from './components/context/Box';
// import { UserContextProvider } from './components/context/UserContext';
// import User from './components/context/User';
// import DomRef from './components/Ref/DomRef';
// import MutableRef from './components/Ref/MutableRef';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import Profile from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
function App() {
  const data=[
    {
      first:"sumanta",
      last:"gorai"
    },
    { first:"subhas",
      last:"Gorai"
    }
    
  ]
 
  return (
    <div className="App">
     {/* <Status status="success" />
     <Heading>I am heading</Heading>
     <Oscar><Heading> Oscar goes to Leomardo Dicpario!</Heading></Oscar>
      <Greet name="Student's" isLoggedIn={false} />   messageCount set optional attribute so it does not generate error */}
      {/* <PersonList names={data} />
      <Button handleClick={(event, id)=> { console.log("Button clicked"+event+id)}}></Button>
      <Input value='' handleChange={(event)=>{console.log(event)}} />
      <Container style={{border:'1px solid black',padding:'1rem'}}/>
      <Loggedin /> */}
      {/* <Counter/>

      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider> */}

      {/* <UserContextProvider>
        <User/>
      </UserContextProvider>
      <DomRef/>
      <MutableRef/> */}
      {/* <Counter message='I this' />
      <Private isLoggedIn={true} component={Profile} />
      <List items={['cat','dog','goat','rat','bat']} onClick={(item)=> console.log(item)} /> */}

      <List items={[1,2,3,4,5]} onClick={(item)=> console.log(item)} />
       <RandomNumber value={10} isPositive={true} />   {/*Here We can write <RandomNumber value={10} isPositive={true}isNegative={true} isZero={true} /> but if a number is positive the number must not be negative or Zero we need to handle it using typescript if pass isPositive isNegative and isZero are not allowed */}

       <Toast position='left-top'/>


    </div>
  );
}

export default App;
