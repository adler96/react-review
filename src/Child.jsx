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
            <fieldset>
            <legend>Enter a temperature in {this.props.scale}</legend>
            <input value={this.props.temp} onChange={this.handleChange}/>
          </fieldset>
        );
    }    
}

export default Child;