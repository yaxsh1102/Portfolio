import React from 'react';

interface Certificate {
  name: string;
  issuer: string;
  url: string;
}

const About = () => {
  const certificates: Certificate[] = [{
    name: "Hackout Hackathon",
    issuer: "DAIICT, Gandhinagar",
    url: "Hackout.jpg"
  }, {
    name: "Hack-Nu-Thon Hackathon",
    issuer: "Nirma University, Ahmedabad",
    url: "hacknuthon.png"
  }, {
    name: "HTML,CSS and JavaScript For Web Developers",
    issuer: "Johns Hopkins University",
    url: "unip.png"
  }, {
    name: "Database Design and Basic SQL In PostgreSQL",
    issuer: "University Of Michigan Certificate",
    url: "michigan.png"
  }, {
    name: "Introduction To Java",
    issuer: "LearnQuest",
    url: "learn.png"
  }, {
    name: "Inheritance and Data Structures in Java",
    issuer: "University of Pennsylvania",
    url: "jognhopkin.png"
  }];

  return (
    <div className='w-full h-screen py-12 px-4 flex justify-center mx-auto'>
      <div className='md:w-[60%] w-[90%] mx-auto space-y-12 text-white'>
        <div className='space-y-4'>
          <h2 className='text-3xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff]'>
            PROFESSIONAL SUMMARY
          </h2>
          <p className='text-lg leading-relaxed text-gray-300'>
            An aspiring, hardworking, and curious web developer skilled in the MERN stack, ready to contribute my best 
            in building scalable and user-friendly applications. Passionate about learning and committed to delivering 
            impactful, high-quality solutions.
          </p>
        </div>

        <div className='space-y-4'>
          <h2 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff]'>
            EDUCATION
          </h2>
          <div className='space-y-6'>
            <div className='bg-[#272727] p-6 rounded-lg hover:shadow-lg transition-all duration-300'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-semibold text-[#40c9ff]'>Bachelor of Engineering</h3>
                  <p className='text-gray-400'>L.J. University</p>
                </div>
                <div className='text-right'>
                  <p className='text-[#e81cff]'>2022-2026</p>
                  <p className='text-gray-400'>Ahmedabad, Gujarat</p>
                </div>
              </div>
            </div>

            <div className='bg-[#272727] p-6 rounded-lg hover:shadow-lg transition-all duration-300'>
              <div className='flex justify-between items-start'>
                <div>
                  <h3 className='text-xl font-semibold text-[#40c9ff]'>Higher Secondary Certificate</h3>
                  <p className='text-gray-400'>Fellowship Mission School</p>
                </div>
                <div className='text-right'>
                  <p className='text-[#e81cff]'>2020-2022</p>
                  <p className='text-gray-400'>Vapi, Gujarat</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-3xl font-bold  text-transparent bg-clip-text bg-gradient-to-r from-[#40c9ff] to-[#e81cff]'>
            CERTIFICATIONS
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {certificates.map((certificate, index) => (
              <div key={index} 
                className='bg-[#272727] rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'>
                <img 
                  src={certificate.url} 
                  alt={certificate.name} 
                  className='w-full h-48 object-cover'
                />
                <div className='p-4 space-y-2'>
                  <h3 className='text-lg font-semibold text-[#40c9ff] line-clamp-2'>
                    {certificate.name}
                  </h3>
                  <p className='text-sm text-gray-400'>
                    {certificate.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default About;