import React from 'react'
import './Home.css'
import Products from '../Products/Products'
import doll from '../Images/girl-with-doll.png'

const Home = () => {
  return (
    <div className='main'>
      <div className='landing-page bg-dark text-white'>
<div>
  {/* <img src='https://images.pexels.com/photos/1860160/pexels-photo-1860160.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='shopping' className='home-img'/> */}
  <img src={doll} className='home-img' alt='shopping'/>
</div>
<div className='home-text'>
<h5 class="card-title display-3">Curating Happiness, Shaping Lifestyles</h5>
    <p class="card-text fs-2 mt-5">Experience Joyful Shopping - Every Purchase a Step Towards Happiness</p>
</div>
</div>
<div>
  <Products/>
</div>
</div>
  )
}

export default Home
