import React from 'react'

const About = () => {
  return (
    <div className='w-full flex items-center justify-center px-12 '>
<div className="flex flex-col md:flex-row justify-between p-20 md:w-4/5 lg:w-full sm:w-full border border-black ">
      <h2 className="text-gray-500 text-4xl md:text-5xl text-center font-light md:font-thin md:text-left shadow-xl">
        About me
      </h2>
      <div className="flex flex-col justify-between mt-12 md:mt-0 h-auto md:w-2/3">
        <p className="text-left leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis id molestiae dolor, explicabo voluptas earum beatae esse aperiam culpa, nesciunt, eos sequi dicta dolorum! Eaque odit hic expedita cupiditate in Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, delectus. Magnam temporibus dolor natus nulla reiciendis, aperiam totam, tempore explicabo eos maiores earum veritatis consequatur placeat, blanditiis nisi ex in! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem nostrum ducimus illum similique totam consectetur quibusdam quidem eius voluptatibus veniam ad placeat, iusto, dicta corporis esse odit, voluptates ea quaerat?.
        </p>
        <button className="bg-gray-500 text-center h-20 w-72 text-white mt-8 mx-auto md:mx-0 text-xl">
          Download Resume
        </button>
      </div>
    </div>
    </div>
    
  )
}

export default About
