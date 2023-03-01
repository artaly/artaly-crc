import React from 'react'
import './about.css'

const About = () => {
  return (
    <section class="section about" id='about'>
      <div class="section__title">01. About</div>
        <div class="section__content">
          <p>
            I'm a graduating college student from the Philippines with a strong interest in anything DevOps and cloud computing related.
            Currently, I'm interning at 
            <a class="underline-link" href="dewise.com/" target="_blank" rel="noopener">&nbsp;Dewise</a>
            as a Software Engineer intern where I get to work with technologies such as AWS, Azure, Azure DevOps, Docker, and Kubernetes. 
          </p>
          <p>
            This year, I'm aiming to be AZ-900 and AWS Solutions Architect Associate certified. I also plan to land a cloud engineer or junior DevOps role once I graduate,
            since I want to work with the cloud, create pipelines, automate workflows&mdash;the usual DevOps stuff. I want to primarily work with AWS Cloud, but I'm open to
            being multi-cloud literate as well. 
          </p>

          <p>
            <span className='bold-this'>When I'm not doing IT stuff</span>, I read manga/books, watch movies or series, play with my cats, or learn how to draw traditionally and paint using gouache.
          </p>
  </div>
</section>

  )
}

export default About