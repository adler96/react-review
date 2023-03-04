import React from 'react';

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onChange(e.target.value);
    }
    
    render() {
        return (
            <>
          </>
        );
    }    
}

export default Child;