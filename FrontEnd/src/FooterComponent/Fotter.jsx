import React from 'react';

function Fotter(props) {
     const Curr_date= new Date().getFullYear();
  return (
    <div>
        <footer className="footer" style={{backgroundAttachment: 'fixed', bottom: '0', width: '100%', textAlign: 'center', color: 'white', padding: '10px', backgroundColor: '#333'}}>
            <p>&copy; {Curr_date} My Website. All rights reserved.</p>
            
            <image src={props.Fb_img} alt="Fb Image" />
            <image src={props.Insta_img} alt="Insta Image" />

        </footer>
    </div>
  )
}

export default Fotter;