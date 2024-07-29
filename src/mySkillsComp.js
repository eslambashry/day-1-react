import Skills from './skills';
import React, { Component } from 'react';
class MySkills extends Component {
    render() {
        return (
         <>
<section class="skills-section py-5">
    <div class="container">
      <h2 class="display-4 text-center mb-4">Skills</h2>
      <div class="row">
        <div class="col-md-6">
            <Skills body="Angular"/>
          <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
          </div>
        </div>
        <div class="col-md-6">
            <Skills body="React"/>
          <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style={{ width: '85%' }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100">85%</div>
          </div>
        </div>
        <div class="col-md-6">
        <Skills body="Node"/>
        <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style={{ width: '80%' }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">80%</div>
          </div>
        </div>
        <div class="col-md-6">
        <Skills body="JS"/>
        <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style={{ width: '95%' }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95%</div>
          </div>
        </div>
        <div class="col-md-6">
        <Skills body="HTML / CSS"/>
        <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style={{ width: '90%' }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">90%</div>
          </div>
        </div>
        <div class="col-md-6">
        <Skills body="Paython"/>
        <div class="progress mb-3">
            <div class="progress-bar" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
         </>
        );
      }
}

export default MySkills;