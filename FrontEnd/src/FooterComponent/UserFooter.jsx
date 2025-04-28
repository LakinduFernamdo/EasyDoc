import React from 'react'

function UserFooter() {
    const Curr_date = new Date().getFullYear();
  return (
    <div>
        <footer className="footer" style={{ backgroundAttachment: 'fixed', bottom: '0', width: '100%', textAlign: 'center', color: 'white', padding: '10px', backgroundColor: '#333' }}>
        <p>&copy; {Curr_date} My Website. All rights reserved.</p>

        

      </footer>
    </div>
  )
}

export default UserFooter;