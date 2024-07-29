import React from "react";

class ClassApp extends React.Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <>
                <h1>{this.props.head}</h1>
            </>
        );
    }
}

export default ClassApp;
