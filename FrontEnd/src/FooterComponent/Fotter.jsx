import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/footer.css';





function Fotter(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/supervisor-signIn');
  }



  const Curr_date = new Date().getFullYear();
  return (
    <div>
      <footer className="footer" style={{ backgroundAttachment: 'fixed', bottom: '0', width: '100%', textAlign: 'center', color: 'white', padding: '10px', backgroundColor: '#333' }}>
        <p>&copy; {Curr_date} My Website. All rights reserved.</p>

        <image src={props.Fb_img} alt="Fb Image" />
        <image src={props.Insta_img} alt="Insta Image" />
        <button onClick={handleClick}>Supervisors</button>

      </footer>
    </div>
  )
}
export default Fotter;