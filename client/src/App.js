import './App.css';
import Table from './components/Table/Table'
import CreateUser from "./components/CreateUser/CreateUser";
import {useState} from 'react'

function App() {
    const [status,setStatus] = useState(false)
    const changeStatus = () => {
        setStatus(!status)
    }
  return (
    <div className="App">
      <Table status={status}/>
      <CreateUser changeStatus={changeStatus}/>
    </div>
  );
}

export default App;
