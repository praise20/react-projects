import React from 'react'

function Header(){
  return(
    <div className='theme'>
      <h1>My React Journey</h1>
      <p><a className='float' target='_blank' href='https://journey-mu.vercel.app/'>My Javascript Journey</a></p>
    </div>
  )
}
function Main(){
  return(
    <>
    <h2 style={{padding:20}}>Here are some of my react projects</h2>
    <ul>
      <li>Business Card: project to learn react basics <a className='link' target='_blank'>view</a></li>
    </ul>
    </>
  )
}
function Home() {
  return (
    <>
    <Header />
    <Main />
    </>
  )
}

export default Home