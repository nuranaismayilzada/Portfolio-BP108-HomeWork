import React from 'react'
import './rightside.css'
import RightsideOne from './RightsideOne'
import RightsideTwo from './RightsideTwo'
import RightsideThree from './RightsideThree'

const Rightside = () => {
    return (
        <div className='rightside'>
          <RightsideOne/>
          <RightsideTwo/>
          <RightsideThree/>
        </div>
    )
}

export default Rightside
