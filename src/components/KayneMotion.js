import {Fragment} from 'react';
import "./Kanye.css";
import { motion } from 'framer-motion';
import kanyeImage from '../images/kanye-west.png';


export function KanyeMotion({toggle}){
   
    // filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
    return <motion.div key={toggle}  initial="pageInitial" animate="pageAnimate" variants={{
      pageInitial: {
        opacity: 0,
      },
      pageAnimate: {
        opacity: 1,
        scale: [.2, 1.1, .9, 1],
        rotate: [0, 10, -10, 0],
        transition: {
          duration: .7
        }
      },
    }}>
      <img src={kanyeImage} className="kanye"/>
    </motion.div>
     
}