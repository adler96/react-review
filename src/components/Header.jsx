import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div>
                <h1>ToDo App</h1>
                <button>{{ "Cancel" : "Add" }}</button>
            </div>
        );
    }    
}

export default Header;
