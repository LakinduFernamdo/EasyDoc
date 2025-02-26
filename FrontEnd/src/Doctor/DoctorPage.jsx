import React from 'react'
import DocCard from './DocCard';



function DoctorPage() {
  return (
    <div>
      <h1>Hello Im Doctor page !</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum non quia rem
        dolorem veniam accusamus earum nobis quod dignissimos quo fuga aut veritatis deserunt,
        ex ea asperiores vero? Pariatur, sint? Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        Quidem dolores esse eaque atque. Iste quibusdam quo doloremque earum atque reprehenderit,
        eveniet corporis assumenda asperiores sequi nisi, magnam recusandae et!
        Excepturi.</p>
      <DocCard
        imgSrc="https://adaderanaenglish.s3.amazonaws.com/1571109539-battaramulle-seelarathana-thero-5.jpg"
        title="Battaramulle Seelarathana Thero"
        description="Experienced Cardiologist with 10 years of practice."
      />


    </div>
  )
}

export default DoctorPage;