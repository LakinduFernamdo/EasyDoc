import React ,{useState,useEffect}from 'react'
import AppointmentTable from './AppointmentTable'
import axios from 'axios';

function AppointmentHistory() {
    const[history,setHistory]=useState([]);

    const ViewHistory = async () => {
      try {
        const response = await axios.get('http://localhost:5000/auth/user-account/get-appointment-history', {
          params: { P_ID: 1 }
        });
        console.log(response.data);  // Log the response to verify the data
        setHistory(response.data);
      } catch (error) {
        console.error("Error fetching appointments:", error);
        alert("Error fetching appointments");
      }
    };
    
    useEffect(() => {
      ViewHistory();
    }, []);

  return (
    <div>
     <AppointmentTable data={history} />
    </div>
  )
}

export default AppointmentHistory;