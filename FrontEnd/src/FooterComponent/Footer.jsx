import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/footer.css";

function Fotter(props) {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/supervisor-signIn");
  };

  const Curr_date = new Date().getFullYear();
  return (
    <div>
      
      <footer
        className="footer pb-1 pt-4 mt-3"
        style={{
          backgroundAttachment: "fixed",
          bottom: "0",
          width: "100%",
          textAlign: "center",
          color: "white",
          backgroundColor: "#333",
        }}
      >
        <button onClick={handleClick}>Supervisors</button>
        <image src={props.Fb_img} alt="Fb Image" />
        <image src={props.Insta_img} alt="Insta Image" />
        <p>
          &copy; {Curr_date} Lifeline Hospital PVT(LTD).
          <br /> All rights reserved.
        </p>
      </footer>
    </div>
  );
}
export default Fotter;
