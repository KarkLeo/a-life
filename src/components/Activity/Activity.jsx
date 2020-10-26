import React, { useEffect } from 'react'
import ActivityHeader from './ActivityHeader/ActivityHeader'
import './Activity.css'
import Responsive from '../Responsive/Responsive'
import MobileActivityHeader from './MobileActivityHeader/MobileActivityHeader'
import MobileActivityNavigation from './MobileActivityNavigation/MobileActivityNavigation'
import MobileActivityBody from './MobileActivityBody/MobileActivityBody'

const Activity = ({ category, activity }) => {
  return (
    <div className="activity" id="activity">
      <Responsive options={['m', 'l', 'xl']}>
        <ActivityHeader category={category} />
      </Responsive>
      <Responsive options={['xs', 's']}>
        <MobileActivityHeader category={category} />
        <MobileActivityBody activity={activity} />
        <MobileActivityNavigation activity={activity} />
      </Responsive>
    </div>
  )
}

export default Activity
