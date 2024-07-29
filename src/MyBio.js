import React, { Component } from 'react';

class Bio extends Component {
    render() {
        return (
         <>
       <section class="bio-section py-5 bg-light">
  <div class="container">
    <div class="row">
      <div class="col-md-4 d-flex justify-content-center align-items-center">
        <img src="istockphoto-2105280771-170667a.webp" alt="John Doe Photo" class="img-fluid rounded-circle mb-4"/>
      </div>
      <div class="col-md-8">
        <h2 class="display-4">John Doe</h2>
        <p class="lead">I am a software engineer with over 10 years of experience in web development, specializing in Angular, React, and Node.js.</p>
        <h3>Education</h3>
        <ul class="list-unstyled">
          <li><strong>Bachelor of Science in Computer Science</strong> - University of California, Berkeley, 2010</li>
          <li><strong>Master of Science in Software Engineering</strong> - Stanford University, 2012</li>
        </ul>
        <h3>Experience</h3>
        <ul class="list-unstyled">
          <li><strong>Senior Software Engineer</strong> - Google, 2015 - Present</li>
          <li><strong>Software Engineer</strong> - Microsoft, 2012 - 2015</li>
        </ul>
        <a href="assets/john-doe-cv.pdf" class="btn btn-primary mt-4" download>Download CV</a>
      </div>
    </div>
  </div>
</section>

         </>
        );
      }
}

export default Bio;