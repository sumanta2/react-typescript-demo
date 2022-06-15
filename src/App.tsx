import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';

function App() {
  const personName={
    first:"Teaching",
    last:"skills"
  }
  const nameList=
  [
    {
      first:'Burce',
      last:'Wayne'
    },
    {
      first:'Clark',
      last:'Kent'
    },
    {
      first:'Princess',
      last:'Diana'
    }
  ]
  return (
    <div className="App">
     <Greet name="Student's" messageCount={20} isLoggedIn={false} />
     <Person name={personName}/>
     <PersonList names={nameList}/>
    </div>
  );
}

export default App;
