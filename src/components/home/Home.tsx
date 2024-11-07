import React, { SetStateAction } from 'react'
import Message from './Message'
import { useState , useEffect } from 'react';


const Home = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
      setTimeout(()=>{
        setIsVisible(true)
      } ,800)
    }, []);
  return (
    <div className='w-[100%] flex justify-center'>
        <Message isVisible={isVisible}></Message>

    </div>
  )
}

export default Home