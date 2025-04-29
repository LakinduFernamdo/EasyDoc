import React,{useState,useEffect} from 'react'
import axios from 'axios'
import DashBoard from './DashBoard'
import BillTable from './BillTable'
// Supervisor can see the bills of the patients
function Bills() {
  const [bills, setBills] = useState([]);
   const [searchTerm, setSearchTerm] = useState("");

   const ViewBills=async()=>{
     try {
      const response = await axios.get('http://localhost:5000/auth/supervisor/getbill-details');
      setBills(response.data);
    } catch (error) {
      alert("Error fetching bills:", error);
    }
  }
  useEffect(() => {
    ViewBills();
  }, []);
      
     
  const handleSearch = () => {
    alert("Search functionality is not implemented yet.");
  }
  return (
    <div>
      <h1>Bills Section</h1>
       <DashBoard />

       <div className="appointments-container">
        <input
          type="text"
          className="search-bar"
          placeholder="Search Bill_ID"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
        </div>

        <BillTable data={bills} />





       
    </div>
  )
}

export default Bills;