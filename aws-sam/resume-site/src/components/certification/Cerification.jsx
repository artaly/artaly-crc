import React from 'react'
import './certification.css'

const Cerification = () => {
  return (
    <section class="section certification" id='certs'>
        <div class="section__title">05. Certs</div>
        <div class="section__content">
            <div class="certs">
                <div class="cert">
                    <div class="time-name">
                    <div class="cert__name">
                        <a href="https://www.credly.com/badges/3621d9e0-40f3-486d-b67d-5791123af8ce/linked_in_profile" target="_blank" rel="noreferrer">AWS Certified Cloud Practitioner</a>
                    </div>
                    <div class="cert__time">August 2022 - August 2025</div>
                    </div>
                    <div class="job__position">Amazon Web Services</div>
                </div>

                <div class="cert">
                    <div class="time-name">
                    <div class="cert__name">
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">ACA Cloud Computing Certification</a>
                    </div>
                    <div class="cert__time">February 2022 - February 2024</div>
                    </div>
                    <div class="job__position">Alibaba Cloud</div>
                </div> 
            
            </div>
        </div>
    </section>
  )
}

export default Cerification