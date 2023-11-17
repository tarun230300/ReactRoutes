import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
const Dashboard = () => {
  return (
    <div>
        <center>
            <h1>List of Countries </h1>
            <li>	United States Air Force</li>
            <li>India</li>
            <li>Italian Air Force </li>
            <li>Turkish Air Force</li>
            <li>Royal Moroccan Air Force</li><br /><br /><br /><br />
            
            <Link to='/' className='Link'>Back to Home </Link>
            <Link to='/about' className='Link'>About </Link>
            
        </center>
    </div>
  )
}

export default Dashboard