import React, { Component } from 'react';


class Footer extends Component {
    render() {
        return (
         <>
<footer class="footer bg-dark text-white py-4">
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h5>Contact Us</h5>
          <p>Email: <a href="mailto:info@example.com" class="text-white">infoexample.com</a></p>
        </div>
        <div class="col-md-6 text-center text-md-right">
          <h5>Follow Us</h5>
          <a href="https://facebook.com" class="text-white mr-3" target="_blank" title="Facebook">
          </a>
          <a href="https://github.com" class="text-white mr-3" target="_blank" title="GitHub">
          </a>
          <a href="https://linkedin.com" class="text-white" target="_blank" title="LinkedIn">
          </a>
        </div>
      </div>
    </div>
  </footer>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
         </>
        );
      }
}

export default Footer;