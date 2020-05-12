import React, { useState } from "react";

const MemberForm = props => {

    const [member, setMember] = useState({
      name: "",
      email: "",
      role: ""
    })

    const changeHandler = event => {
      setMember({
        ...member,
        [event.target.name]: event.target.value
      })
    }

    return (
        <form 
          onSubmit={event =>{
            event.preventDefault()
            props.addMember(member);

            setMember({name: "", email: "", role: ""})
          }}
        >
          <label htmlFor="name">Name:</label>
          <input 
            id="name"
            type="text"
            name="name"
            value={member.name}
            placeholder="Enter Your Name"
            onChange={changeHandler}
          />
          <label htmlFor="email">Email:</label>
          <input 
            id="email"
            type="text"
            name="email"
            value={member.email}
            placeholder="Enter Your Email"
            onChange={changeHandler}
          />
          <label htmlFor="role">Role:</label>
          <input 
            id="role"
            type="text"
            name="role"
            value={member.role}
            placeholder="Enter Your Role"
            onChange={changeHandler}
          />
          <button type="submit">Add Member</button>
        </form>
        
    )
}

export default MemberForm