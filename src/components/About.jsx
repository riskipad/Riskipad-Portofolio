import React from 'react';

import { styles } from '../styles';

const About = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      
        <div className="flex flex-col justify-center items-center mt-5">
          <div className='w-5 h-5 rounded-full bg-[#804dee]'>
          <div className='ml-2 w-1 sm:h-80 h-40 violet-gradient'></div>
          </div> 
        </div>

        <div>
          <h2 className={`${styles.heroHeadText} text-white`}>Introduction.</h2>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            I am a front end web developer, have a great interest in creating unique and revolutionary designs in the developer world.
          </p>
        </div>

      </div>
      
    </section>
  )
}

export default About