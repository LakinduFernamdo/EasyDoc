import React,{useState,useEffect} from 'react'
import DashBoard from './DashBoard';
import SupervisorTable from './SupervisorTable';
import axios from 'axios';

function SupervisorData() {
  const[searchTerm, setSearchTerm] = useState('');

  const [supervisor, setSupervisor] = useState([]);
  const ViewSupervisors = async () => {
    try {
      const response = await axios.get('http://localhost:5000/auth/supervisor/supervisor-details');
      setSupervisor(response.data);
    } catch (error) {
      alert("Error fetching bills:", error);
    }
  }
  useEffect(() => {
    ViewSupervisors();
  }, []);
  
const handleSearch = () => {
  alert("Search functionality is not implemented yet.");
}

  return (
    <div>
        <h1>Supervisor Data</h1>
        <DashBoard/>

        <div className="appointments-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Sup_ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        </div>
        <SupervisorTable data={supervisor}/>
    </div>
  )
}

export default SupervisorData;