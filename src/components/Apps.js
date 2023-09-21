import React from 'react'
import styles from './Apps.module.css'
import myImage from './images/Screenshot (152).png'
import myImagee from './images/WhatsApp Image 2023-09-21 at 12.16.37 PM.jpeg'
import Editor from './Editor'

function Apps() {
  return (
     <div>
           <div className={styles.conatiner}>
      

      <img src={myImage} className="col-md-6 float-md-end mb-3 ms-md-3" alt="..."/>
      <div className={styles.heading}>
       <h1>Create a resume to land your next job</h1>
    
     <p>
     
    We have developed a <span style={{color:'pink', fontSize:'35px'}}>Resume Builder</span> based on feedback from thousands of users, recruiter expertise, stellar template design and the best hiring practices. The goal is simple: help you land that dream job interview! Get an advantage in the modern professional environment.
    
     </p>
     <button href="#createResume">Build Your Resume</button>
    </div>
          </div>
        <div className={styles.card}>
            <div className={styles.Imgcard}>
           <img src={myImagee} alt="resume" /></div>
           <div className={styles.right}>
           <h1>Explore Your Path to Success :)</h1>
           <p>In the image, you can see a professionally crafted resume, which is the result of using our resume builder tool. This meticulously designed resume is not just a document; it's your key to unlocking career opportunities and securing your dream job.</p>
           <div className={styles.points}>
           <p>First Impressions Matter :)</p>
          <p> Highlight Your Skills :)</p>
          <p>Tailored for Success :)</p>
          <p>   Confidence Booster :)</p>
          <p>  Your Unique Story :)</p>
           </div>


           </div>
        </div>
        
     </div>
    
  )
}

export default Apps
