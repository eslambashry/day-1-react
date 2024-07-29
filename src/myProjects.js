import React, { Component } from 'react';
import Portifolio from './portfolio';
class MyProjects extends Component {
    render() {
        return (
         <>
 
 <h2 class="display-4 text-center mb-4">Portfolio</h2>
 <section class="portfolio-section py-5">
 <div class="container">
 <div class="row">

<Portifolio src="1.jpg" />

<Portifolio src="2.jpg" />

<Portifolio src="3.jpg" />

<Portifolio src="4.jpg" />

<Portifolio src="5.jpg" />

<Portifolio src="6.jpg" />
</div>
</div>
</section>
 
         </>
        );
      }
}

export default MyProjects;