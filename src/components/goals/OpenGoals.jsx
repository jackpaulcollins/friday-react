import React from 'react'
import GoalSummary from './GoalSummary'
import { Link } from  'react-router-dom'

const OpenGoals = ({goals, currentUser}) => {
  console.log(currentUser)
  return (
    <div>
      <h3>Looking for a Goal Buddy:</h3>
      { 
        goals && goals.map(goal => {
        if (goal.authorId.uid != currentUser){
          return (
              <Link to={'/goal/' + goal.id} key ={ goal.id }>
                <GoalSummary goal={goal}/>
              </Link>
          )
        }})}
      
    </div>
  )
}



export default OpenGoals;
