import './experience.css'

const Experience = () => {
  return (
    <section class="section experience" id='exp'>
      <div class="section__title">03. Expi</div>
        <div class="section__content">
          <div class="jobs">
            <div class="job">
              <div class="time-place">
                <div class="job__company">
                  <a href="https://www.dewise.com/" target="_blank" rel="noreferrer">Dewise</a>
                </div>
                <div class="job__time">February 2023 - Present</div>
              </div>
              <div class="job__position">Software Engineer Intern</div>
            </div>

            <div class="job">
              <div class="time-place">
                <div class="job__company">
                  <a href="https://johnsonsberkshire.com/" target="_blank" rel="noreferrer">Johnson's Berkshire Solutions Inc.</a>
                </div>
                <div class="job__time">May 2021 - August 2021</div>
              </div>
              <div class="job__position">Systems Quality Assurance Intern</div>
            </div>
          </div>
        {/* <a href="{{site.resume}}" target="_blank" class="arrow-link">View My Resume</a> */}
      </div>
    </section>
  )
}

export default Experience