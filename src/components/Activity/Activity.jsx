import React, { useEffect, useState } from 'react'
import ActivityHeader from './ActivityHeader/ActivityHeader'
import './Activity.css'
import Responsive from '../Responsive/Responsive'
import MobileActivityHeader from './MobileActivityHeader/MobileActivityHeader'
import MobileActivityNavigation from './MobileActivityNavigation/MobileActivityNavigation'
import MobileActivityBody from './MobileActivityBody/MobileActivityBody'
import { connect } from 'react-redux'
import { scrollToActivity } from '../../methods/scroll'
import { setCategory } from '../../store/activityReducer'

const Activity = ({
  category,
  activity,
  activeCategory,
  activeActivity,
  setCategory,
}) => {
  if (activeCategory === null) setCategory(category[0].node.id)
  useEffect(() => {
    return () => {
      if (activeCategory !== null) scrollToActivity(true)
    }
  }, [activeActivity, activeCategory])

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

let mapStateToProps = (state) => ({
  activeCategory: state.activity.activeCategory,
  activeActivity: state.activity.activeActivity,
})
export default connect(mapStateToProps, { setCategory })(Activity)
