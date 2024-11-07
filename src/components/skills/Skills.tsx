import React from 'react'

const Skills = () => {
  return (
    <div className='w-full flex justify-center'>
      <div className='md:w-[40%] w-[80%]'>
        <p className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff]'>Technologies</p>

        <div>
          <div>
            <p className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff] mt-4'>
              Languages:
            </p>

            <div className='flex flex-wrap justify-between mt-4 gap-y-4'>
              <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/typescript-colored.svg" width="60" height="60" alt="TypeScript" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg" width="60" height="60" alt="JavaScript" />
              </a>
              <a href="https://www.oracle.com/java/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/java-colored.svg" width="60" height="60" alt="Java" />
              </a>
              <a href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg" width="60" height="60" alt="HTML5" />
              </a>
              <a href="https://www.w3.org/TR/CSS/#css" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg" width="60" height="60" alt="CSS3" />
              </a>
            </div>
          </div>

          <div>
            <p className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff] mt-4'>Libraries & Frameworks</p>
            <div className='flex flex-wrap justify-between mt-4 gap-y-4'>
              <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg" width="60" height="60" alt="React" />
              </a>
              <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/redux-colored.svg" width="60" height="60" alt="Redux" />
              </a>
              <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/tailwindcss-colored.svg" width="60" height="60" alt="TailwindCSS" />
              </a>
              <a href="https://nodejs.org/en/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg" width="60" height="60" alt="NodeJS" />
              </a>
              <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg" width="60" height="60" alt="Express" />
              </a>
            </div>
          </div>

          <div>
            <p className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff] mt-4'>Tools</p>
            <div className='flex flex-wrap justify-between mt-4 gap-y-4'>
              <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg" width="60" height="60" alt="Git" />
              </a>
              <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/visualstudiocode.svg" width="60" height="60" alt="VS Code" />
              </a>
              <a href="https://vitejs.dev/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vite-colored.svg" width="60" height="60" alt="Vite" />
              </a>
              <a href="https://render.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/render-colored.svg" width="60" height="60" alt="Render" />
              </a>
              <a href="https://postman.com" target="_blank" rel="noreferrer">
                <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="Postman" width="60" height="60"/>
              </a>
            </div>
          </div>

          <div>
            <p className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff] mt-4'>Database</p>
            <div className='mt-4 flex'>
              <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer">
                <img src="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg" width="60" height="60" alt="MongoDB" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
