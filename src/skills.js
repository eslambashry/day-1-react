import React, { Component } from 'react';


class Skills extends Component {
    constructor(props){
        console.log(props);
        super()
    }
    render() {
        return (
         <>
          <h5>{this.props.body}</h5>
         </>
        );
      }
}

export default Skills;