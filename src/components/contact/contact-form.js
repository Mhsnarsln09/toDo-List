import React from "react"

export function ContactFormFnComponent() {



  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    phone: ""
  })

  const onSubmit = (e) => {
    e.preventDefault()


    console.log({ firstName:state.firstName, lastName:state.lastName, Phone: state.phone})
  }

  

  const { firstName, lastName, phone } = state
  
  const handleChange = (e) => {
    const name = e.currentTarget.name
    const v = e.currentTarget.value || ""
    setState((prev) => {
      return {...prev, [name]: v}
    })
  }

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        

        <input name="firstName" value={firstName} onChange={handleChange}/>
        <input name="lastName" value={lastName} onChange={handleChange}/>
        <input name="phone" value={phone} onChange={handleChange} />
        <button>Save</button>
        </form>
      </div>
  )
}
