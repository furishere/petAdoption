import { useState } from "react"
import {BrowserRouter, Route, useNavigate, Routes} from 'react-router-dom';
import cat from "./images/dog.png"

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

  return <div style={{backgroundImage : `url(${cat})`, backgroundSize : "cover", backgroundRepeat :"no-repeat", minHeight: "100vh", padding:0, margin : 0}}>
    <BrowserRouter>
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

    <Route path="/table" element={ <Table tableData={tableData}/>}/>
  </Routes>
  </BrowserRouter>
  </div>
}

function Header(){
  return <div style={{display:"flex",justifyContent:"center", backgroundColor : "hotpink", color:"white"}}>
    <h1>Pet Adoptation Form</h1>
  </div>
}

function Form(props){

  const navigate = useNavigate()

  function table(){
    navigate("/table")
  }

  return <div style={{display:"flex", justifyContent : "center", marginTop:"40px", padding :"40px", border : "20px", marginLeft : "100px", borderRadius :"20px", fontSize : "20px", color :"hotpink", }}>
    <div>
    <form onSubmit={props.handleSubmit} style={{fontSize:"25px" , backgroundColor :"lightpink", padding:"40px"}}>
      <label style={{fontWeight :"bold"}}> Pet Name :</label> <br />
      <input type="text" value={props.petName} placeholder="Pet Name" onChange={(e) => props.setPetName(e.target.value)} style={{width :"300px", height:"35px", fontSize:"15px"}} /> <br />

      <label style={{fontWeight :"bold"}}>Pet Type:</label> <br />
      <select value={props.petType} onChange={(e) => props.setPetType(e.target.value)} style={{paddingLeft : "65px", paddingRight : "59px",width :"300px", height:"35px", fontSize:"15px",}}>
        <option value="Dog"> Dog</option>
        <option value="Cat"> Cat</option>
        <option value="Bird"> Bird</option>
        <option value="Fish"> Fish</option>
      </select>
      <br />

      <label style={{fontWeight :"bold"}}>Breed:</label> <br />
      <input type="text" value={props.breed} placeholder="Breed" onChange={(e) => props.setBreed(e.target.value)} style={{width :"300px", height:"35px", fontSize:"15px"}}/> <br /> 

      <label style={{fontWeight :"bold"}}>Your Name:</label> <br />
      <input type="text" value={props.adpoterName} placeholder="Your Name" onChange={(e) => props.setAdopterName(e.target.value)} style={{width :"300px", height:"35px", fontSize:"15px"}}/> <br />

      <label style={{fontWeight :"bold"}}>Email:</label> <br/>
      <input type="email" value={props.email} name="email" placeholder="Email" onChange={(e) => props.setEmail(e.target.value)} style={{width :"300px", height:"35px", fontSize:"15px"}}/> <br />

      <label style={{fontWeight :"bold"}}>Phone:</label><br />
      <input type="tel" value={props.phone} name="number" placeholder="number" onChange={(e) => props.setPhone(e.target.value)} style={{width :"300px", height:"35px", fontSize:"15px"}}/>
      <br />
      <br />

      <button onClick={table} style={{backgroundColor : "hotpink", color:"white", paddingLeft : "65px", paddingRight : "65px",width :"300px", height:"35px", fontSize:"15px"}}>submit</button>
    </form>
  </div>
  </div>
}

function Table({tableData}){

  const navigate = useNavigate()

  function gohomepage(){
    navigate("/")
  }

  return <div> 
  <div style={{display : "flex", justifyContent:"center", marginTop:"40px",}}>
    <table border={1} cellPadding={23} style={{backgroundColor :"hotpink", color : "white",borderCollapse :"collapse", border:"solid black 2px",}} >
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
  </div>
  <div style={{display:"flex", justifyContent:"center", marginTop : "20px"}}>
  <button onClick={gohomepage} style={{backgroundColor : "hotpink", color:"white", paddingLeft : "65px", paddingRight : "65px",width :"200px", height:"35px", fontSize:"15px"}}> Go Back</button>
  </div>
  </div>
}

export default App
