import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

export const About = () => {
  return (
    <div>
        <center>
            <h3>About </h3>
            <p>The General Atomics MQ-9 Predator (often referred to as the Predator drone) is an American remotely piloted aircraft (RPA) built by General Atomics that was used primarily by the United States Air Force (USAF) and Central Intelligence Agency (CIA). Conceived in the early 1990s for aerial reconnaissance and forward observation roles, the Predator carries cameras and other sensors. It was modified and upgraded to carry and fire two AGM-114 Hellfire missiles or other munitions. The aircraft entered service in 1995, and saw combat in the war in Afghanistan, Pakistan, the NATO intervention in Bosnia, the NATO bombing of Yugoslavia, the Iraq War, Yemen, the 2011 Libyan civil war, the 2014 intervention in Syria, and Somalia.

The USAF describes the Predator as a "Tier II" MALE UAS (medium-altitude, long-endurance unmanned aircraft system). The UAS consists of four aircraft or "air vehicles" with sensors, a ground control station (GCS), and a primary satellite link communication suite.[3] Powered by a Rotax engine and driven by a propeller, the air vehicle can fly up to 400 nmi (460 mi; 740 km) to a target, loiter overhead for 14 hours, then return to its base.

The MQ-1 Predator was the primary remotely piloted aircraft used for offensive operations by the USAF and the CIA in Afghanistan and the Pakistani tribal areas from 2001 until the introduction of the MQ-9 Reaper; it has also been deployed elsewhere. Because offensive uses of the Predator are classified by the U.S., U.S. military officials have reported an appreciation for the intelligence and reconnaissance-gathering abilities of RPAs but declined to publicly discuss their offensive use.[4] The United States Air Force retired the Predator in 2018, replacing it with the Reaper.[1]

Civilian applications for drones have included border enforcement and scientific studies, and to monitor wind direction and other characteristics of large forest fires (such as the drone that was used by the California Air National Guard in the August 2013 Rim Fire).[5]</p>
            <Link to='/' className='Link'>Back to Home </Link>
            <Link to='/dashboard' className='Link'>List of Countries</Link>
        </center>
    </div>
  )
}
export default About