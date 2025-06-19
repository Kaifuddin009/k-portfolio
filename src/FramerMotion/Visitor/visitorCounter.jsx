// src/components/VisitorCounter.js
import React, { useEffect, useState } from "react";
import { doc,getDoc,updateDoc,setDoc } from "firebase/firestore";
import { db } from "../../firebase"; // Adjust the import path as necessary
import {motion, useMotionValue,useSpring, useTransform} from "framer-motion";

const VisitorCounter = () => {
 const [visitCount, setVisitCount] = useState(0);

 const count = useMotionValue(0);
 const spring = useSpring(count, {duration:1.5, stiffness: 60});
 const rounded = useTransform(spring, (val) => Math.floor(val));
  useEffect(() => {
    const updateVisitorCount = async () => {
     try {
       const counterRef = doc(db, "visits", "counter");  // visits/counter doc in Firestore
       const snapshot = await getDoc(counterRef);
 
       if (snapshot.exists()) {
         const currentCount = snapshot.data().count || 0;
 
         // Update the count in Firestore
         await updateDoc(counterRef, {
           count: currentCount + 1,
         });
 
         setVisitCount(currentCount + 1);
         count.set(0);
         count.set(currentCount +1);
       } else {
         await setDoc(counterRef, { count: 1 });
         setVisitCount(1);
         count.set(1);
         console.error("Counter document does not exist in Firestore.");
       }
     } catch (error) {
      console.log("Error updating visitor count:", error);
       // Reset to 0 if there's an error
     }
    };

    updateVisitorCount();
  }, [count]);

  return (
  <motion.div
   initial={{ opacity: 0 }}
      animate={{opacity:1}}
      transition={{duration: 0.6}}
      className="font-extrabold text-xl  items-center mr-10 gap-1 hidden sm:flex"
      >
        
        <motion.span
      initial={{ opacity: 0 }}
      animate={{opacity:1}}
      transition={{delay: 0.1}}
         >
          {rounded}
         </motion.span>
         <span>+</span>
      </motion.div>
    
  );
};

export default VisitorCounter;
