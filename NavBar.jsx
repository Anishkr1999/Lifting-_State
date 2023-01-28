import React from 'react'

function NavBar(props) {
    const data = {name:"Anish",lastName:"Kumar", email:"anish@test.com"}
  return (
    <>
      <h2>User Name :{props.data}</h2>
      <button onClick={()=>props.alert(data)}>Click me</button>
    </>
  )
}

export default NavBar