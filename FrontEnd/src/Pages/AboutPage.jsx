import React from 'react'
import Navbar from '../HeaderComponents/NavBar/NavBar.jsx'

function AboutPage() {
  return (
    <div>
       <Navbar />
       <div className='contact-page' style={{marginTop: '100px'}}>
        <p>Hello Im About page !</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non quia rem 
            dolorem veniam accusamus earum nobis quod dignissimos quo fuga aut veritatis deserunt,
             ex ea asperiores vero? Pariatur, sint? Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
             Quidem dolores esse eaque atque. Iste quibusdam quo doloremque earum atque reprehenderit, 
             eveniet corporis assumenda asperiores sequi nisi, magnam recusandae et! 
             Excepturi.</p>
        </div>
    </div>
  )
}

export default AboutPage;