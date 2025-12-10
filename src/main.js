import { useState } from "react"
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  const[petName, setPetName] = useState("")
  const[petType, setPetType] = useState("Dog")
  const[breed, setBreed] = useState("")
  const[adpoterName, setAdopterName] = useState("")
  const[email, setEmail] = useState("")
  const[phone, setPhone] = useState("")

  const[tableData, setTableData] = useState([])

  function handleSubmit(e){
    e.preventDefault()

    const data = {
      petName,
      petType,
      breed,
      adpoterName,
      email,
      phone
    }

    
  setTableData([...tableData,data])

  setPetName("")
  setAdopterName("")
  setBreed("")
  setPetType("")
  setEmail("")
  setPhone("")
  }

  return <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element ={<Form 
    petName={petName}
    setPetName={setPetName}
    petType={petType}
    setPetType={setPetType}
    breed={breed}
    setBreed={setBreed}
    adpoterName={adpoterName}
    setAdopterName={setAdopterName}
    email={email}
    setEmail={setEmail}
    phone={phone}
    setPhone={setPhone}
    handleSubmit={handleSubmit}
    />} />
  </Routes>
  </BrowserRouter>
}

function heo(){
  // <Header />
    
  //   <Table tableData={tableData}/>
}

function Header(){
  return <div style={{display:"flex",justifyContent:"center"}}>
    <h1>Pet Adoptation Form</h1>
  </div>
}

function Form(props){

  return <div style={{display:"flex", justifyContent : "center"}}>
    <div>
    <form onSubmit={props.handleSubmit}>
      <label > Pet Name :</label> <br />
      <input type="text" value={props.petName} placeholder="Pet Name" onChange={(e) => props.setPetName(e.target.value)} /> <br />

      <label>Pet Type:</label> <br />
      <select value={props.petType} onChange={(e) => props.setPetType(e.target.value)} style={{paddingLeft : "65px", paddingRight : "59px"}}>
        <option value="Dog"> Dog</option>
        <option value="Cat"> Cat</option>
        <option value="Bird"> Bird</option>
        <option value="Fish"> Fish</option>
      </select>
      <br />

      <label>Breed:</label> <br />
      <input type="text" value={props.breed} placeholder="Breed" onChange={(e) => props.setBreed(e.target.value)}/> <br /> 

      <label>Your Name:</label> <br />
      <input type="text" value={props.adpoterName} placeholder="Your Name" onChange={(e) => props.setAdopterName(e.target.value)}/> <br />

      <label>Email:</label> <br/>
      <input type="email" value={props.email} name="email" placeholder="Email" onChange={(e) => props.setEmail(e.target.value)}/> <br />

      <label>Phone:</label><br />
      <input type="tel" value={props.phone} name="number" placeholder="number" onChange={(e) => props.setPhone(e.target.value)}/>
      <br />
      <br />

      <button style={{backgroundColor : "green", color:"white", paddingLeft : "65px", paddingRight : "65px"}}>submit</button>
    </form>
  </div>
  </div>
}

function Table({tableData}){
  return <div>
    <table>
      <thead>
    <tr>
      <th>Pet Name</th>
      <th>Pet Type</th>
      <th>Breed</th>
      <th>Adopter Name</th>
      <th>Email</th>
      <th>Phone</th>
    </tr>
      </thead>

      <tbody>
    {tableData.map((item, index) => {
      return (
        <tr key={index}>
        <td>{item.petName}</td>
        <td>{item.petType}</td>
        <td>{item.breed}</td>
        <td>{item.adpoterName}</td>
        <td>{item.email}</td>
        <td>{item.phone}</td>
      </tr>
      )
    })}
      </tbody>
  </table>

  <div>
  <button style={{backgroundColor : "green", color:"white"}}> Go Back</button>
  </div>
  </div>
}

export default App
