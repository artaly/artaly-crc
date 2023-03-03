import React from 'react'
import './education.css'

const Education = () => {
  return (
    <section class="section education" id='edu'>
        <div class="section__title">02. Educ</div>
        <div class="section__content">
            <div class="jobs">
                <div class="job">
                    <div class="time-place">
                    <div class="job__company">
                        <a href="https://www.sti.edu/campuses-details.asp?campus_id=LIP" target="_blank" rel="noreferrer">STI College Lipa</a>
                    </div>
                    <div class="job__time">June 2019 - Present</div>
                    </div>
                    <div class="job__position">C.M. Recto Avenue, Brgy. 6, Lipa City, Batangas</div>
                </div>

                <div class="job">
                    <div class="time-place">
                    <div class="job__company">
                        <a href="https://www.sti.edu/campuses-details.asp?campus_id=LIP" target="_blank" rel="noreferrer">STI College Batangas</a>
                    </div>
                    <div class="job__time">June 2019 - June 2020</div>
                    </div>
                    <div class="job__position">865 National Road, Kumintang Ibaba, Batangas City, Batangas</div>
                </div>
            
            </div>
        </div>
    </section>

  )
}

export default Education