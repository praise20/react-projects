import React from 'react'

const person= [
  {
    id:0,
    name:"George Zara", 
    src:"https://i.imgur.com/7vQD0fPs.jpg",
    body:"He improved the videophone, prepared aeronautics lectures and worked on the alcohol-fuelled engine "
  },
  {
    id:0,
    name:"George Zara", 
    src:"https://i.imgur.com/7vQD0fPs.jpg",
    body:"He improved the videophone, prepared aeronautics lectures and worked on the alcohol-fuelled engine "
  }
]
function Person() {
  
    const personArray = person.map(onePerson =>
      <div className='personInfo'>
        <img 
          src={onePerson.src}
          width={100}
        />
        <p>{onePerson.name}</p>
        <p>{onePerson.body}</p>
      </div>
      )

  return (
    <>
    <p className="header">Personel contribution</p>
    <div className='pad'>
        <ul>{personArray}</ul>
    </div>
    </>  
  )
}

export default Person

// style is in double braces {{}}, because in jsx, you but objects in double braces and normal quotes "" for strings