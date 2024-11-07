import React from 'react';
import { FaLink, FaMusic } from "react-icons/fa";
import { TbBrandGithubFilled } from "react-icons/tb";
import { IoIosChatboxes } from "react-icons/io";

const Projects = () => {
  const projects = [
    {
      image: "https://res.cloudinary.com/dlgq7m52a/image/upload/v1730915373/Screenshot_148_ipwozp.png",
      title: "PlayListPal",
      description: "A vibrant web app that lets you stream, like, and save songs while discovering users within a specified distance who share your musical tastes.",
      githubUrl: "https://github.com/yaxsh1102/PlayListPal",
      demoUrl: "https://playlistpal-omega.vercel.app/"
    },
    {
      image: "https://res.cloudinary.com/dlgq7m52a/image/upload/v1730915115/chatapp_dqpigt.png",
      title: "RealTime ChatApp",
      description: "Modern chat application with a focus on real-time communication, allowing users to chat in both one-on-one and group chats.",
      githubUrl: "https://github.com/yaxsh1102/Realtime-ChatApp",
      demoUrl: "https://chat-app-ecru-nu.vercel.app"
    },
    {
      image: "https://res.cloudinary.com/dlgq7m52a/image/upload/v1730916976/Screenshot_2024-11-06_234545_owbgr4.png",
      title: "NetflixGPT",
      description: "Netflix-style entertainment app with the Gemini movie recommendation API for personalized suggestions based on genre and mood.",
      githubUrl: "https://github.com/yaxsh1102/netflixgpt",
      demoUrl: "https://netflixgpt-xi-lyart.vercel.app/"
    },
   
  ];

  return (
    <div className='flex justify-center'>
      <div className='w-[80%] lg:w-[60%] flex flex-col justify-center'>
        <p className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#40c9ff] to-[#e81cff] mb-6 text-center'>
          Projects:
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center'>
          {projects.map((project, index) => (
            <div
              key={index}
              className='bg-[#272727] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
            >
              <img
                src={project.image}
                className='w-full h-60 object-cover'
                alt=""
              />
              <div className='p-4 space-y-2'>
                <h3 className='text-lg font-semibold text-[#40c9ff] line-clamp-2'>
                  {project.title}
                </h3>
                <p className='text-sm text-gray-400'>
                  {project.description}
                </p>
              </div>
              <div className='flex justify-evenly pb-6'>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" >
                  <TbBrandGithubFilled className='w-8 h-8' fill='white' />
                </a>
                <a href={project.demoUrl}  target="_blank" rel="noreferrer" >
                  <FaLink fill='white' className='w-8 h-8' />
                </a>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </div>
  );
};

export default Projects;