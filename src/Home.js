import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

export const Home = () => {
  return (
    <div>
        <center>
            <h3>Welcome to Home page!!! </h3>
            <h1>General Atomics MQ-9 Predator</h1>
            <p>The General Atomics MQ-1 Predator (often referred to as the Predator drone) is an American remotely piloted aircraft (RPA) built by General Atomics that was used primarily by the United States Air Force (USAF) and Central Intelligence Agency (CIA).Conceived in the early 1990s for aerial reconnaissance and forward observation roles, the Predator carries cameras and other sensors. It was modified and upgraded to carry and fire two AGM-114 Hellfire missiles or other munitions. The aircraft entered service in 1995, and saw combat in the war in Afghanistan, Pakistan, the NATO intervention in Bosnia, the NATO bombing of Yugoslavia, the Iraq War, Yemen, the 2011 Libyan civil war, the 2014 intervention in Syria, and Somalia.</p>
            <Link to='/dashboard' className='Link'>List of Countries</Link>
            <Link to='/about' className='Link'>About </Link>
            
        </center>
    </div>
  )
}
 export default Home