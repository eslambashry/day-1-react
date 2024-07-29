import React, { Component } from 'react';

class Portifolio extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
         <>

            <div class="col-md-4 mb-4">
          <div class="card h-100">
          <img src = {this.props.src}></img>
          <div class="card-body">
              <h5 class="card-title">Project Two</h5>
              <p class="card-text">Description of project two.</p>
            </div>
            <div class="card-footer">
              <a href="https://example.com/project-two" class="btn btn-primary" target="_blank">View Project</a>
            </div>
            </div>
          </div>


         </>
        );
      }
}

export default Portifolio;