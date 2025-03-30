import React from 'react';
import Nav from './HeaderComponents/NavBar/NavBar.jsx';
import HomePage from './Pages/HomePage.jsx'; 
import Fotter from './FooterComponent/Fotter.jsx';

function App() {
  return (
    <div>
      <Nav />
      <div style={{ marginTop: '80px', padding: '20px' }}> {/* Add spacing below the NavBar */}
        <HomePage />
        </div>
        <div style={{ marginTop: '400px', padding: '20px' }}> {/* Add spacing below the HomePage */}
        <Fotter Fb_img="https://images.app.goo.gl/fJ49pj8Sy3q2r7b67" 
        Insta_img="https://images.app.goo.gl/fJ49pj8Sy3q2r7b67" 
        />
        </div>
        
        
     
     

    </div>
  );
}

export default App;
