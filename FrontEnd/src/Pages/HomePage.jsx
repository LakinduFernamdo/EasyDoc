import React from 'react'
import Swiper from '../HomeComp/Swiper/Swiper.jsx'
import DropList from '../HomeComp/DropList/DropdownList.jsx'
import Search from '../HomeComp/SearchBar/SearchBar.jsx'

function HomePage() {
  return (
    <div>
        <h1>Home Page</h1>
        <p>A good example of a paragraph contains a topic sentence, details and a conclusion. 
            'There are many different kinds of animals that live in China. 
            Tigers and leopards are animals that live in China's forests in the north. In the jungles, monkeys swing in the trees and elephants walk through the brush.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit qui reprehenderit voluptatem eius nobis officiis optio voluptates aliquid 
            reiciendis labore corrupti nesciunt, autem consectetur deleniti excepturi praesentium sed voluptas maiores!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet molestias sint sunt animi quas nihil maiores debitis quo minima dolorem facere, neque impedit adipisci quod ad voluptates veniam 
            optio sit!</p>
            <Swiper/>
            <DropList/>
            <Search/>


    </div>
  )
}

export default HomePage;