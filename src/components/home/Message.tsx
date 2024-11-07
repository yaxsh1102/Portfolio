import React from 'react'
const words = ["Hi,👋", "My Name is  ", "Yash Mishra,", "I am  a", "Web Developer"];
interface homeProps{
    isVisible:boolean ,
}

const Message = (props:homeProps) => {
    const{isVisible} = props
  return (
    <div className='flex  md:flex-row flex-col justify-evenly items-center w-[80%] text-white gap-y-12 md:mt-16'>
      <div className="space-y-4">
        {words.map((word, index) => (
          <div key={index} className="overflow-hidden [&>:nth-child(3)]:text-gradient-to-b  [&>:nth-child(3)]:from-[#40c9ff] [&>:nth-child(3)]:to-[#e81cff] ">
            <p
              className={`transform transition-all duration-700 text-4xl font-bold
                ${isVisible
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-full opacity-0'
                }
                ${index === 2 || index===4 ? 'bg-gradient-to-tr from-[#40c9ff] to-[#e81cff] bg-clip-text text-transparent' : ''}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            > 
              {word} 
            </p>
          </div>
        ))}
      </div>

      <div className={`transform transition-all duration-700 
          relative w-fit rounded-full p-1
          bg-gradient-to-b from-[#40c9ff] to-[#e81cff]
          ${isVisible 
            ? 'translate-x-0 opacity-100' 
            : 'translate-x-full opacity-0'
          }`}
          style={{ transitionDelay: `${words.length * 100}ms` }}
        >
          <img 
            src="profile-modified.png" 
            alt="Profile"
            className="h-48 w-48 rounded-full"
          />
        </div>
      </div>
  )
}

export default Message