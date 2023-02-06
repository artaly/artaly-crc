import React from 'react'
import './about.css'
import AboutImg from '../../assets/about.jpg'
import CV from '../../assets/John-Cv.pdf'

const About = () => {
  return (
    // <section className="about section" id='about'>
    //   <h2 className="section__title">01. Background</h2>
    //   {/* <span className="section__subtitle">My introduction</span> */}

    //   <div className="about__container container grid">
    //     {/* <img src={AboutImg} alt="" className="about__img" /> */}
    //   </div>
    // </section>
    <section class="section about" id='about'>
  <div class="section__title">01. About</div>
  <div class="section__content">
    <p>
      Description
      <a class="underline-link" href="https://www.upstatement.com/" target="_blank">Upstatement</a> 
    </p>
    <p>
      As a software engineer, I enjoy bridging the gap between engineering and design &mdash; combining my technical knowledge
      with my keen eye for design to create a beautiful product. My goal is to always build applications that are scalable
      and efficient under the hood while providing engaging, pixel-perfect user experiences.
    </p>

    <p>
      <strong>When I'm not in front of a computer screen</strong>, I'm probably snowboarding, cruising around on my penny board,
      or crossing off another item on my bucket list.
    </p>
  </div>
</section>

  )
}

export default About