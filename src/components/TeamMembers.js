import React from "react"

const TeamMembers = props => {
  return (
    <div className="memberList">
      {props.members.map(member => (
        <div className="memberForm" key={member.id}>
          <h4>{member.name}</h4>
          <h4>{member.email}</h4>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  )
}

export default TeamMembers;