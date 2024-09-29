import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import 'react-vertical-timeline-component/style.min.css';
import { div } from 'framer-motion/client';

const Project = () => {
  return (
    <>
    
    <div className={`${styles.paddingX} inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
      
      <div className="flex flex-col justify-center items-center mt-5">
        <div className='w-5 h-5 rounded-full bg-[#804dee]'>
        <div className='ml-2 w-1 sm:h-80 h-40 violet-gradient'></div>
        </div> 
      </div>

      <div>
        <h2 className={`${styles.heroHeadText} text-white`}>Project.</h2>
      </div>

    </div>

    <div className={`${styles.paddingX} py-6 px-4 sm:p-6 md:py-10 md:px-8 lg:grid-cols-2 lg:flex`}>

      <div className="py-6 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 ">
        <motion.div variants={textVariant()} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">HTML</h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">3+ years experience</p>
        </motion.div>
      </div> 

      <div className="py-6 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 ">
        <motion.div variants={textVariant()} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">CSS</h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">3+ years experience</p>
        </motion.div>
      </div>

      <div className="py-6 max-w-4xl mx-auto grid grid-cols-1 lg:max-w-5xl lg:gap-x-20 ">
        <motion.div variants={textVariant()} className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
          <h1 className="mt-1 text-lg font-semibold text-white sm:text-slate-900 md:text-2xl dark:sm:text-white">JavaScript</h1>
          <p className="text-sm leading-4 font-medium text-white sm:text-slate-500 dark:sm:text-slate-400">3+ years experience</p>
        </motion.div>
      </div>

    </div>
    
    </>
  )
}


export default SectionWrapper (Project, "project");