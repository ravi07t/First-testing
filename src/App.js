import React,{useState} from 'react';
import './App.css';

function App() {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(FirstName,LastName)
    const data = {FirstName,LastName}
    if(FirstName && LastName){
      setList((name) => [...name,data])
      setFirstName("")
      setLastName("")
    }
  }

  return (
    <div className="App">
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <h4>Firstname</h4>
        <input name='FirstName' value={FirstName} onChange={(e) => setFirstName(e.target.value)}/>
        <h4>Lastname</h4>
        <input name='LastName' value={LastName} onChange={(e) => setLastName(e.target.value)}/>
        <br />
        <button>Submit</button>  
      </form>
      {
        list.map((lists) => <div>
          <div>{lists.FirstName} {lists.LastName}</div>
          {/* <div>{lists.LastName}</div> */}
        </div>)
      }
    </div>
  );
}

export default App;
