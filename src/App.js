import React, { useState } from 'react';
// import logo from './logo.svg';
import MemberForm from './components/Form'
import TeamMembers from './components/TeamMembers';
import './App.css';

function App() {
  const[members, setMembers] = useState([
    {
      id: 1,
      name: "Jason",
      email: "jasonh@gmail.com",
      role: "Front-End Developer"
    }
  ])

  const addMember = newMember => {
    setMembers([...members, newMember])
  }

  return (
    <div className="App">
      <h1>Team Builder</h1>
      <MemberForm addMember={addMember} />
      <TeamMembers members={members} />
    </div>
  );
}

export default App;
