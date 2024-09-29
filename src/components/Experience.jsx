import { motion } from 'framer-motion';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { textVariant } from '../utils/motion';
import 'react-vertical-timeline-component/style.min.css';
import { div } from 'framer-motion/client';
 
const ExperienceCard = ({ Experience }) => (
  <VerticalTimelineElement 
  contentStyle={{ background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7px solid #232631' }}
  date={Experience.date}
  iconStyle={{ background: Experience.iconBg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img src={Experience.icon} alt={Experience.company_name} className="w-[60%] h-[60%] object-contain" />
    </div>
  }
  >

    <div> 
      <h3 className="text-white text-[24px] font-bold">
        {Experience.title}
      </h3> 
      <p className="text-secondary text-[16px] font-semibold" style={{margin: 0}}>
      {Experience.company_name}
      </p>
    </div>

    <ul className="mt-5 list-disc ml-5 space-y-2">
      {Experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
           {point}
        </li>
      ))}
    </ul>
    
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <div>

        <motion.div variants={textVariant()}>
          <h2 className={styles.heroHeadText}>Work Experience.</h2>
          <p className={styles.heroSubText}>
            What i have done so far
          </p>
        </motion.div>

        <div className="flex mt-20 flex-col">
          <VerticalTimeline>
            {experiences.map((Experience, index) => (
              <ExperienceCard key={index} Experience={Experience}/>
            ))}
          </VerticalTimeline>
        </div>

    </div>
  )
}

export default SectionWrapper (Experience, "work")