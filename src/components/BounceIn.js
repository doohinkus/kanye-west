import React from 'react';
import { motion } from 'framer-motion';


export function BounceIn({toggle, ...props}){
    return (
        <motion.div key={toggle} initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
              opacity: 0,
              display: "inline"
            },
            pageAnimate: {
              opacity: 1,
              scale: [.2, 1.1, .9, 1],
              transition: {
                delay: props.delay,
                duration: .7
              }
            },
          }}>
            {props.children}
          </motion.div>
    );
}