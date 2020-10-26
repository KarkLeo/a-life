import React from 'react'
import { connect } from 'react-redux'
import './ActivityHeader.css'

const ActivityHeader = ({ category }) => {
  return (
    <ul className="activity-header">
      {category.map(({ node }) => (
        <li key={node.id} className="">
          <button className="">{node.title}</button>
        </li>
      ))}
    </ul>
  )
}

let mapStateToProps = (state) => {
  return {}
}

export default connect(mapStateToProps, {})(ActivityHeader)
