import React from 'react'

const About = () => {
  return (
    <div style={{display:"flex",justifyContent:"space-between", padding:"5rem",width:"80%",border:"1px solid black",marginLeft:"3rem" }}>
      <h2 style={{color:"gray",fontSize:"4rem",textAlign:"center",fontWeight:"300", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)"}}>
        About me
      </h2>
      <div style={{height:"15rem",width:"65%",marginTop:"3rem",display:"flex",flexDirection:"column",marginLeft:"-12rem",justifyContent:"space-between"}}>
        <p style={{textAlign:"left"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis id molestiae dolor, explicabo voluptas earum beatae esse aperiam culpa, nesciunt, eos sequi dicta dolorum! Eaque odit hic expedita cupiditate in Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, delectus. Magnam temporibus dolor natus nulla reiciendis, aperiam totam, tempore explicabo eos maiores earum veritatis consequatur placeat, blanditiis nisi ex in! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum ducimus illum similique totam consectetur quibusdam quidem eius voluptatibus veniam ad placeat, iusto, dicta corporis esse odit, voluptates ea quaerat?.</p>
        <button style={{backgroundColor:"gray",textAlign:"center",height:"4rem",width:"15rem",color:"white"}}>Download Resume</button>
      </div>
    </div>
  )
}

export default About
