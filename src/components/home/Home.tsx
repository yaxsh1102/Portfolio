import React, { SetStateAction } from 'react'
import Message from './Message'
import { useState , useEffect } from 'react';


const Home = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
      setTimeout(()=>{
        setIsVisible(true)
      } ,200)
    }, []);
  return (
    <div className='w-[100%] flex justify-center items-center h-full'>
        <Message isVisible={isVisible}></Message>

    </div>
  )
}

export default Home