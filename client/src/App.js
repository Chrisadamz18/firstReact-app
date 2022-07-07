
import './App.css';
import { useState, useEffect } from "react";
import Axios from "axios";

function App() {
  const [listOfUsers, setListOfUsers] = useState([]);

  const [name, setName] = useState("")
  const [team, setTeam] = useState("")
  const [project, setProject] = useState("")
  const [skills, setSkills] = useState("")
  const [bio, setBio] = useState("")
  const [hub, setHub] = useState("")
  const [contact, setContact] = useState(0)
  const [email, setEmail] = useState("")

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
    setListOfUsers(response.data)
  })
},[])

  const createUser = () => {
    Axios.post("http://localhost:3001/createUsers", {
      name,
      team,
      project,
      skills,
      bio,
      hub,
      contact,
      email,
    }).then((response) => {
      alert("User created successfully!"); 
    })
  }


  return (
    <div className="App">
      <div className="userDisplay">
        {listOfUsers.map((user) => {
          return (
            <div>
              <hi>Name:{user.name }</hi>
            </div>
            
          );
        })

        }

      </div>
      <div>
        <input type="text" placeholder=" username" onChange={(event)=>{setName(event.target.value)}}/><br></br>
        <input type="text" placeholder=" team" onChange={(event)=>{setTeam(event.target.value)}} /><br></br>
        <input type="text" placeholder=" project's name" onChange={(event)=>{setProject(event.target.value)}} /><br></br>
        <input type="text" placeholder=" skills set"onChange={(event)=>{setSkills(event.target.value)}}/><br></br>
        <input type="text" placeholder=" bio"onChange={(event)=>{setBio(event.target.value)}} /><br></br>
        <input type="text" placeholder=" hub affiliate" onChange={(event)=>{setHub(event.target.value)}} /><br></br>
        <input type="tel" placeholder=" contact" onChange={(event)=>{setContact(event.target.value)}}/><br></br>
        <input type="text" placeholder=" email" onChange={(event)=>{setEmail(event.target.value)}} /><br></br>
        <button onClick={createUser}>Create User</button>
      </div>
    </div>
  );
}

export default App;
